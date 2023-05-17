import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.divideproject.com',
      lastModified: new Date(),
    },
  ];
}