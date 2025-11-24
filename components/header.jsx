import React from 'react';
import Image from "next/image";
import Link from 'next/link';



const Header = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm w-full border-b border-gray-800/50 z-50 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto'>
            <div className='max-w-7xl mx-auto px-6 py-4 '>
                {/* Logo */}
                <Link href={"/"} className='flex items-center' >
                    <Image
                        src="/spott.png"
                        alt="Spott logo"
                        width={500}
                        height={500}
                        className="w-full h-11"
                        priority
                    />
                </Link>
                {/* Search & Location - Desktop Only */}

                {/* Right Side Actions */}

            </div>

            {/* Mobile Search & Location - Below Header */}
        </nav>

        // Modals
    )
}

export default Header;





