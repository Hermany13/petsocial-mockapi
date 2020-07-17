import React from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { Input as InputStyled } from './InputStyles';

export default function Input({ name, ...rest }) {
    const inputRef = React.useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    React.useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return (
        <>
            <InputStyled
                ref={inputRef}
                defaultValue={defaultValue}
                className={error ? 'has-error' : ''}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />
            {error && (
                <span
                    className='error'
                    style={{ marginLeft: '118px', color: 'red' }}
                >
                    {error}
                </span>
            )}
        </>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired
};
