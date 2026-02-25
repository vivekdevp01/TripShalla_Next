import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

/**
 * BlogGridSection - the full section that displays a grid of BlogCard components
 * Replace the `posts` array with data from your API or CMS.
 */
const posts = [
  {
    id: 1,
    image: "/src/assets/1.jpg",
    title: "Best adventures to try in Uttarakhand",
    excerpt:
      "Uttarakhand offers several activities to keep the adventure enthusiasts busy. From river rafting to trekking...",
    date: "December 22nd, 2024",
    category: "Adventure",
    tags: ["Adventure", "Spiritual", "Nature"],
    to: "/trek/kedarkantha",
  },
  {
    id: 2,
    image: "/src/assets/1.jpg",
    title: "Kumbh Mela Leap of Faith",
    excerpt:
      "What makes attending a Kumbh Mela a once-in-a-lifetime opportunity? One of the largest human gatherings on earth...",
    date: "December 21st, 2024",
    category: "Spiritual",
    tags: ["Spiritual", "Event"],
    to: "/blog/kumbh-mela-leap",
  },
  {
    id: 3,
    image: "/src/assets/1.jpg",
    title: "Beatles' magical tour of India",
    excerpt:
      "Some facts that made headlines during and after the visit Beatles to India in February 1968...",
    date: "December 22nd, 2024",
    category: "Culture",
    tags: ["Music", "History"],
    to: "/blog/beatles-india",
  },
  {
    id: 4,
    image: "/src/assets/1.jpg",
    title: "A day with the tiger",
    excerpt:
      "Travel blogger Laxmi Sarath enjoys a wildlife safari in Corbett at 4 am in the morning and the highlights were...",
    date: "December 23rd, 2024",
    category: "Wildlife",
    tags: ["Wildlife"],
    to: "/blog/a-day-with-tiger",
  },
  {
    id: 5,
    image: "/src/assets/1.jpg",
    title: "Offbeat experiences near Rishikesh",
    excerpt:
      "This is a hike of approximately 8 kilometres through stunningly beautiful reserve forests of the Garhwal region...",
    date: "December 23rd, 2024",
    category: "Adventure",
    tags: ["Adventure"],
    to: "/blog/offbeat-experiences",
  },
  {
    id: 6,
    image: "/src/assets/1.jpg",
    title: "Legends of Nainital",
    excerpt:
      "The British may have 'accidentally stumbled' upon the stunning lake in Nainital and built a colonial legacy...",
    date: "December 23rd, 2024",
    category: "History",
    tags: ["Heritage"],
    to: "/blog/legends-nainital",
  },
  {
    id: 7,
    image: "/src/assets/1.jpg",
    title: "Monsoon in Mussoorie",
    excerpt:
      "Outside the car window, the clouds seem to be floating along with us. Dodging the mountain roads in monsoon makes it...",
    date: "December 23rd, 2024",
    category: "Nature",
    tags: ["Monsoon"],
    to: "/blog/monsoon-mussoorie",
  },
  {
    id: 8,
    image: "/src/assets/1.jpg",
    title: "Where Bob Dylan fell in love",
    excerpt:
      "In Almora, hidden in the mystical Crank's Ridge, where DH Lawrence holidayed and Uma Thurman found solace...",
    date: "December 23rd, 2024",
    category: "Culture",
    tags: ["Culture"],
    to: "/blog/bob-dylan-uttarakhand",
  },
];

export default function BlogGridSection() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/8.jpg')" }}>
      {/* overlay to darken the background for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white site-serif mb-10">CHECK THIS OUT</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start">
          {posts.map((p) => (
            <div key={p.id} className="flex justify-center">
              <BlogCard {...p} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/blog" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
