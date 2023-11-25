import React from "react";

function Index() {
  const imageData = [
    {
      src: "/day1-first.png",
      alt: "what is react query",
    },
    {
      src: "/day1-second.png",
      alt: "what is react query",
    },
    {
      src: "/day1-third.png",
      alt: "what is react query",
    },
  ];

  return (
    <div>
      {imageData?.map((image, index) => (
        <img
          src={image.src}
          alt={image.alt}
          width={1000}
          style={{ marginBottom: "10px" }}
        />
      ))}
    </div>
  );
}

export default Index;
