import SelectFilter from "../SelectFilter";

type Props = {};

export default function CardFilter({}: Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <p>Showing 1 - 10 of 100</p>
      <div className="flex gap-10">
        <SelectFilter label="Show Per Page :" options={[10, 20, 50]} />
        <SelectFilter label="Sort by:" options={["Newest", "Oldest"]} />
      </div>
    </div>
  );
}
