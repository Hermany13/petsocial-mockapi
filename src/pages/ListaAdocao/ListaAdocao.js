import React, { useEffect, useState } from 'react';

import { getPets } from '../../utils/services/PetServices';

import { Container, LoginContainer, LoginTitle, ContainerItems } from './ListaAdocaoStyles';

import ListItem from './ListItem/ListItem';

export default function ListaAdocao() {
    const [pets, setPets] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await getPets();
            setPets(res);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <LoginContainer>
                <LoginTitle>
                    Lista de adoção
                </LoginTitle>
                <ContainerItems>
                    {pets && pets[0].map((pet) => {
                        return <ListItem name={pet.name} raca={pet.raca} porte={pet.porte} idade={pet.idade} descricao={pet.descricao} especie={pet.especie} />
                    })}
                </ContainerItems>
            </LoginContainer>
        </Container>
    );
}