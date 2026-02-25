import Home from '../Pagecomponents/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tripshalla | Best Adventure Sports, Camping & Rafting in Rishikesh',
  description: 'Book bungee jumping, river rafting, riverside camping and Himalayan treks in Rishikesh with Tripshalla. Certified guides, best prices guaranteed.',
  keywords: 'rishikesh adventure, bungee jumping rishikesh, river rafting rishikesh, camping rishikesh, tripshalla',
  openGraph: {
    title: 'Tripshalla | Adventure in Rishikesh',
    description: 'Book bungee jumping, river rafting, riverside camping in Rishikesh.',
    url: 'https://www.tripshalla.in',
    siteName: 'Tripshalla',
    images: [{ url: 'https://www.tripshalla.in/assets/Logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tripshalla | Adventure in Rishikesh',
    description: 'Book bungee jumping, river rafting, camping in Rishikesh.',
    images: ['https://www.tripshalla.in/assets/Logo.png'],
  },
  alternates: {
    canonical: 'https://www.tripshalla.in',
  },
}
export default function Page() {
  return <Home />
}