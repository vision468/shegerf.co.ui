"use client";

import { useParams } from "next/navigation";
import TitledCard from "@/components/Titled.Card.component";
import ProgressChart from "@/components/Progress.Chart.component";
import { List, ListItem } from "@tremor/react";
import AnchoredBox from "@/components/Anchored.Card.component";

export default function ProjectDetailPage() {
  const { projectSlag } = useParams();
  return (
    <main>
      <TitledCard
        title={projectSlag.toLocaleString() || "Projects"}
        subClassName="w-full flex flex-col items-center"
      >
        <div className="flex w-full bg-tremor-background-muted *:flex-1">
          <div className="mx-auto w-full">
            <List className="">
              <ListItem>
                <span>Name</span>
                <span>10,550</span>
              </ListItem>
              <ListItem>
                <span>Owner</span>
                <span>9,205</span>
              </ListItem>
              <ListItem>
                <span>Begin Date</span>
                <span>8,310</span>
              </ListItem>
            </List>
          </div>
          <ProgressChart value={0} className="flex-1" />
        </div>
        <br />
        <AnchoredBox className="md:w-full">
          <p>
            Fugiat enim nisi ea nisi incididunt pariatur consequat officia quis
            Lorem non. Commodo enim exercitation in culpa laboris non excepteur
            ipsum adipisicing. Cillum esse excepteur occaecat nulla velit qui
            qui velit ullamco culpa excepteur culpa anim nisi.
          </p>
        </AnchoredBox>
      </TitledCard>
    </main>
  );
}
