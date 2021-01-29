import { ReactElement, useState } from "react";
import DesktopWrapper from "../components/DesktopWrapper";
import HorizontalGroup from "../components/HorizontalGroup";
import VerticalGroup from "../components/VerticalGroup";
import classes from "./app.module.scss";

type FlowElement = {
  title: string;
  component: ReactElement;
};

export default function Flow({
  screens,
  title,
  role,
}: {
  screens: FlowElement[];
  title: string;
  role: string;
}) {
  const [index, setIndex] = useState(0);
  if (!screens.length) return null;
  return (
    <VerticalGroup gap={1}>
      <div className={classes.title}>
        {role} – {title}
      </div>
      <HorizontalGroup gap={1} className={classes.flowColumns}>
        <DesktopWrapper>{screens[index].component}</DesktopWrapper>
        <VerticalGroup gap={2}>
          <HorizontalGroup gap={1} align="center">
            <button
              className={classes.button}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
            >
              Previous
            </button>
            <button
              className={classes.button}
              onClick={() =>
                setIndex((i) => Math.min(i + 1, screens.length - 1))
              }
            >
              Next
            </button>
            <span className={classes.page}>
              {index + 1} / {screens.length}
            </span>
          </HorizontalGroup>
          <VerticalGroup gap={0.5} className={classes.flowList}>
            {screens.map((screen, i) => (
              <div
                key={i}
                className={classes.flowTitle}
                style={{ opacity: index === i ? 1 : 0.25 }}
              >
                {i + 1}. {screens[i].title}
              </div>
            ))}
          </VerticalGroup>
        </VerticalGroup>
      </HorizontalGroup>
    </VerticalGroup>
  );
}
