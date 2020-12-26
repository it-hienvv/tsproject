import React from 'react';
import {View, ViewProps} from 'react-native';
import {useSelector} from 'react-redux';

type Props = {
    children: React.ReactNode;
};
const AppView = (props: Props & ViewProps) => {
    return <View {...props} />;
};

export default AppView;
