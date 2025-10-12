import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import './IuuZinZin.css';
import mylove from './assets/audio/my_love_westlife_2.mp3'; // import audio
import beautiful from './assets/audio/beautiful.mp3'; // import audio
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import ảnh từ thư mục 100days
import day100 from './assets/images/100days/100days.jpg';

// Import ảnh từ thư mục 200days
import day200_1 from './assets/images/200days/200days (1).jpg';
import day200_2 from './assets/images/200days/200days (2).jpg';
import day200_3 from './assets/images/200days/200days (3).jpg';
import day200_4 from './assets/images/200days/200days (4).jpg';
import day200_6 from './assets/images/200days/200days (6).jpg';
import day200_7 from './assets/images/200days/200days (7).jpg';
import day200_8 from './assets/images/200days/200days (8).jpg';
import day200_9 from './assets/images/200days/200days (9).jpg';
import day200_10 from './assets/images/200days/200days (10).jpg';
import day200_11 from './assets/images/200days/200days (11).jpg';
import day200_12 from './assets/images/200days/200days (12).jpg';

// Import ảnh từ thư mục zinzin
import zinzinnn_1 from './assets/images/zinzin/zinzinnn (1).jpg';
import zinzinnn_2 from './assets/images/zinzin/zinzinnn (2).jpg';
import zinzinnn_3 from './assets/images/zinzin/zinzinnn (3).jpg';
import zinzinnn_4 from './assets/images/zinzin/zinzinnn (4).jpg';
import zinzinnn_5 from './assets/images/zinzin/zinzinnn (5).jpg';
import zinzinnn_6 from './assets/images/zinzin/zinzinnn (6).jpg';
import zinzinnn_7 from './assets/images/zinzin/zinzinnn (7).jpg';
import zinzinnn_8 from './assets/images/zinzin/zinzinnn (8).jpg';
import zinzinnn_9 from './assets/images/zinzin/zinzinnn (9).jpg';
import zinzinnn_10 from './assets/images/zinzin/zinzinnn (10).jpg';
import zinzinnn_11 from './assets/images/zinzin/zinzinnn (11).jpg';
import zinzinnn_12 from './assets/images/zinzin/zinzinnn (12).jpg';
import zinzinnn_13 from './assets/images/zinzin/zinzinnn (13).jpg';
import zinzinnn_14 from './assets/images/zinzin/zinzinnn (14).jpg';
import zinzinnn_15 from './assets/images/zinzin/zinzinnn (15).jpg';
import zinzinnn_16 from './assets/images/zinzin/zinzinnn (16).jpg';

const images = [
];

const days100Images = [
  day100
];

const days200Images = [
  day200_1,
  day200_2,
  // day200_3,
  day200_4,
  // day200_6,
  day200_7,
  // day200_8,
  day200_9,
  day200_10,
  day200_11,
  day200_12
];

