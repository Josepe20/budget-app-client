import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { store } from '../src/store/store.ts'
import { Provider as ReduxProvider} from 'react-redux'

export default function Layout() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Stack screenOptions={{ headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }}} />
      </PaperProvider>
    </ReduxProvider>
  );
}
