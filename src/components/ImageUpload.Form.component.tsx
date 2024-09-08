"use client";

import { Button } from "@tremor/react";
// components/ImageUpload.js
import { ChangeEventHandler, HTMLAttributes, useEffect, useState } from "react";
type ImageUploadProps = {
  content: string;
  takeOff: (imagePath: string) => void;
};

const ImageUpload = ({ content, takeOff }: ImageUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files?.length > 0)
      setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError(
        "لطفا یک فایل را برای آپلود انتخاب کنید." ||
          "Please select a file to upload."
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    setUploading(true);
    setError("");
    const fetchHeader = new Headers();
    fetchHeader.append("Image-Type", selectedFile.type);
    fetchHeader.append("Content-Type", "multipart/form-data");

    try {
      const res = await fetch("/api/upload/image", {
        method: "POST",
        body: selectedFile,
        headers: fetchHeader,
      });

      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.filePath); // URL of the uploaded file
        takeOff(data.filePath);
        setSelectedFile(null);
      } else {
        setError("آپلود تصویر ناموفق بود." || "Failed to upload the image.");
      }
    } catch (err) {
      setError(
        "خطایی به هنگام آپلود تصویر رخ داده است." ||
          "An error occurred while uploading the image."
      );
    }

    setUploading(false);
  };

  useEffect(() => {
    if (content !== imageUrl) setImageUrl("");
  }, [content]);

  return (
    <div className="py-8">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <Button onClick={handleUpload} disabled={uploading}>
        {uploading ? "درحال آپلود ..." || "Uploading..." : "آپلود" || "Upload"}
      </Button>
      {error && <p className="text-red-600">{error}</p>}
      {(imageUrl || content) && (
        <div>
          <p className="text-tremor-content">
            {"تصویر با موفقیت آپلود شد" || "Image uploaded successfully!"}
          </p>
          <img
            src={imageUrl || content}
            alt="Uploaded Image"
            style={{ width: "200px" }}
          />
        </div>
      )}
      {(!imageUrl || !content) && (
        <div>
          <p className="text-tremor-content-subtle">
            {"هیچ تصویری آپلود نشده است." || "No image uploaded!"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
