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
                        <Item>
                            Agendar Visita
                        </Item>
                    </ItemContainer>
                </ItensContainer>
            </LoginContainer>
        </Container>
    );
}