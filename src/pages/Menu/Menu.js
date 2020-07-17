import React from 'react';

// Helpers
import { navigateTo } from '../../utils/helpers/NavigationHelper';

import { Container, LoginContainer, LoginTitle, Item, ItensContainer, ItemContainer } from './MenuStyles';

export default function Menu() {

    const handleClick = (link) => {
        navigateTo(link);
    };

    return (
        <Container>
            <LoginContainer>
                <LoginTitle>Menu</LoginTitle>
                <ItensContainer>
                    <ItemContainer>
                        <Item onClick={() => handleClick('/cadastro-pet')}>
                            Cadastrar Pet
                        </Item>
                    </ItemContainer>
                    <ItemContainer>
                        <Item onClick={() => handleClick('/agendar')}>
                            Agendar Visita
                        </Item>
                    </ItemContainer>
                    <ItemContainer>
                        <Item onClick={() => handleClick('/agendar')}>
                            Lista de adoção
                        </Item>
                    </ItemContainer>
                </ItensContainer>
            </LoginContainer>
        </Container>
    );
}