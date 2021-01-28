import HorizontalGroup from "./HorizontalGroup";
import Type from "./Type";

export default function Checkbox({ label }: { label: string }) {
  return (
    <HorizontalGroup gap={0.5} align="center">
      <input type="checkbox" />
      <Type>{label}</Type>
    </HorizontalGroup>
  );
}
