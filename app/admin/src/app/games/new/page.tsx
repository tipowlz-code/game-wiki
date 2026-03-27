import Link from 'next/link';
import GameForm from '../../../components/GameForm';
import { createGame } from '../../../lib/actions';

export default function NewGamePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-4 shadow-sm">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Game</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <GameForm action={createGame} submitLabel="Create Game" cancelHref="/" />
        </div>
      </main>
    </div>
  );
}
