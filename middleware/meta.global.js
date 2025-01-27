export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const defaultMeta = {
      title: 'Cyde - Default Title',
      description: 'Default description for Cyde.',
    };

    // Use route meta if available
    const meta = to.meta || defaultMeta;

    // Set document title
    if (meta.title) {
      document.title = meta.title;
    }

    // Set meta description
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', meta.description || defaultMeta.description);
    }
  }
});
