import React from 'react';
import { motion } from 'framer-motion';

import adobe from '/tools/toolsadobe.svg';
import canva from '/tools/toolscanva.svg';
import figma from '/tools/toolsfigma.svg';
import framer from '/tools/toolsfm.svg';
import google from '/tools/toolsgas.svg';
import github from '/tools/toolsgithub.svg';
import gpt from '/tools/toolsgpt.svg';
import illus from '/tools/toolsills.svg';
import netlify from '/tools/toolsnetlify.svg';
import photoshop from '/tools/toolsps.svg';
import python from '/tools/toolspy.svg';
import reactLogo from '/tools/toolsreact.svg';
import tailwind from '/tools/toolstw.svg';
import webstorm from '/tools/toolsws.svg';
import js from '/tools/toolsjs.svg';
import html from '/tools/toolshtml.svg';
import css from '/tools/toolscss.svg';


const slides = [
    adobe,
    canva,
    figma,
    framer,
    google,
    github,
    gpt,
    illus,
    netlify,
    photoshop,
    python,
    reactLogo,
    tailwind,
    webstorm,
    js,
    html,
    css,
];

function IconSlider() {
    // Calculate the necessary width for one cycle of slides
    const slideWidth = 200 / slides.length;
    const duplicatedSlides = [...slides, ...slides]; // Duplicate for looping

    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: ['-200%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 24,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${slideWidth}%` }}>
                        <img src={slide} alt={slide.alt} className="h-8 w-8 sm:h-16 sm:w-16 object-contain" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default IconSlider;