import type { Game } from '../types/game';

const API_URL = process.env.API_URL ?? 'http://localhost:3000';

export async function getGames(): Promise<Game[]> {
  const res = await fetch(`${API_URL}/games`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch games');
  return res.json() as Promise<Game[]>;
}

export async function getGame(id: number): Promise<Game> {
  const res = await fetch(`${API_URL}/games/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch game with id ${id}`);
  return res.json() as Promise<Game>;
}

import type { Video } from '../types/video';

export async function getVideosByGame(gameId: number): Promise<Video[]> {
  const res = await fetch(`${API_URL}/videos/game/${gameId}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch videos for game ${gameId}`);
  return res.json() as Promise<Video[]>;
}
