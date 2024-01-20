import useCourse from "../../data";

function HomePage() {
  const { name, description } = useCourse();

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default HomePage;
