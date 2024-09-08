import { HTMLAttributes } from "react";
type TitledCardProps = {
  subClassName?: string | undefined;
} & HTMLAttributes<HTMLDivElement>;
const TitledCard = ({
  children,
  className,
  title,
  subClassName,
  ...props
}: TitledCardProps) => {
  return (
    <div {...props} className={` shadow-tremor-card p-8 ${className}`}>
      {title && (
        <div className="w-full h-8 flex justify-center items-center">
          <aside className="bg-tremor-content-subtle px-4 py-2 rounded-tremor-default w-64">
            <h3 className="text-tremor-content-strong text-xl font-semibold text-center">
              {title}
            </h3>
          </aside>
        </div>
      )}
      <br />
      <article className={`rounded-tremor-default ${subClassName}`}>
        {children}
      </article>
    </div>
  );
};

export default TitledCard;
