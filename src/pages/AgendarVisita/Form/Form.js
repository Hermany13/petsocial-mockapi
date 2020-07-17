import React, { useRef } from 'react';
import * as Yup from 'yup';


import { Form as StyledForm, Button, ButtonContainer } from './FormStyles';
import Input from './Input/Input';
import Select from './InputSelect/InputSelect';
import { agendarVisita } from '../../../utils/services/VisitService';

export default function Form() {
    const formRef = useRef(null);

    const options = [
        { value: 'adocao', label: 'Adoção' },
        { value: 'banho-tosa', label: 'Banho e tósa' },
    ]

    async function handleSubmit(data) {
        try {
            console.log('teste');

            const res = await agendarVisita(data);
            console.log(res);

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
            <Input name="name" placeholder="NOME DO PET" style={{ marginBottom: '25px' }} />
            <Select
                name="tipo"
                options={options}
                placeholder="Tipo"
            />
            <Input
                type='date'
                name='data'
                placeholder='Data do agendamento'
                style={{ marginBottom: '25px' }}
                min="1"
            />
            <Input
                type='time'
                name='horario'
                placeholder='Horário'
                style={{ marginBottom: '25px' }}
                min="1"
            />
            <ButtonContainer>
                <Button>AGENDAR</Button>
            </ButtonContainer>
        </StyledForm>
    );
}