'use client';
import { useState } from "react";

import { useRouter } from "next/navigation"; 

import { doCredentialsLogin } from "@/actions/auth"

import Style from "./SignInForm.module.css"


export function SignInForm() {

  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const formData = new FormData(event.currentTarget)
      const response = await doCredentialsLogin(formData);

      if(!!response.error) {
        setError(response.error);
      } else {
        router.push('/');
      }
      
    } catch (error) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className={Style.formContain}>
      <h1 className={Style.titleForm}>Login</h1>
 <form
      className={Style.form}
      onSubmit={handleFormSubmit}
    >
        {error && <div className={Style.messageError}>{error}</div>}
        <label className={Style.labelEmail}>
          Your Email
          <input 
            className={Style.inputEmail}
            placeholder="enter your email" 
            name="email" 
            type="email" 
          />
        </label>
        <label className={Style.labelPassword}>
          Your Password
          <input 
            className={Style.inputPassword}
            placeholder="enter your password" 
            name="password" 
            type="password" 
            />
        </label>
        <button className={Style.buttonForm}>Sign In</button>
    </form>
    </div>
   
  )
}