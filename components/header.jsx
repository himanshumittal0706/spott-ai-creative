import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] ">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image src="/spott.png" alt="Spott logo" width={120} height={40} className="h-11 w-auto group-hover:scale-105 transition-all duration-300" priority />
                </Link>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-4">

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="text-sm font-medium text-white px-4 py-2 rounded-full border border-white/20  hover:border-[#6c47ff]  transition-all duration-300">
                                Sign In
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button className="  bg-[#6c47ff] text-white   rounded-full font-medium  text-sm px-5 py-2  hover:bg-[#5934f5] transition-all duration-300">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "ring-2 ring-[#6c47ff] rounded-full",
                                },
                            }}
                        />
                    </SignedIn>

                </div>
            </div>
        </nav>
    );
};

export default Header;


