import {
  Baseline,
  Bold,
  Highlighter,
  Italic,
  ListOrdered,
  Underline,
} from "lucide-react";

export const buttonIcon = [
  { command: "toggleBold", name: "bold", icon: Bold },
  { command: "toggleItalic", name: "italic", icon: Italic },
  { command: "toggleUnderline", name: "underline", icon: Underline },
  {
    type: "color",
    command: "toggleHighlight",
    name: "highlight",
    icon: Highlighter,
  },
  { command: "toggleOrderedList", name: "orderedList", icon: ListOrdered },
  { command: "setColor", name: "setColor", type: "color", icon: Baseline },
];
