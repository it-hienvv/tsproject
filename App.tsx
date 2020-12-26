/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootView from 'features/RootView';
import MainNavigatorScreen from 'routers/MainNavigator';
import {Provider as ReduxProvider} from 'react-redux';
import {store as reduxStore} from 'store';
const App = (): React.ReactNode => {
    return (
        <ReduxProvider store={reduxStore}>
            <RootView>
                <NavigationContainer>
                    <MainNavigatorScreen />
                </NavigationContainer>
            </RootView>
        </ReduxProvider>
    );
};

export default App;
