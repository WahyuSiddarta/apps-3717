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

const {color, spacing} = Theme;
const leftIcon = {
  size: 24,
  color: color.greyLight,
};
const ProfileScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const {signOut} = useContext(AuthContext);

  return (
    <SafeView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.headerColor}
      />
      <Header navigation={navigation} headerText="Profile" />
      <ScrollView style={[GlobalStyle.container, {height: height - 120}]}>
        <View style={{width: '100%'}}>
          <View style={{marginTop: spacing.m, gap: spacing.s}}>
            <Text style={[styles.fontWhite, GlobalStyle.h2, GlobalStyle.bold]}>
              Free Tier
            </Text>
            <View style={{flexDirection: 'row', gap: spacing.m}}>
              <View
                style={[
                  styles.columnCenter,
                  styles.box,
                  styles.widgetContainer,
                ]}>
                <MaterialCommunityIcons
                  name="robot"
                  size={35}
                  color={color.greyLight}
                />
                <Text
                  style={[
                    GlobalStyle.textMd,
                    styles.fontWhite,
                    GlobalStyle.bold,
                  ]}>
                  0 / 1
                </Text>
              </View>
              <View style={[styles.widgetContainer, {flex: 2}]}>
                <Text
                  style={[
                    GlobalStyle.textMd,
                    styles.fontWhite,
                    GlobalStyle.bold,
                  ]}>
                  Balance
                </Text>
                <Text style={[GlobalStyle.h3, styles.fontWhite]}>
                  USDT 0.00
                </Text>
              </View>
            </View>
            <Text style={[styles.endingOnText]}>
              Ending On: 22 Januari 2023
            </Text>
          </View>
        </View>
        <View style={{paddingBottom: 30, gap: spacing.m}}>
          <View style={{gap: spacing.s}}>
            <LineView text="User" />
            <OptionSelected
              iconComponent={
                <MaterialCommunityIcons name="security" {...leftIcon} />
              }
              label="Change Password"
              handlePress={() => navigation.navigate('change_password')}
            />
          </View>
          <View style={{gap: spacing.s}}>
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
          <View style={{gap: spacing.s}}>
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
      <Text style={[GlobalStyle.textMd, styles.fontWhite]}>{label}</Text>
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
  widgetContainer: {
    backgroundColor: color.secondColor,
    borderRadius: spacing.m,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
    gap: spacing.s,
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineview: {
    marginTop: spacing.l,
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
    alignItems: 'center',
    paddingTop: spacing.m,
  },
  fontWhite: {color: color.white},
});

export default ProfileScreen;
