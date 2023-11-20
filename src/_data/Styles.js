import {StyleSheet} from 'react-native';

// s => shades
// t => tint
// d => darker
const palette = {
  white: '#ffffff',
  black: '#000000',
  mirrage: '#191d35',
  azure: '#384eaa',
  azureDarken: '#3423A6',
  azure_s_8: '#0b1022',
  azure_s_9: '#060811',
  azure_s_7: '#111733',
  azure_d_3: '#04060c',
  goldTips: '#e4bc15',
  goldTips_s_1: '#cda913',
  goldTips_s_2: '#a0840f',
  goldTips_s_4: '#725e0b',
  grey: '#6a6b70',
  grey_s_5: '#353638',
  grey_s_8: '151516',
};

export const Theme = {
  fontRoboto: 'Roboto-Regular',
  fontRobotoBold: 'Roboto-Bold',
  fontRobotoSemiBold: 'Roboto-Medium',
  fontRobotoMono: 'RobotoMono',
  fontWeight: {
    semiBold: 600,
    bold: 'bold',
  },
  spacing: {
    s: 7,
    m: 14,
    l: 21,
    xl: 28,
  },
  color: {
    black: palette.black,

    // grey: palette.grey,

    greyDark: palette.grey_s_5,

    navigation: palette.azure_d_3,

    mainBackgroundDarker: palette.azure_s_9,
    mainBackgroundLigher: palette.azure_s_7,

    primaryColor: palette.azure,
    azureDarkenColor: palette.azureDarken,
    secondColor: palette.mirrage,
    orange: '#ff9254',
    red: '#ff6359',
    green: '#0acca2',

    greyLight: '#F3F3F3',

    greenDarken: '#368676',

    yellow: palette.goldTips,

    // new fixed
    white: palette.white,
    mainBackground: palette.azure_s_8,
    mainContainer: '#1c2755',
    grey: '#a7aac3',
  },
};

export const GlobalStyle = StyleSheet.create({
  textSmaller: {
    fontFamily: Theme.fontRoboto,
    fontSize: 10,
  },
  textSm: {
    fontFamily: Theme.fontRoboto,
    fontSize: 12,
  },
  textMd: {
    fontFamily: Theme.fontRoboto,
    fontSize: 14,
  },
  textMdBold: {
    fontFamily: Theme.fontRobotoBold,
    fontSize: 14,
  },
  h3Bold: {
    fontFamily: Theme.fontRobotoBold,
    fontSize: 18,
  },
  h3: {
    fontFamily: Theme.fontRoboto,
    fontSize: 18,
  },
  h2: {
    fontFamily: Theme.fontRoboto,
    fontSize: 20,
  },
  h1: {
    fontFamily: Theme.fontRoboto,
    fontSize: 25,
  },
  bold: {
    fontFamily: Theme.fontRobotoBold,
  },
  container: {
    paddingHorizontal: 25,
    backgroundColor: Theme.color.mainBackground,
  },
});
