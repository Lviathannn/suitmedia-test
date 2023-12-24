import { CardType } from "@/types";
import dynamic from "next/dynamic";
import CardSkeleton from "./CardSkeleton";
import { getData } from "@/utils/getData";
const Card = dynamic(() => import("./Card"), {
  loading: CardSkeleton,
});

type Props = {
  page: string | undefined;
  limit: string | undefined;
  sort: string | undefined;
};

export default async function CardList({ page, limit, sort }: Props) {
  const cardData = await getData(
    "https://suitmedia-backend.suitdev.com/api/ideas",
    {
      params: {
        "page[number]": Number(page) || 1,
        "page[size]": Number(limit) || 10,
        "append[]": ["small_image", "medium_image"],
        sort:
          sort == "newest"
            ? "-published_at"
            : sort === "oldest"
            ? "published_at"
            : "-published_at",
      },
    }
  );

  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 mt-10">
      {cardData.data.map((card: CardType) => {
        return (
          <Card
            date={card.published_at}
            key={card.id}
            title={card.title}
            image={card.medium_image[0]?.url}
          />
        );
      })}
    </div>
  );
}
