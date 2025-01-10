import { Message } from '@/types/chat';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
		<div
			className={cn(
			'flex w-full items-start gap-2 rounded-lg p-4',
			isUser ? 'bg-primary/10' : 'bg-muted'
			)}
		>
			<div className="flex flex-col gap-1">
				<span className="text-sm font-semibold">
					{isUser ? 'You' : 'Assistant'}
				</span>
				<p className="text-sm">{message.content}</p>
			</div>
		</div>
  	);
};