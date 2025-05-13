import React from "react";
import "./gallery.css";
import GalleryItem from "../galleryItem/galleryItem";

export default function gallery() {
  const items = [
    {
      id: 1,
      media: "/PinterestPins/pin1.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 2,
      media: "/PinterestPins/pin2.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 3,
      media: "/PinterestPins/pin3.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 4,
      media: "/PinterestPins/pin4.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 5,
      media: "/PinterestPins/pin5.jpeg",
      width: 1260,
      height: 1243,
    },
    {
      id: 6,
      media: "/PinterestPins/pin6.jpeg",
      width: 1260,
      height: 1568,
    },
    {
      id: 7,
      media: "/PinterestPins/pin7.jpeg",
      width: 1260,
      height: 1234,
    },
    {
      id: 8,
      media: "/PinterestPins/pin8.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 9,
      media: "/PinterestPins/pin9.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 10,
      media: "/PinterestPins/pin10.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 11,
      media: "/PinterestPins/pin11.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 12,
      media: "/PinterestPins/pin12.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 13,
      media: "/PinterestPins/pin13.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 14,
      media: "/PinterestPins/pin14.jpeg",
      width: 1260,
      height: 1600,
    },
    {
      id: 15,
      media: "/PinterestPins/pin15.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 16,
      media: "/PinterestPins/pin16.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 17,
      media: "/PinterestPins/pin17.jpeg",
      width: 1260,
      height: 1000,
    },
    {
      id: 18,
      media: "/PinterestPins/pin18.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 19,
      media: "/PinterestPins/pin19.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 20,
      media: "/PinterestPins/pin20.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 21,
      media: "/PinterestPins/pin21.jpeg",
      width: 1260,
      height: 1400,
    },
    {
      id: 22,
      media: "/PinterestPins/pin22.jpeg",
      width: 1260,
      height: 1890,
    },
    {
      id: 23,
      media: "/PinterestPins/pin23.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 24,
      media: "/PinterestPins/pin24.jpeg",
      width: 1260,
      height: 1260,
    },
    {
      id: 25,
      media: "/PinterestPins/pin25.jpeg",
      width: 1260,
      height: 1260,
    },
  ];

  return (
    <div className="gallery">
      {items.map(item => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
