/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Splash from './src/components/Splash';
import {Provider} from 'react-redux';
import React from 'react';
import { store } from './src/redux/store/store';

const Main = () => {
    return (
        <Provider store={store}>
            <Splash />
        </Provider>
    )
}

AppRegistry.registerComponent(appName,() => Main);
