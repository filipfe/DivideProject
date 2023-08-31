import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.divideproject.com/en',
      lastModified: new Date(),
    },
    {
      url: 'https://www.divideproject.com/pl',
      lastModified: new Date(),
    },
  ];
}