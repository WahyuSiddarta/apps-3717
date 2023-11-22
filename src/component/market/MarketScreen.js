import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {LineChart} from 'react-native-gifted-charts';

import {Header, SafeView} from '../common';
import {Theme} from '../../_data/Styles';
import {GlobalStyle} from '../../_data/Styles';
import {AuthContext} from '../../_context/AuthContext';

const {color, spacing} = Theme;

const RandomChart = ({i}) => {
  if (i == 0) {
    return (
      <LineChart
        initialSpacing={0}
        data={[{value: 0}, {value: 40}, {value: 18}, {value: 36}, {value: 80}]}
        height={30}
        spacing={10}
        hideDataPoints
        thickness={3}
        hideRules
        hideYAxisText
        yAxisColor="transparent"
        showVerticalLines
        verticalLinesColor="transparent"
        xAxisColor="transparent"
        color={color.green}
        curved
      />
    );
  } else if (i == 1) {
    return (
      <LineChart
        initialSpacing={0}
        data={[
          {value: 0},
          {value: 20},
          {value: 18},
          {value: 36},
          {value: 60},
          {value: 0},
          {value: 20},
          {value: 18},
          {value: 36},
          {value: 60},
          {value: 0},
          {value: 20},
          {value: 18},
          {value: 36},
          {value: 60},
        ]}
        height={30}
        spacing={5}
        hideDataPoints
        thickness={3}
        hideRules
        hideYAxisText
        yAxisColor="transparent"
        showVerticalLines
        verticalLinesColor="transparent"
        xAxisColor="transparent"
        color={color.green}
        curved
      />
    );
  } else {
    return (
      <LineChart
        initialSpacing={0}
        data={[{value: 0}, {value: 40}, {value: 18}, {value: 36}, {value: 80}]}
        height={30}
        spacing={10}
        hideDataPoints
        thickness={3}
        hideRules
        hideYAxisText
        yAxisColor="transparent"
        showVerticalLines
        verticalLinesColor="transparent"
        xAxisColor="transparent"
        color={color.green}
        curved
      />
    );
  }
};
const BotList = ({data}) => {
  return (
    <View style={styles.widgetContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexGrow: 1}}>
          <Text style={[styles.fontWhite, GlobalStyle.h3, GlobalStyle.bold]}>
            XRP-USDT
          </Text>
          <Text style={[styles.fontGrey, GlobalStyle.textMd]}>
            Binance Futures
          </Text>
        </View>
        <View style={styles.copyButton}>
          <Text style={[styles.fontWhite, GlobalStyle.textSm]}>Copy</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: spacing.m}}>
        <View style={{flex: 0.3}}>
          <View>
            <Text
              style={[styles.fontGreen, GlobalStyle.textMd, GlobalStyle.bold]}>
              +622.18%
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={[styles.fontWhite, GlobalStyle.textSmaller]}>
              30D ROI
            </Text>
          </View>
        </View>
        <View style={{flex: 0.2}}>
          <RandomChart i={data} />
        </View>
        <View style={{flex: 0.3}}>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={[
                  GlobalStyle.textMd,
                  GlobalStyle.bold,
                  styles.fontWhite,
                ]}>
                3514
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={[styles.fontWhite, GlobalStyle.textSmaller]}>
                Copier
              </Text>
            </View>
          </View>
        </View>

        <View style={{flex: 0.2}}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={[
                styles.riskBadge,
                data == 0 ? styles.riskMedium : styles.riskMax,
              ]}>
              <Text
                style={[
                  GlobalStyle.textMd,
                  GlobalStyle.bold,
                  styles.fontWhite,
                ]}>
                5
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={[styles.fontWhite, GlobalStyle.textSmaller]}>
                Risk
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const MarketScreen = ({navigation}) => {
  const {height} = useWindowDimensions();

  return (
    <SafeView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.headerColor}
      />
      <Header navigation={navigation} headerText="Market" />
      <ScrollView style={[GlobalStyle.container, {height: height - 120}]}>
        <View style={{width: '100%'}}>
          <View style={{paddingVertical: spacing.l}}>
            <Text style={[GlobalStyle.h3, GlobalStyle.bold, styles.fontWhite]}>
              Trending Traders
            </Text>
            <Text style={[GlobalStyle.textMd, styles.fontGrey]}>
              Trending traders in the last 7-days
            </Text>
          </View>
          <View style={{gap: spacing.l, marginBottom: spacing.xl}}>
            <BotList data={0} />
            <BotList data={1} />
            <BotList data={2} />
            <BotList data={1} />
            <BotList data={0} />
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  optionText: {color: Theme.color.white, ...GlobalStyle.textMd},

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
  title: {
    ...GlobalStyle.h1,
    textAlign: 'left',
    color: Theme.color.white,
    marginVertical: Theme.spacing.s,
  },
  lineview: {
    marginTop: 20,
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderColor: Theme.color.grey,
  },
  lineviewText: {
    color: Theme.color.grey,
    paddingBottom: 8,
    ...GlobalStyle.textSm,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
  fontWhite: {color: color.white},
  fontGreen: {color: color.green},
  fontGrey: {color: color.grey},
  cardContainer: {flexDirection: 'row', gap: spacing.m, marginTop: spacing.l},
  widgetContainer: {
    backgroundColor: color.secondColor,
    borderRadius: spacing.m,
    paddingTop: spacing.m,
    paddingHorizontal: spacing.l,
    gap: spacing.m,
  },
  copyButton: {
    backgroundColor: color.primaryColor,
    borderRadius: spacing.m,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    width: 80,
    height: 30,
    alignItems: 'center',
  },
  riskBadge: {
    borderRadius: spacing.s / 2,
    width: 20,
    alignItems: 'center',
  },
  riskMedium: {
    backgroundColor: color.riskMedium,
  },
  riskMax: {
    backgroundColor: color.riskMax,
  },
});

export default MarketScreen;
