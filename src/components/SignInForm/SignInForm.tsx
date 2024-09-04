'use client';
import { useState } from "react";

import { useRouter } from "next/navigation"; 

import { doCredentialsLogin } from "@/actions/auth"


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
    <form
      className="flex flex-col bg-purple-950 w-10/12 p-4 m-auto rounded-sm"
      onSubmit={handleFormSubmit}
    >
        {error && <div className="text-lg text-red-500">{error}</div>}
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Email
          <input 
            className="bg-neutral-300 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            name="email" 
            type="email" 
          />
        </label>
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Password
          <input 
            className="bg-neutral-300 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            name="password" 
            type="password" 
            />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Sign In</button>
    </form>
  )
}