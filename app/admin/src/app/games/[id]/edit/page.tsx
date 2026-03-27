import Link from 'next/link';
import GameForm from '../../../../components/GameForm';
import { getGame } from '../../../../lib/api';
import { updateGame } from '../../../../lib/actions';

export default async function EditGamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = await getGame(Number(id));
  const updateGameWithId = updateGame.bind(null, game.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 shadow-sm">
        <Link
          href={`/games/${game.id}`}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          ← Back to Game Details
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit &ldquo;{game.title}&rdquo;
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <GameForm
            action={updateGameWithId}
            defaultValues={game}
            submitLabel="Save Changes"
            cancelHref={`/games/${game.id}`}
          />
        </div>
      </main>
    </div>
  );
}
