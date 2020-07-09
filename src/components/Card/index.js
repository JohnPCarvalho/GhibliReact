import React from 'react';
import { CardContent, MovieTitle, MovieDescription } from './styles';


export const Card = (props) => {

    const randomColor = () => {
        var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

        function populate(a) {
            for ( var i = 0; i < 6; i++ ) {
              var x = Math.round( Math.random() * 14 );
              var y = hexValues[x];
              a += y;
            }
            return a;
          }
          var newColor1 = populate('#');
        var newColor2 = populate('#');
        var angle = Math.round( Math.random() * 360 );
  
        var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
        return gradient
    }

    return (
            <CardContent>
                <MovieTitle style={{backgroundImage: randomColor()}} >{props.title}</MovieTitle>
                <MovieDescription>{props.description}</MovieDescription>
            </CardContent> 
    )
}