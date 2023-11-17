import {
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
  View,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {useRef, useEffect, useState, useCallback, useMemo} from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SafeView} from '../common';
import {GlobalStyle, Theme} from '../../_data/Styles';
import {MyPrimaryButton} from '../common/Button';
import {useIsFold} from '../../_hooks';
// import CreateRobot from './CreateRobot';

const RobotScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  // ref
  const bottomSheetModalRef = useRef(null);

  const renderBackdrop = useCallback(
    props => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    [],
  );
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SafeView>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0b1022'} />
      <View style={{backgroundColor: '#0b1022'}}>
        <BottomSheetModalProvider>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <EmptyRobot onSubmit={handlePresentModalPress} />
          </ScrollView>
          <BottomSheetModal
            enablePanDownToClose
            ref={bottomSheetModalRef}
            handleComponent={null}
            snapPoints={[150]}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}>
            <View style={styles.contentContainer}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: 15,
                  ...GlobalStyle.h3Bold,
                }}>
                Traiding Strategy
              </Text>
              <View style={{flexDirection: 'row', gap: 15}}>
                <TouchableOpacity
                  style={styles.robotType}
                  onPress={() =>
                    navigation.push('exchanger_list', {method: 'DCA'})
                  }>
                  <Foundation
                    name="dollar-bill"
                    size={35}
                    color={Theme.color.greyLight}
                  />
                  <Text style={{color: 'white', ...GlobalStyle.textMd}}>
                    DCA
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.robotType}
                  onPress={() =>
                    navigation.push('exchanger_list', {method: 'Futures'})
                  }>
                  <MaterialCommunityIcons
                    name="finance"
                    size={35}
                    style={{flex: 1}}
                    color={Theme.color.greyLight}
                  />
                  <Text style={{color: 'white', ...GlobalStyle.textMd}}>
                    Futures
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.robotType}
                  onPress={() =>
                    navigation.push('exchanger_list', {method: 'GRID'})
                  }>
                  <Ionicons
                    name="md-stats-chart"
                    size={35}
                    color={Theme.color.greyLight}
                  />
                  <Text style={{color: 'white', ...GlobalStyle.textMd}}>
                    Grid
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </SafeView>
  );
};

const EmptyRobot = ({onSubmit}) => {
  const {height} = useWindowDimensions();
  const {isFold} = useIsFold();
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <View style={[styles.botContainer, {height: height + 30}]}>
      <Lottie
        ref={animationRef}
        style={{marginTop: -100}}
        source={require('../../../assets/lottie/robot-error.json')}
      />
      <Text style={[styles.title, {marginTop: isFold ? 600 : 300}]}>
        You don't have any bots
      </Text>
      <Text style={[styles.subtitle]}>Start by creating new bots</Text>
      <View style={{marginTop: 20}}>
        <MyPrimaryButton text={'Start Journey Now!'} handlePress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -120,
  },
  title: {
    ...GlobalStyle.h1,
    textAlign: 'center',
    color: Theme.color.white,
  },
  subtitle: {
    ...GlobalStyle.h3,
    color: Theme.color.white,
    marginBottom: 8,
  },
  handleComponent: {backgroundColor: Theme.color.secondColor},
  contentContainer: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 15,
    flex: 1,
    backgroundColor: Theme.color.secondColor,
  },
  robotType: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Theme.color.primaryColor,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
});

export default RobotScreen;
