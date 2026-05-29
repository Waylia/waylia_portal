import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Sparkles, Share2, Shirt, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
// 使用生成的在线图片URL
const heroBg = 'https://miaoda.feishu.cn/aily/api/v1/files/static/3cca0937ff20489cb90fee20f7ab8e3c_ve_miaoda';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const floatingIcons = [
  { Icon: MapPin, delay: 0, x: -80, y: -60 },
  { Icon: Camera, delay: 0.2, x: 100, y: -40 },
  { Icon: Sparkles, delay: 0.4, x: -60, y: 60 },
  { Icon: Share2, delay: 0.6, x: 90, y: 50 },
  { Icon: Shirt, delay: 0.8, x: -100, y: 20 },
  { Icon: FileText, delay: 1, x: 70, y: -80 }
];

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="自然风光背景"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              x: [0, x, x * 0.8, 0],
              y: [0, y, y * 0.9, 0]
            }}
            transition={{
              duration: 8,
              delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-6 h-6 text-white/40" />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Brand Logo/Name */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[hsl(158_65%_40%)] flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Waylia
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl drop-shadow-lg"
          >
            AI 赋能
            <span className="block mt-2">让每一次旅行都成为杰作</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light"
          >
            智能攻略规划 · AI 修图 · 姿势指导 · 穿搭推荐 · 朋友圈文案
            <span className="block mt-1">让旅行更简单，让照片更出彩，让分享更有格调</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToDownload}
              className="h-14 px-8 rounded-full bg-[hsl(25_90%_55%)] hover:bg-[hsl(25_90%_48%)] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              立即下载
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-14 px-8 rounded-full border-2 border-white/50 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm transition-all duration-200"
            >
              探索功能
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm">100万+ 旅行者选择</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">4.9 分好评</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(150 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
}
