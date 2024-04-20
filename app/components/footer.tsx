import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-4 border-warna-02 bg-warna-01">
      <div className="mx-auto flex flex-row gap-12 py-10 md:w-[1000px]">
        <a href="/">
          <Image
            src="/img/debindo-logo-negative.svg"
            alt="alt"
            width={260}
            height={260}
          />
        </a>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-white">Our Location</p>
          <p className="text-white opacity-50">
            Jl. KH Abdullah Syafei No.mor No.9, RT.13/RW.5, Bukit Duri, Kec.
            Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12840
          </p>
          <a href="https://maps.app.goo.gl/EepdVP8koPXBm66D8">
            <button className="rounded-lg border border-warna-02 px-6 py-1 text-white hover:bg-warna-02 hover:text-warna-01">
              See on Maps
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-white">If You Exited</p>
          <a href="/contact">
            <button className="text-nowrap rounded-lg  bg-warna-02 px-6 py-1 text-warna-01 hover:bg-warna-02/90">
              Contact Us
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-white">&nbsp; </p>
          <div className="flex flex-col gap-1">
            <Link
              href=""
              className="text-nowrap text-sm text-white duration-200 hover:translate-x-2"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="text-nowrap text-sm text-white duration-200 hover:translate-x-2"
            >
              Terms & Condition
            </Link>
            <Link
              href=""
              className="text-nowrap text-sm text-white duration-200 hover:translate-x-2"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
