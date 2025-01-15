import { doLogout } from "@/actions/auth";

import { signOut, useSession } from "next-auth/react";


const Logout = () => {

  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({callbackUrl: '/login?callbackUrl=http://localhost:3000/'})
  };


  return (
    <button className="bg-white p-3 rounded-lg"
    onClick={handleSignOut}>
      sign out
    </button>
  )
}

export default Logout