'use client';

import { useState } from 'react';
import { createVideo } from '../lib/actions';

export default function AddVideoForm({ gameId }: { gameId: number }) {
  const [open, setOpen] = useState(false);
  const createVideoForGame = createVideo.bind(null, gameId);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        + Add Video
      </button>
    );
  }

  return (
    <form action={createVideoForGame} className="space-y-3 border border-gray-200 rounded-lg p-4 bg-gray-50">
      <div>
        <label htmlFor="video-title" className="block text-sm font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="video-title"
          name="title"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Gameplay trailer"
        />
      </div>
      <div>
        <label htmlFor="video-url" className="block text-sm font-medium text-gray-700">
          URL <span className="text-red-500">*</span>
        </label>
        <input
          id="video-url"
          name="url"
          type="url"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="https://youtube.com/watch?v=..."
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
