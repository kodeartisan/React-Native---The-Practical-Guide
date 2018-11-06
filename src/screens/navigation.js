
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const goToHome = () => {

    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                        {
                            component: {
                                name: 'FindPlace',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: "Find Place",
                                        icon: sources[0]
                                    }
                                }
                            }
                        },
                        {
                            component: {
                                name: 'SharePlace',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: "Share Place",
                                        icon: sources[1]
                                    },
                                    topBar: {
                                        title: {
                                          text: 'Share Place'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        });
    });

    
};

export const goToLogin = () => Navigation.setRoot({
    
});