import React from 'react';
import IconSlider from './IconSlider'; // Adjust the import path as necessary
const background = "bg-backgroundColorPrimary";

const header = "Tools behind the magic";

const SliderDesign3 = () => {
    return (
        <div className={`relative h-full flex ${background}`}>
            <div className="container max-w-none mx-auto relative flex flex-col my-24">
                <div className="mb-12 text-4xl sm:text-6xl font-BG whitespace-pre-line text-center tracking-tighter">
                    {header}
                </div>
                <IconSlider />
            </div>
        </div>
    );
};

export default SliderDesign3;
