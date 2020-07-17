import React, { useRef } from 'react';
import * as Yup from 'yup';


import { Form as StyledForm, Button, ButtonContainer } from './FormStyles';
import Input from './Input/Input';
import Select from './InputSelect/InputSelect';
import TextArea from './TextArea/TextArea';
import { cadastrarPet } from '../../../utils/services/PetServices';

export default function Form() {
    const formRef = useRef(null);

    const options = [
        { value: 'm', label: 'Macho' },
        { value: 'f', label: 'Fêmea' },
    ]

    async function handleSubmit(data) {
        try {
            console.log('teste');

            const res = await cadastrarPet(data);
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
            <Input name="name" placeholder="NOME DO PET" />
            <Input name="especie" placeholder="ESPÉCIE" />
            <Input name="porte" placeholder="PORTE" />
            <Input name="raca" placeholder="RAÇA" />
            <Input
                type='number'
                name='idade'
                placeholder='Idade'
                style={{ marginBottom: '25px' }}
                min="1"
            />
            <Select
                name="genero"
                options={options}
                placeholder="Gênero"
            />
            <TextArea
                rows='4'
                cols='50'
                ref={formRef}
                name='descricao'
                placeholder='Descrição do pet.'
            />
            <ButtonContainer>
                <Button>CADASTRAR</Button>
            </ButtonContainer>
        </StyledForm>
    );
}