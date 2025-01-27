import posts from '~/plugins/source';
import { slugify } from '~/plugins/functions';

const baseUrl = 'https://cyde.xyz';

export default function ({ route, app }) {
  let meta = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    canonical: `${baseUrl}${route.path}`,
  };

  if (route.name === 'Dynamic') {
    const routeSlug = decodeURIComponent(route.params.slug);
    const post = posts.find((p) => slugify(p.name) === routeSlug);

    if (post) {
      meta = {
        title: post.meta?.title || post.name,
        description: post.meta?.description || 'Default description',
        canonical: post.meta?.canonical || `${baseUrl}/${routeSlug}`,
      };
    }
  }

  app.head.title = meta.title;
  app.head.meta.push({ name: 'description', content: meta.description });
  app.head.meta.push({ name: 'canonical', content: meta.canonical });
}
