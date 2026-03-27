'use client';

import Link from 'next/link';
import type { Game } from '../types/game';

type GameFormProps = {
  action: (formData: FormData) => Promise<void>;
  defaultValues?: Partial<Pick<Game, 'title' | 'genre' | 'boxartUrl' | 'slug'>>;
  submitLabel?: string;
  cancelHref?: string;
};

const inputClass =
  'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';

export default function GameForm({
  action,
  defaultValues = {},
  submitLabel = 'Save',
  cancelHref = '/',
}: GameFormProps) {
  return (
    <form action={action} className="space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={defaultValues.title ?? ''}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
          Genre <span className="text-red-500">*</span>
        </label>
        <input
          id="genre"
          name="genre"
          type="text"
          required
          defaultValue={defaultValues.genre ?? ''}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="boxartUrl" className="block text-sm font-medium text-gray-700">
          Box Art URL
        </label>
        <input
          id="boxartUrl"
          name="boxartUrl"
          type="url"
          defaultValue={defaultValues.boxartUrl ?? ''}
          placeholder="https://example.com/image.jpg"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
          Slug
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          defaultValue={defaultValues.slug ?? ''}
          placeholder="my-game-title"
          className={inputClass}
        />
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          {submitLabel}
        </button>
        <Link
          href={cancelHref}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
