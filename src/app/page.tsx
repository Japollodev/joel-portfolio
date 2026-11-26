import { About } from "@/components/About";
import { Beyond } from "@/components/Beyond";
import { Connect } from "@/components/Connect";
import { Goals } from "@/components/Goals";
import { GridLines } from "@/components/GridLines";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Story } from "@/components/Story";
import { Thesis } from "@/components/Thesis";
import { Toolkit } from "@/components/Toolkit";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <GridLines />
      <main id="main">
        <Hero />
        <About />
        <Story />
        <Thesis />
        <Work />
        <Toolkit />
        <Beyond />
        <Goals />
        <Connect />
      </main>
    </>
  );
}
