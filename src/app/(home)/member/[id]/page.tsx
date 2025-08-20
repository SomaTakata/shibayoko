import MemberDetailPage from "@/features/member/components/MemberDetailPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <MemberDetailPage memberId={id} />;
}