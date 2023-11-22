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
import {useRef, useEffect, useState, useCallback} from 'react';
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

const {color, spacing} = Theme;
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
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.headerColor}
      />
      <View style={{backgroundColor: color.mainBackground}}>
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
            snapPoints={[180]}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}>
            <View style={styles.contentContainer}>
              <Text
                style={[
                  styles.fontWhite,
                  GlobalStyle.h3,
                  GlobalStyle.bold,
                  {textAlign: 'center'},
                ]}>
                Traiding Strategy
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: spacing.m,
                  marginBottom: spacing.m,
                }}>
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
                  <Text style={[styles.fontWhite, GlobalStyle.textMd]}>
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
                  <Text style={[styles.fontWhite, GlobalStyle.textMd]}>
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
                  <Text style={[styles.fontWhite, GlobalStyle.textMd]}>
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
    <View style={[styles.botContainer, {height: height + 55, marginTop: -120}]}>
      <Lottie
        ref={animationRef}
        style={{marginTop: -100}}
        source={require('../../../assets/lottie/robot-error.json')}
      />
      <View
        style={[
          styles.botContainer,
          {marginTop: isFold ? 600 : 300, gap: spacing.s},
        ]}>
        <Text style={[styles.fontWhite, GlobalStyle.h1]}>
          You don't have any bots
        </Text>
        <Text style={[styles.fontWhite, GlobalStyle.h3]}>
          Start by creating new bots
        </Text>
        <View style={{marginTop: spacing.l}}>
          <MyPrimaryButton text={'Start Journey Now!'} handlePress={onSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontWhite: {color: color.white},
  handleComponent: {backgroundColor: Theme.color.secondColor},
  contentContainer: {
    borderTopRightRadius: 15, // static 15
    borderTopLeftRadius: 15, // static 15
    padding: spacing.l,
    gap: spacing.l,
    backgroundColor: color.secondColor,
    height: 180,
  },
  robotType: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: color.primaryColor,
    borderRadius: spacing.m,
    padding: spacing.m,
    flex: 1,
  },
});

export default RobotScreen;
