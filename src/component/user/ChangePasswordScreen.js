import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {
  Header,
  OutsideStatusBar,
  PasswordInput,
  SafeView,
  featureNotReady,
} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {AuthContext} from '../../_context/AuthContext';
import {MyPrimaryButton} from '../common/Button';

const {color, spacing} = Theme;
const ChangePasswordScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {signOut} = useContext(AuthContext);

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const onSumbit = () => {
    setIsLoading(true);
  };

  return (
    <SafeView>
      <OutsideStatusBar />
      <Header navigation={navigation} headerText="Change password" />
      <ScrollView style={[GlobalStyle.container, {height: height - 145}]}>
        <View style={{width: '100%'}}>
          <View style={{marginTop: spacing.xl}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <PasswordInput
                label="Current Password"
                value={currentPassword}
                onChange={value => setCurrentPassword(value)}
              />
              <PasswordInput
                label="New Password"
                value={newPassword}
                onChange={value => setNewPassword(value)}
              />
              <PasswordInput
                label="Confirm New Password"
                value={confirmNewPassword}
                onChange={value => setConfirmNewPassword(value)}
              />
              <View style={{marginTop: spacing.xl}}>
                <MyPrimaryButton
                  disabled={!isValid}
                  loading={isLoading}
                  text={'Submit'}
                  handlePress={onSumbit}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

const OptionSelected = ({label, content, iconComponent, handlePress}) => (
  <TouchableOpacity style={styles.optionBox} onPress={handlePress}>
    <View style={styles.iconContainer}>
      <View style={{width: 40}}>{iconComponent}</View>
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <View style={styles.settingColumn}>
      <Text style={styles.settingText}>{content}</Text>
      <Feather name="chevron-right" size={20} color={color.greyLight} />
    </View>
  </TouchableOpacity>
);

const LineView = ({text}) => (
  <View style={styles.lineview}>
    <Text style={styles.lineviewText}>{text}</Text>
  </View>
);
const styles = StyleSheet.create({
  settingText: {...GlobalStyle.textSm, color: color.greyLight},
  settingColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {color: color.white, ...GlobalStyle.textMd},
  optionTextBold: {color: color.white, ...GlobalStyle.textMdBold},
  balanceText: {color: color.white, ...GlobalStyle.h3},
  endingOnText: {
    color: color.white,
    ...GlobalStyle.textSmaller,
    textAlign: 'right',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  box: {flex: 1},

  title: {
    ...GlobalStyle.h1,
    textAlign: 'left',
    color: color.white,
    marginVertical: spacing.s,
  },
  lineview: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderColor: color.grey,
  },
  lineviewText: {
    color: color.grey,
    paddingBottom: spacing.s,
    ...GlobalStyle.textSm,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default ChangePasswordScreen;
