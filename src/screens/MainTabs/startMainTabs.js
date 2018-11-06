import { Navigation } from 'react-native-navigation'; 

const startTabs = () => { 

    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'awesome-places.FindPlaceScreen',
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    title: 'Tab 1',
                    testID: 'FIRST_TAB_BAR_BUTTON'
                  }
                }
              }
            }]
          }
        }
      });
};

export default startTabs;

