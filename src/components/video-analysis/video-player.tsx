import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface VideoPlayerProps {
  videoSrc?: string;
  poster?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoSrc = "https://example.com/video.mp4", 
  poster = "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-video bg-black">
          {!videoSrc ? (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={poster} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button 
                  size="icon" 
                  className="h-16 w-16 rounded-full bg-turquoise hover:bg-turquoise/90"
                  onClick={togglePlay}
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
          ) : (
            <video 
              src={videoSrc} 
              poster={poster}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex flex-col gap-2">
            <Progress value={progress} className="h-1" />
            
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 text-white"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                  <SkipForward className="h-4 w-4" />
                </Button>
                <span className="text-xs">00:45 / 10:30</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">Laparoscopic Cholecystectomy Procedure</h3>
        <p className="text-sm text-muted-foreground">Recorded on June 15, 2023</p>
      </CardContent>
    </Card>
  );
};
