'use client';

import { useState } from 'react';
import type { Video } from '../types/video';
import { deleteVideo, updateVideo } from '../lib/actions';

export default function VideoList({
  videos,
  gameId,
}: {
  videos: Video[];
  gameId: number;
}) {
  const [editingId, setEditingId] = useState<number | null>(null);

  if (videos.length === 0) {
    return (
      <p className="text-gray-500 text-sm py-4">No videos added yet.</p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {videos.map((video) => (
        <li key={video.id} className="py-4">
          {editingId === video.id ? (
            <form
              action={updateVideo.bind(null, video.id, gameId)}
              className="space-y-3"
            >
              <div>
                <label htmlFor={`title-${video.id}`} className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  id={`title-${video.id}`}
                  name="title"
                  type="text"
                  required
                  defaultValue={video.title}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`url-${video.id}`} className="block text-sm font-medium text-gray-700">
                  URL
                </label>
                <input
                  id={`url-${video.id}`}
                  name="url"
                  type="url"
                  required
                  defaultValue={video.url}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="font-medium text-gray-900">{video.title}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 truncate block"
                >
                  {video.url}
                </a>
              </div>
              <div className="flex gap-2 ml-4 shrink-0">
                <button
                  onClick={() => setEditingId(video.id)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
                <form action={deleteVideo.bind(null, video.id, gameId)}>
                  <button
                    type="submit"
                    className="text-sm text-red-600 hover:text-red-800 font-medium"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
