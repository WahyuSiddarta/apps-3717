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
import {useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

import {Header, RegularInput, SafeView} from '../common';
import {GlobalStyle, Theme} from '../../_data/Styles';
import {MyPrimaryButton} from '../common/Button';

const {spacing, color} = Theme;
const ExchangerPermissionScreen = ({route, navigation}) => {
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
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.headerColor}
      />
      <Header
        navigation={navigation}
        headerText={'Connect ' + (!!exchanger_name ? exchanger_name : '')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}>
        <ScrollView
          style={[
            GlobalStyle.container,
            {height: height - 75, paddingHorizontal: spacing.l},
          ]}>
          <View style={styles.titleContainer}>
            <Text style={[GlobalStyle.h3, GlobalStyle.bold, styles.fontWhite]}>
              Please activate trading authority
            </Text>
            <Text style={[GlobalStyle.textMd, styles.fontGrey]}>
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
            <View style={{marginTop: spacing.l}}>
              <MyPrimaryButton
                disabled={!validate}
                text={'Link ' + (!!exchanger_name ? exchanger_name : '')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: spacing.m,
              gap: spacing.s,
            }}>
            <View style={{flexGrow: 1}}>
              <Text style={[GlobalStyle.textMd, styles.fontGrey]}>
                {codeKey}
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <TouchableOpacity onPress={() => copyKey(codeKey)}>
                <Text
                  style={[
                    GlobalStyle.textMd,
                    GlobalStyle.bold,
                    styles.fontYellow,
                  ]}>
                  Copy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{gap: spacing.s}}>
            <Text style={[GlobalStyle.h3, GlobalStyle.bold, styles.fontWhite]}>
              Tips:
            </Text>
            <Text style={[GlobalStyle.textMd, styles.fontGrey]}>
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
  cardExchanger: {
    paddingVertical: spacing.s,
    gap: spacing.s,
  },
  titleContainer: {
    marginTop: spacing.xl,
    gap: spacing.s,
  },
  fontWhite: {
    color: color.white,
  },
  fontGrey: {
    color: color.grey,
  },
  fontYellow: {
    color: color.yellow,
  },
});

export default ExchangerPermissionScreen;
