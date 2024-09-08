"use client";
import React, { useState, useEffect } from "react";
import { useEditor, EditorContent, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import DOMPurify from "dompurify";

const TipTapEditor = () => {
  const [content, setContent] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this is set after the component is mounted on the client
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start editing...</p>",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // Update state when the editor content changes
    },
    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },
    // Fix SSR issue: defer rendering until the client
    editable: isClient,
  });

  const handleReset = () => {
    editor?.commands.setContent(""); // Reset editor content
  };

  if (!isClient || !editor) {
    return null; // Render nothing during SSR
  }

  return (
    <EditorProvider>
      {/* Toolbar and Editor Content */}
      <EditorContent editor={editor} />
      <button onClick={handleReset}>Reset</button>
    </EditorProvider>
  );
};

export default TipTapEditor;
