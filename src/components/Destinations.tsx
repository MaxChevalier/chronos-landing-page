import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    era: "Ancient Egypt",
    year: "2500 BCE",
    description: "Witness the construction of the Great Pyramids and walk among pharaohs.",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80",
  },
  {
    id: 2,
    era: "Renaissance Florence",
    year: "1492 CE",
    description: "Meet Leonardo da Vinci and experience art's golden age firsthand.",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1543429258-c5ca3ea3f617?w=800&q=80",
  },
  {
    id: 3,
    era: "Future Tokyo",
    year: "2150 CE",
    description: "Explore the neon-lit megacity where humanity touches the stars.",
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Destinations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Curated Eras
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked moments in history, each offering a unique luxury experience 
            across the tapestry of time.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              className="card-luxury group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.era}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-sm">
                  <span className="text-gold text-sm font-medium">{destination.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-gold transition-colors">
                  {destination.era}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {destination.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-gold" />
                    <span>Private Tour</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-outline-gold">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
