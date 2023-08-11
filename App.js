import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {
  QueryClient,
  QueryClientProvider,
  onlineManager,
} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {AuthProvider} from './src/_context/AuthContext';
import {GlobalProvider} from './src/_context/GlobalContext';
import Router from './Router';
const queryClient = new QueryClient();

const App = () => {
  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
    });
  });

  useEffect(() => {
    //set transparent config
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <GlobalProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </GlobalProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;
