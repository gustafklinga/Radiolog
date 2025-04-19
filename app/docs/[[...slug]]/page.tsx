import { source } from '@/lib/source';
import { getGithubLastEdit } from 'fumadocs-core/server';



import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';



export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const time = await getGithubLastEdit({
    owner: 'gustafklinga',
    repo: 'Radiolog',
    path: `content/docs/${page.file.path}`,
    token: `Bearer ${process.env.GIT_TOKEN}`,
  });
 
  return (
    <DocsPage toc={page.data.toc} full={page.data.full} lastUpdate={new Date(time)} footer={{enabled: false}}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );

}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
