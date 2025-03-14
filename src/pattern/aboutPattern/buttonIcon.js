import {
  Baseline,
  Bold,
  Code,
  Heading,
  Heading1,
  Heading2,
  Heading3,
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
  {
    type: "color",
    command: "setColor",
    name: "textStyle",
    icon: Baseline,
  },
  { command: "toggleOrderedList", name: "orderedList", icon: ListOrdered },
  { command: "toggleBulletList", name: "bulletList", icon: List },
  { command: "toggleCodeBlock", name: "codeBlock", icon: Code },
  { command: "setHardBreak", name: "hardBreak", icon: WrapText },
  {
    type: "dropdown",
    command: "toggleHeading",
    name: "heading",
    icon: Heading,
    options: [
      { icon: Heading1, value: 1 },
      { icon: Heading2, value: 2 },
      { icon: Heading3, value: 3 },
    ],
  },
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