const zinzinImages = [
  zinzinnn_1,
  zinzinnn_2,
  zinzinnn_3,
  zinzinnn_4,
  zinzinnn_5,
  zinzinnn_6,
  zinzinnn_7,
  zinzinnn_8,
  zinzinnn_9,
  zinzinnn_10,
  zinzinnn_11,
  zinzinnn_12,
  zinzinnn_13,
  zinzinnn_14,
  zinzinnn_15,
  zinzinnn_16
];

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
  const nextSectionRef = useRef(null);
  const [previewImg, setPreviewImg] = useState(null);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="container-all">
      {/* Overlay preview ảnh */}
      {previewImg && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80" onClick={() => setPreviewImg(null)}>
          <img src={previewImg} alt="Preview" className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white" />
        </div>
      )}
      <div
        className="iuu-bg-blur w-full flex flex-col items-center min-h-screen"
      >
        <div className="w-full bg-pink-50 relative overflow-hidden">
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

          <div className="heart-containter relative flex flex-col items-center justify-center pt-20 pb-12">
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
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-pink-600 text-2xl font-medium tracking-wide">Gửi tới ZinZin iu dấu❤️</p>
              <p className="text-pink-600 text-xl font-medium tracking-wide mt-4 p-2">Trái tim nhỏ này dành tặng cho em - người iu siêu cấp chuchee của anh</p>
              <div className="flex flex-col items-center justify-end w-full mt-32 mb-2">
                <p className="text-pink-600 text-l font-medium tracking-wide">Anh có để thêm sự đáng yêu ở phía dưới<br/> em lướt xuống để xem tiếp nha</p>
                <ArrowDown className="text-pink-500 w-8 h-8 mt-2 animate-bounce cursor-pointer" onClick={() => nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </motion.div>
          </div>

          {/* Keyframe for a soft breathing shadow on the whole scene */}
          {/* <style>{`
            @keyframes ambientPulse { 0%, 100% { box-shadow: 0 0 80px rgba(236,72,153,0.35) inset; } 50% { box-shadow: 0 0 120px rgba(236,72,153,0.55) inset; } }
            .ambient { animation: ambientPulse 3s ease-in-out infinite; }
          `}</style> */}
        </div>
        <div ref={nextSectionRef} className="w-full">
          <div className="w-full p-6">
            <img src={zinzinnn_4} alt="Background" className="w-full h-96 object-cover rounded-lg shadow-md mb-4" />
            <motion.div
              className="mt-2 text-center"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-3xl font-bold tracking-wide txt-color">Nguyễn Quỳnh Duyên</p>
              <p className="text-3xl font-bold tracking-wide txt-color">ZinZin</p>                       
            </motion.div>
            <motion.div
              className="mt-2 text-center"
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-xl font-bold tracking-wide txt-color">19/10/2003</p>
            </motion.div>
            <motion.div
              className="mt-2 text-center"
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p className="text-xl font-bold tracking-wide txt-color">19/10/2025</p>
            </motion.div>
            <div className="mt-4 text-left">
              <p className="text-base txt-color leading-relaxed font-medium mb-1">
                Gửi Zin iu của anh.<br/>
                Anh mong em sẽ có một ngày tuyệt vời với nụ cười trên môi, anh mong dù hiện tại hay mai sau những điều đến với em sẽ đều thật tốt đẹp, dịu dàng, ngọt ngào và đáng yêu như em vậy.<br/>
                Thêm tuổi mới, Zinnn cũng trưởng thành hơn gòi, nhưng em vẫn mãi là em bé iu của anhhh.<br/>
                Cảm ơn em vì đã xuất hiện và dành tình yêu thương cho anh.<br/>
                Happy birthday to Zinzin.<br/>
              </p>
              <p className="text-base txt-color font-semibold text-right mt-2">Iu emmm</p>
              <p className="text-base txt-color font-semibold text-right mt-2">From Quýttt</p>
            </div>
          </div>
          <div className="w-full p-6">
            <img src={zinzinnn_6} alt="Background" className="w-full h-96 object-cover object-[center_30%] rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => setPreviewImg(zinzinnn_6)} />
            <h2 className="text-l font-italic txt-color mb-2">Đây là bức ảnh đầu tiên em gửi cho anh nèee</h2>
            <img src={zinzinnn_16} alt="Background" className="w-full h-96 object-cover object-[center_60%] rounded-lg shadow-md mb-4 cursor-pointer" onClick={() => setPreviewImg(zinzinnn_16)}/>
            <h2 className="text-l font-italic txt-color mb-2">Cùng nhau làm những "trò mèo"</h2>
          </div>        
          <div className="flex w-full gap-4 p-6">
            <img
              src={zinzinnn_13}
              alt="Image 1"
              className="w-1/2 h-72 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => setPreviewImg(zinzinnn_13)}
            />
            <img
              src={zinzinnn_15}
              alt="Image 2"
              className="w-1/2 h-72 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => setPreviewImg(zinzinnn_15)}
            />
          </div>
          <h2 className="text-l font-italic txt-color mt-1">Zinnn bật mode học tập</h2>
          
          <section className="w-full p-6">Phần 2</section>
          <div className="w-full p-6">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {days100Images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-80 object-cover rounded-lg shadow-md" />
                </div>
              ))}
            </Slider>
            <h2 className="mt-8 text-xl font-italic txt-color mb-2">100 days</h2>
          </div>
          <div className="w-full p-6">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {days200Images.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} className="w-full aspect-square object-cover rounded-lg shadow-md" />
                </div>
              ))}
            </Slider>
            <h2 className="mt-8 text-xl font-italic txt-color mb-2">200 days</h2>
          </div>
          <section className="w-full p-6">Phần 4</section>
          <section className="w-full p-6">Phần 5</section>
          <section className="w-full p-6">Phần 6</section>
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
            <source src={beautiful} type="audio/mpeg" />
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

