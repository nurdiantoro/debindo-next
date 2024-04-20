import Image from "next/image";
import Testimoni from "./testimoni";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[url('/img/MRA_6794.jpg')] bg-cover bg-no-repeat"></div>
      <div className="mx-auto w-full md:w-[1000px]">
        <div className="relative -top-[75px] flex flex-row items-center justify-around rounded bg-white shadow-lg ">
          <div className="flex flex-col items-center p-10 text-warna-01">
            <h5 className="text-3xl font-bold">1987</h5>
            <span>Since</span>
          </div>
          <div className="flex flex-col items-center p-10 text-warna-01">
            <h5 className="text-3xl font-bold">3219</h5>
            <span>Happy Clients</span>
          </div>
          <div className="flex flex-col items-center bg-warna-01 p-10 text-white">
            <span>More Than</span>
            <h5 className="text-3xl font-bold">3000</h5>
            <span>Completed Project</span>
          </div>
        </div>
      </div>
      <div className="px-20 py-40">
        <h2 className="relative mb-12 text-center text-3xl font-bold text-warna-01 before:absolute before:-bottom-2 before:left-1/2 before:h-1 before:w-20 before:-translate-x-1/2 before:bg-warna-02 before:content-['']">
          Testimonials
        </h2>
        <div className="flex flex-row items-center justify-center gap-4 ">
          <Testimoni />
          <Testimoni />
          <Testimoni />
        </div>
      </div>
    </>
  );
}
