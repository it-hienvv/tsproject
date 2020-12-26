class ManagerModalView {
    refs = null;
    register(_modalView) {
        this.refs = _modalView;
    }

    unRegister() {
        this.refs = null;
    }

    showModalWithJSX({data, backDrop}) {
        if (this.refs) {
            this.refs.showModalWithJSX({data: data, backDrop});
        }
    }

    hiddenModalWithJSX() {
        if (this.refs) {
            this.refs.hiddenModalWithJSX();
        }
    }

    showLoading() {
        if (this.refs) {
            this.refs.showLoading();
        }
    }

    hiddenLoading() {
        if (this.refs) {
            this.refs.hiddenLoading();
        }
    }
}

export default ManagerModalView;
