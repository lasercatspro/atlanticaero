import Prismic from '@prismicio/client';

// Update your-repo-name with the name of your repository.
const apiEndpoint = 'https://atlanticaero.prismic.io/api/v2'
export const Client = Prismic.client(apiEndpoint)

