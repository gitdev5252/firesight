import { Header } from "./Header";
import RootLayout from "@/app/layout";

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      <main>{children}</main>
    </RootLayout>
  );
}
