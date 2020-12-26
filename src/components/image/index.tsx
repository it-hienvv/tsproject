import React from 'react';
import {Image, ImageProps} from 'react-native';
type Props = {};
const AppImages = (props: Props & ImageProps) => {
    return (
        <Image
            {...props}
            style={[
                {
                    resizeMode: 'contain',
                },
                props.style,
            ]}
        />
    );
};

export default AppImages;
