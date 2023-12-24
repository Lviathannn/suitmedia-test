import ParallaxSection from "@/components/Banner";
import CardSection from "@/components/card/CardSection";
import { searchParamsType } from "@/types";
import Image from "next/image";

type Props = {
  searchParams: searchParamsType;
};

export default function page({ searchParams }: Props) {
  return (
    <main className="min-h-screen -my-16 overflow-x-hidden pb-16">
      <ParallaxSection />
      <CardSection searchParams={searchParams} />
    </main>
  );
}
