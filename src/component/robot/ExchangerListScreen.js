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
        backgroundColor={Theme.color.mainBackgroundDarker}
      />
      <Header navigation={navigation} headerText="Link Exchanger" />
      <ScrollView style={[styles.container, {height: height - 145}]}>
        <Text style={styles.subtitle}>Exchanger List</Text>
        <View style={styles.cardExchanger}>
          {data.map((d, i) => (
            <OptionSelected
              label={d}
              key={d}
              handlePress={() =>
                navigation.navigate('create_robot', {exchanger_name: d})
              }
              last={i + 1 === data.length}
            />
          ))}
        </View>
      </ScrollView>
    </SafeView>
  );
};

const OptionSelected = ({label, content, handlePress, last = false}) => (
  <View style={{paddingTop: Theme.spacing.s, paddingBottom: Theme.spacing.s}}>
    <TouchableOpacity style={styles.optionBox} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
      <View style={_settingColumn}>
        <Text style={_settingText}>{content}</Text>
        <Feather name="chevron-right" size={20} color={Theme.color.greyLight} />
      </View>
    </TouchableOpacity>
    {!last && <View style={styles.lineview} />}
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
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  lineview: {
    borderBottomWidth: 1,
    borderColor: Theme.color.white,
    paddingBottom: Theme.spacing.s,
    paddingTop: 4,
  },

  container: {
    // paddingHorizontal: Theme.spacing.l,
    backgroundColor: Theme.color.navigation,
  },
  cardExchanger: {
    backgroundColor: Theme.color.mainBackgroundDarker,
    paddingHorizontal: Theme.spacing.l,
    paddingVertical: Theme.spacing.s,
    gap: Theme.spacing.s,
    // borderRadius: 10,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subtitle: {
    ...GlobalStyle.h3,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
  },
  headerTitle: {
    ...GlobalStyle.h3,
    color: Theme.color.primaryColor,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
  },
});

export default ExchangerListScreen;
