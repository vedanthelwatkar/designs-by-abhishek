import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "@motionone/utils";

const ScrollingCities = () => {
  const cities = [
    "MUMBAI",
    "JAIPUR",
    "DELHI",
    "KOCHI",
    "BANGALORE",
    "CHENNAI",
    "KOLKATA",
    "HYDERABAD",
    "PUNE",
    "AHMEDABAD",
    "SURAT",
    "LUCKNOW",
  ];

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 0.5 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="py-20 overflow-hidden bg-black">
      <motion.div
        className="flex whitespace-nowrap text-8xl font-bold text-white/20"
        style={{ x }}
      >
        {[...cities, ...cities, ...cities].map((city, i) => (
          <span key={i} className="mr-16">
            {city}
          </span>
        ))}
      </motion.div>

      {/* Second row moving opposite direction */}
      <motion.div
        className="flex whitespace-nowrap text-6xl font-bold text-white/10 mt-8"
        style={{
          x: useTransform(baseX, (v) => `${wrap(-45, -20, v * -0.5)}%`),
        }}
      >
        {[...cities.slice().reverse(), ...cities.slice().reverse()].map(
          (city, i) => (
            <span key={i} className="mr-20">
              {city}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
};

export default ScrollingCities;
