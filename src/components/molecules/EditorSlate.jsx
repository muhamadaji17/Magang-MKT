import { useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import CustomEditor from './CustomEditor';

import { useForm } from 'react-hook-form';

const EditorComponent = ({ initialValue, onChange }) => {
    const [editor] = useState(() => withReact(createEditor()));

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />;
    }, []);

    const isMarkActive = (editor, format) => {
        switch (format) {
            case 'bold':
                return CustomEditor.isBoldMarkActive(editor);
            case 'italic':
                return CustomEditor.isItalicMarkActive(editor);
            case 'underline':
                return CustomEditor.isUnderlineMarkActive(editor);
            default:
                return false;
        }
    };

    const Button = ({ format, children }) => {
        const isActive = isMarkActive(editor, format);
        return (
            <button
                onMouseDown={(event) => {
                    event.preventDefault();
                    switch (format) {
                        case 'bold':
                            CustomEditor.toggleBoldMark(editor);
                            break;
                        case 'italic':
                            CustomEditor.toggleItalicMark(editor);
                            break;
                        case 'underline':
                            CustomEditor.toggleUnderlineMark(editor);
                            break;
                        default:
                            break;
                    }
                }}
                style={{
                    fontWeight: isActive ? 'bold' : 'normal',
                    backgroundColor: isActive ? '#ddd' : '#fff',
                }}
            >
                {children}
            </button>
        );
    };

    return (
        <Slate
            editor={editor}
            initialValue={initialValue}
            onChange={(value) => {
                const isAstChange = editor.operations.some(
                    (op) => 'set_selection' !== op.type
                );
                if (isAstChange) {
                    onChange(value);
                }
            }}
        >
            <div>
                <Button format='bold'>Bold</Button>
                <Button format='italic'>Italic</Button>
                <Button format='underline'>Underline</Button>
            </div>
            <Editable
                editor={editor}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={(event) => {
                    if (!event.ctrlKey) {
                        return;
                    }

                    switch (event.key) {
                        case 'b': {
                            event.preventDefault();
                            CustomEditor.toggleBoldMark(editor);
                            break;
                        }

                        case 'i': {
                            event.preventDefault();
                            CustomEditor.toggleItalicMark(editor);
                            break;
                        }

                        case 'u': {
                            event.preventDefault();
                            CustomEditor.toggleUnderlineMark(editor);
                            break;
                        }
                    }
                }}
            />
        </Slate>
    );
};

const Leaf = (props) => {
    return (
        <span
            {...props.attributes}
            style={{
                fontWeight: props.leaf.bold ? 'bold' : 'normal',
                fontStyle: props.leaf.italic ? 'italic' : 'normal',
                textDecoration: props.leaf.underline ? 'underline' : 'none',
            }}
        >
            {props.children}
        </span>
    );
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};

const SlateForm = () => {
    const { handleSubmit, register, setValue } = useForm();

    const [contentEn, setContentEn] = useState(() =>
        deserialize(
            JSON.parse(localStorage.getItem('content_en')) || [
                {
                    type: 'paragraph',
                    children: [{ text: 'A line of text in a paragraph.' }],
                },
            ]
        )
    );

    const [contentId, setContentId] = useState(() =>
        deserialize(
            JSON.parse(localStorage.getItem('content_id')) || [
                {
                    type: 'paragraph',
                    children: [{ text: 'Sebuah baris teks dalam paragraf.' }],
                },
            ]
        )
    );

    return (
        <>
            <h2>English</h2>
            <EditorComponent initialValue={contentEn} onChange={setContentEn} />
        </>
    );
};
