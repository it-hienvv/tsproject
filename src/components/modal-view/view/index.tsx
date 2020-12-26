import React from 'react';
import {BackHandler, View, Pressable} from 'react-native';

export default class AppModalView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            data: null,
            backDrop: false,
        };
        this.backHandler = null;
    }

    _handleBackBtn = () => {
        return true;
    };

    showModalWithJSX({data, backDrop}) {
        if (this.backHandler) {
            this.backHandler.remove();
            this.backHandler = null;
        }
        this.backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            this._handleBackBtn,
        );
        this.setState({
            isVisible: true,
            data,
            backDrop,
        });
    }

    hiddenModalWithJSX() {
        if (this.backHandler) {
            this.backHandler.remove();
            this.backHandler = null;
        }
        if (this.state.isVisible) {
            const data = null;
            this.setState({
                isVisible: false,
                backDrop: false,
                data,
            });
        }
    }

    _onBackdropPress = () => {
        const {backDrop, isVisible} = this.state;
        if (!backDrop) {
            return;
        }
        if (backDrop) {
            if (!isVisible) {
                return;
            }
            if (this.state.isVisible) {
                this.setState({
                    isVisible: false,
                    backDrop: false,
                });
            }
        }
    };

    render() {
        if (!this.state.isVisible) return <View />;
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 0,
                    margin: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}>
                <Pressable
                    style={{width: '100%', height: '100%'}}
                    onPress={this._onBackdropPress}
                    activeOpacity={1}>
                    <View
                        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}
                    />
                </Pressable>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}>
                    {this.state.data}
                </View>
            </View>
        );
    }
}
