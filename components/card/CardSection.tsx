import { searchParamsType } from "@/types";
import CardFilter from "./CardFilter";
import CardList from "./CardList";
import Pagination from "./Pagination";

type Props = {
  searchParams: searchParamsType;
};

export default function CardSection({ searchParams }: Props) {
  const { page, limit, sort } = searchParams;
  return (
    <section className="px-container pt-16">
      <CardFilter limit={limit} sort={sort} />
      <CardList page={page} limit={limit} sort={sort} />
      <Pagination page={page} />
    </section>
  );
}
