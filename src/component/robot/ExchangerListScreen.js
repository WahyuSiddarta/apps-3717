import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {Header, SafeView} from '../common';
import {GlobalStyle, Theme} from '../../_data/Styles';

const {color, spacing} = Theme;
const ExchangerListScreen = ({route, navigation}) => {
  const {method} = route.params || {};
  const {height} = useWindowDimensions();

  const data = [
    'BINANCE',
    'HTBC',
    'HUOBI',
    'OKEXV5',
    'BINANCE_US',
    'COINBASE_PRO',
    'BYBIT_SPOT',
    'KRAKEN',
  ];
  return (
    <SafeView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.headerColor}
      />
      <Header navigation={navigation} headerText="Link Exchanger" />
      <ScrollView style={[GlobalStyle.container, {height: height - 85}]}>
        <View style={styles.textContainer}>
          <Text style={[GlobalStyle.h3, styles.fontWhite, GlobalStyle.bold]}>
            Exchanger List
          </Text>
        </View>
        <View style={styles.cardExchanger}>
          {data.map((d, i) => (
            <OptionSelected
              label={d}
              key={d}
              handlePress={() =>
                navigation.navigate('exchanger_permission', {exchanger_name: d})
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeView>
  );
};

const OptionSelected = ({label, content, handlePress, last = false}) => (
  <View style={{paddingVertical: spacing.s}}>
    <TouchableOpacity style={styles.optionBox} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Text style={[GlobalStyle.textMd, styles.fontWhite]}>{label}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[GlobalStyle.textSm, styles.fontGrey]}>{content}</Text>
        <Feather name="chevron-right" size={20} color={color.greyLight} />
      </View>
    </TouchableOpacity>
    {!last && <View style={styles.lineview} />}
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lineview: {
    borderBottomWidth: 1,
    borderColor: color.white,
    paddingBottom: spacing.s / 2,
  },
  cardExchanger: {
    backgroundColor: color.mainBackground,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.s,
    gap: spacing.s,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {marginVertical: spacing.m, paddingHorizontal: spacing.l},
  fontGrey: {
    color: color.grey,
  },
  fontWhite: {
    color: color.white,
  },
});

export default ExchangerListScreen;
