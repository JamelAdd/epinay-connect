import type { ContentSource, ContentStatus, NewsCategory } from "./common";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  imageUrl: string | null;
  category: NewsCategory;
  source: ContentSource;
  status: ContentStatus;
  publishedAt: string; // ISO date — formatage fait au niveau de l'UI
  sourceUrl?: string;
  location?: string;
  eventAt?: string;
}
