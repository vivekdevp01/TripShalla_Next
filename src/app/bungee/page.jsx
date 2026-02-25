import ActivityGrid from '../../components/ActivityGrid'
export const metadata = {
  title: 'Bungee Jumping in Rishikesh | Best Price 2026 | Tripshalla',
  description: 'Book bungee jumping at Splash Bungy Rishikesh. 109 metres high, free DSLR video, certified operators. Starting ₹3,999. Book now with Tripshalla.',
  keywords: 'bungee jumping rishikesh, splash bungy, adventure sports rishikesh, zipline rishikesh',
  openGraph: {
    title: 'Bungee Jumping in Rishikesh | Tripshalla',
    description: '109 metre bungee jumping in Rishikesh. Free DSLR video included.',
    url: 'https://www.tripshalla.in/bungee',
    images: [{ url: 'https://www.tripshalla.in/assets/101.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.tripshalla.in/bungee',
  },
}
export default function Page() { return <ActivityGrid /> }