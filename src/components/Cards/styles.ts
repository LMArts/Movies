import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    margin-top: 30px; 
    flex-wrap: wrap; 
    width: 100%;
    padding-bottom: 30px;
    @media (max-width: 414px) {
        justify-content: space-around;
    }
    @media (min-width: 768px) {
        justify-content: center;  
    }
    @media (min-width: 1024px) {
        justify-content: flex-start;  
    }
    
`;
export const Image = styled.img`
    width: 140px; 
    height: 198px; 
    margin-left: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
    opacity: 1;
    transition: .3s ease;
    @media (max-width: 320px) {
        width: 220px; 
        height: 300px; 
    }
    @media (min-width: 768px) {
        width: 120px; 
        height: 180px;  
    }
`;
export const Overlay = styled.div`
    opacity: 0; 
    position: absolute; 
    height: 100%;
    width: 100%;
`;
export const Row = styled.button`
    display: flex;
    position: relative;
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    text-align: left; 
    &:hover{
        ${Image}{
          opacity: .1;
        }
    };
    &:hover{
        ${Overlay}{
          opacity: 1;
        }
    }
`;
export const Content = styled.div`
    position: absolute; 
    overflow: hidden; 
    color: #fff; 
    height: 100%; 
    display: flex;
    justify-content: space-between; 
    flex-direction: column; 
    width: 100%;
`;
export const Text = styled.div`
    margin: 0px 10px;
`;
export const Title = styled.p`
    font-size: 12px; 
    font-weight: bold;
    margin-bottom: 0px;
`;
export const Year = styled.p`
    font-size: 12px; 
    color: #7B8C98;
    margin-top: 2px;
`;
export const Icon = styled.div`
    display: flex;
    padding: 5px;
    justify-content: flex-end;
`;