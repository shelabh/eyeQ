import React from 'react'
// import Logout from './Logout'

const Appbar = ({name}:{name:string}) => {
	return (
		<div className="flex justify-between items-center shadow-sm px-16 py-4 bg-violet-700 text-white">
			<h1 className="text-2xl font-semibold">eyeQ</h1>
			<div className="flex items-center space-x-2">
				<span>Welcome, {name && (name?.split("")[0]?.toUpperCase()+name?.split("")?.slice(1)?.join(""))}</span>
				{/* <Logout/> */}
			</div>
		</div>
	)
}

export default Appbar
