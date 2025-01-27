<template>
  <div>
    <h1>{{ post.name }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
import posts from '~/plugins/source';
import { slugify } from '~/plugins/functions';

export default {
  async asyncData({ params, error }) {
    const routeSlug = decodeURIComponent(params.slug);
    const post = Array.isArray(posts) ? posts.find((p) => slugify(p.name) === routeSlug) : null;

    if (!post) {
      error({ statusCode: 404, message: 'Post not found' });
    }

    return { post };
  },
  head() {
    return {
      title: this.post.meta?.title || this.post.name,
      meta: [
        { hid: 'description', name: 'description', content: this.post.meta?.description || 'Default description' },
      ],
      link: [
        { rel: 'canonical', href: this.post.meta?.canonical || `${this.$config.baseUrl}/${this.post.slug}` },
      ],
    };
  },
};
</script>
