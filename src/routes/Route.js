import React from 'react';
import { Route } from 'react-router-dom';

// Layout
import Default from '../pages/_Components/_layout/Default';

export default function PrivateRoute(params) {
    const { component: Component, ...rest } = params;
    return (
        <Route
            {...rest}
            render={props => (
                <Default>
                    <Component {...props} />
                </Default>
            )}
        />
    );
}
