import React from "react";
import { IKImage } from "imagekitio-react";

export default function image({ path, alt, className, w, h }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
  );
}
