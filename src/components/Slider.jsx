import React from 'react';
import { motion } from 'framer-motion';

// Define the array of slides with numbers
const slides = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
];

const Slider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 5,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full text-6xl">
                            {slide.number}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;
