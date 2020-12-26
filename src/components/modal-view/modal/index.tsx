import React, {Fragment} from 'react';
import Modal from 'react-native-modal';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

const LoadingComponent = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
};
class AppModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            data: <LoadingComponent />,
            backDrop: false,
        };
    }

    showModalWithJSX({data, backDrop}) {
        this.setState({
            isVisible: true,
            data,
            backDrop,
        });
    }

    hiddenModalWithJSX() {
        if (!this.state.isVisible) return;
        this.setState({
            isVisible: false,
            backDrop: false,
            data: <LoadingComponent />,
        });
    }

    showLoading() {
        this.setState({
            isVisible: true,
            data: <LoadingComponent />,
            backDrop: false,
        });
    }

    hiddenLoading() {
        if (!this.state.isVisible) return;
        this.setState({
            isVisible: false,
            backDrop: false,
            data: null,
        });
    }

    _onBackdropPress = () => {
        const {backDrop} = this.state;
        if (backDrop) {
            if (this.state.isVisible) {
                this.setState({
                    isVisible: false,
                    backDrop: false,
                });
            }
        }
    };

    render() {
        const {isVisible, data} = this.state;
        return (
            <Modal
                onBackdropPress={this._onBackdropPress}
                isVisible={isVisible}
                backdropTransitionOutTiming={0}
                style={styles.modalStyle}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}>
                <Fragment>
                    <StatusBar backgroundColor={'rgba(0,0,0,0.25)'} />
                    <View removeClippedSubviews style={styles.loadingContainer}>
                        {data}
                    </View>
                </Fragment>
            </Modal>
        );
    }
}

export default AppModal;

const styles = StyleSheet.create({
    loadingContainer: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.25)',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
    },
});
