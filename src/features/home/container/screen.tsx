import {AppView} from 'components';
import React from 'react';

type Props = {
    children: React.ReactNode;
};
const HomeScreen = (props: Props): React.ReactNode => {
    return (
        <AppView style={{backgroundColor: 'red', flex: 1}}>
            {props.children}
        </AppView>
    );
};

export default HomeScreen;
