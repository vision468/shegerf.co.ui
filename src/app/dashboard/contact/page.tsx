"use client";

import BasicForm from "@/components/Basic.Form.component";

export default function ContactModifyPage() {
  return (
    <div>
      <BasicForm
        title={"ویرایش صفحه تماس با ما " || "Home input form"}
        description={
          "محتوا و جزئیات صفحه تماس با ما را اینجا ویرایش کنید" ||
          "a typo description about form"
        }
        inputs={[
          { name: "title", type: "text", labelName: "عنوان" },
          { name: "seo-title", type: "text", labelName: "عنوان سئو" },
          { name: "seo-desc", type: "text", labelName: "توضیحات سئو" },
          { name: "seo-keyword", type: "text", labelName: "کلمات کلیدی سئو" },
          { name: "seo-author", type: "text", labelName: "نویسنده سئو" },
          {
            name: "image",
            type: "image-uploader",
            labelName: "تصویر صفحه",
          },
          { name: "content", type: "text-editor", labelName: "متحوا صفحه" },
        ]}
        takeOff={(p) => console.log(p)}
      />
    </div>
  );
}
