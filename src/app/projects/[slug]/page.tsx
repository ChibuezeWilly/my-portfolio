import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { ProjectsShowcase } from '@/components/projects/projects-showcase';

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} | Project Showcase | Chibueze Williams Obodo`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 flex min-w-0 max-w-full flex-col w-full">
      <ProjectsShowcase initialProject={project} />
    </main>
  );
}
