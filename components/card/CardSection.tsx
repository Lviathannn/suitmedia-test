import CardFilter from "./CardFilter";
import CardList from "./CardList";

type Props = {};

export default function CardSection({}: Props) {
  return (
    <section className="px-container pt-16">
      <CardFilter />
      <CardList />
    </section>
  );
}
