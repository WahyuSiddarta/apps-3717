import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PieChart from 'react-native-pie-chart';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {localizeNumber} from '../../_helpers/utils';

const {spacing, color} = Theme;
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
            USDT {localizeNumber(localizePrice)}
          </Text>
        </>
      )}
    </View>
  </View>
);

export const TotalBalance = ({unit, localizePrice}) => {
  // const sliceColor = ['#384EAA', '#5b38aa', '#3887aa', '#38aa5b'];
  const sliceColor = ['#e4bc15', '#15e455', '#153de4', '#e415a5'];
  const series = [100, 130, 100, 100];
  const {width} = useWindowDimensions();
  const width_ = ((width - 80) / 2) * 1;
  return (
    <View style={[styles.container, {gap: spacing.m}]}>
      <View style={{gap: spacing.s / 2}}>
        <Text style={[GlobalStyle.h3, {color: Theme.color.grey}]}>
          Total Balance
        </Text>
        <Text style={[GlobalStyle.h3, {color: Theme.color.white}]}>$1,503</Text>
      </View>

      <View style={{gap: spacing.s / 2}}>
        <Text style={[GlobalStyle.textSm, {color: Theme.color.grey}]}>
          Today PNL
        </Text>
        <Text style={[GlobalStyle.textMd, {color: Theme.color.green}]}>
          +$304.3 / 12.2%
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: Theme.color.grey,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 8, gap: Theme.spacing.l}}>
        <PieChart
          widthAndHeight={width_}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
        />
        <View style={{justifyContent: 'center', gap: Theme.spacing.s}}>
          <View style={styles.bulletPointRow}>
            <View
              style={[{backgroundColor: sliceColor[0]}, styles.bulletPointBall]}
            />
            <Text style={{color: Theme.color.white, ...GlobalStyle.textMd}}>
              USDT
            </Text>
          </View>
          <View style={styles.bulletPointRow}>
            <View
              style={[{backgroundColor: sliceColor[1]}, styles.bulletPointBall]}
            />
            <Text style={{color: Theme.color.white, ...GlobalStyle.textMd}}>
              BTC
            </Text>
          </View>
          <View style={styles.bulletPointRow}>
            <View
              style={[{backgroundColor: sliceColor[2]}, styles.bulletPointBall]}
            />
            <Text style={{color: Theme.color.white, ...GlobalStyle.textMd}}>
              USDC
            </Text>
          </View>
          <View style={styles.bulletPointRow}>
            <View
              style={[{backgroundColor: sliceColor[3]}, styles.bulletPointBall]}
            />
            <Text style={{color: Theme.color.white, ...GlobalStyle.textMd}}>
              OTHER
            </Text>
          </View>
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
  const sliceColor = ['#765793', '#89b39f'];
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
        <Text style={styles.topLeaderTitle}>Deals / Bot</Text>
        <Text style={styles.topLeaderContent}>
          {data.deals} / {data.bot}
        </Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={styles.topLeaderTitle}>Pair</Text>
        <Text style={styles.topLeaderContent}>{data.name}</Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={styles.topLeaderTitle}>Exchanger</Text>
        <Text style={styles.topLeaderContent}>{data.exchanger}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  container: {
    // backgroundColor: Theme.color.secondColor,
    backgroundColor: '#1c2755',
    borderRadius: 10,
    padding: Theme.spacing.l,
  },
  title: {
    color: Theme.color.white,
    textTransform: 'capitalize',
    marginBottom: Theme.spacing.s,
    ...GlobalStyle.h3,
  },
  profitContent: {
    minHeight: 40,
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bulletPointRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Theme.spacing.s,
  },
  bulletPointBall: {
    height: 15,
    width: 15,
    borderRadius: 15,
  },
  topLeaderTitle: {
    ...GlobalStyle.textSm,
    color: Theme.color.grey,
  },
  topLeaderContent: {
    ...GlobalStyle.textMd,
    fontWeight: 'bold',
    color: Theme.color.white,
  },
});
