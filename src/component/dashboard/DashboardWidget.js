import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import PieChart from 'react-native-pie-chart';

import {GlobalStyle, Theme} from '../../_data/Styles';

const {spacing, color, fontRobotoBold} = Theme;
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

      <View styl={{gap: spacing.s / 2}}>
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
      <View style={{marginBottom: spacing.s}}>
        <Text style={[styles.fontWhite, GlobalStyle.h3]}>Tops Pair</Text>
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
        <Text style={[GlobalStyle.textSm, styles.fontGrey]}>Deals / Bot</Text>
        <Text style={[styles.fontWhite, GlobalStyle.textMd, fontRobotoBold]}>
          {data.deals} / {data.bot}
        </Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={[GlobalStyle.textSm, styles.fontGrey]}>Pair</Text>
        <Text style={[styles.fontWhite, GlobalStyle.textMd, fontRobotoBold]}>
          {data.name}
        </Text>
      </View>
      <View style={{justifyContent: 'center', flex: 2}}>
        <Text style={[GlobalStyle.textSm, styles.fontGrey]}>Exchanger</Text>
        <Text style={[styles.fontWhite, GlobalStyle.textMd, fontRobotoBold]}>
          {data.exchanger}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontWhite: {
    color: color.white,
  },
  fontGrey: {
    color: color.grey,
  },
  container: {
    backgroundColor: color.mainContainer,
    borderRadius: spacing.s,
    padding: spacing.l,
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
});
