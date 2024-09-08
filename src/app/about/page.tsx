import Article from "../../components/Article.component";

export default function AboutPage() {
  return (
    <main>
      <Article />
      <Article className="md:flex-row-reverse" />
    </main>
  );
}
