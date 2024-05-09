import Link from "next/link";
import ProductCard from "./components/server/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className='flex gap-2'>
        <h1>Hello {session && session.user?.name}</h1>
        <Link href={"/users"} className='btn'>
          Go to Users page
        </Link>
        <Link href={"/users/new"} className='btn'>
          Add a new user
        </Link>
        <Link href={"/upload"} className='btn'>
          Upload files
        </Link>
        {!session ? (
          <div className='gap-2'>
            <Link href={"/api/auth/signin"} className='btn'>
              Login
            </Link>
          </div>
        ) : (
          <div className='gap-2'>
            <Link href={"/changepassword"} className='btn'>
              Change Password
            </Link>
            <Link href={"/api/auth/signout"} className='btn'>
              Logout
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
