// Gallery.js

import { useState } from "react";
import Video from "./Video";
import Playlist from "./Playlist";
import Data from "./Data";
import './style/gallary.css';

export default function Gallery() {
	const [activeVideoId, setActiveVideoId] = useState(
"https://www.youtube.com/embed/0PfTU9JI6Lg?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ"
	);
	const [activeTitle, setactiveTitle] = useState("GFG POTD 1");
	const [description, setActiveDescription] = useState(
		"We will learn DFS of Graph in this problem"
	);
	return (
		<div className=" gallary flex w-11/12 h-full pt-2 border-2">
			<Video
				link={activeVideoId}
				title={activeTitle}
				description={description}
			/>
			<Playlist
				arr ={Data}
				setActiveVideoId={setActiveVideoId}
				setActiveDescription={setActiveDescription}
				setactiveTitle={setactiveTitle}
			/>
			
		</div>
	);
}
