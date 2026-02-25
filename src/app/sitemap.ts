import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.tripshalla.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.tripshalla.in/bungee', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tripshalla.in/raftings', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tripshalla.in/packages/camp', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.tripshalla.in/aboutus', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.tripshalla.in/gallery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.tripshalla.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}

