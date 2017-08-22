// @flow
// Code from redux: https://github.com/reactjs/redux/blob/master/LICENSE.md

export default function Compose(...funcs: Array<Function>): Function {
    if(funcs.length === 0) {
        return arg => arg;
    }
    if(funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
