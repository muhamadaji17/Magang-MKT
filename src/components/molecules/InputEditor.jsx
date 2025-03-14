import { buttonIcon } from "@/pattern/aboutPattern/buttonIcon";
import { EditorContent } from "@tiptap/react";
import { SketchPicker } from "react-color";
import { useCustomEditor } from "@/hooks/about/useCustomEditor";
import { useAbout } from "@/hooks/about/useAbout";
import { TextError } from "..";

const InputEditor = ({ name, setValue, placeholder, error, defaultValues }) => {
  const editor = useCustomEditor(name, setValue, placeholder);
  const {
    currentColor,
    openSketch,
    onCommandClick,
    onCommandColor,
    onChangeColor,
    sketchPickerRef,
    isDropdownOpen,
    toggleDropdown,
    dropDownRef,
  } = useAbout(editor, defaultValues);

  return (
    <>
      <div className="border-2 ">
        <div className="grid grid-cols-7 gap-2 p-2 border-b-2 justify-items-center">
          {buttonIcon.map((btn, index) =>
            btn.type === "color" ? (
              <div key={index}>
                <button
                  title={btn.name}
                  onClick={(event) => onCommandColor(event, btn.command)}
                  className={`hover:bg-slate-200 relative rounded-md p-2 ${
                    editor.isActive(btn.name, { color: currentColor })
                      ? "bg-slate-200"
                      : ""
                  }`}
                >
                  <btn.icon size={20} />
                </button>
              </div>
            ) : btn.type === "dropdown" ? (
              <div key={index} className="relative">
                <button
                  title={btn.name}
                  onClick={(e) => toggleDropdown(e, index)}
                  className={`hover:bg-slate-200 rounded-md p-2 ${
                    isDropdownOpen === index ? "bg-slate-200" : ""
                  }`}
                >
                  <btn.icon size={20} />
                </button>
                {isDropdownOpen === index && btn.type === "dropdown" && (
                  <div
                    className="absolute z-10 bg-white border rounded-md mt-2 p-2 shadow-md"
                    ref={dropDownRef}
                  >
                    {btn.options.map((option, index) => (
                      <button
                        key={index}
                        title={btn.name}
                        onClick={(event) =>
                          onCommandClick(event, btn.command, option.value)
                        }
                        className={`hover:bg-slate-200 rounded-md p-2 ${
                          editor.isActive(btn.name, { level: option.value })
                            ? "bg-slate-200"
                            : ""
                        }`}
                      >
                        <option.icon size={20} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={index}
                title={btn.name}
                onClick={(event) => onCommandClick(event, btn.command)}
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
              onChangeComplete={onChangeColor}
            />
          </div>
        )}
        <EditorContent
          editor={editor}
          className="p-2 break-words w-96"
          defaultValue={defaultValues}
        />
        {error && <TextError>{error.message}</TextError>}
      </div>
    </>
  );
};

export default InputEditor;
