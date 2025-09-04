import React from 'react';

const SponsorInfo = () => {
    return (
        <section className='h-fit w-[90%] flex flex-col items-center justify-center p-4 mt-[30%] md:p-8 text-white'>
            <div className='w-full max-w-7xl flex flex-col mx-auto items-center justify-center'>
                <h2 className='font-neuropol text-3xl bg-white/10 backdrop-blur-md md:text-5xl rounded-full p-10 font-bold text-center mb-12 shadow-xl/30 w-fit'>
                    Let's talk numbers!
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                    {/* Card 1 */}
                    <div className="bg-white/10 backdrop-blur-md border w-auto border-white/20 rounded-3xl shadow-xl/30 p-8 h-96 flex items-center justify-center">
                        <p className="text-xl">Graph 1 Area</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white/10 backdrop-blur-md border w-auto border-white/20 rounded-3xl shadow-xl/30 p-8 h-96 flex items-center justify-center">
                        <p className="text-xl">Graph 2 Area</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white/10 backdrop-blur-md border w-auto border-white/20 rounded-3xl shadow-xl/30 p-8 h-96 flex items-center justify-center">
                        <p className="text-xl">Info/Reviews Area</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorInfo;