import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  console.log(session);

  return (
    <main className="grid place-items-center min-h-screen w-full">
      <h1 className="text-4xl mb-10">Homepage</h1>
    </main>
  );
}
