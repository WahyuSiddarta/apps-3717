import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React, {useContext} from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GlobalStyle, Theme} from '../../_data/Styles';

export const Header = ({navigation, headerText}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={style.container}>
        {!!navigation && (
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <View style={style.iconContainer}>
              <FontAwesome5 name="angle-left" size={20} color={'white'} />
            </View>
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
    backgroundColor: Theme.color.black,
  },
  iconRightContainer: {flexDirection: 'row'},
  iconContainer: {
    backgroundColor: Theme.color.greyDark,
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
