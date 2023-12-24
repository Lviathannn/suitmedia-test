import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (src: string) => {
  try {
    const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c";

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);
    return base64;
  } catch (err) {
    err;
  }
};
