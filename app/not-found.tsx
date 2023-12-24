import Image from "next/image";
import notFound from "@/public/notfound.png";
import Link from "next/link";
type Props = {};

export default function notfound({}: Props) {
  return (
    <main className="min-h-[90vh] w-full flex justify-center items-center">
      <div className="gap-5 flex-col flex justify-center items-center">
        <Image src={notFound} alt="not found image" className="w-72" />
        <h1 className="text-4xl font-bold text-center text-gray-700">
          There is nothing here
        </h1>
        <button className="px-3 py-2 bg-primary text-white rounded">
          <Link href="/ideas">Go To Ideas</Link>
        </button>
      </div>
    </main>
  );
}
