import React from 'react'
import { signOut, getAuth } from 'firebase/auth';
import { app } from '../firebase/config.js';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signOut(auth);

      window.alert('Sign out successfullly');

      // delete token
      localStorage.removeItem('user token');
      // redirect to home
      router.push('/');

    } catch (error) {
      console.error("Sign out Error", error);
      window.alert('failed to sign out');
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] rounded-xl bg-[#DE483A] cursor-pointer" />
      <h1 className="font-bold text-black">Test</h1>
      <button
        onClick={handleClick}
        className="bg-[#CDCDCD] opacity-80 w-[85px] h-[42px] rounded-xl text-black font-base font-bold"
      >
        Sign Out
      </button>
    </div>
  )
}

export default Profile