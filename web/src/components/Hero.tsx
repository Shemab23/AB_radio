import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(251, 146, 60, 0.8) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/30" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Tune In to Your Daily Dose of{" "}
          <span className="bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
            Inspiration
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          You can find our app on both play store and apple store. Download now and 
          stay connected in faith wherever you go!
        </p>

        <div className="flex justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="glass text-white border-white/30 hover:bg-white/20 font-semibold"
          >
            🎧 Listen Live
          </Button>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm mb-4">Free Download</p>
          <div className="flex justify-center gap-4">
            <button className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 shadow-button hover:bg-gray-800 transition-smooth">
              <span className="text-white text-xs">📱 App Store</span>
            </button>
            <button className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 shadow-button hover:bg-gray-800 transition-smooth">
              <span className="text-white text-xs">🤖 Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;