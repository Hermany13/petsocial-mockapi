import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 50px;
`;

export const LoginContainer = styled.div`
    width: 700px;
    border-radius: 20px;
    border: 4px solid #965af0;
    padding-top: 40px;
    padding-bottom: 20px;
    padding-right: 10px;
`;

export const LoginTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: #965af0;
    font-weight: bold;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContainerItems = styled.div`
    overflow: scroll;
    max-height: 500px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 10px;
    }   

    &::-webkit-scrollbar-track {
        background: #b78ef4;
    }

    &::-webkit-scrollbar-thumb {
        background: #965af0;
    }
`;