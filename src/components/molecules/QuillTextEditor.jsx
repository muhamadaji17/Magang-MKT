import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label, Error } from "../atoms";

const QuilTextEditor = ({ labelText, field, labelStyle, errors }) => {
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    [{ align: [] }],
                    [{ color: [] }, { background: [] }],
                    ["clean"],
                ],
            },
        }),
        []
    );

    return (
        <div className="flex flex-col gap-1">
            <Label className={labelStyle}>{labelText}</Label>
            <ReactQuill
                {...field}
                theme="snow"
                modules={modules}
                onChange={(value) => field.onChange(value)}
            />
            {errors && (
                <Error className="text-sm text-red-500">{errors.message}</Error>
            )}
        </div>
    );
};

export default QuilTextEditor;
