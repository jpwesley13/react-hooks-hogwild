import React from "react";
import Tile from "./Tile";

function TileList( {hogs} ) {

    const tileList = hogs.map(hog => (
        <Tile 
            key = {hog.name}
            name = {hog.name}
            specialty = {hog.specialty}
            greased = {hog.greased}
            weight = {hog.weight}
            highestMedal = {hog["highest medal achieved"]} //use bracket notation to get around the fact that this is a string
            image = {hog.image}
          /> //build the Tile here first, then go to Tile itself and make it.
    ))

    return (
        <ul>
            {tileList}
        </ul> //Tiles are basically a list, so make a ul
    )

}

export default TileList