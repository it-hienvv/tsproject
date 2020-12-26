import React, {Component} from 'react';
import MainStack from './stack/MainStack';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const Stack = createStackNavigator();

class MainNavigatorScreen extends Component {
    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="MainStack" component={MainStack} />
                </Stack.Navigator>
            </View>
        );
    }
}

export default MainNavigatorScreen;
