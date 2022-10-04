import React, { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export interface PreviewProps {
    readonly rawMarkdown: string;
    readonly className?: string;
}

const Preview: React.FC<PreviewProps> = ({ rawMarkdown, className }) => {
    return (
        <ReactMarkdown
            className={`prose prose-xl prose-pre:bg-[#282828] overflow-y-scroll overflow-x ${className} `}
            rehypePlugins={[rehypeRaw]}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            //@ts-ignore
                            style={gruvboxDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
            children={rawMarkdown}
        />
    );
};

export default React.memo(Preview);
