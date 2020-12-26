import React from 'react';
import {AppView} from '../components';

type Props = {
    children: React.ReactNode | JSX.Element;
};
const RootView = (props: Props): JSX.Element => {
    return <AppView style={{flex: 1}}>{props.children}</AppView>;
};

export default RootView;
