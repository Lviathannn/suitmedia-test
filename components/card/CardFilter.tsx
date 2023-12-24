import SelectFilter from "../SelectFilter";

type Props = {
  sort: string | undefined;
  limit: string | undefined;
};

export default function CardFilter({ sort, limit }: Props) {
  return (
    <div className="w-full flex justify-between items-start flex-col md:flex-row md:items-center gap-5">
      <p>Showing 1 - {limit || 10} of 100</p>
      <div className="flex gap-10">
        <SelectFilter
          title="limit"
          label="Show Per Page :"
          options={[10, 20, 50]}
          limit={limit}
        />
        <SelectFilter
          title="sort"
          label="Sort by:"
          options={["Newest", "Oldest"]}
          sort={sort}
        />
      </div>
    </div>
  );
}
