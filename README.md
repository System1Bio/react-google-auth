# react-google-auth

Simple higher order component to load google js api, show login and handle sign in and sign out.
The `gapi` object becomes available as a global as per normal Google's Javascript API behaviour.


## Install

`yarn add react-google-auth` or `npm install react-google-auth`

## Example

```js
import React from 'react';
import ReactGoogleAuth from 'react-google-auth';

function Example(props) {
    console.log("gapi exists", gapi);
    return <div>
        <h1>App goes here</h1>
        <button onClick={props.onSignOutClick}>Sign out</button>
    </div>;
}

function Loader(props) {
    return <div>Loading...</div>;
}

function SignIn(props) {
    if(props.initializing) {
        return <div className="Text Text-emphasis">Initializing...</div>;
    }
    if(props.error) {
        console.log('Error', props.error);
        return <div className="Text Text-strong">Error!</div>;
    }
    return <div>
        <button className="Button Button-primary" onClick={props.onSignInClick}>Sign in</button>
        {props.signingIn && <div>Signing in...</div>}
    </div>;
}

export default ReactGoogleAuth({
    clientId: "828692616521-a30cidgltv5cfhg8fbi344i9sqquj138.apps.googleusercontent.com",
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    loader: Loader,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    signIn: SignIn
})(Example);

```

## Demo

[Go here](https://dxinteractive.github.io/react-google-auth/)
