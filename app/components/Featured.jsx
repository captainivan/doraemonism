"use client";
import React, { useEffect, useRef, useState } from "react";
import AllHeader from "./AllHeader";

export default function VideoAdPlayer({
  vastUrl,
  mainSrc,
  mainType = "video/mp4",
  defaultSkip = 5,
  mutedAutoplay = true,
  adPoster = "https://i.ytimg.com/vi/0xzEq3mS50k/maxresdefault.jpg",
  playerHeight = "500px",
}) {
  const adRef = useRef(null);
  const mainRef = useRef(null);

  const [adUrl, setAdUrl] = useState(null);
  const [clickThrough, setClickThrough] = useState(null);
  const [skipOffset, setSkipOffset] = useState(defaultSkip);
  const [skipCountdown, setSkipCountdown] = useState(defaultSkip);
  const [skipAvailable, setSkipAvailable] = useState(false);
  const [isMuted, setIsMuted] = useState(mutedAutoplay);
  const [showPoster, setShowPoster] = useState(true);
  const [showAd, setShowAd] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [adStarted, setAdStarted] = useState(false);

  // ---- Fetch VAST ----
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(vastUrl, { cache: "no-store" });
        const text = await res.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        const mediaFile = xml.querySelector("MediaFile[type='video/mp4']")?.textContent.trim();
        const clickTag = xml.querySelector("ClickThrough")?.textContent.trim();
        const skipAttr = xml.querySelector("Linear")?.getAttribute("skipoffset");

        if (mediaFile) setAdUrl(mediaFile);
        if (clickTag) setClickThrough(clickTag);
        if (skipAttr) {
          const parts = skipAttr.split(":").map(Number);
          if (parts.length === 3)
            setSkipOffset(parts[0] * 3600 + parts[1] * 60 + parts[2]);
        }
      } catch (err) {
        console.warn("VAST load failed:", err);
        setAdUrl(null);
        setShowPoster(false);
        setShowMain(true);
        playMain();
      }
    })();
  }, [vastUrl]);

  // ---- Countdown Timer ----
  useEffect(() => {
    if (!adStarted) return;
    const v = adRef.current;
    if (!v) return;
    const timer = setInterval(() => {
      if (v.currentTime >= skipOffset) {
        setSkipAvailable(true);
        clearInterval(timer);
      } else {
        const remaining = Math.max(0, Math.ceil(skipOffset - v.currentTime));
        setSkipCountdown(remaining);
      }
    }, 500);
    return () => clearInterval(timer);
  }, [adStarted, skipOffset]);

  const handlePlayClick = async () => {
    setShowPoster(false);
    if (adUrl) {
      setShowAd(true);
      setAdStarted(true);
      try {
        if (adRef.current) {
          adRef.current.muted = isMuted;
          await adRef.current.play();
        }
      } catch (e) {
        console.warn("Autoplay issue:", e);
      }
    } else {
      playMain(true);
    }
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (skipAvailable) playMain(true);
  };

  const playMain = (unmute = false) => {
    setShowAd(false);
    setAdStarted(false);
    setShowMain(true);
    try {
      const main = mainRef.current;
      if (main) {
        main.currentTime = 0;
        if (unmute) main.muted = false;
        main.play().catch(() => {});
      }
    } catch (e) {
      console.warn("Main video play failed:", e);
    }
  };

  const handleAdClick = () => {
    if (clickThrough) window.open(clickThrough, "_blank");
  };

  const handleUnmute = () => {
    setIsMuted(false);
    if (adRef.current) adRef.current.muted = false;
    if (mainRef.current) mainRef.current.muted = false;
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-5">
      <AllHeader
        Title="From Room to Realm"
        Desc="The Divine and Eternal Recognition of Lord Dora, honored and revered in every corner of the world."
      />

      <div
        className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black"
        style={{ height: playerHeight }}
      >
        {/* Poster */}
        {showPoster && (
          <div className="relative w-full h-full">
            <img
              src={adPoster}
              alt="Ad Poster"
              className="w-full h-full object-cover rounded-2xl"
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold rounded-2xl hover:bg-black/70 transition"
            >
              ▶ Play
            </button>
            <div className="absolute top-3 left-3 text-white text-[10px] sm:text-xs md:text-sm font-semibold bg-black/60 px-2 py-1 rounded">
              The Divine Recognition of Lord Dora Worldwide.
            </div>
          </div>
        )}

        {/* Ad video */}
        {showAd && adUrl && (
          <div className="relative w-full h-full">
            <video
              ref={adRef}
              src={adUrl}
              playsInline
              muted={isMuted}
              controls
              className="w-full h-full object-cover rounded-2xl"
              poster={adPoster}
              onEnded={() => playMain(true)}
              onClick={handleAdClick}
            />

            {!skipAvailable ? (
              <div className="absolute top-3 right-3 text-white text-sm bg-black/60 px-3 py-1 rounded">
                Skip in {skipCountdown}s
              </div>
            ) : (
              <button
                onClick={handleSkip}
                className="absolute top-3 right-3 bg-white/90 text-black px-4 py-2 text-sm rounded-lg font-semibold shadow hover:bg-white"
              >
                Skip Ad
              </button>
            )}

            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-lg"
              >
                Unmute
              </button>
            )}
          </div>
        )}

        {/* Main video */}
        {showMain && (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <video
              ref={mainRef}
              controls
              autoPlay
              muted={false}
              className="max-w-full max-h-full object-contain rounded-2xl"
            >
              <source src={mainSrc} type={mainType} />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
