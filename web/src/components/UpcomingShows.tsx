import { ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import morningPreaching from "@/assets/morning-preaching.jpg";
import liveMusic from "@/assets/live-music.jpg";

interface Show {
  id: number;
  title: string;
  time: string;
  date: string;
  description: string;
  image: string;
  host: string;
}

const shows: Show[] = [
  {
    id: 1,
    title: "Morning Preaching",
    time: "8:00 AM",
    date: "Monday - Friday",
    description: "Start your day with powerful messages and spiritual guidance",
    image: morningPreaching,
    host: "Pastor Johnson"
  },
  {
    id: 2,
    title: "Live Music Every Day",
    time: "6:00 PM",
    date: "Daily",
    description: "Uplifting gospel music and worship sessions",
    image: liveMusic,
    host: "Worship Team"
  },
  {
    id: 3,
    title: "Sunday Service Live",
    time: "10:00 AM",
    date: "Sunday",
    description: "Join our live Sunday worship service and communion",
    image: morningPreaching,
    host: "Senior Pastor"
  },
  {
    id: 4,
    title: "Youth Hour",
    time: "7:00 PM",
    date: "Saturday",
    description: "Special programming for young people and teenagers",
    image: liveMusic,
    host: "Youth Pastor"
  }
];

const UpcomingShows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showsPerPage = 1;
  const maxIndex = Math.max(0, shows.length - showsPerPage);

  const nextShows = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevShows = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleShows = shows.slice(currentIndex, currentIndex + showsPerPage);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Upcoming Shows
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss our inspiring programs designed to uplift your spirit and strengthen your faith
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card shadow-card"
            onClick={prevShows}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card shadow-card"
            onClick={nextShows}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Shows Grid */}
          <div className="max-w-2xl mx-auto">
            {visibleShows.map((show) => (
              <div
                key={show.id}
                className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-xl transition-smooth group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{show.host}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {show.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {show.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{show.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentIndex 
                    ? "bg-secondary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;