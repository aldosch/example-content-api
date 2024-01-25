export const runtime = "edge";

const data = {
  draft: true,
  title: "Oranges",
  description:
    "An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus x sinensis, which is also called sweet orange, to distinguish it from the related Citrus x aurantium, referred to as bitter orange. The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. The sweet orange has had its full genome sequenced.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/800px-Oranges_-_whole-halved-segment.jpg",
  link: "https://en.wikipedia.org/wiki/Orange_(fruit)",
};

export function GET(request: Request) {
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
