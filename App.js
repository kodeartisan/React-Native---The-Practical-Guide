import { Navigation } from 'react-native-navigation';  

import registerScreens from './src/screens/screens';


registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        stack: {
          children: [{
            component: {
              name: 'Auth',
              passProps: {
                text: 'stack with one child'
              }
            }
          }],
          options: {
            topBar: {
              title: {
                text: 'Auth Screen'
              }
            }
          }
        }
    }
  });
});
