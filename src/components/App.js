import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList";

import hogs from "../porkers_data";

function App() {

	const [isGreasyClick, setIsGreasyClicked] = useState(false) //another toggle feature to go back and forth.
	const [isClickedSort, setIsClickedSort] = useState("")

	//greased filter can be its own component, but doesn't have to be!
	const hogsToDisplay = hogs.filter(hog => {
		if (!isGreasyClick) { //if the button is false, aka not clicked, basically isGreasyClick existing is true, so !isGreasyClick is false.
			return true; //give everything, as all hogs are true here.
		} else {
			return hog.greased === true; //but this will only give me the hogs who have the greased value of true.
		}
	}).sort((hog1, hog2) => {
		if (isClickedSort === "weight") { //if it's set to weight, then the weight sort will happen.
			return hog1.weight - hog2.weight; //this is how it works, I do not need to know why it works.
		} else if (isClickedSort === "name") {
			return hog1.name.localeCompare(hog2.name) //again, don't need to know why this works, and order between hogs should not matter here. Use localeCompare to compare strings.
		}
	})

	console.log(hogsToDisplay)

	return (
		<div className="App">
			<Nav />
			<button onClick = {e => setIsGreasyClicked(!isGreasyClick)}>Greasy</button>
			<button onClick = {e => setIsClickedSort("weight")}>Sort Hogs By Wieght</button>
			<button onClick={e => setIsClickedSort("name")}>Sort Hogs By Name</button>
			<TileList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
