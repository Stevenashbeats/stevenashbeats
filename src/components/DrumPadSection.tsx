
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import MusicPlayer from "./ui/MusicPlayer";

// Define the pad sounds
const drumKits = [
  {
    name: "Trap Kit",
    pads: [
      { id: 1, name: "Kick", color: "bg-rose-500", sound: "/sounds/kick.mp3" },
      { id: 2, name: "Snare", color: "bg-orange-500", sound: "/sounds/snare.mp3" },
      { id: 3, name: "Hi-Hat", color: "bg-amber-500", sound: "/sounds/hihat.mp3" },
      { id: 4, name: "Clap", color: "bg-yellow-400", sound: "/sounds/clap.mp3" },
      { id: 5, name: "808", color: "bg-lime-500", sound: "/sounds/808.mp3" },
      { id: 6, name: "Perc", color: "bg-green-500", sound: "/sounds/perc.mp3" },
      { id: 7, name: "Open Hat", color: "bg-emerald-500", sound: "/sounds/openhat.mp3" },
      { id: 8, name: "Crash", color: "bg-teal-500", sound: "/sounds/crash.mp3" },
      { id: 9, name: "Vocal Chop", color: "bg-cyan-500", sound: "/sounds/vocalchop.mp3" },
      { id: 10, name: "Riser", color: "bg-sky-500", sound: "/sounds/riser.mp3" },
      { id: 11, name: "FX", color: "bg-blue-500", sound: "/sounds/fx.mp3" },
      { id: 12, name: "Snap", color: "bg-indigo-500", sound: "/sounds/snap.mp3" },
      { id: 13, name: "Tom", color: "bg-violet-500", sound: "/sounds/tom.mp3" },
      { id: 14, name: "Shaker", color: "bg-purple-500", sound: "/sounds/shaker.mp3" },
      { id: 15, name: "Sub", color: "bg-fuchsia-500", sound: "/sounds/sub.mp3" },
      { id: 16, name: "Rim", color: "bg-pink-500", sound: "/sounds/rim.mp3" },
    ]
  },
  {
    name: "Lo-Fi Kit",
    pads: [
      { id: 1, name: "Vinyl Kick", color: "bg-rose-500", sound: "/sounds/lofi_kick.mp3" },
      { id: 2, name: "Dusty Snare", color: "bg-orange-500", sound: "/sounds/lofi_snare.mp3" },
      { id: 3, name: "Tape Hat", color: "bg-amber-500", sound: "/sounds/lofi_hat.mp3" },
      { id: 4, name: "Vinyl Crackle", color: "bg-yellow-400", sound: "/sounds/vinyl.mp3" },
      { id: 5, name: "Jazz Chord", color: "bg-lime-500", sound: "/sounds/jazz_chord.mp3" },
      { id: 6, name: "Rhodes", color: "bg-green-500", sound: "/sounds/rhodes.mp3" },
      { id: 7, name: "Ride", color: "bg-emerald-500", sound: "/sounds/ride.mp3" },
      { id: 8, name: "Brush", color: "bg-teal-500", sound: "/sounds/brush.mp3" },
      { id: 9, name: "Piano", color: "bg-cyan-500", sound: "/sounds/piano.mp3" },
      { id: 10, name: "Sax", color: "bg-sky-500", sound: "/sounds/sax.mp3" },
      { id: 11, name: "Atmosphere", color: "bg-blue-500", sound: "/sounds/atmosphere.mp3" },
      { id: 12, name: "Vocal", color: "bg-indigo-500", sound: "/sounds/vocal.mp3" },
      { id: 13, name: "Trumpet", color: "bg-violet-500", sound: "/sounds/trumpet.mp3" },
      { id: 14, name: "Bass", color: "bg-purple-500", sound: "/sounds/bass.mp3" },
      { id: 15, name: "Texture", color: "bg-fuchsia-500", sound: "/sounds/texture.mp3" },
      { id: 16, name: "Glitch", color: "bg-pink-500", sound: "/sounds/glitch.mp3" },
    ]
  },
  {
    name: "House Kit",
    pads: [
      { id: 1, name: "House Kick", color: "bg-rose-500", sound: "/sounds/house_kick.mp3" },
      { id: 2, name: "House Snare", color: "bg-orange-500", sound: "/sounds/house_snare.mp3" },
      { id: 3, name: "House Hat", color: "bg-amber-500", sound: "/sounds/house_hat.mp3" },
      { id: 4, name: "Clap", color: "bg-yellow-400", sound: "/sounds/house_clap.mp3" },
      { id: 5, name: "Bass", color: "bg-lime-500", sound: "/sounds/house_bass.mp3" },
      { id: 6, name: "Synth", color: "bg-green-500", sound: "/sounds/house_synth.mp3" },
      { id: 7, name: "Open Hat", color: "bg-emerald-500", sound: "/sounds/house_oh.mp3" },
      { id: 8, name: "Crash", color: "bg-teal-500", sound: "/sounds/house_crash.mp3" },
      { id: 9, name: "Vocal", color: "bg-cyan-500", sound: "/sounds/house_vocal.mp3" },
      { id: 10, name: "Stab", color: "bg-sky-500", sound: "/sounds/house_stab.mp3" },
      { id: 11, name: "FX", color: "bg-blue-500", sound: "/sounds/house_fx.mp3" },
      { id: 12, name: "Shaker", color: "bg-indigo-500", sound: "/sounds/house_shaker.mp3" },
      { id: 13, name: "Piano", color: "bg-violet-500", sound: "/sounds/house_piano.mp3" },
      { id: 14, name: "Chord", color: "bg-purple-500", sound: "/sounds/house_chord.mp3" },
      { id: 15, name: "Ride", color: "bg-fuchsia-500", sound: "/sounds/house_ride.mp3" },
      { id: 16, name: "Perc", color: "bg-pink-500", sound: "/sounds/house_perc.mp3" },
    ]
  }
];

