import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";

export const useCustomEditor = (name, setValue, placeholder) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Underline,
      TextStyle.configure({ mergeNestedSpanStyles: true }),
      Color,
      Placeholder.configure({
        placeholder: placeholder || "Write something...",
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setValue(name, editor.getHTML());
    },
  });

  return editor;
};
