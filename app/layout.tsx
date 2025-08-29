import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rivor Template",
  description: "Professional website with multi-language support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
