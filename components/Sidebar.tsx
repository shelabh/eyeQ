import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button';
import React from 'react'
import { ScrollArea } from '@radix-ui/react-scroll-area';
interface NewChatButtonProps {
	onClick: () => void;
	disabled: boolean;
}
const Sidebar = ({ onClick, disabled }: NewChatButtonProps) => {
	return (
		<div className="w-64 border-r bg-background flex flex-col h-full p-4">
			<Button 
				onClick={onClick}
     				disabled={disabled}
      				variant="custom"
      				className=" "
			>
				<Plus className="h-4 w-4" />
				New Chat
			</Button>
			<ScrollArea className="flex-1 px-2">
				<div className="space-y-2 py-2">
					{/* Chat history list here */}
				</div>
			</ScrollArea>
		</div>
	)
}

export default Sidebar
