import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';

import {Header, OutsideStatusBar, PasswordInput, SafeView} from '../common';
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

export default ChangePasswordScreen;
