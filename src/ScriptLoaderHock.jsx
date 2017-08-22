import React from 'react';
import {Compose} from 'stampy';
import scriptLoader from 'react-async-script-loader';

export default ({scripts, loader: Loader}) => Compose(
    scriptLoader(scripts),
    (Component) => (props) => {
        return props.isScriptLoaded
            ? <Component {...props} />
            : <Loader />;
    }
);
