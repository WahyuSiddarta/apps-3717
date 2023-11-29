import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {GlobalStyle, Theme, palette} from '../../_data/Styles';

const {spacing, color} = Theme;
export const Header = ({navigation, headerText}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={style.container}>
        {!!navigation && (
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            {/* <View style={style.iconContainer}>
              <FontAwesome5 name="angle-left" size={16} color={'white'} />
            </View> */}
            <Feather name="chevron-left" size={24} color={'white'} />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: Theme.color.white,
            ...GlobalStyle.h2,
            ...GlobalStyle.bold,
          }}>
          {headerText}
        </Text>
      </View>
    </View>
  );
};

export const InsideStatusBar = () => (
  <StatusBar
    barStyle={'light-content'}
    backgroundColor={palette.primary[700]}
  />
);
export const OutsideStatusBar = () => (
  <StatusBar barStyle={'dark-content'} backgroundColor={color.primaryColor} />
);

const style = StyleSheet.create({
  container: {
    padding: spacing.m,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.primary[700],
  },
  iconRightContainer: {flexDirection: 'row'},
  iconContainer: {
    backgroundColor: color.primaryColor,
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
