import React from 'react';

// Navigation
import { Switch, Router } from 'react-router-dom';
import Route from './Route';

// History
import history from '../utils/services/history';

import Home from '../pages/Home/Home';
import CadastroPet from '../pages/CadastroPet/CadastroPet';
import Menu from '../pages/Menu/Menu';

export default function Routes() {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro-pet" exact component={CadastroPet} />
                <Route path="/home" exact component={Menu} />
            </Switch>
        </Router>
    );
}
