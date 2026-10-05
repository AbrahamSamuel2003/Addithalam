import React from "react";
import { notFound } from "next/navigation";
import { programsData } from "@/data/programsData";
import ProgramDetailView from "@/components/programs/ProgramDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} | Addithalam Foundation`,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = programsData.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailView program={program} />;
}
