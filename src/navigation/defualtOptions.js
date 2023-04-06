import { isRTL } from '../Constants';

const BackArrowWhiteRtl = require('../../assets/icons/common/back-arrow-rtl.png');

const BackArrowWhite = require('../../assets/icons/common/back-arrow.png');
 

export const defaultOptions = {
  topBar: {
    visible: true,
    animate: false, // Controls whether TopBar visibility changes should be animated
    hideOnScroll: false,
    drawBehind: false,
    title: {
      text: 'Title',
      fontSize: 16,
      color: '#fff',
      fontFamily: 'OpenSans-Bold'
    },

    backButton: {
      icon:  isRTL ? BackArrowWhiteRtl: BackArrowWhite,
      visible: true,
      color: '#fff'
    },
    background: {
      color: '#402ca8'
    }
  },
  bottomTabs: {
    backgroundColor: 'white',
    titleDisplayMode: 'alwaysShow'
  },
  bottomTab: {
    iconColor: 'gray',
    selectedIconColor: 'rebeccapurple',
    textColor: 'gray',
    selectedTextColor: 'rebeccapurple'
  }
};
