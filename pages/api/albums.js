// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let default_albums = [
  { id: 1, name: "test-album-1", songs: ["song 1", "song 2"] },
  { id: 2, name: "test-album-2", songs: ["song 3"] },
];

export default function handler(req, res) {
  res.status(200).json(default_albums);
}
