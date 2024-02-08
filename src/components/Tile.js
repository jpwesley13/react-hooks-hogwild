import React, {useState} from "react"; //state is for the click event, whether somethign is clicked or not clicked, to show hog information

function Tile({name, greased, specialty, highestMedal, height, weight, image}) {

const [isClicked, setIsClicked] = useState(false)

return (
    <div onClick = {(e) => setIsClicked(!isClicked)}>
        <div>{name}</div>
        <div>{isClicked ? specialty : null}</div>
        <div>{isClicked ? weight : null}</div>
        <div>{isClicked ? greased : null}</div>
        <div>{isClicked ? highestMedal : null}</div>
        <img src = {image} alt = {name} /> 
    </div> //alt is unnecessary but good to have. Use ternary if statements for all the stuff that only is displayed when clicked. Can make click event inside of the div easily since it's a simple event of setting click to the opposite of isClicked; this lets the tile infor toggle!
)
}

export default Tile;
