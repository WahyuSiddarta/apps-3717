import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SafeView, featureNotReady} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {Profit, TopLeader, TotalBalance} from './DashboardWidget';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            <Text style={[GlobalStyle.h3, {color: Theme.color.white}]}>
              Hi, jhon Doe
            </Text>
            <Text style={[GlobalStyle.textMd, {color: Theme.color.grey}]}>
              Welcome back to crypto Apps
            </Text>
          </View>
          <TouchableOpacity onPress={featureNotReady}>
            <MaterialIcons
              name="circle-notifications"
              size={35}
              color={Theme.color.white}
              style={{marginTop: Theme.spacing.s}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Account Information</Text>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
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
    paddingTop: 15,
    minHeight: '100%',
  },
  subtitle: {
    ...GlobalStyle.h3,
    color: Theme.color.white,
    marginTop: 20,
    marginBottom: 8,
  },
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DashboardScreen;
