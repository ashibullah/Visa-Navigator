const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full  ">
                <div className="bg-blue-300 text-start w-full ">
                    <div className="flex flex-col justify-center p-40 space-y-8 ">
                        <h1 className="text-5xl font-bold">Effortless Steps</h1>
                        <p className="">
                            Simplify your journey with clear, detailed guidance at every stage. From understanding requirements to completing processes, we provide all the essential information you need, making transitions smooth, stress-free, and well-organized. Take the hassle out of planning and move forward with confidence.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full  ">
                <div className="bg-yellow-300 text-start w-full ">
                    <div className="flex flex-col justify-center p-40 space-y-8">
                        <h1 className="text-5xl font-bold">Seamless Journeys</h1>
                        <p className="">
                            Navigate your plans with ease using step-by-step guidance tailored to your needs. Whether it’s understanding formalities or meeting requirements, we’ve got you covered for a smooth experience every time.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full  ">
                <div className="bg-purple-300 text-start w-full ">
                    <div className="flex flex-col justify-center p-40 space-y-8 ">
                        <h1 className="text-5xl font-bold">Your Trusted Path</h1>
                        <p className="">
                            Feel confident at every step with reliable and comprehensive information. We simplify even the most complex tasks so you can focus on what matters—achieving your goals effortlessly.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <div className="bg-orange-300 text-start w-full ">
                    <div className="flex flex-col justify-center p-40 space-y-8 ">
                        <h1 className="text-5xl font-bold">Clear Directions</h1>
                        <p className="">
                            With clear, actionable insights and a structured approach, we eliminate confusion and ensure you stay on track. Start your journey prepared and make every step count.
                        </p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
