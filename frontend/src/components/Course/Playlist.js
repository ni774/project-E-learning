import React from 'react'

function Playlist({arr,setActiveDescription, setactiveTitle, setActiveVideoId}) {
    console.log("arr",arr);
    return (
    <div>
        <div
			className="w-3/4 shadow-lg shadow-gray-600 
					overflow-y-scroll flex flex-col 
					mt-4 mr-20 border-slate-200 
					border-2 rounded-lg"
			style={{ height: "min(38vw, 650px)" }}>
			<h3 className="text-2xl p-2 font-semibold">POTD-August</h3>
			<p className="px-2"> GFG Practice</p>
			{arr.map((e) => {
				return (
					<div
						className="hover:bg-gray-300 p-2
								border-2 rounded-xl h-2/6 
								shadow-xl shadow-gray-300"
						onClick={() => {
							setActiveVideoId(e.link);
							setactiveTitle(e.title);
							setActiveDescription(e.description);
						}}>
						<img
							className="w-1/2 h-20 my-4 
									mx-2 float-left"
							src={e.img}
						/>
						<p
							className="ml-2 font-semibold 
									pt-6 pl-8 text-sm">
							{e.title}
						</p>
						<p className="px-2">{e.description}</p>
					</div>
				);
			})}
		</div>
    </div>
  )
}

export default Playlist;
