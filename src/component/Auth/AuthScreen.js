import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useContext} from 'react';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {SafeView} from '../common';
import {AuthContext} from '../../_context/AuthContext';

const {spacing, color} = Theme;
const AuthScreen = ({navigation}) => {
  const {isAuth} = useContext(AuthContext);
  if (!!isAuth) navigation.navigate('main');

  return (
    <SafeView style={{flex: 1}}>
      <View style={[GlobalStyle.container, styles.container]}>
        <View style={styles.iconExampleContainer}>
          <Image
            source={require('../../../assets/image/leader.jpeg')}
            style={styles.iconExample}
          />
        </View>
        <View style={styles.actionContainer}>
          <Text style={styles.title}>Create A Free Account</Text>
        </View>
        <View style={{gap: spacing.l}}>
          <TouchableOpacity
            style={[styles.actionButton, styles.registerButton]}
            onPress={() => navigation.navigate('register_screen')}>
            <Text style={[GlobalStyle.h3, styles.registerButtonText]}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton]}
            onPress={() => navigation.navigate('login_screen')}>
            <Text style={[GlobalStyle.h3, styles.loginButtonText]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  title: {
    ...GlobalStyle.h1,
    textAlign: 'center',
    color: color.white,
    marginBottom: spacing.m,
  },
  actionContainer: {
    marginTop: -50,
  },
  iconExampleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  iconExample: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  actionButton: {
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.l,
    borderColor: color.primaryColor,
    borderWidth: 2,
    borderRadius: 40,
    width: 200,
    elevation: 5,
    alignSelf: 'center',
  },
  registerButton: {
    backgroundColor: color.primaryColor,
  },
  loginButtonText: {
    color: color.primaryColor,
    textAlign: 'center',
  },
  registerButtonText: {
    color: color.white,
    textAlign: 'center',
  },
});

export default AuthScreen;
