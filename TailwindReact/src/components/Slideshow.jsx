import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "@/components/ui/button";

export default function Slideshow() {
  const images = [
    "https://via.placeholder.com/300/FF0000",
    "https://via.placeholder.com/300/00FF00",
    "https://via.placeholder.com/300/0000FF",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-center">
        <img src={images[index]} alt="slide" className="mx-auto" />

        <div className="flex justify-center gap-4">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
