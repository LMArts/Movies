import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-bottom: 30px;
`;

export const FirstBlock = styled.div`
    width: 100%;
`;
export const ArrowButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
`;
export const Time = styled.div`
   display: flex;
   align-items: center;
`;
export const TimeText = styled.p`
   margin-right: 10px;
   font-size: 16px;
   color: #7B8C98;
`;
export const TimeTextSpecial = styled.p`
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    background-color: #7B8C98;
    padding: 3px;
    border-radius: 4px;
`;

export const SecondBlock = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;
export const Info = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        order: 2;
    }
`;
export const Title = styled.div`
    padding: 20px 0px;
`;
export const TextTitle = styled.h1`
    font-size: 60px;
    margin: 0px;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 35px;
    }
`;
export const Approbation = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;
    @media (max-width: 411px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const Imdb = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;
    width: 130px;
    height: 40px;
    border: 1px solid #171C21;
    border-radius: 4px;
`;
export const ImdbIcon = styled.p`
    background-color: #FF9B39;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin: 0px;
    padding: 10px;
    color: #000;
    font-weight: bold;
    @media (max-width: 411px) {
        font-size: 14px;
    }
`;
export const ImdbInfo = styled.p`
    margin: 0px;
    padding: 10px;
`;
export const Item = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    height: 40px;
    justify-content: space-between;
    width: 100px;
    border: 1px solid #171C21;
    border-radius: 4px;
    @media (max-width: 411px) {
        margin-top: 10px;
    }
`;
export const ItemImageDiv = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    width: 50%;
    background-color: #F93A1E;
    padding: 10px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;
export const ItemImage = styled.img``;
export const ItemText = styled.p`
    margin: 0px;
    padding: 10px;
`;
export const FavoriteButton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: space-between;
    width: 155px;
    height: 40px;
    border: 1px solid #171C21;
    border-radius: 4px; 
    background-color: transparent;
    border: 1px solid #171C21;
    border-radius: 4px;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    @media (max-width: 411px) {
        margin-top: 10px;
        font-size: 16px;
        width: 180px;
    }
`;
export const IconDiv = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    padding: 10px;
`;
export const FavoriteText = styled.p`
    margin: 0px;
    padding: 10px;
    color: #7B8C98;
`;
export const Plot = styled.div`
    width: 100%;
    padding: 10px 0px;
`;
export const PlotTitle = styled.p`
    color: #7B8C98;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
export const PlotText = styled.p``;
export const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const DetailDiv = styled.div`
    width: 33.33%
`;
export const DetailTitle = styled.p`
    color: #7B8C98;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
export const DetailText = styled.p`
    padding: 0px;
    margin: 0px;
`;
export const PosterDiv = styled.div`
    width: 40%;
    padding: 20px;
    display: flex;
    aling-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px 2px;
    }
`;