import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "cys4rkrh",
  dataset: 'production',
  apiVersion: '2023-02-01',
  useCdn: true,
  token: "skGa1LDW4ig04vUTj3FKSJjN1PVa2n7nx38n2DBw0Ffq2IY2xHRR6bdWnwo3gSPhByuNW2G9zXb3K33GKbn1h2CVWKOJBzg2mkwN3RE9FcUQhpSHvX7n1UnBTdH7fjqFO8BCUreKjVve0lytr9YJtHBp83LhK2Dcj3DGWddUJbqtvSAyFIAI",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);