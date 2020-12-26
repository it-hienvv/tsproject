import React from 'react';
import {Pressable, PressableProps} from 'react-native';
type Props = {};
const AppButton = (props: Props & PressableProps) => {
    return <Pressable {...props} />;
};

export default AppButton;
