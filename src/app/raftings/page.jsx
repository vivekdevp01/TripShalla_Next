import ActivityGrid from '../../components/ActivityGrid'
export const metadata = {
  title: 'River Rafting in Rishikesh | Ganga Rafting 2026 | Tripshalla',
  description: 'Book river rafting in Rishikesh on the Ganga. 9km to 26km stretches, Grade III+ rapids, certified guides. Starting @399. Best rafting experience guaranteed.',
  keywords: 'river rafting rishikesh, ganga rafting, white water rafting rishikesh, rafting packages',
  openGraph: {
    title: 'River Rafting in Rishikesh | Tripshalla',
    description: 'Book Ganga rafting in Rishikesh. 9km to 26km stretches starting ₹400.',
    url: 'https://www.tripshalla.in/raftings',
    images: [{ url: 'https://www.tripshalla.in/assets/21.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.tripshalla.in/raftings',
  },
}
export default function Page() { return <ActivityGrid /> }