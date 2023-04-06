import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

// Navigation components
import App from '../App';
import Home from '../modules/Home';
import Modal from 'components/common/Modal/FullScreenModal';
import ConsentModal from 'components/common/Modal/ConsentModal';

import CheckoutModal from 'components/common/Modal/CheckoutModal';
import CheckoutModalFail from 'components/common/Modal/CheckoutModalFail';
import Discover from '../modules/Discover';
import SearchSchool from '/modules/Discover/School/flows/AddStudent/SearchSchool';
import AddStudentManually from '/modules/Discover/School/flows/AddStudent/AddStudentManually';
import OTPChannel from '/modules/Discover/School/flows/AddStudent/OTPChannel/OTPChannel';
import VerifyStudent from '/modules/Discover/School/flows/AddStudent/VerifyStudent';
import FindStudentById from '/modules/Discover/School/flows/AddStudent/FindStudentById';
import StudentResults from '/modules/Discover/School/flows/AddStudent/StudentResults';
import StoreCategoryListView from '/modules/Discover/School/flows/Store/Start/components/CategoryList';
import StoreCategoryView from '/modules/Discover/School/flows/Store/Start/components/ProductList';
import Product from '/modules/Discover/School/flows/Store/ProductView';
import Cart from '/modules/Discover/School/flows/Store/ShoppingCart';
import Consent from '/modules/Discover/School/flows/Store/Sign/Consent';
import Sign from '/modules/Discover/School/flows/Store/Sign/Sign';
import SchoolInfoPage from '/modules/Discover/School/flows/Store/SchoolInfoPage/SchoolInfoPage';
import Checkout from '/modules/Discover/School/flows/Checkout';
import CheckoutHTML from '/modules/Discover/School/flows/Checkout/CheckoutHTML';
import ChangePaymentMethod from '/modules/Discover/School/flows/Checkout/ChangePaymentMethod';
import VerifyCvc from '/modules/Discover/School/flows/Checkout/CVV';
import Slider from '/modules/LoginAndSignup/flows/Onboarding/screens/Slider';
import OnboardingAddPaymentMethod from '/modules/LoginAndSignup/flows/Onboarding/screens/AddPaymentMethod';
import Splash from '/modules/LoginAndSignup/flows/Splash';
import WelcomeOnboard from '/modules/LoginAndSignup/flows/WelcomeOnboard';
import Landing from '/modules/LoginAndSignup/flows/Landing';
import CodePushUpdateModal from '/modules/LoginAndSignup/flows/Landing/components/CodePushUpdateModal';
import LoginForm from '/modules/LoginAndSignup/flows/Login/LoginForm';
import SignupForm from '/modules/LoginAndSignup/flows/Signup/Form/SignupForm';
import EmailVerification from '/modules/LoginAndSignup/flows/EmailVerification';
import ResetPassword from '/modules/LoginAndSignup/flows/ResetPassword/ResetPassword/ResetPassword';
import VerifyReset from '/modules/LoginAndSignup/flows/ResetPassword/VerifyReset/VerifyReset';
import VerificationCode from '/modules/LoginAndSignup/flows/ResetPassword/VerificationCode/VerificationCode';
import Methods from '/modules/Account/flows/Payments/Methods/index';
import Profile from '/modules/Account/flows/Profile/Profile';
import EditStudentProfile from '/modules/Account/flows/StudentProfile/EditProfile';
import ViewStudentProfile from '/modules/Account/flows/StudentProfile/ViewProfile';
import AvailableCardsList from '/modules/Account/flows/Payments/Methods/components/AvailableCardsList';
import AddMethod from '/modules/Account/flows/Payments/AddMethod/index';
import EditMethod from '/modules/Account/flows/Payments/EditMethod/index';
import ChangePassword from '/modules/Account/flows/Profile/ChangePassword';
import Account from '/modules/Account/flows/Profile/Account';
import Policy from '/modules/Account/flows/Profile/Account/About/Policy';
import Terms from '/modules/Account/flows/Profile/Account/About/Terms';
import Contact from '/modules/Account/flows/Profile/Account/About/Contact';
import WhatsNew from '/modules/Account/flows/Profile/Account/About/WhatsNew';
import FAQ from '/modules/Account/flows/Profile/Account/About/FAQ';
import Notifications from '/modules/Account/flows/Profile/Account/Notifications';
import TouchId from '/modules/Account/flows/Profile/Account/TouchId';
import NotificationPreferences from '/modules/Account/flows/Profile/Account/Notifications/NotificationPreferences';
import ProfileInfoList from '/modules/Account/flows/Profile/Profile';
import EditProfile from '../modules/Account/flows/Profile/EditProfile';
import MySkiplyPoints from '/modules/Promotion/MySkiplyPoints';
import ApplyForRakBankCard from '/modules/Promotion/ApplyForRakBankCard';
import ApplyForCardForm from '/modules/Promotion/ApplyForCardForm';
import OffersScreen from '/modules/Promotion/Offers/OffersScreen';
import OfferSingleScreen from '/modules/Promotion/Offers/OfferSingleScreen';
import OffersCategoriesScreen from '/modules/Promotion/Offers/OffersCategoriesScreen';
import FloatingSlideUp from '/components/FloatingSlideUp';
import FloatingBottom from '/components/FloatingBottom';
import Purchases from '/modules/Purchases/flows/Landing/';
import Receipt from '/modules/Discover/School/flows/Checkout/Receipt/Receipt';
import NavigationTitle from '../../src/components/common/NavigationTitle/NavigationTitle';
import EmailReceipt from '/modules/Discover/School/flows/Checkout/Receipt/EmailReceipt';
import InstructionsList from '/modules/RecurringPayment/InstructionsList';
import UpdateInstruction from '/modules/RecurringPayment/UpdateInstruction';
import CreateInstruction from '/modules/RecurringPayment/CreateInstruction';
import AppNotification from '../modules/AppNotification';
import NotificationDetail from '../modules/AppNotification/NotificationDetail';
import { getTranslator } from '../i18n/utils';
const CloseIcon = require('../../assets/icons/common/close.png');
const cartIcon = require('../../assets/icons/common/cart-white.png');
const mainColor = '#402ca8';
const copy = 'components.route.NavigationTitle';