// Define the demo tracks for the kit presets
const demoTracks = [
  {
    name: "Trap Demo",
    src: "/sounds/trap_demo.mp3",
  },
  {
    name: "Lo-Fi Demo",
    src: "/sounds/lofi_demo.mp3",
  },
  {
    name: "House Demo",
    src: "/sounds/house_demo.mp3",
  }
];

const DrumPadSection = () => {
  const [activeKit, setActiveKit] = useState(0);
  const [activePad, setActivePad] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  // Function to play a pad sound
  const playSound = (padId: number) => {
    setActivePad(padId);
    if (audioRefs.current[padId]) {
      const audio = audioRefs.current[padId];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.error("Error playing audio:", e));
        
        // Reset the active pad after a short delay
        setTimeout(() => {
          setActivePad(null);
        }, 300);
      }
    }
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Map keycodes to pad IDs for common keyboard keys
      const keyMap: { [key: string]: number } = {
        '1': 1, '2': 2, '3': 3, '4': 4,
        'q': 5, 'w': 6, 'e': 7, 'r': 8,
        'a': 9, 's': 10, 'd': 11, 'f': 12,
        'z': 13, 'x': 14, 'c': 15, 'v': 16
      };

      const key = e.key.toLowerCase();
      if (keyMap[key]) {
        playSound(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeKit]);

  return (
    <section id="drum-pads" className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#6E59A5]/20 text-[#6E59A5] inline-block mb-4">
            BEAT MAKER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Try the <span className="text-[#6E59A5]">MPC Pads</span>
          </h2>
          <p className="text-muted-foreground">
            Create your own beats with these virtual drum pads. Click the pads or use your keyboard (numbers 1-4, letters Q-R, A-F, Z-V).
          </p>
        </div>

        <div className="flex flex-wrap gap-6 max-w-5xl mx-auto mb-10">
          {drumKits.map((kit, index) => (
            <button
              key={kit.name}
              onClick={() => setActiveKit(index)}
              className={cn(
                "px-4 py-2 rounded-md border transition-all duration-300",
                activeKit === index 
                  ? "border-[#6E59A5] bg-[#6E59A5]/10 text-foreground"
                  : "border-border/50 text-muted-foreground hover:border-[#6E59A5]/30 hover:bg-[#6E59A5]/5"
              )}
            >
              {kit.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {drumKits[activeKit].pads.map((pad) => (
            <React.Fragment key={pad.id}>
              <button
                onClick={() => playSound(pad.id)}
                className={cn(
                  pad.color,
                  "aspect-square rounded-md shadow-md flex items-center justify-center font-medium text-white text-sm md:text-base transition-all duration-150",
                  activePad === pad.id
                    ? "scale-95 opacity-80 shadow-inner"
                    : "hover:scale-[1.02] active:scale-95",
                )}
              >
                {pad.name}
                <audio
                  ref={(el) => (audioRefs.current[pad.id] = el)}
                  src={pad.sound}
                  preload="auto"
                />
              </button>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Listen to Demo Beats</h3>
          <div className="space-y-4">
            <MusicPlayer
              title={`${drumKits[activeKit].name} Demo`}
              audioSrc={demoTracks[activeKit].src}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#music"
            className="px-6 py-3 bg-[#6E59A5] text-white rounded-md font-medium transition-all duration-300 hover:opacity-90 transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(110,89,165,0.3)]"
          >
            Explore More Music
          </a>
        </div>
      </div>
    </section>
  );
};

export default DrumPadSection;
