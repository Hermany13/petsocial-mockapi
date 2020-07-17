import React from 'react';

// Styled components
import { Container, Title, LinkContainer, TitleContainer, Link } from './HeaderStyles';

// Helpers
import { navigateTo } from '../../../../utils/helpers/NavigationHelper';

export default function Header() {
    return (
        <Container>
            <TitleContainer onClick={() => navigateTo('/home')}>
                <img alt="PetSocial" width="82" height="92" src="https://lh3.googleusercontent.com/-IDm1cYQ8nPg/Xw_CJ6kb3eI/AAAAAAAAAVg/qGpZWjD7cDEOT-_jPryCYSKXjTQLRMZpwCK8BGAsYHg/s92/2020-07-15.png" />
                <Title>Petshop</Title>
            </TitleContainer>
            <LinkContainer>
                <Link>Quem Somos</Link>
                <Link>Ajuda</Link>
            </LinkContainer>
        </Container>
    )
}