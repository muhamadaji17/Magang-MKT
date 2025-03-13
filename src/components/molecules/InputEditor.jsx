import { buttonIcon } from "@/pattern/aboutPattern/buttonIcon";
import { EditorContent } from "@tiptap/react";
import { SketchPicker } from "react-color";
import { useCustomEditor } from "@/hooks/about/useCustomEditor";
import { useAbout } from "@/hooks/about/useAbout";
import { TextError } from "..";

const InputEditor = ({ name, setValue, placeholder, error }) => {
  const editor = useCustomEditor(name, setValue, placeholder);
  const {
    currentColor,
    openSketch,
    handleChangeColor,
    handleCommandColor,
    handleCommandClick,
    sketchPickerRef,
  } = useAbout(editor);

  // useEffect(() => {
  //   if (editor) {
  //     console.log(
  //       "Extensions yang dimuat:",
  //       editor.extensionManager.extensions
  //     );
  //   }
  // }, [editor]);

  return (
    <>
      <div className="border-2 ">
        <div className="grid grid-cols-7 gap-2 p-2 border-b-2 justify-items-center">
          {buttonIcon.map((btn, index) =>
            btn.type === "color" ? (
              <div key={index}>
                <button
                  title={btn.name}
                  onClick={(event) => handleCommandColor(event, btn.command)}
                  className={`hover:bg-slate-200 relative rounded-md p-2 ${
                    editor.isActive(btn.name, { color: currentColor })
                      ? "bg-slate-200"
                      : ""
                  }`}
                >
                  <btn.icon size={20} />
                </button>
              </div>
            ) : (
              <button
                key={index}
                title={btn.name}
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
        {openSketch && (
          <div ref={sketchPickerRef} className="absolute z-20">
            <SketchPicker
              color={currentColor}
              onChangeComplete={handleChangeColor}
            />
          </div>
        )}
        <EditorContent editor={editor} className="p-2 break-words w-96" />
        {error && <TextError>{error.message}</TextError>}
      </div>
    </>
  );
};

export default InputEditor;
