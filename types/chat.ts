export interface Message {
	id: string;
	content: string;
	role: 'user' | 'assistant';
	createdAt: Date;
}
      
export interface Chat {
	id: string;
	messages: Message[];
	createdAt: Date;
}