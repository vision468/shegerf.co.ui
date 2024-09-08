"use client";
import { Card, Legend, ProgressBar, ProgressBarProps } from "@tremor/react";
type ProgressChartProps = {} & ProgressBarProps;

const ProgressChart = ({
  children,
  className,
  ...props
}: ProgressChartProps) => {
  return (
    <>
      <div className="md:mx-4 mt-4 md:mt-0" dir="ltr">
        <aside className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <Legend className=" " categories={["Start"]} />
          <Legend className=" " categories={["Phase 1"]} />
          <Legend className=" " categories={["Phase 2"]} />
          <Legend
            className=" "
            categories={["Last Phase"]}
            activeLegend="true"
          />
        </aside>
        <ProgressBar value={60} color="blue" className="mt-3" />
        <ul className="*:text-tremor-content mt-3" dir="rtl">
          <li>
            <strong className="text-tremor-brand">Phase 1:</strong>
            <p className="text-tremor-content-strong">
              Ut dolore consectetur veniam id.
            </p>
          </li>
          <li>
            <strong>Phase 2:</strong>
            <p>Ut dolore consectetur veniam id.</p>
          </li>
          <li>
            <strong>Last Phase:</strong>
            <p>Ut dolore consectetur veniam id.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProgressChart;
