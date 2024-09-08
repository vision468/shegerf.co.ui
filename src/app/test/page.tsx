"use client";
import AnchoredBox from "@/components/Anchored.Card.component";
import AnchoredMenu from "@/components/Anchored.Menu.component";
import Article from "@/components/Article.component";
import BasicForm from "@/components/Basic.Form.component";
import Breadcrumb from "@/components/Breadcrumb.component";
import CallCTA from "@/components/Call.CTA.component";
import CompanyLogo from "@/components/CompanyLogo.component";
import Footer from "@/components/Footer.component";
import Header from "@/components/Header.component";
import Hero from "@/components/Hero.component";
import ImageUpload from "@/components/ImageUpload.Form.component";
import MenuSandwichCTA from "@/components/MenuSandwich.CTA.component";
import MoreCTA from "@/components/More.CTA.component";
import PostCard from "@/components/Post.Card.component";
import ProgressChart from "@/components/Progress.Chart.component";
import Progress from "@/components/Progress.component";
import Stats from "@/components/Stats.component";
import TipTapEditor from "@/components/TipTap2.TextEditor.component";
import TitledCard from "@/components/Titled.Card.component";

export default function testPage() {
  return (
    <div className="text-tremor-content-emphasis">
      AnchoredBox
      <br />
      <AnchoredBox />
      <hr />
      AnchoredMenu
      <br />
      <AnchoredMenu />
      <hr />
      Article
      <br />
      <Article />
      <hr />
      BasicForm
      <br />
      <BasicForm
        title="Home input form"
        description="a typo description about form"
        inputs={[
          {
            name: "name",
            type: "select",
            labelName: "Name",
            options: [
              { name: "Car", value: "car" },
              { name: "Bicycle", value: "bicycle" },
            ],
          },
        ]}
      />
      Breadcrumb
      <br />
      <Breadcrumb />
      <hr />
      CallCTA
      <br />
      <CallCTA />
      <hr />
      CompanyLogo
      <br />
      <CompanyLogo />
      <hr />
      Footer
      <br />
      <Footer />
      <hr />
      Header
      <br />
      <Header />
      <hr />
      Hero
      <br />
      <Hero />
      <hr />
      ImageUpload
      <br />
      <ImageUpload content="" takeOff={() => console.log()} />
      <hr />
      MenuSandwichCTA
      <br />
      <MenuSandwichCTA />
      <hr />
      MoreCTA
      <br />
      <MoreCTA />
      <hr />
      PostCard
      <br />
      <PostCard />
      <hr />
      ProgressChart
      <br />
      <ProgressChart value={0} />
      <hr />
      Progress
      <br />
      <Progress />
      <hr />
      Stats
      <br />
      <Stats />
      <hr />
      TipTapEditor
      <br />
      <TipTapEditor />
      <hr />
      TitledCard
      <br />
      <TitledCard />
    </div>
  );
}
