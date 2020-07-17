import React from 'react';

// Components
import Form from './Form/Form';

// Styled Components
import { Container, LoginContainer, LoginTitle } from './HomeStyles';

export default function Header() {
    return (
        <Container>
            <LoginContainer>
                <LoginTitle>Login</LoginTitle>
                <Form />
            </LoginContainer>
        </Container>
    );
}