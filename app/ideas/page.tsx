import CardSection from "@/components/card/CardSection";
import { searchParamsType } from "@/types";
import Image from "next/image";

type Props = {
  searchParams: searchParamsType;
};

export default function page({ searchParams }: Props) {
  return (
    <main className="py-16 min-h-screen overflow-x-hidden">
      <section className="w-full relative h-[450px] bg-[url('https://images.unsplash.com/photo-1703244355676-95561db44fb1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blue-700 bg-cover flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-[55px] leading-10">Ideas</h1>
          <p className="text-lg">Where all our great things begin</p>
        </div>
        <div className="absolute w-full h-28 bottom-0 right-0">
          <Image
            src="/poligon.png"
            alt="Triangle"
            fill
            sizes="100vh"
            priority
          />
        </div>
      </section>
      <CardSection searchParams={searchParams} />
    </main>
  );
}
