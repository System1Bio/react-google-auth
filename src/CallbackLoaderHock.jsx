import React from 'react';

const CallbackLoaderExport = ({load, loader: Loader}) => (Component) => {
    return class CallbackLoaderHock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoaded: false
            };
        }

        componentDidMount() {
            load(() => {
                this.setState({
                    isLoaded: true
                });
            });
        }

        render() {
            return this.state.isLoaded
                ? <Component {...this.props} />
                : <Loader />;
        }
    }
}

export default CallbackLoaderExport;
