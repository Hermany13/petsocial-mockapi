import styled from 'styled-components';

export const Input = styled.input`
    display: block;
    margin: 0 auto;
    border: none;
    border-bottom: 2px solid #965af0;
    height: 37px;
    text-indent: 10px;
    color: #965af0;
    width: 260px;
    font-size: 20px;

    &::placeholder {
        color: #965af0;
        font-weight: bold;
        font-size: 20px;
    }

    &:focus {
        outline: none;
    }
`;