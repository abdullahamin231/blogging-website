import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 flex font-poppins flex-row items-center justify-center gap-40 mt-[32rem] bg-black text-white text-center px-8 w-full ">
            <div id="left"  className="pb-5">
                <p className="text-slate-500 text-sm font-bold text-left mb-2">DESIGN YOUR LIFE</p>
                <p className="text-slate-200 text-xl font-bold text-left">Get in the Know</p>
                <p className="text-slate-100 text-l max-w-[500px] text-left break-word ">We at Odyssey have the utmost passion for discovering and putting the spotlight on emerging talents. </p>
            </div>
            <div id="right" className="pb-5" >
                <div className="flex flex-row gap-20 text-left items-left justify-left border-b-2 border-slate-100 pb-8" >
                    <div className="flex flex-col items-left">
                    <p className="text-white font-bold text-xl">About Odyssey</p>
                    <p className="text-slate-400 hover:underline cursor-pointer">About Us</p>
                    <p className="text-slate-400 hover:underline cursor-pointer">Our Vision</p>
                    </div>

                    <div className="flex flex-col items-left">
                    <p className="text-white font-bold text-xl">Contact Us</p>
                    <p className="text-slate-400 hover:underline cursor-pointer">Advertise</p>
                    <p className="text-slate-400 hover:underline cursor-pointer">Email</p>
                    </div>

                   

                </div>
            </div>
        </footer >
    )
}