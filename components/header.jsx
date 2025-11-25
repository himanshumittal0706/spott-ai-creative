import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button';

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] ">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-2 group">
                    <Image src="/spott.png" alt="Spott logo" width={120} height={40} className="h-11 w-auto group-hover:scale-105 transition-all duration-300" priority />
                </Link>

                <div className="flex items-center gap-4">

                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button size="sm">Sign dsfhasdfh In</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
            </div>
        </nav >
    );
};

export default Header;





