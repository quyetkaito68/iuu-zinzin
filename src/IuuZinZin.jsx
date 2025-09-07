import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import './IuuZinZin.css';
import capybaraBg from './assets/images/capybara.jpg'; // import ảnh
import couple1 from './assets/images/zinzin/couple-1.jpg'; // import ảnh
import couple0 from './assets/images/zinzin/first-couple-pic.jpg'; // import ảnh
import trending from './assets/images/zinzin/trending.jpg'; // import ảnh
import nan_dat_set_1 from './assets/images/zinzin/nan_dat_set_1.jpg'; // import ảnh
import nan_dat_set_2 from './assets/images/zinzin/nan_dat_set_2.jpg'; // import ảnh

import mylove from './assets/audio/my_love_westlife_2.mp3'; // import audio
import { Volume2, VolumeX } from "lucide-react";

// Pink Heart – beautiful animated heart with glow, particles and soft gradient background.
// TailwindCSS + Framer Motion. Drop this component anywhere in your app.

export default function PinkHeartAnimation() {
  // Precompute some floating particles for subtle sparkle
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // vw percent baseline (converted in style)
        y: Math.random() * 100, // vh percent baseline
        size: 4 + Math.random() * 8,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    []
  );
  // xử lý âm nhạc
  const audioRef = useRef(null); // tham chiếu đến thẻ <audio>
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <div
        className="iuu-bg-blur w-full flex flex-col items-center min-h-screen"
      >
        <div className="max-h-screen w-full bg-pink-50 relative overflow-hidden">
          {/* Background vignette */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0" style={{
              background:
                "radial-gradient(1200px 800px at 50% 40%, rgba(251, 207, 232,0.9), rgba(244, 114, 182,0.35), rgba(236, 72, 153,0.15), transparent)",
            }} />
          </div>

          {/* những hạt sáng nhỏ (particles) bay lơ lửng */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-white/70 shadow-md"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}vw`,
                top: `${p.y}vh`,
                filter: "blur(0.2px)",
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -120, opacity: [0, p.opacity, 0] }}
              transition={{
                repeat: Infinity,
                duration: p.duration,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative flex flex-col items-center justify-center pt-20 pb-12">
            {/* Soft halo behind the heart */}
            <motion.div
              className="absolute inset-0 -z-10"
              style={{ filter: "blur(24px)" }}
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.55, 0.85, 0.55] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <div
                className="w-[380px] h-[340px] rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(244,114,182,0.55), rgba(236,72,153,0.3), rgba(219,39,119,0.1), transparent)",
                }}
              />
            </motion.div>

            {/* Heart */}
            <motion.svg
              width="360"
              height="320"
              viewBox="0 0 512 472"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_30px_rgba(236,72,153,0.9)]"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.06, 0.9] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <defs>
                <radialGradient id="pinkGradient" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fff0f7" stopOpacity="1" />
                  <stop offset="30%" stopColor="#fbcfe8" stopOpacity="0.95" />
                  <stop offset="65%" stopColor="#f472b6" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#db2777" stopOpacity="1" />
                </radialGradient>
                <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Heart path (smooth Bezier heart) */}
              <g filter="url(#softGlow)">
                <path
                  d="M471.7,73.9c-47.2-47.2-123.8-47.2-171,0l-14.2,14.2L272.2,73.9c-47.2-47.2-123.8-47.2-171,0 c-47.1,47.1-47.3,123.5-0.5,170.9c0.2,0.2,0.3,0.4,0.5,0.5l171,171l171-171C519,197.7,518.8,121.1,471.7,73.9z"
                  fill="url(#pinkGradient)"
                />
                {/* subtle inner shine */}
                <path
                  d="M256 80 C210 30 130 22 85 68 C40 113 40 190 90 240"
                  stroke="url(#shine)"
                  strokeWidth="28"
                  fill="none"
                  opacity="0.5"
                />
              </g>

              {/* Twinkle strokes */}
              {/* <motion.g
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <path d="M120 60 q20 -20 40 0" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M360 420 q20 20 40 0" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
              </motion.g> */}
            </motion.svg>

            {/* Cute caption */}
            <motion.div
              className="mt-2 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-pink-600 text-2xl font-medium tracking-wide">Iuu ZinZin❤️</p>
            </motion.div>
            <div className="p-6">
              <img src={couple1} alt="Capybara" className="w-full h-auto rounded-lg shadow-lg mt-4 mx-auto object-cover" />
            </div>
          </div>

          {/* Keyframe for a soft breathing shadow on the whole scene */}
          {/* <style>{`
            @keyframes ambientPulse { 0%, 100% { box-shadow: 0 0 80px rgba(236,72,153,0.35) inset; } 50% { box-shadow: 0 0 120px rgba(236,72,153,0.55) inset; } }
            .ambient { animation: ambientPulse 3s ease-in-out infinite; }
          `}</style> */}
        </div>
        
        <div className="w-full">
          <div className="w-full p-6">
            <img src={capybaraBg} alt="Background" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <h2 className="text-xl font-bold txt-color mb-2">Ảnh 1</h2>
          </div>
          <div className="w-full p-6">
            <img src={couple0} alt="Background" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <h2 className="text-xl font-italic txt-color mb-2">Bức ảnh đầu tiên chụp cùng nhau</h2>
          </div>
          <div className="w-full p-6">
            <img src={trending} alt="Background" className="w-full h-auto rounded-lg shadow-md mb-4" />
            <h2 className="text-xl font-italic txt-color mb-2">Cùng nhau làm những "trò mèo"</h2>
          </div>        
          <div className="relative w-full p-6">
            <img
              src={nan_dat_set_1}
              alt="Image 1"
              className="w-4/5 h-full object-cover rounded-lg shadow-lg"
            />
            <img
              src={nan_dat_set_2}
              alt="Image 2"
              className="absolute top-[-20px] right-[40px] w-[40%] h-auto object-cover rounded-lg shadow-xl
                        transform translate-x-4 translate-y-4"
            />
            <h2 className="text-xl font-italic txt-color mt-1">Nặn đất sét nèe</h2>
          </div>
          
          <section className="w-full p-6 bg-pink-200">Phần 2</section>
          <section className="w-full p-6 bg-pink-300">Phần 3</section>
          <section className="w-full p-6 bg-pink-300">Phần 4</section>
          <section className="w-full p-6 bg-pink-300">Phần 5</section>
          <section className="w-full p-6 bg-pink-300">Phần 6</section>
          {/* những hạt sáng nhỏ (particles) bay lơ lửng */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-white/70 shadow-md"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}vw`,
                top: `${p.y}vh`,
                filter: "blur(0.2px)",
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -120, opacity: [0, p.opacity, 0] }}
              transition={{
                repeat: Infinity,
                duration: p.duration,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
      </div>
      <div className="flex items-center space-x-3">
          {/* Thẻ audio */}
          <audio ref={audioRef} loop>
            <source src={mylove} type="audio/mpeg" />
          </audio>

          {/* Nút icon để bật/tắt */}
          <button
            onClick={togglePlay}
            className="fixed z-[9999] bottom-4 left-4 p-2 rounded-full bg-blue-100 hover:bg-blue-200 shadow-md transition"
          >
            {playing ? (
              <Volume2 className="w-6 h-6 text-blue-600" />
            ) : (
              <VolumeX className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
    </div>
  );
}

