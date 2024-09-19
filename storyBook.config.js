import { getStorybookUI, configure } from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';


// Import stories
configure(() => {
  // Include your stories here
  //require('../src/components/buttons/PrimaryButton.story');
  //require('../src/modules/AUTH/users/components/modal/modal.story');
  // Add more stories as needed
}, module);

// Storybook UI options
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null, // Disable AsyncStorage if necessary
});

// Register the app
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
