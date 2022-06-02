import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Button from "../components/Button";
import EmbedIFrame from "../components/EmbedIFrame";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Stars = dynamic(() => import("../components/Stars"), { ssr: false });

const MovementOrigins = () => {
    return (
        <div>
            <Head>
                <title>Movement Origins | Hidden Stars</title>
            </Head>
            <Navbar />
            <main className="flex-1 flex flex-col py-4 min-h-screen ">
                <Stars />
                <article className="flex flex-col space-y-10 justify-center items-center min-h-screen">
                    <h1 className='text-white md:text-6xl text-3xl font-bold'>
                        Movement <span className='text-blue-500'>Origins</span>.
                    </h1>
                    <Button 
                        as="a" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ampl.ink/1OZmX">
                            Listen to Song.
                    </Button>
                    <EmbedIFrame 
                        className="border border-solid border-white md:w-[600px] md:h-[400px] w-80 h-44"
                        title="HIDDEN STAR: My Favorite Song of All Time"
                        src="https://www.youtube.com/embed/8h6mICorO6I" 
                    />
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default MovementOrigins;