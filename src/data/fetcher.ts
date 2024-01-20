export type Course = {
  id: number;
  name: string;
  description: string;
  semester: number;
  videos: any[];
  materials: any[];
};

export async function fetchCouse(): Promise<Course> {
  return await fetch(
    "https://cdn.discordapp.com/attachments/797960883891601408/1198289487587971133/data.json?ex=65be5d0c&is=65abe80c&hm=9a27fbc31da60429457517faa23b18809b8469ca94599f82a61c05edb7511211&"
  )
    .then((res) => res.json())
    .catch();
}
