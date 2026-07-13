import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import { artworks } from "@/constants/index";

const Art = () => {
  const [selectedArt, setSelectedArt] = useState<{
    src: string;
    title: string;
    description: string;
    orientation: string;
  } | null>(null);
  return (
    <>
      <div className="image-grid">
        {artworks.map((art) => (
          <div
            key={art.src}
            className={`${art.orientation} cursor-pointer`}
            onClick={() => setSelectedArt(art)}
          >
            <img className={art.orientation} src={art.src} alt={art.title} />
          </div>
        ))}
      </div>
      <Dialog open={!!selectedArt} onOpenChange={() => setSelectedArt(null)}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-6xl bg-transparent shadow-none ring-0 border-0 p-0"
        >
          {selectedArt && (
            <>
              <img
                src={selectedArt.src}
                alt={selectedArt.title}
                className="max-h-[45vh] flex object-center m-auto object-contain"
              />

              <div className="mt-5 text-center">
                <DialogTitle className="text-2xl font-semibold text-white">
                  {selectedArt.title}
                </DialogTitle>

                <DialogDescription className="mt-2 max-w-2xl mx-auto text-gray-300">
                  {selectedArt.description}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Art;
