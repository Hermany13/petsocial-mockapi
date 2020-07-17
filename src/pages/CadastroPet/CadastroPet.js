import React from 'react';

import { Container, LoginContainer, LoginTitle, InputContainer } from './CadastroPetStyles';

import Form from './Form/Form';

export default function CadastroPet() {
    return (
        <Container>
            <LoginContainer>
                <LoginTitle>
                    Cadastro de pet
                </LoginTitle>
                <InputContainer><Form /></InputContainer>
            </LoginContainer>
        </Container>
    );
}