import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.divideproject.com',
      lastModified: new Date(),
    },
    {
      url: "https://www.divideproject.com/sign-in",
      lastModified: new Date()
    },
    {
      url: "https://www.divideproject.com/dashboard",
      lastModified: new Date()
    },
    {
      url: "https://www.divideproject.com/dashboard/new-project",
      lastModified: new Date()
    },
  ];
}