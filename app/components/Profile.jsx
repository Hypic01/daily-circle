import React from 'react'

const Profile = () => {

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await signoutApi();

    window.alert(data.message);
  };

  async function signoutApi() {
    try {
      const response = await fetch('http://localhost:3002/auth/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      data = await response.json();
      console.log('data:', data);
      return data;

    } catch (e) {
      console.error(e);
      return { message: 'Failed to sign out. Please try again.' };
    }

  }
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