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
  id: string;
  name: string;
  description: string;
  semester: number;
  media: CouseSection<Media>;
  materials: CouseSection<Material>;
};

export async function fetchCouse(id: unknown): Promise<Course> {
  if (typeof id !== "string" || !id) {
    throw new Error("Invalid course id");
  }

  const fileExists = await fetch(`/assets/${id}.json`, { method: "HEAD" }).then(
    (res) => {
      return res.status === 200;
    }
  );

  if (!fileExists) {
    throw new Error("Course not found");
  }

  return await fetch(`/assets/${id}.json`).then((res) => res.json());
}
