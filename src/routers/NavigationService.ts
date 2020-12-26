import * as React from 'react';
import {
    CommonActions,
    StackActions,
    NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = React.createRef();

class NavigationService {
    navigationRef: NavigationContainerRef;

    setTopRef(_ref: NavigationContainerRef) {
        this.navigationRef = _ref;
    }

    navigate(name: string, params?: {}): void {
        this.navigationRef.navigate(name, params);
    }

    replace(name: string, params?: {}) {
        this.navigationRef.dispatch(StackActions.replace(name, params));
    }

    pop() {
        this.navigationRef.dispatch(CommonActions.goBack());
    }
}

export default new NavigationService();
