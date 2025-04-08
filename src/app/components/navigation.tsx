import Link from "next/link";
import {SignInButton,  UserButton, SignedIn, SignedOut} from '@clerk/nextjs'
export const Navigation = () => {
    return(
        <nav className="float-right mr-10">
            <Link href='/' className="mr-4 hover:text-blue-500">Home</Link>
            <Link href='/about' className="mr-4  hover:text-blue-500">About Us</Link>
            <Link href='/products/1' className="mr-4 hover:text-blue-500">Product 1</Link>
            <SignedOut>
                <SignInButton mode="modal"/>
            </SignedOut>
            <SignedIn>   
                <UserButton/>  
            </SignedIn>
        </nav>
    )
}