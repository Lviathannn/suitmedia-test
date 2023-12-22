import { getData } from "@/lib/getData";
import Card from "./Card";
import { CardType } from "@/types";

type Props = {};

export default async function CardList({}: Props) {
  const cardData = await getData(
    "https://suitmedia-backend.suitdev.com/api/ideas",
    {
      params: {
        "page[number]": 1,
        "page[size]": 10,
        "append[]": ["small_image", "medium_image"],
        sort: "-published_at",
      },
    }
  );

  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
      {cardData.data.map((card: CardType) => {
        return (
          <Card
            date={card.published_at}
            key={card.id}
            title={card.title}
            image={card.medium_image[0].url}
          />
        );
      })}
    </div>
  );
}
