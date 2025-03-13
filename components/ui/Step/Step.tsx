import React from "react";

interface StepProps  {
  children: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
};

export default function Step(props: StepProps) {
  const { children, isActive,isCompleted } = props;
  return <>
    {children}
  </>;
}
