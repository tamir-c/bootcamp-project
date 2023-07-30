import MovieCard from "@/components/Cards/MovieCard";

export default function Home() {
  return (
    <div className="m-8 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 gap-10 place-items-center">
      <MovieCard/>
    </div>
  );
}
