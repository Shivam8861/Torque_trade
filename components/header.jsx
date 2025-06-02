import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ArrowLeft, CarFront, Heart } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async({isAdminPage = false}) => {
   const user = await checkUser();
   const isAdmin = user?.role === "ADMIN";
 
   return <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
    <nav className='mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href={isAdminPage ? "/admin" : "/"} className='flex'>
          <Image 
            src={'/logo.png'}
            alt="TORQUE TRADE"
            width={350}
            height={250}
            className="h-14 w-auto object-contain"
          />
          {isAdminPage && (
            <span className='text-xs font-extralight'>Admin</span>
          )}
        </Link>
        
        <div className='flex items-center space-x-4'>
          <SignedIn>
            {isAdminPage ? (
              <Link href='/'>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={18}/>
                  <span>Back to Home</span>      
                </Button>
              </Link>
            ) : (
              <>
                <Link href='/saved-cars'>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Heart size={18}/>
                    <span className='hidden md:inline'>Saved Cars</span>      
                  </Button>
                </Link>

                {isAdmin ? (
                  <Link href='/admin'>
                    <Button variant="outline" className="flex items-center gap-2">
                      <CarFront size={18}/>
                      <span className='hidden md:inline'>Admin Portal</span>      
                    </Button>
                  </Link>
                ) : (
                  <Link href='/reservation'>
                    <Button variant="outline" className="flex items-center gap-2">
                      <CarFront size={18}/>
                      <span className='hidden md:inline'>My Reservations</span>      
                    </Button>
                  </Link>
                )}
              </>
            )}
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl='/'>
              <Button variant='outline'>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements:{
                  avatarBox: "w-10 h-10"
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
}

export default Header
