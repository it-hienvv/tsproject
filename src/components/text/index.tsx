import React from 'react';
import {Text, TextProps} from 'react-native';
import Translate from '../../assets/languages';
import {useSelector} from 'react-redux';
type Props = {
    option?: {};
    children: React.ReactNode;
};
const AppText = (props: Props & TextProps) => {
    const {option} = props;
    const state = useSelector((state) => state.assetReducer);
    if (
        typeof props.children === 'string' &&
        Translate.translate({key: props.children, locale: state.language})
    ) {
        return (
            <Text {...props}>
                {Translate.translate({
                    key: props.children,
                    locale: state.language,
                    option,
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
