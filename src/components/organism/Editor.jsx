import { Controller } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // ✅ Pastikan diimpor

// --- Register font sizes ---
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["12px", "14px", "16px", "18px", "24px", "32px"];
Quill.register(Size, true);

const Editor = ({ className, name, control, rules }) => {
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
    "color",
    "background",
    "font",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
    "video",
    "size",
    "font",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      // [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      // [{ direction: "rtl" }],
      [{ size: Size.whitelist }],
      [{ font: [] }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <ReactQuill
          {...field}
          theme="snow"
          modules={modules}
          formats={formats}
          className={`${className || ""} w-full`}
        />
      )}
    />
  );
};

export default Editor;
