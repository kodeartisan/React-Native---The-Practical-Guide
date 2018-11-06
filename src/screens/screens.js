import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import AuthScreen from './Auth/Auth';
import FindPlaceScreen from './FindPlace/FindPlace';
import SharePlaceScreen from './SharePlace/SharePlace';
import SideDrawer from './SideDrawer/SideDrawer';

export default function registerScreens() {
    
    const store = configureStore();

    Navigation.registerComponentWithRedux('SideDrawer', () => SideDrawer, Provider, store);
    Navigation.registerComponentWithRedux('Auth', () => AuthScreen, Provider, store);
    Navigation.registerComponentWithRedux('FindPlace', () => FindPlaceScreen, Provider, store);
    Navigation.registerComponentWithRedux('SharePlace', () => SharePlaceScreen, Provider, store);
}