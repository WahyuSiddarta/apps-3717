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
import {useContext, useEffect, useState} from 'react';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {OutsideStatusBar, RegularInput, SafeView} from '../common';
import {MyPrimaryButton} from '../common/Button';
import {AuthContext} from '../../_context/AuthContext';
import {isEmpty, validateEmail} from '../../_helpers/utils';
import {useIsFold} from '../../_hooks';

const {color, spacing} = Theme;
const ForgetPasswordScreen = ({navigation}) => {
  const {user, signIn} = useContext(AuthContext);
  if (!isEmpty(user)) {
    navigation.navigate('main');
  }

  const {width, height} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const {isFold} = useIsFold();
  useEffect(() => {
    let valid = true;
    if (!validateEmail(email)) {
      valid = false;
    } else if (!password) {
      valid = false;
    }
    setIsValid(valid);
  }, [email, password]);

  const onSumbit = () => {
    setIsLoading(true);
    setTimeout(() => {
      // setIsLoading(false);
      signIn('1234567');
    }, 3000);
  };

  return (
    <SafeView style={{flex: 1}}>
      <ScrollView style={[GlobalStyle.container, {paddingHorizontal: 0}]}>
        <OutsideStatusBar />
        <View style={{backgroundColor: color.primaryColor, height: 30}}>
          <Svg height={isFold ? 200 : 150} width={width} viewBox="0 0 1440 320">
            <Path
              fill={color.primaryColor}
              d="M0,288L48,261.3C96,235,192,181,288,160C384,139,480,149,576,160C672,171,768,181,864,154.7C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
        <View style={[styles.welcomeContainer, {height: height - 110}]}>
          <View style={{gap: spacing.s}}>
            <Text style={[GlobalStyle.h1, GlobalStyle.bold, styles.headerText]}>
              Reset Password
            </Text>
          </View>
          <View style={[GlobalStyle.container, {marginTop: spacing.xl}]}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <RegularInput
                label="Email"
                placeholder={'example@mail.com'}
                value={email}
                onChange={value => setEmail(value)}
              />
              <View style={{marginTop: spacing.xl}}>
                <MyPrimaryButton
                  disabled={!isValid}
                  loading={isLoading}
                  text={'Send'}
                  handlePress={onSumbit}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Text style={[styles.otherAction, GlobalStyle.textMd]}>
                  We'll email you a link to reset your password
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  otherAction2: {
    color: color.grey,
    paddingTop: spacing.m,
  },
  otherAction: {
    color: color.white,
    textAlign: 'center',
    paddingTop: spacing.m,
  },
  forgetPassword: {
    color: color.grey,
    textAlign: 'right',
    marginTop: spacing.s,
    marginBottom: spacing.xl,
  },
  welcomeContainer: {
    marginTop: 100,
    justifyContent: 'flex-start',
  },
  headerText: {
    textAlign: 'center',
    color: color.white,
  },
});

export default ForgetPasswordScreen;
