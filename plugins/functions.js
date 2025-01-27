export function slugify(name) {
  if (typeof name !== 'string') {
      console.warn('slugify: Invalid input', name);
      return '';
  }
  return name
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]/g, ''); // Remove special characters
}
export default slugify
