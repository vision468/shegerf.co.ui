import { HTMLAttributes } from "react";
import TitledCard from "./Titled.Card.component";
import AnchoredBox from "./Anchored.Card.component";
import { List, ListItem } from "@tremor/react";
import ProgressChart from "./Progress.Chart.component";
type ProgressProps = {} & HTMLAttributes<HTMLDivElement>;

const Progress = ({ children, className, ...props }: ProgressProps) => {
  return (
    <section {...props} className={`${className} bg-tremor-brand-muted`}>
      <TitledCard title="Project" className="">
        <div className="flex flex-row justify-center items-center overflow-x-clip">
          <AnchoredBox className="scale-90" />
          <AnchoredBox />
          <AnchoredBox className="scale-90" />
        </div>
      </TitledCard>
      <TitledCard title="" className="bg-tremor-background-muted bg-opacity-50">
        <div className="flex flex-col md:flex-row gap-0">
          <div className="mx-auto w-full md:max-w-md flex-1">
            <List>
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
          <div className="mx-auto max-w-md flex-1">
            <ProgressChart value={0} />
          </div>
        </div>
      </TitledCard>
    </section>
  );
};

export default Progress;
