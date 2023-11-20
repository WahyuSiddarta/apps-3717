import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SafeView, featureNotReady} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {TopLeader, TotalBalance} from './DashboardWidget';

const {color, spacing} = Theme;
const DashboardScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0b1022'} />
      <ScrollView
        style={[GlobalStyle.container, styles.container]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.rowBetween}>
          <View>
            <Text style={[GlobalStyle.h3, {color: color.white}]}>
              Hi, jhon Doe
            </Text>
            <Text style={[GlobalStyle.textMd, {color: color.grey}]}>
              Welcome back to crypto Apps
            </Text>
          </View>
          <TouchableOpacity onPress={featureNotReady}>
            <MaterialIcons
              name="circle-notifications"
              size={35}
              color={color.white}
              style={{marginTop: spacing.s}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: spacing.l, gap: spacing.s}}>
          <Text style={[GlobalStyle.h3, styles.fontWhite]}>
            Account Information
          </Text>
          <View style={{flexDirection: 'row', marginBottom: spacing.l}}>
            <View style={styles.box}>
              <TotalBalance unit={'BTC'} localizePrice={100} />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TopLeader />
        </View>
        <View style={{height: 25}} />
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  box: {flex: 1},
  container: {
    paddingTop: spacing.l,
    minHeight: '100%',
  },
  fontWhite: {
    color: color.white,
  },
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DashboardScreen;
