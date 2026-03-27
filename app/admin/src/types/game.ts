import type { Video } from './video';

export interface Game {
  id: number;
  title: string;
  genre: string;
  boxartUrl?: string | null;
  slug?: string | null;
  createdAt: string;
  updatedAt: string;
  videos?: Video[];
}
