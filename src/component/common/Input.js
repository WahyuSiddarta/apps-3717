import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {GlobalStyle, Theme} from '../../_data/Styles';

const {color, spacing} = Theme;
export const RegularInput = ({label, placeholder, value, onChange}) => (
  <View style={styles.formContainer}>
    {!!label && <Text style={styles.formLabel}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={color.grey}
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
        placeholderTextColor={color.grey}
        style={styles.formInput}
        value={value}
        secureTextEntry={secureEye}
        onChangeText={onChange}
      />
      <TouchableOpacity onPress={() => setSecureEye(secureEye => !secureEye)}>
        <Feather
          name={!!secureEye ? 'eye' : 'eye-off'}
          size={23}
          color={color.white}
          style={{position: 'absolute', right: 20, bottom: 12}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {marginTop: spacing.m},
  formLabel: {
    ...GlobalStyle.textSm,
    color: color.white,
    paddingBottom: spacing.s,
  },
  formInput: {
    ...GlobalStyle.textMd,
    borderWidth: 1,
    borderColor: color.primaryColor,
    borderRadius: spacing.m,
    color: color.white,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.l,
  },
});
