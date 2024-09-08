import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Readable } from "stream";
import mime from "mime-types";
// Helper function to convert a ReadableStream to Node.js Readable
// Helper function to read a ReadableStream and collect it into a Buffer
async function streamToBuffer(
  stream: ReadableStream<Uint8Array>
): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  let done: boolean | undefined = false;
  while (!done) {
    const { value, done: streamDone } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = streamDone;
  }

  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  try {
    // Create an upload directory inside the public folder
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    // Check the Content-Type header to determine the MIME type
    const imageType = req.headers.get("Image-Type");

    if (!imageType) {
      return NextResponse.json(
        { error: "No Image-Type header provided" },
        { status: 400 }
      );
    }

    // Validate the MIME type (allowing only jpg, png, and gif for example)
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedMimeTypes.includes(imageType)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    // Get the file extension from the MIME type
    const fileExtension = mime.extension(imageType);
    if (!fileExtension) {
      return NextResponse.json(
        { error: "Unable to determine file extension" },
        { status: 400 }
      );
    }

    // Generate a unique filename for the uploaded file
    const filename = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}.${fileExtension}`;
    const filePath = path.join(uploadDir, filename);

    // Convert the Web ReadableStream to a Buffer
    const fileBuffer = await streamToBuffer(
      req.body as ReadableStream<Uint8Array>
    );

    // Write the buffer to the file
    await fs.writeFile(filePath, fileBuffer);

    // Return the URL path to the uploaded image
    const fileUrl = `/uploads/${filename}`;
    return NextResponse.json({ filePath: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error Uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
