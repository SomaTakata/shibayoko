"use client";
import NewsPage from "@/feature/components/NewsPage";
import ClientLayout from "@/client/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <NewsPage />
    </ClientLayout>
  );
}
