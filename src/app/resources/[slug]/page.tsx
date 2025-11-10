import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { articlesData } from '@/data/articles';
import ArticleContent from '@/components/sections/resources/ArticleContent';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

// Find service by slug
function findServiceBySlug(slug: string) {
  for (const category of Object.values(servicesData)) {
    const service = category.services.find((s: any) => s.id === slug);
    if (service) {
      return {
        service,
        category,
      };
    }
  }
  return null;
}

// Generate static paths for all services
export function generateStaticParams() {
  const params: { slug: string }[] = [];

  Object.values(servicesData).forEach(category => {
    category.services.forEach((service: any) => {
      params.push({ slug: service.id });
    });
  });

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const data = findServiceBySlug(params.slug);

  if (!data) {
    return {
      title: 'Article Not Found',
    };
  }

  const { service, category } = data;

  return {
    title: `${service.title} - Complete Guide | SoftKerr`,
    description: service.fullDescription,
    keywords: [
      service.title,
      category.title,
      'web development',
      'design',
      'support',
      ...(service.features || []),
    ],
    openGraph: {
      title: `${service.title} - Complete Guide`,
      description: service.shortDescription,
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const data = findServiceBySlug(params.slug);

  if (!data) {
    notFound();
  }

  const { service, category } = data;

  // Get article data if available
  const articleData = articlesData[params.slug];

  // Get related services from the same category
  const relatedServices = category.services.filter((s: any) => s.id !== service.id).slice(0, 3);

  return (
    <ArticleContent
      service={service}
      category={category}
      relatedServices={relatedServices}
      articleData={articleData}
    />
  );
}
