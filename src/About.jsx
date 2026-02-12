import { useState } from "react";
import Navbar from "./Navbar";
import { info } from "autoprefixer";
import Mode from "./Mode";
import Contact from "./Contact";
import { Navigate, useNavigate } from "react-router-dom";
import dp3 from "./dp3.jpg";



// ...existing imports...

function About() {
    const navigate = useNavigate()
    const [content, SetContent] = useState("about")

    const contactMe = () => {
        navigate("/Contact")
    }
    const CV =()=>{
       window.open("/public/SOC_Resume.docx", "_blank")

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

    return <>
        <Navbar />
        <div className="font-sans flex min-h-screen w-full justify-center items-center bg-transparent">
            <div className="flex flex-col lg:flex-row py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 w-full max-w-6xl">
                <div className="h-[220px] w-[180px]  sm:h-[300px] sm:w-[240px] lg:h-[350px] lg:w-[400px] bg-gray-100 rounded-md p-1 overflow-hidden  drop-shadow-yellow duration-300 transition mx-auto lg:mx-0 mb-6 lg:mb-0 lg:mr-8">
                    <img className="rounded-md w-full h-full  object-conver   " src={dp3} alt="Profile" />
                </div>
                <div className="flex flex-col justify-start items-center  lg:items-start w-full md:mt-2 xs:mt-[30px] ">
                    <h1 className="text-[24px] sm:text-[28px]  md:text-[30px]   mt-2 font-bold text-center lg:text-left pb-2">
                        About <span className="text-yellow-400">Me</span>
                    </h1>
                    <div className="p-1 w-full max-w-xl text-wrap">
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
                    <div className="mt-8 px-0 sm:px-8 flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                        <button onClick={CV} className="px-6 py-2 border-[4px]  border-yellow-300 text-yellow-500 bg-white active:bg-yellow-400 active:text-white font-semibold rounded-full hover:scale-105">
                            Download CV
                        </button>
                        <button onClick={contactMe} className="px-6 py-2 border-[4px] border-yellow-300 bg-white text-yellow-500 active:bg-yellow-400 active:text-white font-semibold rounded-full hover:scale-105">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>

  


    </>
}

export default About;