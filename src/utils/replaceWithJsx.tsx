import { ComponentType, createElement } from "react";


export interface TagProps {
    tag: keyof JSX.IntrinsicElements | ComponentType<any>;
    id?: string;
    props?: Record<string, any>;
}

function replaceWithJSX(input: string, tags: TagProps[]) {
    const splitByPattern = input.split(/%\w+%/g);
    const matches = Array.from(input.matchAll(/%(\w+)%/g));

    const interleaved: (string | JSX.Element)[] = [];
    splitByPattern.forEach((part, idx) => {
        interleaved.push(part);
        if (matches[idx]) {
            const tagInfo = tags.find(tag => tag.id === matches[idx][1]);
            if (tagInfo) {
                const Element = tagInfo.tag;
                const propsWithChildren = { ...tagInfo.props, children: matches[idx][1], key: idx };
                interleaved.push(createElement(Element, propsWithChildren as any));
            }
        }
    });

    return interleaved;
}

export default replaceWithJSX;