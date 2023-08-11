import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {useContext, useState} from 'react';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {PasswordInput, RegularInput, SafeView} from '../common';
import {MyPrimaryButton} from '../common/Button';
import {AuthContext} from '../../_context/AuthContext';
import {isEmpty} from '../../_helpers/utils';

const RegisterScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  if (!isEmpty(user)) {
    navigation.navigate('main');
  }
  const {width, height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Theme.color.primaryColor}
        />
        <View style={{backgroundColor: Theme.color.primaryColor, height: 30}}>
          <Svg height={150} width={width} viewBox="0 0 1440 320">
            <Path
              fill={Theme.color.primaryColor}
              d="M0,288L48,261.3C96,235,192,181,288,160C384,139,480,149,576,160C672,171,768,181,864,154.7C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
        <View style={[styles.welcomeContainer, {height: height - 110}]}>
          <Text style={styles.title}>Create Account!</Text>
          <Text style={styles.subtitle}>Fill information to continue</Text>
          <ScrollView
            style={{marginHorizontal: 25, marginTop: Theme.spacing.xl}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <RegularInput
                label="Email"
                placeholder={'example@mail.com'}
                value={email}
                onChange={value => setEmail(value)}
              />
              <PasswordInput
                label="Password"
                placeholder={'Password'}
                value={password}
                onChange={value => setPassword(value)}
              />
              <PasswordInput
                label="Repeat Password"
                placeholder={'Repeat Password'}
                value={password}
                onChange={value => setPassword(value)}
              />

              <View style={{marginTop: Theme.spacing.xl}}>
                <MyPrimaryButton text={'Submit'} />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={[styles.otherAction, GlobalStyle.textMd]}>
                  Already Have Account ?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('login_screen')}>
                  <Text style={[GlobalStyle.textMd, styles.otherAction2]}>
                    {' Login'}
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  otherAction2: {
    color: Theme.color.secondColor,
    paddingTop: Theme.spacing.m,
  },
  otherAction: {
    color: Theme.color.white,
    textAlign: 'center',
    paddingTop: Theme.spacing.m,
  },
  container: {
    height: '100%',
    backgroundColor: Theme.color.mainBackground,
  },
  welcomeContainer: {
    marginTop: 80,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontFamily: Theme.fontRobotoBold,
    fontSize: 25,
    color: Theme.color.currentWhite,
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: Theme.fontRoboto,
    fontSize: 18,
    color: Theme.color.currentWhite,
    marginBottom: 6,
  },
});

export default RegisterScreen;
