import styled from 'styled-components';

export const SpanStyled = styled.span`
    color: red;
`;


export const TextArea = styled.textarea`
    width: 79%;
    background-color: transparent;
    border: 1px solid #965af0;
    height: 142px;
    border-radius: 30px;
    color: #965af0;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    font-size: 18px;
    margin-top: 20px;

    ::placeholder {
        color:  #965af0;
    }

    @media (max-width: 767px) {
        border: 2px solid  #965af0;
    }
`;