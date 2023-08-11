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

const RobotScreenCreate = ({route, navigation}) => {
  const {method} = route.params || {};
  const {height} = useWindowDimensions();

  return (
    <SafeView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Theme.color.mainBackground}
      />
      <Header navigation={navigation} headerText="Link Exchanger" />
      <ScrollView style={[styles.container, {height: height - 145}]}>
        <View style={styles.cardExchanger}>
          <Text
            style={{
              color: 'white',
            }}>
            Connect your existing exchange account and setup your first traiding
            bots
          </Text>
          <LineView text="Exchanger" />
          <OptionSelected label="Logout" handlePress={() => console.log('')} />
        </View>
      </ScrollView>
    </SafeView>
  );
};
const LineView = ({text}) => (
  <View style={styles.lineview}>
    <Text style={styles.lineviewText}>{text}</Text>
  </View>
);
const OptionSelected = ({label, content, handlePress}) => (
  <TouchableOpacity style={styles.optionBox} onPress={handlePress}>
    <View style={styles.iconContainer}>
      <Text style={styles.optionText}>{label}</Text>
    </View>
    <View style={_settingColumn}>
      <Text style={_settingText}>{content}</Text>
      <Feather name="chevron-right" size={20} color={Theme.color.greyLight} />
    </View>
  </TouchableOpacity>
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
    marginTop: 20,
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderColor: Theme.color.white,
  },
  lineviewText: {
    color: Theme.color.white,
    paddingBottom: 8,
    ...GlobalStyle.textSm,
  },
  container: {
    padding: 15,
    backgroundColor: Theme.color.primaryColor,
  },
  cardExchanger: {
    // backgroundColor: Theme.color.primaryColor,
    width: '100%',
    padding: 10,
    borderRadius: 10,
  },
  optionBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default RobotScreenCreate;
