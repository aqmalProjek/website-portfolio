
import { Card } from "flowbite-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";

export default function StaffCard({socialName,AccountName,Logo,url}:{socialName:String,AccountName:String,Logo:React.ReactElement,url: string}) {
  return (
    <Card className="w-full shadow-none border-none bg-slate-200 rounded-none hover:bg-amber-100">
      <div className="flex flex-col items-center pb-10">
      {Logo}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{socialName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{AccountName}</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href={url}
            target="_blank"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Detail
          </a>
        </div>
      </div>
    </Card>
  );
}
