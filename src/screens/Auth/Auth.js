import React, { Component } from 'react';
import { View, Text, Button} from 'react-native'; 

import startMainTabs from '../MainTabs/startMainTabs';
import { goToHome } from '../navigation';

class AuthScreen extends Component {

    loginHandler = () => {
        goToHome();
    }

    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }

}

export default AuthScreen;