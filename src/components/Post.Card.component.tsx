import { HTMLAttributes } from "react";
import { List, ListItem } from "@tremor/react";
import Image from "next/image";
import AnchoredBox from "./Anchored.Card.component";

type PostCardProps = {} & HTMLAttributes<HTMLDivElement>;

const PostCard = ({ children, className, ...props }: PostCardProps) => {
  return (
    <div
      {...props}
      className={`${className} flex items-center gap-2 md:bg-tremor-background-subtle p-4 rounded-tremor-default `}
    >
      <div className="hidden md:block flex-1 relative w-64 max-w-[256px] h-full max-h-[256px] aspect-square">
        <Image
          src={"/hero_background.png"}
          alt=""
          fill
          className="object-fill rounded-tremor-default"
        />
      </div>
      <AnchoredBox>
        <div className="flex flex-col md:flex-row items-center gap-2 *:flex-1">
          <div className="md:hidden flex-1 relative w-64 h-full aspect-square">
            <Image
              src={"/hero_background.png"}
              alt=""
              fill
              className="object-fill rounded-tremor-default"
            />
          </div>
          <div>
            <p>
              Do ipsum cupidatat magna ullamco velit ea quis nulla et commodo
              pariatur fugiat ea.
            </p>
          </div>
          <div className="mx-auto w-full md:max-w-md flex-1">
            <List className="*:text-tremor-brand-inverted">
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
          {children}
        </div>
      </AnchoredBox>
    </div>
  );
};

export default PostCard;
