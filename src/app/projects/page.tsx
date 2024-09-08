import TitledCard from "@/components/Titled.Card.component";
import PostCard from "@/components/Post.Card.component";

export default function ProjectsPage() {
  return (
    <main>
      <TitledCard
        title="Projects"
        subClassName="w-full flex flex-col items-center"
      >
        <PostCard />
      </TitledCard>
    </main>
  );
}
