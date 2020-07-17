import React from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import {
    SpanStyled,
    TextArea as TextAreaStyled,
} from './TextAreaStyles';

export default function TextArea({ name, ...rest }) {
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
            <TextAreaStyled
                ref={inputRef}
                defaultValue={defaultValue}
                className={error ? 'has-error' : ''}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...rest}
            />
            {error && <SpanStyled className='error'>{error}</SpanStyled>}
        </>
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired
};
