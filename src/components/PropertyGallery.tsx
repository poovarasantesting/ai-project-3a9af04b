import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setMainImageIndex(index);
  };

  const handlePrevious = () => {
    setMainImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setMainImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleFullscreenPrevious = () => {
    setFullscreenIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleFullscreenNext = () => {
    setFullscreenIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
        <img
          src={images[mainImageIndex]}
          alt={`${title} - Image ${mainImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
              onClick={() => setFullscreenIndex(mainImageIndex)}
            >
              <Maximize2 className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
            <div className="relative h-[calc(100vh-120px)] flex items-center justify-center">
              <img
                src={images[fullscreenIndex]}
                alt={`${title} - Image ${fullscreenIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
              
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                  onClick={handleFullscreenPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                  onClick={handleFullscreenNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black/70 rounded-full px-4 py-1 text-white text-sm">
                  {fullscreenIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-md overflow-hidden border-2 transition-all ${
              mainImageIndex === index ? "border-blue-600" : "border-transparent hover:border-gray-300"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}