import { useState } from "react";
import { Search, MapPin, Clock, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSearch() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("trek");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState(20000);

  const handleSearch = () => {
    navigate(
      `/search?category=${category}&location=${location}&duration=${duration}&budget=${budget}`
    );
  };

  return (
    <div className="absolute top-[70%] left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-6xl">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] px-6 py-5">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

          {/* Experience */}
          <div className="md:col-span-1">
            <label className="text-xs font-semibold text-slate-500">
              Experience
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full h-[44px] rounded-lg border px-3 text-sm focus:ring-2 focus:ring-orange-500"
            >
              <option value="trek">Trek</option>
              <option value="camp">Camp</option>
              <option value="rafting">Rafting</option>
              <option value="activity">Adventure</option>
              <option value="hotel">Hotel / Hostel</option>
              <option value="bike">Bike Rent</option>
            </select>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-slate-500">
              Location
            </label>
            <div className="mt-1 relative">
              <MapPin size={16} className="absolute left-3 top-3 text-slate-400" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Rishikesh, Auli, Chopta"
                className="pl-9 w-full h-[44px] rounded-lg border text-sm px-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="md:col-span-1">
            <label className="text-xs font-semibold text-slate-500">
              Duration
            </label>
            <div className="mt-1 relative">
              <Clock size={16} className="absolute left-3 top-3 text-slate-400" />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="pl-9 w-full h-[44px] rounded-lg border text-sm px-3 focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Any</option>
                <option value="1">Upto 1 day</option>
                <option value="2-3">2–3 days</option>
                <option value="4-5">4–5 days</option>
                <option value="6+">6+ days</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="md:col-span-1">
            <label className="text-xs font-semibold text-slate-500">
              Max Budget
            </label>
            <div className="mt-1 relative">
              <IndianRupee
                size={16}
                className="absolute left-3 top-3 text-slate-400"
              />
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="pl-9 w-full h-[44px] rounded-lg border text-sm px-3 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Search */}
          <div className="md:col-span-1 mt-5 md:mt-6">
            <button
              onClick={handleSearch}
              className="w-full h-[44px] bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition active:scale-95"
            >
              <Search size={18} />
              Search
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Showing experiences only in Uttarakhand
        </p>
      </div>
    </div>
  );
}
