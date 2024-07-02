import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { store } from './src/store/store.ts'
import { Provider } from 'react-redux'

import App from './src/App.tsx';


export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>  
    </Provider>    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
