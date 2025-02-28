import { Editor, Transforms, Text } from 'slate';

const CustomEditor = {
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => n.bold === true,
            universal: true,
        });
        return !!match;
    },

    isItalicMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => n.italic === true,
            universal: true,
        });
        return !!match;
    },

    isUnderlineMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => n.underline === true,
            universal: true,
        });
        return !!match;
    },

    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor);
        Transforms.setNodes(
            editor,
            { bold: isActive ? null : true },
            { match: (n) => Text.isText(n), split: true }
        );
    },

    toggleItalicMark(editor) {
        const isActive = CustomEditor.isItalicMarkActive(editor);
        Transforms.setNodes(
            editor,
            { italic: isActive ? null : true },
            { match: (n) => Text.isText(n), split: true }
        );
    },

    toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor);
        Transforms.setNodes(
            editor,
            { underline: isActive ? null : true },
            { match: (n) => Text.isText(n), split: true }
        );
    },
};

export default CustomEditor;
