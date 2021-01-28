import { ReactNode } from "react";
import Type from "./Type";
import VerticalGroup from "./VerticalGroup";

export default function WithLabel({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <VerticalGroup gap={0.25}>
      <Type size={-1}>{label}</Type>
      {children}
    </VerticalGroup>
  );
}
