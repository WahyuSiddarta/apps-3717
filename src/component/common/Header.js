import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GlobalStyle, Theme} from '../../_data/Styles';

const {spacing, color} = Theme;
export const Header = ({navigation, headerText}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={style.container}>
        {!!navigation && (
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <View style={style.iconContainer}>
              <FontAwesome5 name="angle-left" size={16} color={'white'} />
            </View>
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: Theme.color.white,
            ...GlobalStyle.h2,
          }}>
          {headerText}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: spacing.m,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.mainBackgroundLigher,
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
