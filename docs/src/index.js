import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import 'sass/style.scss';

const appElement = document.getElementById('app');

ReactDOM.render(
    <div className="Box Box-thick">
        <Example />
    </div>
, appElement);
