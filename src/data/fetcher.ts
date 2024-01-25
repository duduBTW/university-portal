type CouseSection<T> = {
  title: string;
  content: T[];
};

export type Media = {
  id: number;
  title: string;
  thumbnail: string;
  source: string;
  type: string;
  description?: string;
};

export type Material = {
  id: number;
  title: string;
  thumbnail: string;
  type: "pdf" | "html";
  source: string;
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
  return await fetch("/assets/data.json")
    .then((res) => res.json())
    .catch();
}
