import React, { useRef } from 'react';
import * as Yup from 'yup';

// Helpers
import { navigateTo } from '../../../utils/helpers/NavigationHelper';

import { Form as StyledForm, Button, ButtonContainer } from './FormStyles';
import Input from './Input/Input';

export default function Form() {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Por favor, insira um email válido.')
                    .required('Por favor, insira seu nome.'),
                password: Yup.string()
                    .min(6, 'A senha deve conter no mínimo 6 caracteres.')
                    .required('Por favor, insira uma senha.'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            navigateTo('/home');

        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }
        }
        return 0;
    }

    return (
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="EMAIL" />
            <Input name="password" placeholder="SENHA" type="password" style={{ marginTop: '30px' }} />
            <ButtonContainer>
                <Button>LOGIN</Button>
            </ButtonContainer>
        </StyledForm>
    );
}