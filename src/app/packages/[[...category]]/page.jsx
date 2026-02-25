import Packages from '../../../components/Packages'

export const metadata = {
  title: 'Riverside Camping in Rishikesh | Luxury Camp Packages | Tripshalla',
  description: 'Book the best riverside camping in Rishikesh near the Ganga. Luxury tents, bonfires, stargazing and adventure activities included. Best prices with Tripshalla.',
  keywords: 'camping rishikesh, riverside camping, luxury camping rishikesh, camp packages uttarakhand',
  openGraph: {
    title: 'Riverside Camping in Rishikesh | Tripshalla',
    description: 'Luxury riverside camping near Ganga in Rishikesh. Bonfires, stargazing included.',
    url: 'https://www.tripshalla.in/packages/camp',
    images: [{ url: 'https://www.tripshalla.in/assets/camp1.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.tripshalla.in/packages/camp',
  },
}

export default function Page() { return <Packages /> }