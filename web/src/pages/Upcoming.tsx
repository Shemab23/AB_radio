import { Clock, Calendar, User, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  duration: string;
  status: "live" | "upcoming" | "past";
}

const shows: Show[] = [
  {
    id: 1,
    title: "Morning Preaching",
    time: "8:00 AM",
    date: "Monday - Friday",
    description: "Start your day with powerful messages and spiritual guidance from our senior pastor. Join us for inspiring sermons that will strengthen your faith and provide wisdom for daily living.",
    image: morningPreaching,
    host: "Pastor Johnson",
    duration: "60 mins",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Live Music Every Day",
    time: "6:00 PM",
    date: "Daily",
    description: "Uplifting gospel music and worship sessions featuring our talented worship team. Experience the power of praise through contemporary and traditional gospel songs.",
    image: liveMusic,
    host: "Worship Team",
    duration: "90 mins",
    status: "live"
  },
  {
    id: 3,
    title: "Sunday Service Live",
    time: "10:00 AM",
    date: "Sunday",
    description: "Join our complete Sunday worship service broadcast live from our sanctuary. Experience communion, worship, and powerful preaching from wherever you are.",
    image: morningPreaching,
    host: "Senior Pastor",
    duration: "120 mins",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Youth Hour",
    time: "7:00 PM",
    date: "Saturday",
    description: "Special programming designed for young people and teenagers. Contemporary music, relevant messages, and discussions about faith in today's world.",
    image: liveMusic,
    host: "Youth Pastor",
    duration: "45 mins",
    status: "upcoming"
  },
  {
    id: 5,
    title: "Prayer & Meditation",
    time: "6:00 AM",
    date: "Tuesday & Thursday",
    description: "Start your day in peaceful reflection with guided prayer and meditation. Find inner peace and spiritual refreshment before beginning your daily activities.",
    image: morningPreaching,
    host: "Pastor Maria",
    duration: "30 mins",
    status: "upcoming"
  },
  {
    id: 6,
    title: "Gospel Classics",
    time: "3:00 PM",
    date: "Wednesday",
    description: "Journey through the greatest gospel songs of all time. Featuring classic hymns and timeless gospel music that has inspired generations of believers.",
    image: liveMusic,
    host: "DJ Grace",
    duration: "120 mins",
    status: "upcoming"
  }
];

const getStatusBadge = (status: Show["status"]) => {
  switch (status) {
    case "live":
      return <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">🔴 LIVE</span>;
    case "upcoming":
      return <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">⏰ UPCOMING</span>;
    case "past":
      return <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full font-medium">📺 PAST</span>;
  }
};

const Upcoming = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Upcoming Shows
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't miss our inspiring programs designed to uplift your spirit and strengthen your faith. 
            Tune in for powerful messages, worship music, and community fellowship.
          </p>
        </div>
      </section>

      {/* Shows Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-xl transition-smooth group"
              >
                <div className="relative">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    {getStatusBadge(show.status)}
                  </div>

                  {/* Play Button for Live Shows */}
                  {show.status === "live" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="bg-secondary hover:bg-secondary/90 text-white w-16 h-16 rounded-full shadow-button">
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{show.title}</h3>
                    <p className="text-sm opacity-90">{show.host}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {show.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{show.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{show.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {show.status === "live" ? (
                      <Button variant="secondary" size="sm" className="flex-1">
                        🎧 Listen Live
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1">
                        🔔 Set Reminder
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Never Miss a Show
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Download our mobile app to get notifications for your favorite shows and listen anywhere, anytime.
          </p>
          <Button variant="secondary" size="lg">
            📱 Download App
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Upcoming;