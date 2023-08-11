import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {GlobalStyle, Theme} from '../../_data/Styles';
import {SafeView} from '../common';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../../_context/AuthContext';

const AuthScreen = ({navigation}) => {
  const {isAuth} = useContext(AuthContext);
  useEffect(() => {
    if (!!isAuth) {
      navigation.navigate('main');
    }
  }, [isAuth]);

  return (
    <SafeView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.iconExampleContainer}>
          <Image
            source={require('../../../assets/image/leader.jpeg')}
            style={styles.iconExample}
          />
          {/* <View style={styles.iconExample} /> */}
        </View>
        <View style={styles.actionContainer}>
          <Text style={styles.title}>Create A Free Account</Text>
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('register_screen')}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('login_screen')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: 'transparent',
    height: '100%',
  },
  title: {
    ...GlobalStyle.h1,
    textAlign: 'center',
    color: Theme.color.currentWhite,
    marginBottom: 10,
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
    backgroundColor: Theme.color.currentWhite,
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  loginButton: {
    borderColor: Theme.color.primaryColor,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    width: 200,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  loginButtonText: {
    fontFamily: Theme.fontRoboto,
    fontSize: 18,
    color: Theme.color.primaryColor,
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: Theme.color.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    width: 200,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 5,
  },
  registerButtonText: {
    fontFamily: Theme.fontRoboto,
    fontSize: 18,
    color: Theme.color.white,
    textAlign: 'center',
  },
});

export default AuthScreen;
