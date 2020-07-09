import React from 'react';
import { CardContent, Container, MovieTitle, MovieDescription } from './styles';


export const Card = (props) => {
    return (
        <div>
        <Container>
            <CardContent>
                <MovieTitle>{props.title}</MovieTitle>
                <MovieDescription>{props.description}</MovieDescription>
            </CardContent>
        </Container> 
        </div>
    )
}