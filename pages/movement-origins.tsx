import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Typist from "react-typist";
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
            <main className="sm:pt-[25vh] flex-1 flex flex-col py-4 min-h-screen ">
                <Stars />
                <article className="flex flex-col space-y-10 sm:justify-start justify-center  items-center min-h-screen">
                    <Typist cursor={{ show: false }}>
                        <h1 className='text-white md:text-6xl text-3xl font-bold'>
                            Movement <span className='text-blue-500'>Origins</span>.
                        </h1>
                    </Typist>
                    <Button 
                        as="a" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ampl.ink/1OZmX">
                           <div className="flex space-x-2">
                                <FontAwesomeIcon width={15} icon={faHeadphonesSimple} />
                                <span>Listen to Song.</span>
                           </div>
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