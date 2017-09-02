import React from 'react';

const AsyncLoaderExport = ({callbackOnMount, promiseOnMount, loader: Loader}) => (Component) => {
    return class AsyncLoaderHock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isDone: false
            };
        }

        componentDidMount() {
            const handleDone = () => {
                this.setState({
                    isDone: true
                });
            };

            callbackOnMount && callbackOnMount(handleDone);
            promiseOnMount && promiseOnMount().then(() => handleDone);
        }

        render() {
            return this.state.isDone
                ? <Component {...this.props} />
                : <Loader />;
        }
    }
}

export default AsyncLoaderExport;
