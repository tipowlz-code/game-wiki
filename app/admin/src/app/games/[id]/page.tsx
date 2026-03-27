import Link from 'next/link';
import { getGame } from '../../../lib/api';
import VideoList from '../../../components/VideoList';
import AddVideoForm from '../../../components/AddVideoForm';

export default async function GameDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = await getGame(Number(id));
  const videos = game.videos ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 shadow-sm">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{game.title}</h1>
          <Link
            href={`/games/${game.id}/edit`}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Edit
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          {game.boxartUrl && (
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={game.boxartUrl}
                alt={`${game.title} box art`}
                className="w-32 h-auto rounded shadow"
              />
            </div>
          )}

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Genre</dt>
              <dd className="mt-1 text-gray-900">{game.genre}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Slug</dt>
              <dd className="mt-1 text-gray-900">{game.slug ?? '—'}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Box Art URL</dt>
              <dd className="mt-1 text-gray-900 text-sm break-all">
                {game.boxartUrl ?? '—'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Created</dt>
              <dd className="mt-1 text-gray-900 text-sm">
                {new Date(game.createdAt).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
              <dd className="mt-1 text-gray-900 text-sm">
                {new Date(game.updatedAt).toLocaleDateString()}
              </dd>
            </div>
          </dl>
        </div>

        {/* Videos section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Videos</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <VideoList videos={videos} gameId={game.id} />
            <div className="mt-4">
              <AddVideoForm gameId={game.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
