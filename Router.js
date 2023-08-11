import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {navigationRef} from './RootNavigation';
import {_getData} from './src/_helpers/localStorage';
import {AuthContext} from './src/_context/AuthContext';

import {GlobalStyle, Theme} from './src/_data/Styles';
import LoginScreen from './src/component/Auth/LoginScreen';
import AuthScreen from './src/component/Auth/AuthScreen';
import RegisterScreen from './src/component/Auth/RegisterScreen';
import DashboardScreen from './src/component/dashboard/DashboardScreen';
import Development from './src/component/development/Development';
import ProfileScreen from './src/component/user/ProfileScreen';
import RobotScreen from './src/component/robot/RobotScreen';
import RobotScreenCreate from './src/component/robot/RobotScreenCreate';
import RegisterTest from './src/component/Auth/RegisterTest';

const Tab = createBottomTabNavigator();
const _initLogin = async signIn => {
  try {
    let user = await _getData('user');
    user = JSON.parse(user);
    if (!!user?.user_id) {
      signIn(user?.user_id);
    }
  } catch (error) {
    console.log('error ', error);
  }
};

const configTab = ({
  title,
  isHidden = false,
  animation = 'slide_from_right',
}) => {
  let tabConfiguration = {
    title,
    tabBarIcon: ({tintColor, focused, item}) => {
      switch (title) {
        case 'Dashboard':
          return (
            <Feather
              name={'home'}
              size={23}
              color={focused ? '#3658d7' : Theme.color.grey}
            />
          );
        case 'Bot':
          return (
            <MaterialCommunityIcons
              name="robot"
              size={23}
              color={focused ? '#3658d7' : Theme.color.grey}
            />
          );
        case 'Market':
          return (
            <Feather
              name={'home'}
              size={23}
              color={focused ? '#3658d7' : Theme.color.grey}
            />
          );
        case 'Setting':
          return (
            <Feather
              name={'user'}
              size={23}
              color={focused ? '#3658d7' : Theme.color.grey}
            />
          );
        default:
          return (
            <Feather
              name={'home'}
              size={23}
              color={focused ? '#3658d7' : Theme.color.grey}
            />
          );
      }
    },
    tabBarLabel: ({focused}) => {
      return (
        <Text
          style={[
            GlobalStyle.textSm,
            {color: focused ? '#3658d7' : Theme.color.grey},
          ]}>
          {title}
        </Text>
      );
    },
    headerShown: false,
    animation: animation,
    tabBarLabelStyle: {
      fontSize: 10,
      marginTop: 5,
      textAlign: 'center',
    },
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      height: 65,
      display: isHidden ? 'none' : 'flex',
      backgroundColor: Theme.color.mainBackground,
    },
  };
  return tabConfiguration;
};

const Router = () => {
  const {isAuth, signIn} = useContext(AuthContext);

  useEffect(() => {
    _initLogin(signIn);
  }, []);

  const routeNameRef = React.useRef();
  const Stack = createNativeStackNavigator();

  const logScreenChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      // await analytics().logScreenView({
      //   screen_name: currentRouteName,
      //   screen_class: currentRouteName,
      // });
    }
    routeNameRef.current = currentRouteName;
  };

  const ScreenTabs = () => {
    return (
      <Tab.Navigator initialRouteName={'home'} backBehavior={'initialRoute'}>
        <Tab.Screen
          name="dashboard"
          component={DashboardScreen}
          options={configTab({title: 'Dashboard'})}
        />
        <Tab.Screen
          name="bot"
          component={RobotScreen}
          options={configTab({title: 'Bot'})}
        />
        <Tab.Screen
          name="market"
          component={Development}
          options={configTab({title: 'Market'})}
        />
        <Tab.Screen
          name="setting"
          component={ProfileScreen}
          options={configTab({title: 'Setting'})}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      theme={DarkTheme}
      onStateChange={logScreenChange}>
      <Stack.Navigator initialRouteName="auth_screen">
        <Stack.Screen
          name="main"
          component={isAuth ? ScreenTabs : Development}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="auth_screen"
          component={AuthScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="login_screen"
          component={LoginScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="register_screen"
          component={RegisterScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="create_robot"
          component={RobotScreenCreate}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
