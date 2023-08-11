import {StyleSheet, Text, View} from 'react-native';
import {SafeView} from '../common';
import {MyPrimaryButton} from '../common/Button';
import {useContext} from 'react';
import {AuthContext} from '../../_context/AuthContext';

const Development = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  return (
    <SafeView>
      <View>
        <Text style={{color: 'white', fontSize: 30}}>Hello</Text>
        <MyPrimaryButton text="LOGOUT" handlePress={signOut} />
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({});

export default Development;
