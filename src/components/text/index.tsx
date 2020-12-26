import React from 'react';
import {Text, TextProps} from 'react-native';
import Translate from '../../assets/languages';
import {useSelector} from 'react-redux';
import {RootReducerType} from 'actions';
type Props = {
    option?: {};
    children: React.ReactNode | string;
};
const AppText = (props: Props & TextProps) => {
    const {option = {}} = props;
    const state = useSelector((state: RootReducerType) => state.assetReducer);
    if (
        typeof props.children === 'string' &&
        Translate.translate({key: props.children, locale: state.lang})
    ) {
        return (
            <Text {...props}>
                {Translate.translate({
                    key: props.children,
                    locale: state.lang,
                    option: option,
                })}
            </Text>
        );
    }
    return (
        <Text {...props} style={[]}>
            {props.children}
        </Text>
    );
};

export default AppText;
