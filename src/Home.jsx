import Navbar from "./Navbar";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState ,  useEffect } from "react";
import dp from "./dp.jpg";
import "./App.css"
import AllPages from "./AllPages";
import { useNavigate } from 'react-router-dom';


function Home({props}){ 
   const navigate = useNavigate(); 



  // const [darkMode , setDarkMode]= useState(false)
    
  //  const toggleTheme=()=>{
  //      setDarkMode(!darkMode)

  //  }

  const messages = [
    "Protecting systems through analysis, vigilance, and a passion for cybersecurity",
    "My passion drives my purpose: securing and protecting digital spaces"
  ];

   const [msgIndex, setMsgIndex] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

 const Hireme = () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=viren25x@gmail.com", "_blank");
}
     const handleClickBlog = () => {
        navigate('/blog');
    }


  return <>
   

    <Navbar />

   <button className=" md:w-auto p-1 bg-orange-600 rounded-md m-2 font-semibold shadow-sm shadow-yellow-300 active:scale-95 "  onClick={handleClickBlog} >Blog!</button>

   <div>
  <div className="font-sans flex flex-col lg:flex-row px-4 md:px-12 lg:px-24 xl:px-[200px]">
    <div className="pl-2 md:pl-6 lg:pl-9 pt-7 my-10 md:my-16 lg:my-20 w-full text-center lg:text-left flex flex-col justify-start items-center lg:items-start">
      <h2 className="text-[28px] md:text-[32px] lg:text-[35px] font-bold text-yellow-400">Hello,</h2>
      <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold">I’m Viren</h1>
      <p className="text-base md:text-lg mt-2  transform duration-300 ">{messages[msgIndex]}</p>
      <button
        onClick={Hireme}
        className="mt-6 px-6 py-2 text-[18px] md:text-[20px] text-white bg-yellow-500 font-semibold rounded-md shadow hover:bg-yellow-400 active:scale-95"
      >
        Hire Me
      </button>
      <div className="flex gap-3 mt-10 md:mt-16 lg:mt-[80px] ml-0 lg:ml-3">
        <a href="https://www.linkedin.com/in/virendra-rao-581b37364/" target="_blank" >
          <FaLinkedin className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
        </a>
        {/* <a href="" > <FaSquareFacebook className="w-[30px] h-[30px] " /> </a> */}
        <a href="https://github.com/Viren-webx" target="_blank"  >
          <FaGithub className="w-[26px] h-[26px] md:w-[30px] md:h-[30px]" />
        </a>
      </div>
    </div>
    <div className="w-full h-full flex justify-center items-center mt-8 lg:mt-0">
      <div className="h-[250px] w-[180px]  md:h-[320px] md:w-[240px] lg:h-[400px] lg:w-[300px] my-6 md:my-12 lg:my-20 overflow-hidden border-[3px] rounded-tl-[40px] md:rounded-tl-[60px] lg:rounded-tl-[80px] rounded-tr-lg rounded-bl-xl drop-shadow-yellow rounded-br-[30px] md:rounded-br-[40px] lg:rounded-br-[50px] bg-yellow-400 duration-300 transition">
        <img src={dp}  alt="" className="object-cover w-full h-full  " />
      </div>
    </div>
  </div>
</div>

<AllPages />
  
  </>
}
export default Home;