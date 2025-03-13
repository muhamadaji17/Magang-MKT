import { buttonIcon } from "@/pattern/aboutPattern/buttonIcon";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useEffect, useRef } from "react";
import { SketchPicker } from "react-color";

const InputEditor = ({ name, setValue }) => {
  const [currentColor, setCurrentColor] = useState("#054287");
  const [openSketch, setOpenSketch] = useState(false);
  const sketchPickerRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Underline,
      TextStyle.configure({ mergeNestedSpanStyles: true }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      setValue(name, editor.getHTML());
    },
  });

  // const handleCommandClick = (event, command, params = "") => {
  //   event.preventDefault();
  //   console.log(`Executing command: ${command}`);
  //   editor.chain().focus()[command](params).run();
  // };

  const handleCommandClick = (event, command, params = "") => {
    // event.preventDefault();

    // Dynamic command execution based on type of command
    if (command === "toggleHighlight") {
      // event.preventDefault();
      editor.chain().focus().toggleHighlight({ color: params }).run(); // Perintah tanpa parameter
    } else {
      editor.chain().focus()[command]().run(); // Perintah lainnya tanpa parameter
    }
  };

  const handleCommandColor = (event) => {
    event.preventDefault();
    setOpenSketch(!openSketch); // Toggle SketchPicker visibility
  };

  const handleChangeColor = (color) => {
    setCurrentColor(color.hex);
    handleCommandClick(null, "toggleHighlight", color.hex); // Use handleCommandClick for dynamic color
  };

  // const handleCommandColor = (event) => {
  //   event.preventDefault();
  //   setOpenSketch(!openSketch);
  // };

  // const handleChangeColor = (color) => {
  //   setCurrentColor(color.hex);
  //   editor.chain().focus().toggleHighlight({ color: color.hex }).run();
  // };

  // Close SketchPicker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Pastikan event tidak berasal dari tombol yang membuka SketchPicker
      const isButtonClick =
        event.target.closest("button") &&
        event.target.closest("button").onclick === handleCommandColor;

      if (
        openSketch && // Hanya cek jika SketchPicker sedang terbuka
        sketchPickerRef.current &&
        !sketchPickerRef.current.contains(event.target) &&
        !isButtonClick // Abaikan klik pada tombol
      ) {
        setOpenSketch(false);
      }
    };

    // Gunakan mousedown daripada click
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSketch]); // Tambahkan openSketch sebagai dependency

  useEffect(() => {
    if (editor) {
      console.log(
        "Extensions yang dimuat:",
        editor.extensionManager.extensions
      );
    }
  }, [editor]);

  return (
    <>
      <div className="border-2">
        <div className="grid grid-cols-7 gap-2 p-2 border-b-2 justify-items-center">
          {buttonIcon.map((btn, index) =>
            btn.type === "color" ? (
              <div key={index}>
                <button
                  onClick={handleCommandColor}
                  className={`hover:bg-slate-200 relative rounded-md p-2 ${
                    editor.isActive(btn.name, { color: currentColor })
                      ? "bg-slate-200"
                      : ""
                  }`}
                >
                  <btn.icon size={20} />
                </button>
                {openSketch && (
                  <div ref={sketchPickerRef} className="absolute z-20">
                    <SketchPicker
                      color={currentColor}
                      onChangeComplete={handleChangeColor}
                    />
                  </div>
                )}
              </div>
            ) : (
              <button
                key={index}
                onClick={(event) => handleCommandClick(event, btn.command)}
                className={`hover:bg-slate-200 rounded-md p-2 ${
                  editor.isActive(btn.name) ? "bg-slate-200" : ""
                }`}
              >
                <btn.icon size={20} />
              </button>
            )
          )}
        </div>
        <EditorContent editor={editor} className="p-2 break-words w-96" />
      </div>
    </>
  );
};

export default InputEditor;
