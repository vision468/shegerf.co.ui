"use client";
// src/Tiptap.tsx
import {
  EditorProvider,
  Content,
  useCurrentEditor,
  Editor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar.TextEditor.component";
import { useEffect, useState } from "react";
import { Button } from "@tremor/react";
import LoadingCallout from "./Loading.Callout.component";

type TipTapEditorProps = {
  content: Content;
  takeOff: (h: Content) => void;
};

// define your extension array
const extensions = [StarterKit];

const temp_content =
  "<p>ویرایشگر متنی ... { برای شروع اینجا کلیک کنید&#128070;}</p>";

const Tiptap = ({ content: c, takeOff }: TipTapEditorProps) => {
  const [content, setContent] = useState<Content>(temp_content);
  const [loading, setLoading] = useState(true);
  const [flushContent, setFlushContent] = useState(false);
  useEffect(() => {
    if (c !== content && !loading) {
      setFlushContent(true);
      setContent(c);
    } else {
      setFlushContent(false);
    }
    return () => {
      setLoading(false);
    };
  }, [c]);

  if (loading) return <LoadingCallout />;

  return (
    <div className="max-w-screen-sm">
      <EditorProvider
        extensions={extensions}
        content={content}
        slotBefore={<MenuBar flushContent={flushContent} />}
        onUpdate={({ editor }) => {
          setContent(editor.getHTML());
          takeOff(editor.getHTML());
        }}
        immediatelyRender={false}
      ></EditorProvider>
    </div>
  );
};

export default Tiptap;
