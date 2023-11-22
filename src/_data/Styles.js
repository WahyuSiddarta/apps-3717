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
    secondColor: palette.mirrage,
    red: '#ff6359',
    green: '#198052',
    greyLight: '#F3F3F3',
    yellow: palette.goldTips,
    navigation: palette.azure_d_3,
    headerColor: '#161f44',
    // primaryColor: palette.azure,
    primaryColor: '#122499',
    white: palette.white,
    mainBackground: palette.azure_s_8,
    mainBackgroundLigher: palette.azure_s_7,
    mainContainer: '#1c2755',
    // grey: '#a7aac3',
    grey: '#bebec0',

    // RISK COLOR
    riskMedium: '#b3a042',
    riskMax: '#5e1a1f',
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
