import React from "react";


const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-background/40 backdrop-blur-xl mt-16">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-center text-center">

                <p className="text-sm text-gray-300 flex items-center gap-1">
                    Made With
                    <span className="text-red-500 animate-pulse">❤️</span>
                    by
                    <span className="font-semibold text-white hover:text-[#6c47ff] transition-all duration-300 cursor-pointer">
                        MadhavCoder
                    </span>
                </p>

                <p className="text-xs text-gray-500 mt-2">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}


export default Footer;



