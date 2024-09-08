import Image from "next/image";
import { HTMLAttributes } from "react";
type ArticleProps = {} & HTMLAttributes<HTMLDivElement>;

const Article = ({ children, className, ...props }: ArticleProps) => {
  return (
    <article
      {...props}
      className={`${className} flex flex-col md:flex-row gap-0`}
    >
      {/* Content */}
      <div className="p-4 w-full flex-1 md:w-1/2 min-h-[256px]">
        <h3 className="text-tremor-metric text-tremor-content-emphasis my-4 px-4 ">
          title
        </h3>
        <div className="bg-tremor-background-subtle text-tremor-content border-dashed border border-tremor-content rounded-tremor-default p-4 min-h-[256px]">
          {children || (
            <p>
              Ut ut cupidatat sint id fugiat quis. Ut duis Lorem officia ut
              deserunt incididunt do. Eiusmod ullamco sint ea excepteur id anim.
              Magna id veniam velit sit magna officia nostrud occaecat cillum
              magna adipisicing sunt veniam velit. Non laboris adipisicing est
            </p>
          )}
        </div>
      </div>
      {/* Picture */}
      <div className=" px-4 md:py-4 w-full md:w-1/2 flex-1">
        <div className="relative w-full min-h-[256px] h-full rounded-tremor-default">
          <Image
            src={"/hero_background.png"}
            alt="about picture"
            fill
            className="object-cover rounded-tremor-default w-full h-full"
          />
        </div>
      </div>
    </article>
  );
};

export default Article;
