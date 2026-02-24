
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface MusicPlayerProps {
  title: string;
  audioSrc: string;
  className?: string;
}

const MusicPlayer = ({ title, audioSrc, className }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    // Events
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
    setIsActive(true);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    if (!progressBar || !audioRef.current) return;

    const rect = progressBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div 
      className={cn(
        "p-4 rounded-md border transition-all duration-300",
        isActive 
          ? "bg-secondary border-neon-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]" 
          : "bg-background border-border/50 hover:border-neon-purple/20",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-neon-purple text-white transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>
        
        <div className="flex-1">
          <h3 className="font-medium text-sm">{title}</h3>
          
          <div className="mt-2 relative">
            <div 
              ref={progressBarRef}
              className="h-1.5 bg-muted rounded-full overflow-hidden cursor-pointer"
              onClick={handleProgressBarClick}
            >
              <div 
                className="h-full bg-neon-purple transition-all"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 accent-neon-purple"
          />
        </div>
      </div>
      
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      {isPlaying && (
        <div className="wave-equalizer mt-3 ml-3">
          <div className="h-2 animate-wave-1" />
          <div className="h-3 animate-wave-2" />
          <div className="h-4 animate-wave-3" />
          <div className="h-2 animate-wave-4" />
          <div className="h-3 animate-wave-5" />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
