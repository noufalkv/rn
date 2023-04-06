import { getTranslator } from '../i18n/utils';

//TODO:Review
const DummyIcon = require('../../assets/icons/dummy_icon.png');

//active icons
const HomeIcon = require('../../assets/icons/navigation/active/home.png');
const ProfileIcon = require('../../assets/icons/navigation/active/profile.png');
const PurchasesIcon = require('../../assets/icons/navigation/active/purchases.png');
const DiscoverIcon = require('../../assets/icons/navigation/active/discover.png');
const copy = 'components.route.BottomTab';

const t = getTranslator();
export const root = {
  bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: 'Skiply.Home',
                id: 'Skiply.Home',
                passProps: {
                  text: 'Tab2'
                }
              }
            }
          ],
          options: {
            bottomTabs: {
              visible: true,
              animate: true
            },
            bottomTab: {
              text: t(copy + '.Home'),
              icon: HomeIcon,
              testID: 'TAB_2'
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'Skiply.Discover',
                id: 'Skiply.Discover',
                passProps: {
                  text: 'Tab2'
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: t(copy + '.Discover'),
              icon: DiscoverIcon,
              testID: 'TAB_2'
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'Skiply.Purchases.Landing',
                id: 'Skiply.Purchases.Landing',
                passProps: {
                  text: 'Tab2'
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: t(copy + '.Purchases'),
              icon: PurchasesIcon,
              testID: 'TAB_2'
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                id: 'Skiply.Account.Account',
                name: 'Skiply.Account.Account',
                passProps: {
                  text: 'Tab2'
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: t(copy + '.Profile'),
              icon: ProfileIcon,
              testID: 'TAB_2'
            }
          }
        }
      }
    ]
  }
};

export const loginRoot = {
  stack: {
    children: [
      {
        component: {
          name: 'Skiply.Landing',
          id: 'Skiply.Landing',
          waitForRender: false
        }
      }
    ],
    options: {
      bottomTabs: {
        visible: false,
        animate: false
      }
    }
  }
};
