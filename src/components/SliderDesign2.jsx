import React from 'react';
import { motion } from 'framer-motion';
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const slides = [
    { icon: <FigmaLogoIcon /> },
    { icon: <TwitterLogoIcon /> },
    { icon: <GitHubLogoIcon /> },
    { icon: <InstagramLogoIcon /> },
    { icon: <LinkedInLogoIcon /> },
    { icon: <DiscordLogoIcon /> },
    { icon: <SketchLogoIcon /> },
    { icon: <NotionLogoIcon /> },
    { icon: <VercelLogoIcon /> },
];



const SliderDesign2 = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-backgroundColorQuaternary mx-auto" style={{ width: "50%" }}>

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-backgroundColorQuaternary before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-backgroundColorQuaternary after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {slide.icon}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
