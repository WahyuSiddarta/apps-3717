import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {GlobalStyle, Theme} from '../../_data/Styles';

export const Header = ({navigation, headerText}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={style.container}>
        {!!navigation && (
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={23} color={'white'} />
          </TouchableOpacity>
        )}
        <Text style={{color: 'white', ...GlobalStyle.h3}}>{headerText}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 25,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.color.cbackground,
  },
  iconRightContainer: {flexDirection: 'row'},
  iconContainer: {paddingHorizontal: 5},
});
