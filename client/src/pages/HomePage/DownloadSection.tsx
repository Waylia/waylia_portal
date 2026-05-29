import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AppleIcon, SmartphoneIcon, QrCodeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

const DownloadSection: React.FC = () => {
  const [qrHover, setQrHover] = useState(false);

  return (
    <section id="download" className="w-full relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-white/80 uppercase tracking-wider"
          >
            立即体验
          </motion.p>
          
          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight"
          >
            开启你的智能旅行
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 mt-4 max-w-2xl mx-auto"
          >
            下载 Waylia APP，让 AI 成为你的专属旅行助手
          </motion.p>
          
          {/* Limited offer badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 bg-[hsl(25_90%_55%)] rounded-full animate-pulse" />
            <span className="text-sm text-white font-medium">
              限时福利：新用户注册即送 VIP 体验卡
            </span>
          </motion.div>
          
          {/* Download Options */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
              onMouseEnter={() => setQrHover(true)}
              onMouseLeave={() => setQrHover(false)}
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="w-40 h-40 bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                  <QrCodeIcon className="w-24 h-24 text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  扫码下载 APP
                </p>
              </div>
              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 bg-white/20 rounded-2xl blur-xl transition-opacity duration-300 ${qrHover ? 'opacity-100' : 'opacity-0'}`}
              />
            </motion.div>
            
            {/* Divider */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-white/20" />
              <span className="text-white/50 text-sm">或</span>
              <div className="w-px h-16 bg-white/20" />
            </div>
            
            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Button
                size="lg"
                className="bg-[hsl(25_90%_55%)] hover:bg-[hsl(25_90%_48%)] text-white border-0 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <AppleIcon className="w-5 h-5 mr-2" />
                App Store 下载
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/40 rounded-full px-8 py-6 text-base font-semibold transition-all duration-200"
              >
                <SmartphoneIcon className="w-5 h-5 mr-2" />
                Android 下载
              </Button>
            </motion.div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">100万+</p>
              <p className="text-sm text-white/70 mt-1">用户下载</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">4.9</p>
              <p className="text-sm text-white/70 mt-1">应用商店评分</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-sm text-white/70 mt-1">支持城市</p>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-semibold">Waylia</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <UniversalLink to="#" className="hover:text-white transition-colors">隐私政策</UniversalLink>
              <UniversalLink to="#" className="hover:text-white transition-colors">用户协议</UniversalLink>
              <UniversalLink to="#" className="hover:text-white transition-colors">联系我们</UniversalLink>
            </div>
            
            <p className="text-sm text-white/50">
              © 2024 Waylia. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
