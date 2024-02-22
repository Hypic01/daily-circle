import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[1440px] h-[1024px] relative">
        <div className="left-[379px] top-[100px] absolute text-center text-black text-[70px] font-bold font-['Inter']">
          Sketch out your life.
        </div>
        <div className="left-[532px] top-[210px] absolute text-center text-black text-xl font-bold font-['Inter'] leading-normal">
          The new simple way to journal.
          <br />
          Keep track of every aspect of your life.{" "}
        </div>
        <div className="w-[824px] h-[492.56px] left-[307px] top-[458px] absolute">
          <Image
            width={262}
            height={232}
            className="w-[262px] h-[232px] left-0 top-[36px] absolute z-0"
            src="/orange-doodle.png"
          />
          <Image
            width={270}
            height={253}
            className="w-[270px] h-[253px] left-[454px] top-[215px] absolute z-0"
            src="/green-doodle.png"
          />
          <Image
            width={268}
            height={268}
            className="w-[268px] h-[268px] left-[556px] top-0 absolute"
            src="/woman.png"
          />

          <Image
            width={534}
            height={484}
            className="w-[534px] h-[484px] left-[100px] z-20 absolute"
            src="/dotted-line.png"
          />
          <Image
            width={139}
            height={141}
            className="w-[139px] h-[141px] left-[228px] top-[161px] absolute"
            src="/calendar.png"
          />
          {/* 
<img className="w-[268px] h-[268px] left-[556px] top-0 absolute" src="https://via.placeholder.com/268x268" />
<img className="w-[378.75px] h-[435.21px] left-[95px] top-[119.57px] absolute origin-top-left rotate-[80deg]" src="https://via.placeholder.com/379x435" />
<img className="w-[139px] h-[141px] left-[228px] top-[161px] absolute" src="https://via.placeholder.com/139x141" /> 
<img className="w-[534px] h-[484px]" src="https://via.placeholder.com/534x484" />*/}
        </div>
        <Link href="/dashboard">
          <div className="w-[165px] h-[55px] left-[637px] top-[327px] absolute">
            <div className="w-[165px] h-[55px] left-0 top-0 absolute bg-red-500 rounded-[10px] border" />
            <div className="w-[132.57px] h-[29.27px] left-[16px] top-[13px] absolute text-center text-white text-base font-semibold font-['Inter'] leading-normal">
              Start for free
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
