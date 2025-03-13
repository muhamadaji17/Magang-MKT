import {
  Baseline,
  Bold,
  Code,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  TextQuote,
  Underline,
  WrapText,
} from "lucide-react";
import { MdHorizontalRule } from "react-icons/md";

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
  // {
  //   type: "color",
  //   command: "setColor",
  //   name: "setColor",
  //   icon: Highlighter,
  // },
  { command: "toggleOrderedList", name: "orderedList", icon: ListOrdered },
  { command: "toggleBulletList", name: "bulletList", icon: List },
  { command: "toggleCodeBlock", name: "codeBlock", icon: Code },
  { command: "setHardBreak", name: "hardBreak", icon: WrapText },
  {
    command: "setHorizontalRule",
    name: "horizontalRule",
    icon: MdHorizontalRule,
  },
  {
    command: "toggleBlockquote",
    name: "blockquote",
    icon: TextQuote,
  },
];
