import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}
    >
      {items.map((item, idx) => (
        <Link
          to={item.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({ image, children }) => {
  return (
    <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
      <img src={image} alt="Card" className="w-full h-auto" />
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardDescription = ({ children }) => {
  return (
    <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
      {children}
    </p>
  );
};

export default HoverEffect;
