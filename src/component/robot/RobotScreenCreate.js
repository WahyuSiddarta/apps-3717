import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

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
  return (
    <SafeView>
      <StatusBar barStyle={'light-content'} />
      <Header
        navigation={navigation}
        headerText={'Connect ' + (!!exchanger_name ? exchanger_name : '')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}>
        <ScrollView style={[styles.container, {height: height - 75}]}>
          <Text style={styles.subtitle}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{' '}
          </Text>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
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
  subtitle: {
    ...GlobalStyle.textMd,
    color: Theme.color.grey,
    marginBottom: Theme.spacing.m,
    paddingHorizontal: Theme.spacing.l,
    textAlign: 'justify',
  },
});

export default RobotScreenCreate;
