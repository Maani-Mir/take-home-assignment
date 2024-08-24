import Link from "next/link";
import { FaMicrophone } from "react-icons/fa6";
import Image from "next/image";
import Card from "./components/Card";
import CardDraft from "./components/CardDraft";
import Card3 from "./components/Card3";
export default function Home() {
  return (
    <main className="bg-white">
      <div className="my-8 flex text-[#2E6FF3] justify-center text-3xl font-semibold">
        <h1> My Notes</h1>
      </div>
      <div className="flex flex-row justify-center">
        <div className="absolute -ml-28 pt-1">
          <FaMicrophone />
        </div>
        <div>
          <Link
            href="#"
            className="text-sm rounded-full bg-[#2E6FF3] pt-4.5 px-32 py-3 font-normal text-center text-[#FFFFFF] "
          >
            Create Note
          </Link>
        </div>
      </div>
      <div className="mt-9 flex flex-row">
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-[#2E6FF3] pt-4.5 ml-2 px-4 py-3 font-normal text-center text-[#2E6FF3]"
        >
          All notes
        </Link>
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-gray-400 pt-4.5 ml-2 px-4 py-3 font-normal text-center text-gray-600"
        >
          Drafts
        </Link>
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-gray-400 pt-4.5 ml-2 px-4 py-3 font-normal text-center text-gray-600"
        >
          Completed
        </Link>
        <Link
          href="#"
          className="text-sm rounded-full border-2 border-gray-400 pt-4.5 ml-2 px-4 py-3 font-normal text-center text-gray-600"
        >
          Archived
        </Link>
      </div>
      <div className="mt-9">
        <Card />
      </div>
      <div className="mt-9">
        <CardDraft />
      </div>
      <div className="mt-9">
        <Card3 />
      </div>
    </main>
  );
}
