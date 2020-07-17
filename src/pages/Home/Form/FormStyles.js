import styled from 'styled-components';

// Unform
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    width: 100%;
    padding-top: 40px;
`;

export const Button = styled.button`
    width: 100px;
    height: 50px;
    color: #fff;
    font-size: 20px;
    background-color: #965af0;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding-top: 14px;
    margin-top: 60px;
    transition: 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
        background-color:  #d1b7f9;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
