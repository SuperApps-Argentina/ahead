import { doLogout } from "@/actions/auth";

export const Logout = () => (
  <form action={doLogout}>
    <button
      className="bg-blue-400 my-2 text-white p-2 rounded" 
      type="submit">
        Logout
    </button>
  </form>
)