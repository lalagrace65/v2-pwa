import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function RegisterPage() {
  const [email, setEmail] = useState( '');
  const [password, setPassword] = useState( '');
  function handleFormSubmit(ev){
    ev.preventDefault();
    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
      
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      
      
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later
        </div>
      
      <form className="block max-w-xs mx-auto" >
        <input type="email" placeholder="email" value={email}
              onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" placeholder="password" value={password}
              onChange={ev => setPassword(ev.target.value)}/>
        <button type="submit" >
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or
        </div>
        <button
          onClick={() => signIn('google', {callbackUrl:'/'})}
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
    );
  }
}