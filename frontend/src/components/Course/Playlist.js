import React from 'react'


const  Card= ({data,setActiveDescription, setactiveTitle, setActiveVideoId})=>{
	return (
		<div
		className="hover:bg-gray-300 p-2
				border-2 rounded-xl my-2 h-fit 
				overflow-y-auto
				shadow-xl shadow-gray-300"
		onClick={() => {
			setActiveVideoId(data.link);
			setactiveTitle(data.title);
			setActiveDescription(data.description);
		}}>
		<img
			className="w-1/2 h-20 my-4 
					mx-2 float-left"
			src={data.img}
		/>
		<p
			className="ml-2 font-semibold 
					pt-6 pl-8 text-sm">
			{data.title}
		</p>
		<p className="px-2">{data.description}</p>
	</div>
	);
}

function Playlist({arr,setActiveDescription, setactiveTitle, setActiveVideoId}) {
    console.log("arr",arr);
    return (
        <div className="w-3/4 h-screen shadow-lg shadow-gray-600 overflow-y-scroll mt-4 border-slate-200 border-2 rounded-lg bg-blue-700">
			<h3 className="text-2xl p-2 font-semibold">POTD-August</h3>
			<p className="px-2"> GFG Practice</p>
			<div>
				{arr.map((e) => {
					return (
						<Card
						data={e}
						setActiveDescription={setActiveDescription}
						setActiveVideoId={setActiveVideoId}
						setactiveTitle={setactiveTitle}
						/>
					);
				})}
			</div>
		</div>
  )
}

export default Playlist;
