import Image from "next/image";
import Hero from "./components/Hero";
import PopularVideos from "./components/PopularVideos";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularVideos />
    </div>
  );
}
