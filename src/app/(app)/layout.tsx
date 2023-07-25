import { getServerSession } from "next-auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
