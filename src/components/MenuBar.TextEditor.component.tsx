"use client";
import {
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiBold,
  RiCodeBoxLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
  RiParagraph,
  RiQuoteText,
  RiStrikethrough,
} from "@remixicon/react";
import { useCurrentEditor } from "@tiptap/react";
import { Button } from "@tremor/react";
import { useEffect, useState } from "react";

type MenuBarProps = {
  flushContent: boolean;
};
const MenuBar = ({ flushContent }: MenuBarProps) => {
  const { editor } = useCurrentEditor();
  const [flushed, setFlushed] = useState(false);
  if (!editor) {
    return null;
  }
  useEffect(() => {
    if (flushContent && !flushed) {
      editor.chain().focus().clearContent().run();
      setFlushed(true);
    } else {
      setFlushed(false);
    }
  }, [flushContent]);

  return (
    <div className="flex flex-row gap-2 my-1 sticky top-2 z-10 bg-tremor-background-subtle rounded-tremor-default shadow-tremor-card">
      <div className="bg-tremor-brand-subtle rounded-tremor-default flex items-center px-4 text-tremor-content-inverted">
        <strong>{"جعبه ابزار" || "Toolbox"}</strong>
      </div>
      <div className="control-group relative ">
        {/* Style Buttons */}
        <details>
          <summary className="text-tremor-brand cursor-pointer">
            {"قلم" || "Style"}
          </summary>
          <div className="button-group flex flex-row flex-wrap *:whitespace-nowrap gap-2 px-8 py-4 sticky top-0 ">
            <Button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              variant={editor.isActive("bold") ? "primary" : "secondary"}
              className={editor.isActive("bold") ? "is-active" : ""}
              icon={() => <RiBold />}
              iconPosition="right"
            >
              {"برجسته" || "Bold"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              variant={editor.isActive("italic") ? "primary" : "secondary"}
              className={editor.isActive("italic") ? "is-active" : ""}
              icon={() => <RiItalic />}
              iconPosition="right"
            >
              {"ایتالیک" || "Italic"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              variant={editor.isActive("strike") ? "primary" : "secondary"}
              className={editor.isActive("strike") ? "is-active" : ""}
              icon={() => <RiStrikethrough />}
              iconPosition="right"
            >
              {"روخط دار" || "Strike"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleCode().run()}
              disabled={!editor.can().chain().focus().toggleCode().run()}
              variant={editor.isActive("code") ? "primary" : "secondary"}
              className={editor.isActive("code") ? "is-active" : ""}
              icon={() => <RiCodeBoxLine />}
              iconPosition="right"
            >
              {"کد" || "Code"}
            </Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              variant={
                editor.isActive("heading", { level: 1 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "is-active" : ""
              }
              icon={() => <RiH1 />}
              iconPosition="right"
            ></Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              variant={
                editor.isActive("heading", { level: 2 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "is-active" : ""
              }
              icon={() => <RiH2 />}
              iconPosition="right"
            ></Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              variant={
                editor.isActive("heading", { level: 3 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "is-active" : ""
              }
              icon={() => <RiH3 />}
              iconPosition="right"
            ></Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              variant={
                editor.isActive("heading", { level: 4 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 4 }) ? "is-active" : ""
              }
              icon={() => <RiH4 />}
              iconPosition="right"
            ></Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
              variant={
                editor.isActive("heading", { level: 5 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 5 }) ? "is-active" : ""
              }
              icon={() => <RiH5 />}
              iconPosition="right"
            ></Button>
            <Button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
              variant={
                editor.isActive("heading", { level: 6 })
                  ? "primary"
                  : "secondary"
              }
              className={
                editor.isActive("heading", { level: 6 }) ? "is-active" : ""
              }
              icon={() => <RiH6 />}
              iconPosition="right"
            ></Button>
          </div>
        </details>

        {/* Block Buttons */}
        <details>
          <summary className="text-tremor-brand cursor-pointer">
            {"بلوک" || "Block"}
          </summary>
          <div className="button-group flex flex-row flex-wrap *:whitespace-nowrap gap-2 px-8 py-4 sticky top-0 ">
            <Button
              onClick={() => editor.chain().focus().setParagraph().run()}
              variant={editor.isActive("paragraph") ? "primary" : "secondary"}
              className={editor.isActive("paragraph") ? "is-active" : ""}
              icon={() => <RiParagraph />}
              iconPosition="right"
            >
              {"پاراگراف" || "Paragraph"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              variant={editor.isActive("bulletList") ? "primary" : "secondary"}
              className={editor.isActive("bulletList") ? "is-active" : ""}
              icon={() => <RiListUnordered />}
              iconPosition="right"
            >
              {"لیست" || "Bullet list"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              variant={editor.isActive("orderedList") ? "primary" : "secondary"}
              className={editor.isActive("orderedList") ? "is-active" : ""}
              icon={() => <RiListOrdered />}
              iconPosition="right"
            >
              {"لیست ترتیبی" || "Ordered list"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              variant={editor.isActive("codeBlock") ? "primary" : "secondary"}
              className={editor.isActive("codeBlock") ? "is-active" : ""}
              icon={() => <RiCodeBoxLine />}
              iconPosition="right"
            >
              {"بلوک کد" || "Code block"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              variant={editor.isActive("blockquote") ? "primary" : "secondary"}
              className={editor.isActive("blockquote") ? "is-active" : ""}
              icon={() => <RiQuoteText />}
              iconPosition="right"
            >
              {"نقل قول" || "Blockquote"}
            </Button>
          </div>
        </details>

        {/* Operation Buttons */}
        <details open>
          <summary className="text-tremor-brand cursor-pointer">
            {"عملیات" || "Operation"}
          </summary>
          <div className="button-group flex flex-row flex-wrap *:whitespace-nowrap gap-2 px-8 py-4 sticky top-0 ">
            <Button
              onClick={() => editor.chain().focus().unsetAllMarks().run()}
              variant="secondary"
            >
              {"رد نشانه" || "Clear marks"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().clearNodes().run()}
              variant="secondary"
            >
              {"رد گره" || "Clear nodes"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              variant="secondary"
            >
              {"خط افقی" || "Horizontal rule"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().setHardBreak().run()}
              variant="secondary"
            >
              {"شکستن خط" || "Hard break"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
              icon={() => <RiArrowGoBackLine />}
              iconPosition="right"
              variant="secondary"
            >
              {" " || "Undo"}
            </Button>
            <Button
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
              icon={() => <RiArrowGoForwardLine />}
              iconPosition="right"
              variant="secondary"
            >
              {" " || "Redo"}
            </Button>
          </div>
        </details>
      </div>
    </div>
  );
};

export default MenuBar;
