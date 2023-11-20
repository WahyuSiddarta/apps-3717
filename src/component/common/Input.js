import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {GlobalStyle, Theme} from '../../_data/Styles';
import {useState} from 'react';

export const RegularInput = ({label, placeholder, value, onChange}) => (
  <View style={styles.formContainer}>
    {!!label && <Text style={styles.formLabel}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Theme.color.grey}
      style={styles.formInput}
      value={value}
      onChangeText={onChange}
    />
  </View>
);

export const PasswordInput = ({label, placeholder, value, onChange}) => {
  const [secureEye, setSecureEye] = useState(true);
  return (
    <View style={styles.formContainer}>
      {!!label && <Text style={styles.formLabel}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Theme.color.grey}
        style={styles.formInput}
        value={value}
        secureTextEntry={secureEye}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={() => setSecureEye(secureEye => !secureEye)}>
        <Feather
          name={!!secureEye ? 'eye' : 'eye-off'}
          size={23}
          color={Theme.color.white}
          style={{position: 'absolute', right: 20, bottom: 12}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {marginTop: Theme.spacing.m},
  formLabel: {
    ...GlobalStyle.textSm,
    color: Theme.color.white,
    paddingBottom: Theme.spacing.s,
    // paddingLeft: 5,
  },
  formInput: {
    borderWidth: 1,
    borderColor: Theme.color.primaryColor,
    borderRadius: 10,
    color: Theme.color.white,
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
