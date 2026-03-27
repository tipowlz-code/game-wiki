'use server';

import { redirect } from 'next/navigation';

const API_URL = process.env.API_URL ?? 'http://localhost:3000';

export async function createGame(formData: FormData) {
  const body = {
    title: formData.get('title') as string,
    genre: formData.get('genre') as string,
    boxartUrl: (formData.get('boxartUrl') as string) || undefined,
    slug: (formData.get('slug') as string) || undefined,
  };

  const res = await fetch(`${API_URL}/games`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error('Failed to create game');
  redirect('/');
}

export async function updateGame(id: number, formData: FormData) {
  const body = {
    title: formData.get('title') as string,
    genre: formData.get('genre') as string,
    boxartUrl: (formData.get('boxartUrl') as string) || undefined,
    slug: (formData.get('slug') as string) || undefined,
  };

  const res = await fetch(`${API_URL}/games/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Failed to update game ${id}`);
  redirect(`/games/${id}`);
}

export async function createVideo(gameId: number, formData: FormData) {
  const body = {
    title: formData.get('title') as string,
    url: formData.get('url') as string,
    gameId,
  };

  const res = await fetch(`${API_URL}/videos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error('Failed to create video');
  redirect(`/games/${gameId}`);
}

export async function updateVideo(id: number, gameId: number, formData: FormData) {
  const body = {
    title: formData.get('title') as string,
    url: formData.get('url') as string,
  };

  const res = await fetch(`${API_URL}/videos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Failed to update video ${id}`);
  redirect(`/games/${gameId}`);
}

export async function deleteVideo(id: number, gameId: number) {
  const res = await fetch(`${API_URL}/videos/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error(`Failed to delete video ${id}`);
  redirect(`/games/${gameId}`);
}
