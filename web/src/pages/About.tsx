import { Heart, Users, Radio, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About AB Radio
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Spreading the Gospel through the airwaves since 2009, AB Radio has been a beacon of hope 
            and inspiration for thousands of believers around the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Our Mission
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
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
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20">
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
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Community Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that faith-based radio can make in your daily life. 
            Download our app or tune in online to start your journey with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              📱 Download App
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              🎧 Listen Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;