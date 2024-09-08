import TitledCard from "@/components/Titled.Card.component";
import Stats from "@/components/Stats.component";
import Progress from "@/components/Progress.component";
import Hero from "@/components/Hero.component";

export default function Home() {
  return (
    <main>
      <Hero />
      <TitledCard title="Titled">
        <Stats />
      </TitledCard>
      <Progress />
    </main>
  );
}
