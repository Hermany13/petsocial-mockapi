import React from 'react';

// Validate
import PropTypes from 'prop-types';

// Components
import Header from '../Header/Header';

export default function Default({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

Default.propTypes = {
    children: PropTypes.element.isRequired
};
