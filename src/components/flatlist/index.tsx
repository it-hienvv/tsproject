import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

type Props = {};
const AppFlatList = (props: Props & FlatListProps<any>) => {
    return <FlatList {...props} />;
};

export default AppFlatList;
