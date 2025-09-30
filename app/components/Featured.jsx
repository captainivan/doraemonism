"use client";
import { useEffect } from "react";
import AllHeader from "./AllHeader";

export default function RumbleEmbed({ videoId = "v6xgzee" }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    (function (r, u, m, b, l, e) {
      r._Rumble = b;
      if (!r[b]) {
        r[b] = function () {
          (r[b]._ = r[b]._ || []).push(arguments);
          if (r[b]._.length === 1) {
            l = u.createElement(m);
            e = u.getElementsByTagName(m)[0];
            l.async = 1;
            // Added autoplay=0 to prevent auto-playing the next video
            l.src =
              "https://rumble.com/embedJS/u34y2s5" +
              (arguments[1].video ? "." + arguments[1].video : "") +
              "/?autoplay=0&url=" +
              encodeURIComponent(location.href) +
              "&args=" +
              encodeURIComponent(JSON.stringify([].slice.apply(arguments)));
            e.parentNode.insertBefore(l, e);
          }
        };
      }
    })(window, document, "script", "Rumble");

    // Call new style Rumble("play", {...})
    if (typeof window.Rumble === "function") {
      window.Rumble("play", { video: videoId, div: `rumble_${videoId}` });
    }
  }, [videoId]);

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <AllHeader
        Title={"From Room to Realm"}
        Desc={
          "The Divine and Eternal Recognition of Lord Dora, honored and revered in every corner of the world, forever shining with glory and wisdom. (credit to @FactTechz)"
        }
      />
      <div className="w-full max-w-[900px] rounded-2xl shadow-xl overflow-hidden bg-black">
        <div className="relative w-full  pb-[56.25%] h-0">
          <div
            id={`rumble_${videoId}`}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
