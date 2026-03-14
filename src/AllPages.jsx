import React from "react";
import { useState } from "react";
import { info } from "autoprefixer";
import Mode from "./Mode";
import Contact from "./Contact";
import { Navigate, useNavigate } from "react-router-dom";
import dp3 from "./dp3.jpg";

// THIS PROJECT PAGE

import { useContext } from "react";
import Navbar from "./Navbar";
import { DataContext } from "./UserContext/Context";
import { href } from "react-router-dom";
import NetworkingBasic from "./NetworkingBasic.jpg";
import NetworkingBadge from "./NetworkingBasicBadge.jpg"
import introToCyberByCisco from "./IntroToCyberByCisco.jpg"
import LiunxBasicByTHM from "./LiunxBasicByTHM.jpg"

// THIS IS CONTECT PAGE

import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";


function AllPages() {

    //THIS IS ABOUT PAGE
    const navigate = useNavigate()
    const [content, SetContent] = useState("about")

    const contactMe = () => {
        navigate("/Contact")
    }
    const CV = () => {
        window.open("/Resume_v0 (1).pdf", "_blank")

    }

    const renderContent = () => {
        if (content === "about") {
            return <p>
I’m Viren Rao, a BCA student at JSPM University with a growing passion for Cybersecurity. I’m focused on developing skills in threat detection, incident response, log analysis, and SIEM monitoring. Through hands-on labs and academic projects, I’ve gained practical experience identifying security alerts and analyzing potential threats.

I’m eager to begin my journey as a defence, contribute to real-world security operations, and continue expanding my knowledge in the cybersecurity field.            </p>
        } else if (content === "skill") {
            return <>
            <div>
                <div>
                    <h3 className="text-lg font-semibold mt-4">Cybersecurity Skills:</h3>
                    <ul className="flex ml-4 md:ml-7 mt-6 flex-col list-disc">
                        <li className="self-start">Threat Detection & Analysis</li>
                        <li className="self-start">Incident Response Basics</li>
                        <li className="self-start">Log Analysis Fundamentals</li>
                        <li className="self-start">SIEM Monitoring Introduction</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mt-4">Technical Skills:</h3>
                    <ul className="flex ml-4 md:ml-7 mt-6 flex-col list-disc">
                        <li className="self-start">Networking Basics</li>
                        <li className="self-start">Linux Fundamentals</li>
                        <li className="self-start">Basic Scripting (Python , Bash)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mt-4">Tools & platforms:</h3>
                    <ul className="flex ml-4 md:ml-7 mt-6 flex-col list-disc">
                         <li className="self-start">SIEM (Splunk, QRadar)</li>
                       <li className="self-start">Wireshark</li>
                        <li className="self-start">Kali Linux</li>
                        <li className="self-start">TryHackMe & Hack The Box</li>
                    </ul>
                </div>
            </div>
            </>
            
        }
    }
    // <ul className="flex ml-4 md:ml-7 mt-6 flex-col list-disc">
    //         //     <li className="self-start">HTML/CSS </li>
    //         //     <li className="self-start">JavaScript</li>
    //         //     <li className="self-start">React Js</li>
    //         //     <li className="self-start">Node Js</li>
    //         //     <li className="self-start">MongoDb</li>
    //         // </ul>

    // THIS IS PROJECT PAGE 

    const Myproject = useContext(DataContext)
    const renderProject = Myproject.map((p, i) => {
        return (
            <div
                key={i}
                className="w-full md:w-3/4 lg:w-[70rem] h-auto p-4 py-8 border-[4px] border-yellow-200 rounded-lg bg-gray-200 shadow-lg shadow-yellow-200 flex flex-col items-center m-2 md:m-4 my-4 md:my-6 hover:scale-105 hover:shadow-yellow-400 transition-all duration-200"
            >
                <div className="flex flex-col md:flex-row border-[3px] p-1 border-black rounded-md w-full justify-center items-center gap-2">
                    <img src={p.img} className="w-full md:w-[200px] lg:w-[300px] border-none mb-2 md:mb-0" />
                    <img src={p.img2} className="w-full md:w-[200px] lg:w-[300px] m-0 md:m-1 mb-2 md:mb-0" />
                    <img src={p.img3} className="w-full md:w-[200px] lg:w-[300px] m-0 md:m-1" />
                </div>
                <h1 className="font-bold text-lg md:text-xl my-2 text-black text-center">{p.ProjectName}</h1>
                <p className="text-black text-sm md:text-base text-center">{p.Dese}</p>
                <div className="flex flex-col sm:flex-row gap-2 m-2 justify-center">
                    <a href={p.link} target="_blank"  >
                        <button className="border border-blue-400 px-3 py-1 text-blue-500 rounded-md mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                            Deploy Link
                        </button>
                    </a>
                    <a href={p.Gitup} target="_blank" >
                        <button className="border border-blue-400 px-3 py-1 text-blue-500 rounded-md mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                            View Gitup
                        </button>
                    </a>
                </div>
            </div>
        );
    });

    // THIS IS CONTACT PAGE

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs.sendForm(
            'service_ahn0pnq',
            'template_ikaotxo',

            e.target,
            'tbZF-h3LtMSFB_LLo'
        ).then(
            (result) => {
                alert("Message sent!")
            },
            (error) => {
                alert("Failed to sent Message..Try again later")
            }
        )

        setName("");
        setEmail("");
        setMessage("");

    }

    // BLOG PAGE / Project Page

     const handleClickBlog = () => {
        navigate('/blog');
    }


    return (

        <>
            {/* //THIS IS ABOUT PAGE */}

            <div className="font-sans flex min-h-screen w-full justify-center items-center bg-transparent">
                <div className="flex flex-col lg:flex-row py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full max-w-6xl">
                    {/* <div className="h-[220px] w-[180px]  sm:h-[300px] sm:w-[240px] lg:h-[350px] lg:w-[400px] bg-gray-100 rounded-md p-1 overflow-hidden  drop-shadow-yellow duration-300 transition mx-auto lg:mx-0 mb-6 lg:mb-0 lg:mr-8">
                    <img className="rounded-md w-full h-full  object-conver   " src={dp3} alt="Profile" />
                </div> */}
                    <div className="flex flex-col justify-start items-center  lg:items-center w-full  md:mt-2 xs:mt-[30px] ">
                        <h1 className="text-[24px] sm:text-[28px] justify-center md:text-[50px] md:justify-center   mt-2 font-bold text-center lg:text-left pb-2">
                            About <span className="text-yellow-400">Me</span>
                        </h1>
                        <div className="p-1 w-full max-w-xl text-wrap lg:mt-6 md:mt-6 ">
                            <div className="flex justify-center lg:justify-start mb-3">
                                <button
                                    onClick={() => SetContent("about")}
                                    className="px-2 rounded-2xl mr-2 text-[15px]  border-yellow-300 border-[3px] bg-white text-yellow-500 font-semibold focus:bg-yellow-400 focus:text-white"
                                >About</button>
                                <button
                                    onClick={() => SetContent("skill")}
                                    className="px-2 rounded-2xl text-[15px] border-yellow-300 border-[3px] bg-white text-yellow-500 font-semibold focus:bg-yellow-400 focus:text-white"
                                >Skill's</button>
                            </div>
                            <div>
                                {renderContent()}
                            </div>
                        </div>
                        <div className="mt-8 px-0 sm:px-8 flex flex-col sm:flex-row gap-4 w-full justify-center ">
                            <button onClick={CV} className="px-6 py-2 border-[4px]  border-yellow-300 text-yellow-500 bg-white active:bg-yellow-400 active:text-white font-semibold rounded-full hover:scale-105">
                                Download CV
                            </button>
                            <button
                                onClick={() => {
                                    const section = document.getElementById("contact");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="px-6 py-2 border-[4px] border-yellow-300 bg-white text-yellow-500 active:bg-yellow-400 active:text-white font-semibold rounded-full hover:scale-105"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* THIS PROJECT PAGE */}



            <div className="py-16 text-center flex flex-col items-center   h-full w-full">
                <h2 className="text-4xl font-bold mb-8"> <span className="text-yellow-400 pr-2" >My</span><i>Achievement</i></h2>
                <div className=" flex flex-col m-3  ">

                    <div className="flex flex-row flex-wrap border-[3px] p-2 w-full  items-center gap-2">
                        <div className="flex flex-col md:flex-row border-[3px] p-1 border-none  justify-center items-center gap-2 ">
                            {/* First Certifi */}
                            <div className="flex flex-col  w-[400px] h-[350px] md:flex-col  p-1 border-none rounded-md bg-gray-300   justify-center items-center ">
                                <div className="flex flex-row  md:flex-row border-[3px] p-1 border-none rounded-md w-auto justify-center items-center " >
                                    <img src={NetworkingBasic} className="w-[300px]  border-none mb-2 md:mb-0" />
                                </div>
                                <div>
                                    <h1 className="font-mono text-[15px] md:text-xl my-2 text-black text-center">Networking foundation by Linkedin</h1>
                                    <a target="_blank"
                                        href="public\CertificateOfCompletion_Networking Foundations Networking Basics.pdf"
                                    >
                                        <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                            View 
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Second Certifi */}
                        <div className="flex flex-col w-[400px] h-[350px] md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300  justify-center items-center ">
                            <div className="flex flex-row w-[240px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
                                <img src={NetworkingBadge} className="w-auto border-none mb-2 md:mb-0" />
                            </div>
                            <div>
                                <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Networking Basic by Cisco</h1>
                                <a target="_blank"
                                    href="https://www.credly.com/badges/1f2a2838-634f-445e-ad56-674aa20c729d"
                                >
                                    <button className="border m-2 border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        View 
                                    </button>
                                </a>
                                  <a target="_blank"
                                    href="/public\Cisco Networking Academy_ Networking Basics.pdf"
                                >
                                    <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        Score 
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Third Certifi */}
                        <div className="flex flex-col  w-[400px] h-[350px]  md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300  justify-center items-center ">
                            <div className="flex flex-row w-auto md:flex-row border-[3px] p-1 border-none rounded-md justify-center items-center " >
                                <img src={introToCyberByCisco} className="w-[300px] h-[200px] border-none mb-2 md:mb-0" />
                            </div>
                            <div>
                                <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Introduction To Cybersecurity by Cisco</h1>
                                <a target="_blank"
                                    href="public\Introduction_to_Cybersecurity_certificate_virendrarao23-ca-jspmuni-ac-in_a197cbfe-68d6-4577-a39e-21f67c4c3434.pdf"
                                >
                                    <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        View 
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Fourth Certifi */}
                        <div className="flex flex-col  w-[400px] h-[350px] md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300   justify-center items-center ">
                            <div className="flex flex-row w-[200px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
                                <img src={LiunxBasicByTHM} className=" border-none mb-2 md:mb-0" />
                            </div>
                            <div>
                                <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Linux Basic by TryHackMe</h1>
                                <a target="_blank"
                                    href="https://tryhackme.com/virenn25/badges/terminaled"
                                >
                                    <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-6 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        View 
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* fifth Certifi */}
                        <div className="flex flex-col  w-[400px] h-[350px] md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300   justify-center items-center ">
                            <div className="flex flex-row w-[170px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
                                <img src={"/aws-re-start-graduate.png"} className=" border-none mb-2 md:mb-0" />
                            </div>
                            <div>
                                <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">AWS re/Start</h1>
                                <a target="_blank"
                                    href="https://www.credly.com/badges/4fff241d-1b62-4059-b2cf-0d3fda3de24e/public_url"
                                >
                                    <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        View 
                                    </button>
                                </a>
                            </div>
                        </div>
                         {/* Six Certifi */}
                        <div className="flex flex-col  w-[400px] h-[350px] md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300   justify-center items-center ">
                            <div className="flex flex-row w-[220px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
                                <img src={"/SOC_L1&2_Udemy2.jpg"} className=" border-none mb-2 md:mb-0" />
                            </div>
                            <div>
                                <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">SOC Level 1 & 2 by Udemy</h1>
                                <a target="_blank"
                                    href="public\SOC_L1&2_Udemy.pdf"
                                >
                                    <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
                                        View 
                                    </button>
                                </a>
                            </div>
                        </div>




                    </div>


                </div>
            </div>
            <div className="w-full flex justify-center">
                <button className=" md:w-auto p-1 bg-orange-600 text-3xl rounded-md m-2 font-semibold shadow-sm shadow-yellow-300 active:scale-95 " onClick={handleClickBlog} >View All Project !</button>
            </div>
            <hr className="w-full border-t-2 border-gray-300 my-8" />

            {/* THIS IS CONTACT PAGE */}

            <section id="contact" className="py-10 px-4 sm:px-8 md:px-16 text-center min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                    Contact <span className="text-yellow-400 font-bold">Me</span>
                </h2>
                <form onSubmit={sendEmail} className="max-w-xl w-full mx-auto text-black bg-white bg-opacity-80 p-4 sm:p-8 rounded-lg shadow-md">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        placeholder="Your Name *"
                        required
                        className="w-full p-3 mb-4 border rounded focus:outline-yellow-500  bg-gray-100"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        placeholder="Your Email *"
                        required
                        className="w-full p-3 mb-4 border rounded focus:outline-yellow-500 bg-gray-100"
                    />
                    <textarea
                        placeholder="Your Message *"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 mb-4 border rounded focus:outline-yellow-500 bg-gray-100"
                        rows="4"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={!name.trim() || !email.trim() || !message.trim()}
                        className={`w-full sm:w-auto px-6 py-2 font-bold rounded-full shadow active:scale-95 transition ${
                            !name.trim() || !email.trim() || !message.trim()
                                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                : 'bg-yellow-400 text-white hover:bg-yellow-300'
                        }`}
                    >
                        Send Message
                    </button>
                </form>

                <div className="w-full flex  sm:flex-row gap-4 sm:gap-8 justify-center items-center mt-8">
                    <a href="https://www.linkedin.com/virendra-rao-581b37364/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 hover:scale-110 transition" />
                    </a>
                    <a href="https://www.instagram.com/varunrao123/" target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 hover:scale-110 transition" />
                    </a>
                </div>
            </section>
        </>
    )
}
export default AllPages;
