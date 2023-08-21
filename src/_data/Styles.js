import {StyleSheet} from 'react-native';

// s => shades
// t => tint
// d => darker
const palette = {
  white: '#e6e6e7',
  black: '#000000',
  mirrage: '#191d35',
  azure: '#384eaa',
  azure_s_8: '#0b1022',
  azure_s_9: '#060811',
  azure_d_3: '#04060c',
  goldTips: '#e4bc15',
  goldTips_s_1: '#cda913',
  goldTips_s_2: '#a0840f',
  goldTips_s_4: '#725e0b',
  grey: '#6a6b70',
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
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  color: {
    white: palette.white,
    grey: palette.grey,

    navigation: palette.azure_d_3,
    mainBackground: palette.azure_s_8,
    mainBackgroundDarker: palette.azure_s_9,

    primaryColor: palette.azure,
    secondColor: palette.mirrage,
    orange: '#ff9254',
    red: '#ff6359',
    green: '#0acca2',

    currentWhite: '#fefeff',

    greyLight: '#F3F3F3',

    black: palette.black,

    green: '#368676',

    cbackground: '#000000',
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
  container: {
    paddingHorizontal: 25,
    backgroundColor: Theme.color.mainBackground,
  },
});
