import { useForm, Controller } from "react-hook-form";
import { useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import axios from "axios";

const AdvancedQuillEditor = () => {
    const { handleSubmit, control, setValue, watch } = useForm({
        defaultValues: { content: "" },
    });

    const content = watch("content");

    // Custom toolbar
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
                    ["clean"],
                ],
                handlers: {
                    image: () => handleImageUpload(),
                },
            },
        }),
        []
    );

    // Upload image ke Cloudinary
    const handleImageUpload = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "your_cloudinary_preset"); // Ganti preset Cloudinary

            try {
                const res = await axios.post(
                    "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Ganti dengan Cloudinary URL
                    formData
                );
                const url = res.data.secure_url;

                // Masukkan gambar ke dalam editor
                setValue(
                    "content",
                    content + `<img src="${url}" alt="uploaded image" />`
                );
            } catch (err) {
                console.error("Upload gagal", err);
            }
        };
    };

    const onSubmit = (data) => {
        console.log("Data yang dikirim:", data);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
                Advanced Quill Editor (React Hook Form)
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <ReactQuill
                            {...field}
                            theme="snow"
                            modules={modules}
                            onChange={(value) => field.onChange(value)}
                        />
                    )}
                />

                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Simpan
                </button>
            </form>

            <div className="mt-4 p-3 bg-gray-100 border">
                <h3 className="text-lg font-semibold">Preview:</h3>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                    }}
                />
            </div>
        </div>
    );
};

export default AdvancedQuillEditor;
