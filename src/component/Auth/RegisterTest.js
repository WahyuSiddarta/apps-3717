import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Theme} from '../../_data/Styles';
import {
  Header,
  PasswordInput,
  RegularInput,
  SafeView,
  featureNotReady,
} from '../common';
import {Svg, Path} from 'react-native-svg';
import {useContext, useState} from 'react';
import {MyPrimaryButton} from '../common/Button';
import {AuthContext} from '../../_context/AuthContext';
import {isEmpty} from '../../_helpers/utils';
import {BlurView} from '@react-native-community/blur';

const RegisterTest = ({navigation}) => {
  const {user} = useContext(AuthContext);
  if (!isEmpty(user)) {
    navigation.navigate('main');
  }
  const {width} = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Header navigation={navigation} headerText="Register" />
      </ScrollView>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Theme.color.cbackground,
  },
  absolute: {
    position: 'absolute',
    borderRadius: 25,
    top: 50,
    bottom: 0,
    height: 400,
  },
});

export default RegisterTest;
