'use client'
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/chat';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ChatMessage } from './ChatMessage';

interface ChatContainerProps {
  messages: Message[];
  className?: string;
}

export const ChatContainer = ({
  messages,
  className,
}: ChatContainerProps) => {
  const chatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className={cn('h-full w-full', className)}>
      <div ref={chatRef} className="flex flex-col gap-4 p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
};