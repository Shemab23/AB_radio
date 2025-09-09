import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpcomingShows from "@/components/UpcomingShows";
import Footer from "@/components/Footer";
import { Heart, Users, Radio, Star, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SinglePage = () => {
  const stats = [
    { icon: Users, number: "50K+", label: "Active Listeners" },
    { icon: Radio, number: "24/7", label: "Broadcasting" },
    { icon: Heart, number: "15+", label: "Years of Service" },
    { icon: Star, number: "4.9", label: "App Rating" },
  ];

  const values = [
    {
      title: "Faith-Centered",
      description: "Every program is designed to strengthen your relationship with God and inspire spiritual growth."
    },
    {
      title: "Community Focused",
      description: "We bring believers together through shared worship, prayer, and uplifting messages."
    },
    {
      title: "Excellence in Broadcasting",
      description: "High-quality audio, professional production, and content that speaks to the heart."
    },
    {
      title: "Accessible Everywhere",
      description: "Available on multiple platforms so you can stay connected to your faith anywhere, anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Upcoming Shows Section */}
        <section id="upcoming">
          <UpcomingShows />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 lg:py-24">
          {/* Mission Section */}
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                About AB Radio
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At AB Radio, our mission is to inspire, encourage, and uplift listeners through 
                the power of gospel music, biblical teachings, and faith-based programming. We 
                believe that radio has the unique ability to reach people in their daily lives, 
                bringing comfort during difficult times and joy in moments of celebration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're starting your morning with devotions, seeking encouragement during 
                your commute, or winding down with peaceful worship music, AB Radio is here to 
                walk alongside you in your spiritual journey.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-muted/30 py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-secondary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Our Core Values
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  These principles guide everything we do at AB Radio
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {values.map((value, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Join Our Community Today
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Experience the difference that faith-based radio can make in your daily life. 
                Download our app or tune in online to start your journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black rounded-lg px-6 py-3 flex items-center justify-center gap-2 shadow-button hover:bg-gray-800 transition-smooth text-white font-semibold">
                  📱 App Store
                </button>
                <button className="bg-black rounded-lg px-6 py-3 flex items-center justify-center gap-2 shadow-button hover:bg-gray-800 transition-smooth text-white font-semibold">
                  🤖 Google Play
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePage;