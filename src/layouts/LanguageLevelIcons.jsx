import React from "react";
import { Icon } from "semantic-ui-react";

export default function LanguageLevelIcons({ level }) {
  let name1 = "circle outline", name2 = "circle outline", name3 = "circle outline", name4 = "circle outline", name5 = "circle outline";

  if (level === "Level 1") {
    name1 = "circle";
  }

  if (level === "Level 2") {
    name1 = name2 = "circle";
  }

  if (level === "Level 3") {
    name1 = name2 = name3 = "circle";
  }

  if (level === "Level 4") {
    name1 = name2 = name3 = name4 = "circle";
  }

  if (level === "Level 5") {
    name1 = name2 = name3 = name4 = name5 = "circle";
  }

  return (
    <span>
      <Icon size="small" color="violet" name={name1} />
      <Icon size="small" color="violet" name={name2} />
      <Icon size="small" color="violet" name={name3} />
      <Icon size="small" color="violet" name={name4} />
      <Icon size="small" color="violet" name={name5} />
    </span>
  );
}
