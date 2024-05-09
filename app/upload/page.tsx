"use client";

import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React from "react";

interface CloudinaryResult {
  public_id: string;
}

export default function UploadFile() {
  const [publicId, setPublicId] = useState<string>("");

  return (
    <main>
      {publicId && (
        <CldImage
          src={publicId}
          height={300}
          width={300}
          alt='Image not loaded properly'
        />
      )}
      <CldUploadWidget
        uploadPreset='nokxzx4t'
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className='button' onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </main>
  );
}
