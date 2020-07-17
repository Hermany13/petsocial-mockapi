import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
`;

export const LoginContainer = styled.div`
    width: 500px;
    height: 370px;
    border-radius: 20px;
    box-shadow: 2px 19px 20px 0px grey;
    padding-top: 40px;
`;

export const LoginTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: #965af0;
    font-weight: bold;
`;

export const Item = styled.div`
    font-size: 25px;
    color: #965af0;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #cbadf8;
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`;

export const ItensContainer = styled.div`
    display: block;
    padding-top: 20px;
`;