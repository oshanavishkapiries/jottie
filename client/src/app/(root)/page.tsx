import React from 'react';
import Image from 'next/image';

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Navbar/>


            <section className="mx-auto relative mt-4 w-full h-[80vh] overflow-hidden px-3">
                <article className="grid gap-4 text-center relative z-10 pt-10">
                    <h1 className="2xl:text-6xl xl:text-5xl md:text-5xl  text-3xl font-semibold bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text leading-[100%] tracking-tighter">
                        Your Personal Digital Notebook
                    </h1>
                    <span className="text-gray-600 max-md:text-sm">
                        Keep your ideas, thoughts, and tasks organized effortlessly.
                        <br/>
                        Jottie makes note taking intuitive and fun.
                    </span>
                    <div className='flex flex-row mx-auto mt-8'>
                        <Image className='hidden md:block'
                            src={'https://shorturl.at/US27j'}
                            width={200}
                            height={200}
                            alt='hero_img'/>
                        <Image src={'https://shorturl.at/SKLzg'}
                            width={200}
                            height={200}
                            alt='hero_img'/>
                    </div>
                </article>
            </section>


            <Footer/>
        </div>
    );
}
