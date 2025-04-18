import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Välkommen till Radiolog.nu</h1>
      <p className="text-fd-muted-foreground">
        Denna sida är under uppbyggnad och kommer att innehålla information och länkar som är relevanta för svenska radiologer.
      </p>
    </main>
  );
}
