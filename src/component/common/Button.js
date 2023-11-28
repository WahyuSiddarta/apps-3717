import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {GlobalStyle, Theme} from '../../_data/Styles';

export const MyPrimaryButton = ({
  handlePress,
  disabled = false,
  loading = false,
  text = '',
  isDarkMode,
  ...rest
}) => (
  <TouchableOpacity
    style={[styles.pButton, !!disabled && styles.disabled]}
    disabled={disabled}
    onPress={handlePress}
    {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#ffffff" />
    ) : (
      <Text style={styles.pButtonText}>{text}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pButtonText: {
    ...GlobalStyle.textMd,
    fontFamily: 'SourceSans3-Regular',
    color: Theme.color.white,
    paddingHorizontal: 15,
  },
  pButton: {
    backgroundColor: Theme.color.primaryColor,
    paddingVertical: 12,
    minHeight: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  disabled: {opacity: 0.5},
});
