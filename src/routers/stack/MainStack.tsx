import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'features/home/container';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;
