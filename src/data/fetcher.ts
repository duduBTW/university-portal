type CouseSection<T> = {
  title: string;
  content: T[];
};

export type Media = {
  id: number;
  title: string;
  thumbnail: string;
};

export type Material = {
  id: number;
  title: string;
  thumbnail: string;
  type: "pdf" | "html";
  url: string;
};

export type Course = {
  id: number;
  name: string;
  description: string;
  semester: number;
  media: CouseSection<Media>;
  materials: CouseSection<Material>;
};

export async function fetchCouse(): Promise<Course> {
  return await fetch(
    "https://cdn.discordapp.com/attachments/797960883891601408/1198656973898518539/data.json?ex=65bfb34c&is=65ad3e4c&hm=c49c89071fa2efdba1bc92feba98b47ebea32984004189ce862ed529f5d61303&"
  )
    .then((res) => res.json())
    .catch();
}
