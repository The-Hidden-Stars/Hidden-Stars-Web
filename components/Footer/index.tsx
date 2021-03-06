import Link from "next/link";
import React, { HTMLProps } from "react";
import { faInstagram, faSpotify, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IFooterSocialIcon {
    icon: IconProp,
    href?: string; 
}

const FooterSocialIcon : React.FC<IFooterSocialIcon> = ({ icon, href, ...props }) => {
    return (
        <a rel="noopener noreferrer" target={"_blank"} href={href || "/"} { ...props }>
            <FontAwesomeIcon className="text-gray-400 w-4" icon={icon} />
        </a>
    )
};

interface IFooterItemProps extends HTMLProps<HTMLAnchorElement>{
    link?: string; 
}

const FooterItem : React.FC<IFooterItemProps> = ({ children, link, href,...props }) => {
    return (
        <li className="mb-4">
            <Link href={href || link || "#"} passHref>
                <a rel="noopener roreferrer" className="hover:underline" { ...props }>
                    { children }
                </a>
            </Link>
        </li>
    )
};

const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="grid border-y border-gray-800 grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Sitemap</h2>
                    <ul className="text-gray-300">
                        <FooterItem link="/">Home</FooterItem>
                        <FooterItem link="/#about">Our Misson</FooterItem>
                        <FooterItem link="/#founder">Founder</FooterItem>
                        <FooterItem link="/movement-origins">Movement Origins</FooterItem>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Support Us</h2>
                    <ul className="text-gray-300">
                        <FooterItem target="_blank" link="https://discord.com/invite/CA9AEyWSGr">Join Discord Server</FooterItem>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Contact</h2>
                    <ul className="text-gray-300">
                        <FooterItem target="_blank" link="https://www.instagram.com/thehiddenstarmovement/">Instagram</FooterItem>
                        <FooterItem target="_blank" link="https://twitter.com/abhikosuru">Twitter</FooterItem>
                        <FooterItem target="_blank" link="mailto:thehiddenstarmovement@gmail.com?subject=Message%20for%20The%20Hidden%20Stars%20Movement">Email</FooterItem>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Platforms</h2>
                    <ul className="text-gray-300">
                        <FooterItem target="_blank" link="https://open.spotify.com/show/2s969xZwt721aR6qKvubUY?si=3f7c26d01e1448c3 
">Spotify</FooterItem>
                        <FooterItem target="_blank" link="https://www.youtube.com/channel/UCi5CqFxakUx3hpPf0i13IRQ/videos">Youtube</FooterItem>
                    </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-black bg-opacity-20 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">
                    ?? 2022 <Link href={"/"} passHref><a>The Hidden Stars???</a></Link>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0 items-center">
                    <FooterSocialIcon href="https://open.spotify.com/show/2s969xZwt721aR6qKvubUY?si=3f7c26d01e1448c3" icon={faSpotify}/>
                    <FooterSocialIcon href="https://www.youtube.com/channel/UCi5CqFxakUx3hpPf0i13IRQ/videos" icon={faYoutube}/>
                    <FooterSocialIcon href="https://www.instagram.com/thehiddenstarmovement/" icon={faInstagram}/>
                    <FooterSocialIcon href="https://twitter.com/abhikosuru" icon={faTwitter}/>
                    <FooterSocialIcon href="mailto:thehiddenstarmovement@gmail.com?subject=Message%20for%20The%20Hidden%20Stars%20Movement" icon={faEnvelope}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 