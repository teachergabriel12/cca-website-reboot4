import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/CCA_imagens_reais_v8.mp4";
import heroPoster from "@/assets/hero-building.jpg";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideTimer = useRef<number | null>(null);

  const clearHideTimer = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const scheduleHide = () => {
    clearHideTimer();
    hideTimer.current = window.setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setControlsVisible(false);
      }
    }, 2200);
  };

  const revealControls = () => {
    setControlsVisible(true);
    scheduleHide();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => {
      setPlaying(false);
      setControlsVisible(true);
      clearHideTimer();
    };
    const onTime = () => {
      setCurrent(video.currentTime);
      setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    };
    const onMeta = () => setDuration(video.duration || 0);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onMeta);

    video.play().catch(() => {
      /* autoplay may be blocked — user can tap play */
    });

    return () => {
      clearHideTimer();
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      scheduleHide();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    revealControls();
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
    revealControls();
  };

  const toggleFullscreen = async () => {
    const shell = shellRef.current;
    if (!shell) return;
    try {
      if (!document.fullscreenElement) {
        await shell.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* fullscreen unsupported */
    }
    revealControls();
  };

  return (
    <div
      ref={shellRef}
      className="hero-video group relative bg-ink overflow-hidden"
      onMouseMove={revealControls}
      onMouseLeave={() => {
        if (playing) setControlsVisible(false);
      }}
    >
      <video
        ref={videoRef}
        className="relative z-[1] w-full h-full object-cover"
        src={heroVideo}
        poster={heroPoster}
        playsInline
        muted={muted}
        loop
        preload="metadata"
        onClick={togglePlay}
      />

      {/* Soft brand wash */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-deep/55 via-transparent to-deep/20" />

      {/* Center play */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
        className={cn(
          "absolute inset-0 z-[3] grid place-items-center transition-opacity duration-300",
          playing && !controlsVisible ? "opacity-0 pointer-events-none" : "opacity-100",
          playing ? "bg-transparent" : "bg-deep/25",
        )}
      >
        <span
          className={cn(
            "flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-cream/20 bg-deep/70 text-cream shadow-[0_12px_40px_oklch(0.16_0.04_250/0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-electric/50 hover:text-cyan-electric",
            playing && controlsVisible ? "opacity-0 scale-90" : "opacity-100",
            playing && "pointer-events-none",
          )}
        >
          <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-current translate-x-0.5" />
        </span>
      </button>

      {/* Control bar */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-[4] transition-all duration-300",
          controlsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        )}
      >
        <div className="bg-gradient-to-t from-deep via-deep/90 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-3.5">
          <label className="sr-only" htmlFor="hero-video-seek">
            Progresso do vídeo
          </label>
          <input
            id="hero-video-seek"
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => seek(Number(e.target.value))}
            className="hero-seek mb-2.5 block w-full cursor-pointer appearance-none bg-transparent"
            style={{
              background: `linear-gradient(to right, oklch(0.78 0.15 220) ${progress}%, oklch(0.98 0.005 240 / 0.22) ${progress}%)`,
            }}
          />

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-cream/90 transition-colors hover:bg-cream/10 hover:text-cyan-electric"
            >
              {playing ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current translate-x-px" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-cream/90 transition-colors hover:bg-cream/10 hover:text-cyan-electric"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>

            <span className="ml-1 font-mono text-[10px] tracking-wider text-cream/55 tabular-nums sm:text-[11px]">
              {formatTime(current)}
              <span className="text-cream/30"> / </span>
              {formatTime(duration)}
            </span>

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg text-cream/90 transition-colors hover:bg-cream/10 hover:text-cyan-electric"
            >
              {isFullscreen ? (
                <Minimize className="h-4 w-4" />
              ) : (
                <Maximize className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
