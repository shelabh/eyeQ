'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { ChatInput } from '@/components/chat/ChatInput';
import  Sidebar  from '@/components/Sidebar';
import { Message } from '@/types/chat';

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleSend = async (content: string) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('user_token'); // Or however you store your token
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    router.push('/');
  };

  return (
	<div className="flex h-[calc(100vh-64px)]"> {/* Assuming app bar height is 64px */}
		<aside>
			<Sidebar onClick={handleNewChat} disabled={loading} />
		</aside>
		<main className="flex-1 flex flex-col h-full relative bg-background">
			<div className="flex-1 overflow-hidden">
				<ChatContainer messages={messages} />
			</div>
			<div className="px-4 py-2 border-t bg-background/80 backdrop-blur-sm">
				<ChatInput onSend={handleSend} disabled={loading} />
			</div>
		</main>
	</div>
  );
}
