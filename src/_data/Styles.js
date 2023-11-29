import {StyleSheet} from 'react-native';

// s => shades
// t => tint
// d => darker
export const palette = {
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

  white: '#ffffff',
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },
  primary: {
    100: '#d0d1d5',
    200: '#a1a4ab',
    300: '#727681',
    400: '#1F2A40',
    500: '#141b2d',
    600: '#101624',
    700: '#0c101b',
    800: '#080b12',
    900: '#040509',
  },
  greenAccent: {
    100: '#dbf5ee',
    200: '#b7ebde',
    300: '#94e2cd',
    400: '#70d8bd',
    500: '#4cceac',
    600: '#3da58a',
    700: '#2e7c67',
    800: '#1e5245',
    900: '#0f2922',
  },
  redAccent: {
    100: '#f8dcdb',
    200: '#f1b9b7',
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f',
  },
  blueAccent: {
    100: '#e1e2fe',
    200: '#c3c6fd',
    300: '#a4a9fc',
    400: '#868dfb',
    500: '#6870fa',
    600: '#535ac8',
    700: '#3e4396',
    800: '#2a2d64',
    900: '#151632',
  },
};

export const Theme = {
  spacing: {
    s: 7,
    m: 14,
    l: 21,
    xl: 28,
  },
  color: {
    red: '#ff6359',
    green: '#198052',
    greyLight: '#F3F3F3',
    yellow: palette.goldTips,
    navigation: palette.primary[600],
    headerColor: '#161f44',
    // primaryColor: palette.azure,
    primaryColor: palette.blueAccent[700],
    white: palette.white,
    mainBackground: palette.primary[500],
    secondColor: palette.primary[400],
    mainBackgroundLigher: palette.azure_s_7,
    mainContainer: '#1c2755',
    // grey: '#a7aac3',
    grey: palette.grey['100'],

    // RISK COLOR
    riskMedium: '#b3a042',
    riskMax: '#5e1a1f',
  },
};

export const GlobalStyle = StyleSheet.create({
  textSmaller: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
  textSm: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
  },
  textMd: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  h3: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  h2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
  h1: {
    fontFamily: 'SourceSans3-Bold',
    fontSize: 25,
  },
  bold: {
    fontFamily: 'SourceSans3-Bold',
  },
  container: {
    paddingHorizontal: 25,
    backgroundColor: Theme.color.mainBackground,
  },
  otherFont: {
    fontFamily: 'SourceSans3-Regular',
  },
});
