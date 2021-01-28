import { ReactElement, useState } from "react";
import DesktopWrapper from "../components/DesktopWrapper";
import HorizontalGroup, {
  BetweenHorizontalGroup,
} from "../components/HorizontalGroup";
import classes from "./app.module.scss";

type FlowElement = {
  title: string;
  component: ReactElement;
};

export default function Flow({
  screens,
  title,
}: {
  screens: FlowElement[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  return (
    <div className={classes.flow}>
      <div className={classes.title}>{title}</div>
      <DesktopWrapper>{screens[index].component}</DesktopWrapper>
      <BetweenHorizontalGroup>
        <HorizontalGroup gap={0.5}>
          <button
            className={classes.button}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          >
            Previous
          </button>
          <button
            className={classes.button}
            onClick={() => setIndex((i) => Math.min(i + 1, screens.length - 1))}
          >
            Next
          </button>
        </HorizontalGroup>
        <span>
          {index + 1} / {screens.length}
        </span>
      </BetweenHorizontalGroup>
      <div className={classes.flowTitle}>{screens[index].title}</div>
    </div>
  );
}
