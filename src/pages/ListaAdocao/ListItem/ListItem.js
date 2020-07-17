import React from 'react';

import { Container, SubContainer, NomePet, OtherDatas, Separator } from './ListItemStyles';

export default function ListItem({ name, raca, porte, idade, descricao, especie }) {
    return (
        <SubContainer>
            <Container>
                <Separator>
                    <NomePet>
                        Nome: {name}
                    </NomePet>
                    <OtherDatas>
                        Espécie: {especie}
                    </OtherDatas>
                    <OtherDatas>
                        Raça: {raca}
                    </OtherDatas>
                    <OtherDatas>
                        Porte: {porte}
                    </OtherDatas>
                    <OtherDatas>
                        Idade: {idade} ano/s
                    </OtherDatas>
                </Separator>
                <Separator>
                    <NomePet>
                        Descrição:
                    </NomePet>
                    <OtherDatas style={{ maxWidth: '210px' }}>
                        {descricao}
                    </OtherDatas>
                </Separator>
            </Container>
        </SubContainer>
    );
}