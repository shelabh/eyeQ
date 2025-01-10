import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
	<form onSubmit={handleSubmit}>
		<div className="flex items-center gap-2">
			<Textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Type a message..."
				className="min-h-12 resize-none"
				disabled={disabled}
			/>
			<Button type="submit" size="icon" disabled={disabled || !input.trim()}>
				<SendHorizontal className="h-4 w-4" />
			</Button>
		</div>
	</form>
  );
};