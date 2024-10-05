import Image from 'next/image';

import "./css/styles.css";
import Gitlogo from "./../images/github-mark/github-mark-white.svg";
import ReactLogo from "./../images/react-2.svg";
import NextLogo from "./../images/nextjs-icon-svgrepo-com.svg";
import TailwindLogo from "./../images/tailwind-css-2.svg";
import DiscordJsLogo from "./../images/Discord.js.svg";

function displayImgText(href:string, src:string, alt:string){
    return (
        <a className="Logo" href={href}><Image className="Logo" src={src} alt={alt}></Image></a>
    )

}
export default function Home() {
    return (
        <div className="home">
            <div className="source">
                <a className="sourceBtn" href="https://github.com/rate429/substitute-day-Riley-Rager">
                    <Image className="sourceBtnImage"src={Gitlogo} alt="GitHub" />
                </a>
            </div>
            <div className="content">
                <h1 className="text font-bold">Today’s a sub day, but I’m still learning how to code!</h1>
                <p className="text ">I have learned how to use react{displayImgText("https://nextjs.org/",ReactLogo,"react.dev")} and nextjs{displayImgText("https://nextjs.org/",NextLogo,"Nextjs.org")} to make webpages. I have also learned how to use tailwind{displayImgText("https://tailwindcss.com/",TailwindLogo,"tailwindcss.com")} css classes and have started learning the discord.js{displayImgText("https://discord.js.org/",DiscordJsLogo,"Discord.js.org")}API</p>
                <ul>
                    <li className="text">!DOCTYPE html tells the browser that the document is in html</li>
                    <li className="text">script allows the use of javascript in the webpage</li>
                    <li className="text">link is used for linking documents to the html</li>
                    
                </ul>
                <h2 className="text font-bold">What I Like About Web Development.</h2>
                <p className="text">For me I would have to say, I like to trubleshoot. This is becasue it is fun to see where I messed up and learn from it or spend days trying to fix somthing simple.</p>
                <h3 className="text font-bold">Riley Rager, Period 7</h3>
            </div>
        </div>
    );
}