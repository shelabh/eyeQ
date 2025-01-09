import { Plus } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
	return (
		<div className="w-64 bg-gray-100 p-4 overflow-y-auto h-screen">
			<button className="flex flex-row items-center justify-center gap-2 hover:bg-neutral-900 hover:text-white hover:border-neutral-200 px-4 py-2 border border-neutral-500 rounded-lg w-full">
				<Plus className="h-4 w-4" />
				New Chat
			</button>
			<div className="mt-4">
				<h3 className="text-lg mb-2">New Query</h3>
			</div>
		</div>
	)
}

export default Sidebar
