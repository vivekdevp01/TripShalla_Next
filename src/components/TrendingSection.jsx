import React, { useState } from 'react'
import TrendingCard from './TrendingCard'
import { FaPaw, FaHiking, FaLeaf, FaOm, FaSpa } from 'react-icons/fa'

/*
Place images in public/images/:
 - trending-bg.jpg     (background for the whole section)
 - trending-1.jpg      (image for first tab)
 - trending-2.jpg
 - trending-3.jpg
 - trending-4.jpg
 - trending-5.jpg
*/

const trendingData = [
  {
    key: 'wildlife',
    icon: <FaPaw size={22} />,
    title: 'Wildlife',
    category: 'Wildlife',
    image: '/src/assets/1.jpg',
    body: "Uttarakhand's conservation reserves and national parks are teeming with flora and fauna. From tigers and elephants to rare alpine species, wildlife lovers will find abundant opportunities for safaris and nature discovery.",
  },
  {
    key: 'adventure',
    icon: <FaHiking size={22} />,
    title: 'Adventure',
    category: 'Adventure',
    image: '/src/assets/2.jpg',
    body: 'Thrill-seekers can choose from river rafting, trekking, camping, skiing and paragliding. The Himalayas offer world-class routes and experienced operators for safe adventure tourism.',
  },
  {
    key: 'wellness',
    icon: <FaLeaf size={22} />,
    title: 'Wellness',
    category: 'Wellness',
    image: '/src/assets/3.jpg',
    body: 'With yoga centres, Ayurvedic retreats and peaceful Himalayan settings, Uttarakhand is a natural destination for spiritual and physical rejuvenation.',
  },
  {
    key: 'spirituality',
    icon: <FaOm size={22} />,
    title: 'Spirituality',
    category: 'Spirituality',
    image: '/src/assets/4.jpg',
    body: 'Known as Devbhumi, the state is the home of many revered temples and pilgrimage circuits — offering deep spiritual experiences in serene mountain settings.',
  },
  {
    key: 'leisure',
    icon: <FaSpa size={22} />,
    title: 'Leisure',
    category: 'Leisure',
    image: '/src/assets/5.jpg',
    body: "For relaxed getaways, Uttarakhand's hill stations and picturesque lodges provide scenic views, cozy stays, and gentle cultural experiences.",
  },
]

export default function TrendingSection() {
  const [active, setActive] = useState(trendingData[0].key)

  const tabs = trendingData.map((d) => ({
    key: d.key,
    icon: d.icon,
    title: d.title,
  }))

  const activeData =
    trendingData.find((d) => d.key === active) || trendingData[0]

  return (
    <section
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/9.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay for contrast */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold site-serif mb-8 relative inline-block">
          <span className="absolute -left-24 top-1/2 w-20 h-[2px] bg-green-500" />
          What’s Trending
          <span className="absolute -right-24 top-1/2 w-20 h-[2px] bg-green-500" />
        </h2>

        {/* pill with icons (centered) */}
        <div className="relative z-20 -mt-6 flex justify-center">
          <div className="bg-white rounded-t-xl rounded-b-xl px-4 py-3 shadow-md flex items-center gap-6">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex flex-col items-center gap-1 text-sm px-2 py-1 focus:outline-none ${
                  active === t.key ? 'text-green-700' : 'text-gray-600'
                }`}
                aria-pressed={active === t.key}
              >
                <div
                  className={`p-1 rounded-full ${
                    active === t.key ? 'bg-green-100' : 'bg-transparent'
                  }`}
                >
                  {t.icon}
                </div>
                <div className="text-xs font-medium">{t.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* white card (below the pill) */}
        <div className="relative z-10 mt-8">
          <TrendingCard
            image={activeData.image}
            title={activeData.title}
            category={activeData.category}
            body={activeData.body}
            ctaText="Read more"
          />
        </div>
      </div>
    </section>
  )
}
