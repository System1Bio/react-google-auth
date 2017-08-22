# react-google-auth

Simple higher order component to load google js api, show login and handle sign in and sign out.


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
        return <div>Initializing...</div>;
    }
    return <div>
        <button onClick={props.onSignInClick}>Sign in</button>
        {props.error && <p className="Text Text-failure">{props.error}</p>}
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
