import { Platform, BackHandler, ToastAndroid } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { withAppWrapper } from 'AppProvider';
import R from 'ramda';
import { root, loginRoot } from './root';
import { showOverlay } from 'navigation';
import FloatingCart from '/modules/Discover/School/flows/Store/ShoppingCart/components/FloatingCart';
import { dismissOverlay } from '.';
import { routes } from './';
import { store } from 'store';
import { isRTL } from '../Constants';
import { getTranslator } from '../i18n/utils';

const BackArrowWhite = require('../../assets/icons/common/back-arrow.png');
const FrontArrowWhite = require('../../assets/icons/common/front-arrow.png');
const icon =
  Platform.OS === 'android'
    ? isRTL
      ? FrontArrowWhite
      : BackArrowWhite
    : BackArrowWhite;
/**
 * Register apps navigation components
 */
const copy = 'components.route.setupNavigation';

const t = getTranslator();
const registerNavigationComponents = () => {
  routes.forEach(({ path, withoutAppWrapper, component: Component }) => {
    Navigation.registerComponent(path, () =>
      withoutAppWrapper ? Component : withAppWrapper(Component)
    );
  });
};

/**
 * Register all navigation based event listeners
 */
const registerNavigationEvents = () => {
  Navigation.events().registerNavigationButtonPressedListener((event) => {
    if (event.buttonId == 'exitFlow') {
      Navigation.popToRoot(event.componentId);
    } else {
      Navigation.pop(event.componentId).catch(console.log); // eslint-disable-line no-console
    }
  });

  let currentComponentName = '';
  let exitInit = false;
  Navigation.events().registerComponentDidAppearListener((component) => {
    exitInit = false;
    currentComponentName = component.componentName;
    store.dispatch.navigation.setCurrentNavigationComponent(component);

    BackHandler.addEventListener('hardwareBackPress', () => {
      /* Below condition is to restrict back button after adding student*/
      if (currentComponentName === 'Skiply.Discover.School.StudentResults') {
        const studentResults = store.getState().student.lists.results;
        const savedStudents = store.getState().student.lists.saved;
        const hasSavedStudents = savedStudents.some((savedStudent) =>
          studentResults.some(({ id }) => id == savedStudent.id)
        );
        if (hasSavedStudents) return true;
        else return false;
      }

      /* Below condition to restrict back button on home screen and second time it will exit*/
      if (
        currentComponentName === 'Skiply.Home' ||
        currentComponentName === 'Skiply.Discover' ||
        currentComponentName === 'Skiply.Purchases.Landing' ||
        currentComponentName === 'Skiply.Account.Account'
      ) {
        if (exitInit) return false;
        ToastAndroid.show(t(copy + '.pressToExit'), ToastAndroid.SHORT);
        exitInit = true;
        return true;
      }
      exitInit = false;
      return false;
    });

    if (
      component.componentName !== 'Skiply.TitleComponent' &&
      component.componentName !== 'FloatingBottom'
    ) {
      const cart = store.getState().cart.carts[0];
      const hasCartItems = cart && !R.isEmpty(cart.cartItems);
      const isFloatingCart = store.getState().cart.isFloatingCart;
      const componentIsCategoryList =
        component.componentName == 'Skiply.Store.Categories';
      const componentIsCategory =
        component.componentName == 'Skiply.Store.Category';
      if (componentIsCategoryList) {
        if (!isFloatingCart && hasCartItems) {
          showOverlay('FloatingBottom', 'FLOATING_CART', {
            component: FloatingCart
          });
        }
      } else {
        if (isFloatingCart && hasCartItems) {
          store.dispatch.cart.setIsFloatingCart(false);
        }
      }
    }
  });

  // Navigation.events().registerComponentDidDisappearListener((component) => {
  //   console.log('-> Dis registerComponentDidDisappearListener : ', component);
  // });

  Navigation.events().registerBottomTabSelectedListener(
    ({ selectedTabIndex, unselectedTabIndex }) => {
      if (
        selectedTabIndex !== unselectedTabIndex ||
        (selectedTabIndex === unselectedTabIndex && Platform.OS === 'android')
      ) {
        const componentId =
          root.bottomTabs.children[unselectedTabIndex].stack.children[0]
            .component.id;
        Navigation.popToRoot(componentId).then(console.log).catch(console.log); // eslint-disable-line no-console
      }
    }
  );

  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#402ca8',
      style: 'light' | 'dark'
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: '#ffffff',
      direction: isRTL ? 'rtl' : 'ltr'
    },
    animations: {
      setRoot: {
        waitForRender: true
      },
      push: {
        waitForRender: true
      }
    },
    topBar: {
      visible: false,
      animate: true,
      hideOnScroll: false,
      drawBehind: true,
      elevation: 0,
      title: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'OpenSans-Bold'
      },
      backButton: {
        icon: icon,
        visible: false,
        showTitle: false,
        color: '#fff',
        id: 'back',
        ...Platform.select({
          ios: {
            testID: 'header-back-button-id'
          },
          android: {
            accessibilityLabel: 'header-back-button-id'
          }
        })
      },
      background: {
        color: 'transparent'
      },
      statusBarStyle: 'light',
      statusBar: {
        backgroundColor: 'red',
        color: '#fff'
      }
    },
    statusBarStyle: 'light',
    bottomTabs: {
      backgroundColor: 'white',
      titleDisplayMode: 'alwaysShow',
      hideShadow: false,
      visible: true,
      // ...Platform.select({ android: { drawBehind: true } })
      animate: true,
      borderColor: '#979797',
      borderTopWidth: 1
    },
    bottomTab: {
      fontSize: 10,
      fontFamily: 'OpenSans-SemiBold',
      selectedFontSize: 10,
      iconColor: '#979797',
      selectedIconColor: '#0d1943',
      textColor: '#979797',
      selectedTextColor: '#0d1943'
    }
  });

  //TODO:Review  Check if console.log is required or not.

  Navigation.setRoot({ root: loginRoot });
};

export default () => {
  registerNavigationComponents();
  registerNavigationEvents();
};
