import React from 'react';

import { Container, LoginContainer, LoginTitle, InputContainer } from './AgendarVisitaStyles';

import Form from './Form/Form';

export default function AgendarVisita() {
    return (
        <Container>
            <LoginContainer>
                <LoginTitle>
                    Agendar visita
                </LoginTitle>
                <InputContainer><Form /></InputContainer>
            </LoginContainer>
        </Container>
    );
}