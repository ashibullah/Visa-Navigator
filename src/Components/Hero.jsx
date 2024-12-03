import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-96"
               >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Visa Navigator</h1>
                        <p className="mb-5">
                            Apply Visa easily with the help of officials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;