import {StyleSheet} from 'react-native';

const palette = {
  azure: '#384eaa',
  azure_s_1: '#324699',
  azure_s_2: '#2d3e88',
  azure_s_4: '#222f66',
  azure_s_6: '#161f44',
  azure_s_8: '#0b1022',
  goldTips: '#e4bc15',
  goldTips_s_1: '#cda913',
  goldTips_s_2: '#a0840f',
  goldTips_s_4: '#725e0b',
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
    white: '#ffffff',
    mainBackground: '#0b1022',
    primaryColor: palette.azure,
    secondColor: '#E4bc15',
    orange: '#ff9254',
    red: '#ff6359',
    green: '#0acca2',

    currentWhite: '#fefeff',
    grey: '#8a8a8e',
    greyLight: '#F3F3F3',
    black: '#000000',

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
