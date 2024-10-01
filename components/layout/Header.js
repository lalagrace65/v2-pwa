import Link from "next/link";
import RegisterPage from "@/pages/register/page";

export default function Header() {
  return (
    <header className="border bg-green-50 p-2">
        <nav className="flex items-center justify-between gap-8 text-gray-500 font-semibold">
          <Link className="text-red-500 font-semibold text-2xl" href={'/'}>
            HikeKo
          </Link>
          <nav className="flex items-center gap-4">
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
            
          </nav>
          <nav className="flex items-center gap-4">
            <Link href={'/login/page'}>Login</Link>
            <Link href={'/register/page'} className="bg-red-500 rounded-full text-white px-6 py-2">
                Register
            </Link>
          </nav>
        </nav>  
    </header>
    
  );
}
