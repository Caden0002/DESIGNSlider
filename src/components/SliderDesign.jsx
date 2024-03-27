import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    { image: '/image1.png' },
    { image: '/image2.png' },
    { image: '/image3.png' },
    { image: '/image4.png' },
    { image: '/image5.png' },
    { image: '/image6.png' },
    { image: '/image7.png' },
    { image: '/image8.png' },
];

const SliderDesign = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary">

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:filter after:blur-3"></div>

            <div className="flex items-center justify-center text-4xl pb-8 text-textColorPrimary">
                OUR PARTNERS
            </div>
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full py-4 border-y border-textColorPrimary">
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="max-h-full" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign;