const t = getTranslator();
export const options = {
  noTabs: {
    visible: false,
    ...Platform.select({ android: { drawBehind: true } })
  },
  noTopBar: {
    drawBehind: true,
    visible: false
  },
  topBarWithTitleWithoutBackButton: (title) => ({
    background: {
      color: mainColor
    },
    title: {
      text: title
    },
    backButton: {
      visible: false
    },
    visible: true,
    drawBehind: false,
    elevation: 0
  }),
  topBarWithTitleAndExitButtonWithoutBackButton: (title) => ({
    background: {
      color: mainColor
    },
    title: {
      text: title
    },
    backButton: {
      visible: false
    },
    rightButtons: [
      {
        icon: CloseIcon,
        id: 'exitFlow',
        ...Platform.select({
          ios: {
            testID: 'header-close-button-id'
          },
          android: {
            accessibilityLabel: 'header-close-button-id'
          }
        })
      }
    ],
    visible: true,
    drawBehind: false,
    elevation: 0
  }),
  topBarWithTitleAndExitButtonAndBackButton: (title) => ({
    background: {
      color: mainColor
    },
    title: {
      text: title
    },
    backButton: {
      visible: true
    },
    rightButtons: [
      {
        icon: CloseIcon,
        id: 'exitFlow',
        ...Platform.select({
          ios: {
            testID: 'header-close-button-id'
          },
          android: {
            accessibilityLabel: 'header-close-button-id'
          }
        })
      }
    ],
    drawBehind: false,
    visible: true,
    elevation: 0
  }),
  topBarTransparentWithExitButtonWithoutBackButton: {
    backButton: {
      visible: false
    },
    rightButtons: [
      {
        icon: CloseIcon,
        id: 'exitFlow',
        ...Platform.select({
          ios: {
            testID: 'header-close-button-id'
          },
          android: {
            accessibilityLabel: 'header-close-button-id'
          }
        })
      }
    ],
    drawBehind: true,
    background: {
      color: 'transparent'
    },
    visible: true,
    elevation: 0
  },
  topBarTransparentNoTitle: {
    drawBehind: true,
    background: {
      color: 'transparent'
    },
    backButton: {
      visible: true
    },
    visible: true,
    elevation: 0
  },
  topBarTransparentWithTitle: (title) => ({
    title: {
      text: title
    },
    backButton: {
      visible: true
    },
    drawBehind: true,
    background: {
      color: 'transparent'
    },
    visible: true,
    elevation: 0
  }),
  topBarWithTitle: (title) => ({
    background: {
      color: mainColor
    },
    backButton: {
      visible: true
    },
    title: {
      text: title
    },
    drawBehind: false,
    visible: true,
    elevation: 0
  }),
  topBarWithComponentTitle: (componentName, title, icon) => ({
    background: {
      color: mainColor
    },
    backButton: {
      visible: true
    },
    title: {
      component: {
        name: componentName,
        alignment: 'center',
        icon: icon,
        passProps: { title, icon }
      },
      text: title,
      alignment: 'center'
    },
    drawBehind: false,
    visible: true,
    elevation: 0
  })
};

/**
 * Routes for the entire app
 */
