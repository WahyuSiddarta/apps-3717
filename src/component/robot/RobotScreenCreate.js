import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

import {Header, RegularInput, SafeView} from '../common';
import {GlobalStyle, Theme} from '../../_data/Styles';
import {useState} from 'react';
import {MyPrimaryButton} from '../common/Button';

const RobotScreenCreate = ({route, navigation}) => {
  const {exchanger_name} = route.params || {};
  const {height} = useWindowDimensions();

  const [validate, setValidate] = useState(false);
  const [form, setForm] = useState({
    name: exchanger_name,
    apiKey: '',
    secretKey: '',
  });
  const handleName = value => {
    setForm({
      ...form,
      name: value,
    });
    validateForm();
  };
  const handleAPI = value => {
    setForm({
      ...form,
      apiKey: value,
    });
    validateForm();
  };
  const handleSecret = value => {
    setForm({
      ...form,
      secretKey: value,
    });
    validateForm();
  };

  const validateForm = () => {
    let validate = true;
    if (form.exchanger_name === '') {
      validate = false;
    } else if (form.apiKey === '') {
      validate = false;
    } else if (form.secretKey === '') {
      validate = false;
    }

    setValidate(validate);
  };

  const codeKey =
    '13.213.132.125 13.215.83.60 18.139.102.94 3.1.7.213 46.137.215.117 52.220.111.151 52.220.117.151 52.220.31.227 52.77.45.93 54.169.15.234';
  const copyKey = param => {
    Clipboard.setString(param);

    Snackbar.show({
      text: param + ' Copied',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <SafeView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#161f44'} />
      <Header
        navigation={navigation}
        headerText={'Connect ' + (!!exchanger_name ? exchanger_name : '')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}>
        <ScrollView style={[styles.container, {height: height - 75}]}>
          <View style={{marginTop: 10}}>
            <Text style={styles.subtitleTitle}>
              Please activate trading authority
            </Text>
            <Text style={styles.subtitle}>
              API is encrypted by AES, and transmitted by asymmetric encryption
              when in use, so there is no need to worry about leakage.
            </Text>
          </View>
          <View style={styles.cardExchanger}>
            <RegularInput
              label="Name"
              value={form?.name}
              onChange={handleName}
            />
            <RegularInput
              label="API Key"
              value={form?.apiKey}
              onChange={handleAPI}
            />
            <RegularInput
              label="Secret Key"
              value={form?.secretKey}
              onChange={handleSecret}
            />
            <View style={{marginTop: Theme.spacing.l}}>
              <MyPrimaryButton
                disabled={!validate}
                text={'Link ' + (!!exchanger_name ? exchanger_name : '')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: Theme.spacing.m}}>
            <View style={{flex: 0.8}}>
              <Text style={styles.keyText}>{codeKey}</Text>
            </View>
            <View style={{flex: 0.2, alignSelf: 'center'}}>
              <TouchableOpacity onPress={() => copyKey(codeKey)}>
                <Text style={styles.copyText}>Copy</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.tipsTitle}>Tips:</Text>
            <Text style={styles.tipsDesc}>
              For account assets security and convenient access to transaction
              data, it is suggest that you re-apply for the API and do not share
              it with other products or services.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: Theme.spacing.l,
    // backgroundColor: Theme.color.navigation,
    backgroundColor: '#0b1022',
  },
  cardExchanger: {
    // backgroundColor: Theme.color.mainBackgroundDarker,
    backgroundColor: '#0b1022',
    paddingHorizontal: Theme.spacing.l,
    paddingVertical: Theme.spacing.s,
    gap: Theme.spacing.s,
    // borderRadius: 10,
  },
  subtitleTitle: {
    ...GlobalStyle.h3Bold,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.s,
    paddingHorizontal: Theme.spacing.l,
    textAlign: 'justify',
  },
  subtitle: {
    ...GlobalStyle.textMd,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
    textAlign: 'justify',
  },
  keyText: {
    ...GlobalStyle.textMd,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
  },
  copyText: {
    ...GlobalStyle.textMdBold,
    color: Theme.color.yellow,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
    textAlign: 'left',
  },
  tipsTitle: {
    ...GlobalStyle.h3Bold,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.s,
    paddingHorizontal: Theme.spacing.l,
  },
  tipsDesc: {
    ...GlobalStyle.textMd,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
  },
});

export default RobotScreenCreate;
