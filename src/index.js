import React from 'react';
import ReactDOM from 'react-dom';
import { Providers } from './providers'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Providers />, document.getElementById('root'))
registerServiceWorker();
