import Mode from "./Mode";
import Navbar from "./Navbar";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { useState } from "react";


function Contact() {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");

    const sendEmail =(e)=>{

        e.preventDefault()

        // Validate all fields are filled
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("All fields are required!");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        emailjs.sendForm(
            'service_ahn0pnq',
            'template_ikaotxo',

            e.target,
            'tbZF-h3LtMSFB_LLo'
        ).then(
            (result) =>{
                alert("Message sent!")
            },
            (error)=>{
                alert("Failed to sent Message..Try again later")
            }
        )

        setName("");
        setEmail("");
        setMessage("");

    }

   

    return (
        <>
            <Navbar />

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
                    <a href="https://www.linkedin.com/in/virendra-rao-581b37364/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 hover:scale-110 transition" />
                    </a>
                    <a href="https://www.instagram.com/varunrao123/" target="_blank" rel="noopener noreferrer">
                        <RiInstagramFill className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 hover:scale-110 transition" />
                    </a>
                </div>
            </section>
        </>
    );
}

export default Contact;