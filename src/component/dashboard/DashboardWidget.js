import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PieChart from 'react-native-pie-chart';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {localizeNumber} from '../../_helpers/utils';

export const Profit = ({title, localizePrice, isLoading = false}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.profitContent}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={Theme.color.primaryColor} />
        </View>
      ) : (
        <>
          <Feather
            name={localizePrice > 0 ? 'trending-up' : 'trending-down'}
            size={23}
            style={{
              paddingRight: 10,
            }}
            color={localizePrice > 0 ? Theme.color.green : Theme.color.red}
          />
          <Text
            style={[
              GlobalStyle.h3,
              {
                color: localizePrice > 0 ? Theme.color.green : Theme.color.red,
              },
            ]}>
            $ {localizeNumber(localizePrice)}
          </Text>
        </>
      )}
    </View>
  </View>
);

export const TotalBalance = ({unit, localizePrice}) => {
  return (
    <View
      style={[
        styles.container,
        {
          minHeight: 40,
          backgroundColor: Theme.color.primaryColor,
        },
      ]}>
      <Text style={[styles.title, {color: Theme.color.white}]}>
        Total Balance
      </Text>
      <View style={{flexDirection: 'column', marginTop: 8}}>
        <View style={styles.totalBalanceRow}>
          <Text style={[GlobalStyle.h3]}>{localizeNumber(localizePrice)}</Text>
          <Text style={[GlobalStyle.h3]}>{unit}</Text>
        </View>
        <View style={styles.totalBalanceRow}>
          <Text style={[GlobalStyle.h3]}>{localizeNumber(localizePrice)}</Text>
          <Text style={[GlobalStyle.h3]}>{unit}</Text>
        </View>
      </View>
    </View>
  );
};
export const TopLeader = ({}) => {
  const data = [
    {name: 'USDT-LUNC', deals: 84, bot: 4, exchanger: 'BINANCE'},
    {name: 'BTC-XRP', deals: 4, bot: 2, exchanger: 'HITBTC'},
    {name: 'BTC-XRP', deals: 4, bot: 1, exchanger: 'HUOBI'},
    {name: 'USDT-ETH', deals: 3, bot: 3, exchanger: 'OKEXv5'},
  ];
  return (
    <View>
      <View>
        <Text style={[styles.title, {color: Theme.color.white}]}>
          Tops Pair
        </Text>
      </View>
      {data?.map((d, index) => (
        <TopLeaderRow data={d} key={index} />
      ))}
    </View>
  );
};

const TopLeaderRow = ({data}) => {
  const active = ((data.deals - data.bot) / data.deals) * 100;
  const series = [active, 100 - active];
  const sliceColor = [Theme.color.green, Theme.color.orange];
  return (
    <View style={[styles.container, {flexDirection: 'row', marginTop: 8}]}>
      <View style={{justifyContent: 'center', flex: 1, marginRight: 8}}>
        <PieChart
          widthAndHeight={40}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'transparent'}
        />
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={{color: Theme.color.grey}}>Deals / Bot</Text>
        <Text style={{color: 'white'}}>
          {data.deals} / {data.bot}
        </Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={{color: Theme.color.grey}}>Pair</Text>
        <Text style={{color: 'white'}}>{data.name}</Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={{color: Theme.color.grey}}>Exchanger</Text>
        <Text style={{color: 'white'}}>{data.exchanger}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalBalanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  container: {
    backgroundColor: Theme.color.primaryColor,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: Theme.color.grey,
    textTransform: 'capitalize',
    ...GlobalStyle.h3,
  },
  profitContent: {
    minHeight: 40,
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
