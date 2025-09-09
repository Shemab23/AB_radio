import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpcomingShows from "@/components/UpcomingShows";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UpcomingShows />
      </main>
      <Footer />
    </div>
  );
};

export default Home;