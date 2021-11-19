import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    margin-top: 30px; 
    height: 80vh; 
    align-items: center; 
    flex: 1;
    justify-content: center; 
    display: flex;
`;
export const Content = styled.div`
    text-align: center; 
    align-tems: center;
`;
export const Image = styled.img`
    width: 100%;    
`;
export const TextPrimary = styled.p`
    font-weight: bold; 
    font-size: 24px; 
    line-height: 15px;
    color: #fff;
    @media (min-width: 280px) {
        font-size: 18px;
        line-height: 20px;
    }
`;
export const TextSecundary = styled.p`
    font-size: 16px; 
    line-height: 10px;
    color: #7B8C98;
    
`;