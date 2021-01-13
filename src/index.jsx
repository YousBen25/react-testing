import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import Hello from './components/hello';
import CheckboxWithLabel from './components/checkbox_with_label';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />, root);
}
