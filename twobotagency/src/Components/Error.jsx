import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const Error = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-brand-purple/10 blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-brand-magenta/10 blur-[120px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-extrabold text-[8rem] sm:text-[10rem] md:text-[12rem] leading-none gradient-text select-none">
            404
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-foreground mt-2 mb-3"
        >
          Page not found
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-magenta text-white font-semibold shadow-lg hover:shadow-brand-purple/25 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;