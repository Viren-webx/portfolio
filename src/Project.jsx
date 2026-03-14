import { useContext } from "react";
import Navbar from "./Navbar";
import { DataContext } from "./UserContext/Context";
import NetworkingBasic from "./NetworkingBasic.jpg";
import NetworkingBadge from "./NetworkingBasicBadge.jpg"
import introToCyberByCisco from "./IntroToCyberByCisco.jpg"
import LiunxBasicByTHM from "./LiunxBasicByTHM.jpg"




function Project() {

  const Myproject =useContext(DataContext)

  



//  const renderProject = Myproject.map((p, i) => {
//   return (
//     <div
//       key={i}
//       className="w-full md:w-3/4 lg:w-[70rem] h-auto p-4 py-8 border-[4px] border-yellow-200 rounded-lg bg-gray-200 shadow-lg shadow-yellow-200 flex flex-col items-center m-2 md:m-4 my-4 md:my-6 hover:scale-105 hover:shadow-yellow-400 transition-all duration-200"
//     >
//       <div className="flex flex-col md:flex-row border-[3px] p-1 border-black rounded-md w-full justify-center items-center gap-2">
//         <img  className="w-full md:w-[200px] lg:w-[300px] border-none mb-2 md:mb-0" />
//         <img className="w-full md:w-[200px] lg:w-[300px] m-0 md:m-1 mb-2 md:mb-0" />
//         <img  className="w-full md:w-[200px] lg:w-[300px] m-0 md:m-1" />
//       </div>
//       <h1 className="font-bold text-lg md:text-xl my-2 text-black text-center">a</h1>
//       <p className="text-black text-sm md:text-base text-center">a</p>
//       <div className="flex flex-col sm:flex-row gap-2 m-2 justify-center">
//         <a  target="_blank"  >
//           <button className="border border-blue-400 px-3 py-1 text-blue-500 rounded-md mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
//             Deploy Link
//           </button>
//         </a>
//           <a  target="_blank" >
//           <button className="border border-blue-400 px-3 py-1 text-blue-500 rounded-md mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
//             View Gitup
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// });

    return <>

    <Navbar />

<div className="py-16 text-center flex flex-col items-center   h-full w-full">
    <h2 className="text-4xl font-bold mb-8"> <span className="text-yellow-400 pr-2" >My</span><i>Achievement</i></h2>
    <div className=" flex flex-col m-3  ">

    <div className="flex flex-row flex-wrap border-[3px] p-2 w-full  items-center gap-2">
      <div className="flex flex-col md:flex-row border-[3px] p-1 border-none  justify-center items-center gap-2 ">
        {/* First Certifi */}
      <div className="flex flex-col  w-[400px] h-[350px] md:flex-col  p-1 border-none rounded-md bg-gray-300   justify-center items-center ">
        <div  className="flex flex-row  md:flex-row border-[3px] p-1 border-none rounded-md w-auto justify-center items-center " >
        <img src={NetworkingBasic}  className="w-[300px]  border-none mb-2 md:mb-0" />
        </div>
        <div>
       <h1 className="font-mono text-[15px] md:text-xl my-2 text-black text-center">Networking foundation by Linkedin</h1>
          <a  target="_blank"
          href="/CertificateOfCompletion_Networking Foundations Networking Basics.pdf"
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
        <div  className="flex flex-row w-[240px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
        <img src={NetworkingBadge}  className="w-auto border-none mb-2 md:mb-0" />
        </div>
        <div>
       <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Networking Basic by Cisco</h1>
          <a  target="_blank"
          href="https://www.credly.com/badges/1f2a2838-634f-445e-ad56-674aa20c729d"
          >
          <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
            View
          </button>
        </a>
        </div>
      </div>

        {/* Third Certifi */}
      <div className="flex flex-col  w-[400px] h-[350px]  md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300  justify-center items-center ">
        <div  className="flex flex-row w-auto md:flex-row border-[3px] p-1 border-none rounded-md justify-center items-center " >
        <img src={introToCyberByCisco}  className="w-[300px] h-[200px] border-none mb-2 md:mb-0" />
        </div>
        <div>
       <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Introduction To Cybersecurity by Cisco</h1>
          <a  target="_blank" 
          href="/Introduction_to_Cybersecurity_certificate_virendrarao23-ca-jspmuni-ac-in_a197cbfe-68d6-4577-a39e-21f67c4c3434.pdf"
          >
          <button className="border border-blue-400 px-3 py-1  text-blue-500 rounded-md mb-1 mt-2 font-semibold active:scale-95 hover:bg-blue-500 hover:text-white transition">
            View 
          </button>
        </a>
        </div>
      </div>
       {/* Fourth Certifi */}
      <div className="flex flex-col  w-[400px] h-[350px] md:flex-col border-[3px] p-1 border-black rounded-md bg-gray-300   justify-center items-center ">
        <div  className="flex flex-row w-[200px] md:flex-row border-[3px] p-1 border-none rounded-md  justify-center items-center " >
        <img src={LiunxBasicByTHM}  className=" border-none mb-2 md:mb-0" />
        </div>
        <div>
       <h1 className="font-mono text-[15px]  md:text-xl my-2 text-black text-center">Linux Basic by TryHackMe</h1>
          <a  target="_blank"
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
                                    href="/SOC_L1&2_Udemy.pdf"
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
    
    
    </>
}

export default Project; 