export const routes = [
  {
    path: 'Skiply.TitleComponent',
    component: NavigationTitle,
    options: {
      withoutAppWrapper: true
    }
  },
  {
    path: 'FloatingSlideUp',
    component: FloatingSlideUp,
    options: {}
  },
  {
    path: 'FloatingBottom',
    component: FloatingBottom,
    options: {}
  },
  {
    path: 'Skiply.Home',
    component: Home,
    options: {}
  },
  {
    path: 'Skiply.Modal.FullScreen',
    component: Modal,
    options: {}
  },
  {
    path: 'Skiply.Modal.ConsentModal',
    component: ConsentModal,
    options: {}
  },
  {
    path: 'Skiply.Modal.Checkout',
    component: CheckoutModal,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.checkout')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Modal.Checkout.Fail',
    component: CheckoutModalFail,
    options: {}
  },
  {
    path: 'Skiply.Discover.School.AddStudentManually',
    component: AddStudentManually,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.addStudent')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover.School.OTPChannel',
    component: OTPChannel,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.addStudent')),
      bottomTabs: options.noTabs
    }
  },
  {
    //TODO: ta bort linjen under navven lol
    path: 'Skiply.Discover.School.SchoolInfoPage',
    component: SchoolInfoPage,
    options: {
      topBar: options.topBarTransparentNoTitle,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover.School.VerifyStudent',
    component: VerifyStudent,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.Verification')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover.School.FindStudentById',
    component: FindStudentById,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.SearchStudent')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover.School.StudentResults',
    component: StudentResults,
    options: {
      topBar: options.topBarWithTitleAndExitButtonAndBackButton(t(copy +'.addStudent')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover.School.SearchSchool',
    component: SearchSchool,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.SelectYourSchool')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.Account',
    component: Account,
    options: {}
  },

  {
    path: 'Skiply.AppNotification',
    component: AppNotification,
    options: {
      topBar: options.topBarWithTitle(''),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Discover',
    component: Discover,
    options: {}
  },
  {
    path: 'Skiply.Account.Profile.Profile',
    component: Profile,
    options: {}
  },
  {
    path: 'Skiply.Account.About.Policy',
    component: Policy,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.PrivacyPolicy'))
    }
  },
  {
    path: 'Skiply.Account.About.Notifications',
    component: Notifications,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.Notifications'))
    }
  },
  {
    path: 'Skiply.Account.About.TouchId',
    component: TouchId,
    options: {}
  },
  {
    path: 'Skiply.Account.About.NotificationPreferences',
    component: NotificationPreferences,
    options: {}
  },
  {
    path: 'Skiply.Account.About.WhatsNew',
    component: WhatsNew,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.WhatsNew'))
    }
  },
  {
    path: 'Skiply.Account.About.FAQ',
    component: FAQ,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.FrequentlyAskedQuestions'))
    }
  },
  {
    path: 'Skiply.Account.About.Terms',
    component: Terms,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.TermsConditions'))
    }
  },
  {
    path: 'Skiply.Account.About.Contact',
    component: Contact,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ContactUs'))
    }
  },
  {
    path: 'Skiply.Account.Profile.EditProfile',
    component: EditProfile,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.StudentProfile.EditProfile',
    component: EditStudentProfile,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.StudentProfile.ViewProfile',
    component: ViewStudentProfile,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.Profile.MyProfile.Account',
    component: Account,
    options: {}
  },
  {
    path: 'Skiply.Account.Profile.Profile.ProfileInfoList',
    component: ProfileInfoList,
    options: {}
  },
  {
    path: 'Skiply.Account.Profile.MyProfile.ChangePassword',
    component: ChangePassword,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ResetPassword')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.Payments.AvAvailableCards',
    component: AvailableCardsList,
    options: {}
  },
  {
    path: 'Skiply.Account.Payments.AddMethod',
    component: AddMethod,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.AddCard')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.Payments.Methods',
    component: Methods,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.PaymentMethods')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Account.Payments.EditMethod',
    component: EditMethod,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.EditCard')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Categories',
    component: StoreCategoryListView,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Category',
    component: StoreCategoryView,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Product',
    component: Product,
    options: {
      topBar: options.topBarWithTitle(''),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Checkout',
    component: Checkout,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.checkout')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.VerifyCvc',
    component: VerifyCvc,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.VerifyCVV')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.CheckOutHTML',
    component: CheckoutHTML,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.checkout')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Cart',
    component: Cart,
    options: {
      topBar: options.topBarWithComponentTitle(
        'Skiply.TitleComponent',
        t(copy +'.cart'),
        cartIcon
      ),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Consent.Form',
    component: Consent,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ConsentForm')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.Consent.Sign',
    component: Sign,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ConsentForm')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Store.ChangePaymentMethod',
    component: ChangePaymentMethod,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ChangePaymentMethod')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Splash',
    component: Splash,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.WelcomeOnboard',
    component: WelcomeOnboard,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Onboarding.Slider',
    component: Slider,
    options: {
      topBar: options.topBarTransparentWithExitButtonWithoutBackButton,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Onboarding.AddPaymentMethod',
    component: OnboardingAddPaymentMethod,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.LoginForm',
    component: LoginForm,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.Login')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.SignupForm',
    component: SignupForm,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.SignUp')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.EmailVerification',
    component: EmailVerification,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.VerifyEmail')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.ResetPassword',
    component: ResetPassword,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ResetPassword')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.VerifyReset',
    component: VerifyReset,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ResetPassword')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.VerificationCode',
    component: VerificationCode,
    options: {
      topBar: options.topBarWithTitleAndExitButtonAndBackButton(t(copy +'.VerifyCode')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Purchases.Landing',
    component: Purchases,
    options: {
      topBar: options.noTopBar,
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Purchases.Receipt',
    component: Receipt,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.Receipt')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Purchases.EmailReceipt',
    component: EmailReceipt,
    options: {
      topBar: options.topBarWithTitleAndExitButtonWithoutBackButton(t(copy +'.Receipt')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Promotion.MySkiplyPoints',
    component: MySkiplyPoints,
    options: {}
  },
  {
    path: 'Skiply.Promotion.ApplyForRakBankCard',
    component: ApplyForRakBankCard,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ApplyForCreditCard')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Promotion.ApplyForCardForm',
    component: ApplyForCardForm,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ApplyForCreditCard')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Promotion.Offers.OffersScreen',
    component: OffersScreen,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.AllOffers')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Promotion.Offers.OffersSingleScreen',
    component: OfferSingleScreen,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.Offer')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Promotion.Offers.OffersCategoriesScreen',
    component: OffersCategoriesScreen,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.AllCategories')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Landing',
    component: Landing,
    options: {}
  },
  {
    path: 'Skiply.App',
    component: App,
    options: {}
  },
  {
    path: 'Skiply.RecurringPayment.InstructionsList',
    component: InstructionsList,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.ManageRecurringPayment')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.RecurringPayment.UpdateInstruction',
    component: UpdateInstruction,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.EditRecurringPayment')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.RecurringPayment.CreateInstruction',
    component: CreateInstruction,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.SetupRecurringPayment')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.AppNotification.NotificationDetail',
    component: NotificationDetail,
    options: {
      topBar: options.topBarWithTitle(t(copy +'.SchoolNotification')),
      bottomTabs: options.noTabs
    }
  },
  {
    path: 'Skiply.Landing.CodePushUpdateModal',
    component: CodePushUpdateModal,
    options: {}
  }
];

const getOptionsForPath = (path) => {
  const route = routes.find((route) => route.path == path) || {};

  return route.options || {};
};

export const navigateTo = (path, componentId, props = {}, options = {}) => {
  const screenOptions = getOptionsForPath(path);
  return Navigation.push(componentId, {
    component: {
      name: path,
      options: {
        ...screenOptions,
        ...options
      },
      passProps: props
    }
  });
};

export const deepLinkNavigateTo = (
  path,
  componentId,
  props = {},
  options = {}
) => {
  const screenOptions = getOptionsForPath(path);
  return Navigation.push(componentId, {
    component: {
      name: path,
      options: {
        ...screenOptions,
        ...options,
        animations: {
          push: {
            enabled: false
          }
        }
      },
      passProps: props
    }
  });
};

export const popTo = (componentId) => {
  return Navigation.popTo(componentId);
};

export const popToRoot = (componentId) => {
  return Navigation.popToRoot(componentId);
};

export const popToPrevious = (componentId) => {
  return Navigation.pop(componentId);
};

const getModalComponentNameFromType = (type) => {
  switch (type) {
    case 'fullScreen':
      return 'Skiply.Modal.FullScreen';
    case 'icon':
      return 'Skiply.Modal.Icon';
    default:
      return '';
  }
};

export const showModal = (type, props = {}, options = {}) => {
  const componentName = getModalComponentNameFromType(type);

  return Navigation.showModal(
    {
      stack: {
        children: [
          {
            component: {
              name: componentName,
              passProps: props
            }
          }
        ]
      }
    },
    {}
  );
};

export const dismissAllModals = () => {
  return Navigation.dismissAllModals();
};

export const showOverlay = (
  componentName,
  componentId,
  props = {},
  options = {}
) => {
  const layout =
    Platform.OS === 'ios'
      ? { componentBackgroundColor: 'transparent' }
      : { backgroundColor: 'transparent' };

  return Navigation.showOverlay({
    component: {
      id: componentId,
      name: componentName,
      options: {
        layout: layout,
        overlay: {
          interceptTouchOutside: false
        },
        ...options
      },
      passProps: {
        ...props,
        isOverlayComponent: true,
        componentId
      }
    }
  });
};

export const dismissOverlay = (componentId) => {
  return Navigation.dismissOverlay(componentId);
};
