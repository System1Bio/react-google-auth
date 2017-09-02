import React from 'react';
import ScriptLoaderHock from './ScriptLoaderHock';
import AsyncLoaderHock from './AsyncLoaderHock';
import GoogleAuthHock from './GoogleAuthHock';
import Compose from './Compose';
import {
    GetAuthInstance,
    GetCurrentUser,
    GetCurrentAuthResponse
} from './Utils';

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
        AsyncLoaderHock({
            callbackOnMount: (onComplete) => gapi.load('client:auth2', onComplete),
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
    AsyncLoaderHock,
    GoogleAuthHock,
    Compose,
    GetAuthInstance,
    GetCurrentUser,
    GetCurrentAuthResponse
}
