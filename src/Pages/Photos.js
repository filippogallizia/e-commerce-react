
import React, {useContext} from "react";
import Image from "../components/Image"
import {Context} from "../context"
import {getClass} from "../utils"

function Photos() {
	const {allPhotos} = useContext(Context);
	
	const imageElement = allPhotos.map((item,i) => <Image img={item} key={item.id} className={getClass(i)}  />)

	return (
		<main className= "photos">
			{imageElement}
		</main>
	)
}


export default Photos