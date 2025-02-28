import { Node } from 'slate';

export const serialize = (value) => {
    return value.map((n) => Node.string(n)).join('\n');
};

export const deserialize = (input) => {
    if (typeof input !== 'string') {
        return [
            {
                type: 'paragraph',
                children: [{ text: 'A line of text in a paragraph.' }],
            },
        ];
    }
    return input.split('\n').map((line) => {
        return {
            children: [{ text: line }],
        };
    });
};
