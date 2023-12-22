import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
};

export default function Card({ image, title, date }: Props) {
  return (
    <div className="flex flex-col shadow-md rounded-xl w-full overflow-hidden">
      <div className="relative w-full aspect-video">
        <Image src={image} alt={title} fill />
      </div>
      <div className="px-3 py-5">
        <p className="text-gray-500 font-medium">
          {new Date(date).toLocaleString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="text-lg font-semibold line-clamp-3">{title}</h2>
      </div>
    </div>
  );
}
