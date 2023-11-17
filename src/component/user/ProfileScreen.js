import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Header, SafeView, featureNotReady} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {AuthContext} from '../../_context/AuthContext';

const leftIcon = {
  size: 20,
  color: Theme.color.greyLight,
};
const ProfileScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {signOut} = useContext(AuthContext);

  return (
    <SafeView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#161f44'} />
      <Header navigation={navigation} headerText="Profile" />
      <ScrollView style={[styles.container, {height: height - 145}]}>
        <View style={{width: '100%'}}>
          <Text style={styles.title}>Free Tier</Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Theme.color.secondColor,
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 8,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <MaterialCommunityIcons
                name="robot"
                size={35}
                style={{flex: 1}}
                color={Theme.color.greyLight}
              />
              <Text style={[styles.optionTextBold, {flex: 1, paddingTop: 6}]}>
                0 / 1
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                backgroundColor: Theme.color.secondColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Text style={styles.optionTextBold}>Balance</Text>
              <Text style={styles.balanceText}>USDT 0.00</Text>
            </View>
          </View>
          <Text style={[styles.endingOnText, {marginTop: 10}]}>
            Ending On: 22 Januari 2023
          </Text>
        </View>
        <View style={{paddingBottom: 30, gap: Theme.spacing.m}}>
          <View style={{gap: Theme.spacing.s}}>
            <LineView text="User" />
            <OptionSelected
              iconComponent={
                <MaterialCommunityIcons name="security" {...leftIcon} />
              }
              label="Change Password"
              handlePress={featureNotReady}
            />
          </View>
          <View style={{gap: Theme.spacing.s}}>
            <LineView text="Notifikasi" />
            <OptionSelected
              label="Telegram Channel"
              iconComponent={
                <FontAwesome5Brands name="telegram-plane" {...leftIcon} />
              }
              handlePress={featureNotReady}
            />
            <OptionSelected
              label="Push Notification"
              handlePress={featureNotReady}
              iconComponent={
                <MaterialCommunityIcons name="bell" {...leftIcon} />
              }
            />
          </View>
          <View style={{gap: Theme.spacing.s}}>
            <LineView text="Other" />
            <OptionSelected
              label="Privacy Policy"
              handlePress={featureNotReady}
              iconComponent={<MaterialIcons name="privacy-tip" {...leftIcon} />}
            />

            <OptionSelected
              label="Version"
              content={'0.0.1'}
              iconComponent={<FontAwesome name="gear" {...leftIcon} />}
            />
            <OptionSelected
              label="Logout"
              handlePress={signOut}
              iconComponent={<Feather name="power" {...leftIcon} />}
            />
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
    <View style={_settingColumn}>
      <Text style={_settingText}>{content}</Text>
      <Feather name="chevron-right" size={20} color={Theme.color.greyLight} />
    </View>
  </TouchableOpacity>
);

const LineView = ({text}) => (
  <View style={styles.lineview}>
    <Text style={styles.lineviewText}>{text}</Text>
  </View>
);

const _settingText = {
  ...GlobalStyle.textSm,
  color: Theme.color.greyLight,
};
const _settingColumn = {
  flexDirection: 'row',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  optionText: {color: Theme.color.white, ...GlobalStyle.textMd},
  optionTextBold: {color: Theme.color.white, ...GlobalStyle.textMdBold},
  balanceText: {color: Theme.color.white, ...GlobalStyle.h3},
  endingOnText: {
    color: Theme.color.white,
    ...GlobalStyle.textSmaller,
    textAlign: 'right',
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  box: {flex: 1},
  container: {
    paddingHorizontal: 25,
    // backgroundColor: Theme.color.mainBackgroundDarker,
    backgroundColor: '#0b1022',
  },
  title: {
    ...GlobalStyle.h1,
    textAlign: 'left',
    color: Theme.color.white,
    marginVertical: Theme.spacing.s,
  },
  lineview: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderColor: Theme.color.grey,
  },
  lineviewText: {
    color: Theme.color.grey,
    paddingBottom: Theme.spacing.s,
    ...GlobalStyle.textSm,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default ProfileScreen;
