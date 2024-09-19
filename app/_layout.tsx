import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { store } from '@/store/index.store'
import { Provider as ReduxProvider} from 'react-redux'
import StorybookUIRoot from "@root/storyBook.config";  

// Toggle Storybook
const SHOW_STORYBOOK = false;  // Set to true to view Storybook instead of the app

export default function Layout() {
  if (SHOW_STORYBOOK) {
    return <StorybookUIRoot />;  // Render Storybook UI if flag is true
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Stack screenOptions={{ headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }}} />
      </PaperProvider>
    </ReduxProvider>
  );
}
