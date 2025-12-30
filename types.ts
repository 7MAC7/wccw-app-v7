
export enum ViewType {
  HOME = 'HOME',
  ARCHIVE = 'ARCHIVE',
  HISTORY = 'HISTORY',
  CHAT = 'CHAT',
  SUPPORT = 'SUPPORT'
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface HistoryDoc {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  source: string;
}
