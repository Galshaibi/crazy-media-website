import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'd3dre6tbj4fw',
  accessToken: '2yJc-SvcewQlEqAXuuxbGTkwUPwJXklmKUBWj4emZ3A',
});

export interface PageContent {
  title: string;
  content: any;
  slug: string;
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length > 0) {
      const page = response.items[0];
      return {
        title: page.fields.title as string,
        content: page.fields.content,
        slug: page.fields.slug as string,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
}

export interface ServiceContent {
  title: string;
  description: string;
  icon?: string;
}

export async function getServices(): Promise<ServiceContent[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'service',
    });

    return response.items.map(item => ({
      title: item.fields.title as string,
      description: item.fields.description as string,
      icon: item.fields.icon as string,
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export interface BlogPost {
  title: string;
  content: any;
  slug: string;
  excerpt: string;
  publishDate: string;
  featuredImage?: any;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    });

    return response.items.map(item => ({
      title: item.fields.title as string,
      content: item.fields.content,
      slug: item.fields.slug as string,
      excerpt: item.fields.excerpt as string,
      publishDate: item.fields.publishDate as string,
      featuredImage: item.fields.featuredImage,
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
