import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100px;
`;

export const Title = styled.div`
    padding: 10px;
    font-size: 50px;
    font-weight: bold;
    transition: 0.3s;
    
    &:hover {
        color: #646464;
    }
`;

export const TitleContainer = styled.div`
    width: 67%;
    padding: 15px;
    display: flex;
    cursor: pointer;
`;

export const LinkContainer = styled.div`
    width: 27%;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
`;

export const Link = styled.div`
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
`;
