import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <div>
        <div className="">
            <Router />
        </div>
    </div>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register();
