import React from "react";
import { Stage } from "../../data/reservation";
import ArrowButton from "../ArrowButton";

function StageNavigator({
  dir,
  stage,
  setStage,
}: {
  dir: "left" | "right";
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
}) {
  const className =
    dir === "right"
      ? "translate-x-full -right-5 "
      : "-translate-x-full -left-5";
  const text = dir === "right" ? "下一步" : "上一步";

  function proceedToNextOrPrevStage() {
    if (dir === "left") {
      switch (stage) {
        case 1:
          setStage(0);
          break;
        case 2:
          setStage(1);
          break;
        case 3:
          setStage(2);
          break;
        default:
          console.log("Impossible stage");
      }
    } else {
      switch (stage) {
        case 0:
          setStage(1);
          break;
        case 1:
          setStage(2);
          break;
        case 2:
          setStage(3);
          break;
        default:
          console.log("Impossible stage");
      }
    }
  }

  return (
    <div
      className={`grid gap-2 justify-items-center absolute top-1/2 translat-y-1/2 ${className}`}>
      <ArrowButton dir={dir} onClick={proceedToNextOrPrevStage} />
      <em className="text-sm font-medium text-orange-primary">{text}</em>
    </div>
  );
}

export default StageNavigator;
