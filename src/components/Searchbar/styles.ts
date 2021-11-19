import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Form = styled.form`
    width: 100%;
    position: relative;
    display: flex;
`;
export const Input = styled.input`
    background-color: #fff;
    height: 30px;
    padding-left: 35px;
    width: 100%;
    border: none;
    border-radius: 4px;
    outline: none;
    color: #011016;
    font-size: 12px;
    ::placeholder {
        color: #B0B0B0;
    };
    @media (max-width: 1024px) {
        font-size: 14px;
    }
`;
export const ButtonDiv = styled.div`
    display: flex;
    position: absolute;
`;
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 30px;
    width: 35px;
`;