import HorizontalGroup from "./HorizontalGroup";
import Type from "./Type";
import VerticalGroup from "./VerticalGroup";

export default function RadioGroup({
  name,
  choices,
}: {
  name: string;
  choices: string[];
}) {
  return (
    <VerticalGroup gap={0.5}>
      {choices.map((choice) => (
        <HorizontalGroup key={choice} gap={0.5}>
          <input type="radio" name={name} value={choice} />
          <Type>{choice}</Type>
        </HorizontalGroup>
      ))}
    </VerticalGroup>
  );
}
