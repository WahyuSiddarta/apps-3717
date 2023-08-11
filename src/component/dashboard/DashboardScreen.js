import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {SafeView} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {Profit, TopLeader, TotalBalance} from './DashboardWidget';

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
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Theme.color.mainBackground}
      />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.title}>Dashboard</Text>
        <View>
          <Text style={styles.subtitle}>Account Information</Text>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <View style={styles.box}>
              <TotalBalance unit={'BTC'} localizePrice={100} />
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 15}}>
            <View style={styles.box}>
              <Profit localizePrice={10} title={'Realized Profit'} />
            </View>
            <View style={styles.box}>
              <Profit localizePrice={-34} title={'Today Profit'} />
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
    paddingHorizontal: 25,
    paddingTop: 15,
    minHeight: '100%',
    backgroundColor: Theme.color.mainBackground,
  },
  title: {
    ...GlobalStyle.h1,
    textAlign: 'center',
    color: Theme.color.white,
    marginVertical: 15,
  },
  subtitle: {
    ...GlobalStyle.h3,
    color: Theme.color.white,
    marginTop: 20,
    marginBottom: 8,
  },
});

export default DashboardScreen;
