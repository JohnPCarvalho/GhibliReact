import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CardContent = styled.div`
    margin: 1rem;
    background: white;
    box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
    border-radius: 12px;
    overflow: hidden;
    transition: all .2s linear;
    

    @media screen and (min-width: 600px) {
        flex: 1 1 calc(50% - 2rem);
    }

    @media screen and (min-width: 900px) {
        flex: 1 1 calc(33% - 2rem);
    }

    :hover {
        box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
        transform: translate3D(0, -25px, 0);
    }
`;

export const MovieTitle = styled.h1`
    text-align: center;
    padding: 1.5rem 2.5rem;
    background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
    margin: 0 0 2rem 0;
    font-size: 1.5rem;
    color: white;
`;

export const MovieDescription = styled.p`
    padding: 0 2.5rem 2.5rem;
    margin: 0;
`;

