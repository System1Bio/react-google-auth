import React from 'react';
import ScriptLoaderHock from './ScriptLoaderHock';
import CallbackLoaderHock from './CallbackLoaderHock';
import GoogleAuthHock from './GoogleAuthHock';
import Compose from './Compose';

export default (config) => {
    const {
        clientId,
        discoveryDocs,
        loader = () => <div>Loading</div>,
        scope,
        signIn = ({onSignInClick}) => <button onClick={onSignInClick}>Sign in</button>
    } = config;

    return Compose(
        ScriptLoaderHock({
            scripts: ['https://apis.google.com/js/api.js'],
            loader
        }),
        CallbackLoaderHock({
            load: (callback) => gapi.load('client:auth2', callback),
            loader
        }),
        GoogleAuthHock({
            clientId,
            discoveryDocs,
            scope,
            signIn
        })
    );
}

export {
    ScriptLoaderHock,
    CallbackLoaderHock,
    GoogleAuthHock
}
