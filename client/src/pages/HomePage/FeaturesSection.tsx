import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapIcon,
  Wand2Icon,
  CameraIcon,
  ShirtIcon,
  MessageSquareIcon,
  Share2Icon,
  XIcon,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface IFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  highlights: string[];
}

const features: IFeature[] = [
  {
    id: 'guide',
    icon: <MapIcon className="w-7 h-7" />,
    title: 'AI 攻略生成',
    description: '输入目的地，秒出完整行程',
    detailTitle: '智能旅游攻略',
    detailDescription: '告别繁琐攻略，AI 为你定制专属行程',
    highlights: ['路线智能规划', '景点深度推荐', '交通住宿一键安排'],
  },
  {
    id: 'photo',
    icon: <Wand2Icon className="w-7 h-7" />,
    title: 'AI 修图',
    description: '一键美化，出片率翻倍',
    detailTitle: 'AI 智能修图',
    detailDescription: '专业级照片美化，让你的旅行照更出彩',
    highlights: ['智能调色', '风格滤镜', '瑕疵修复'],
  },
  {
    id: 'pose',
    icon: <CameraIcon className="w-7 h-7" />,
    title: 'Pose 指导',
    description: '实时指导，告别僵硬游客照',
    detailTitle: '智能 Pose 指导',
    detailDescription: 'AI 实时分析姿态，给出专业拍摄建议',
    highlights: ['实时姿态识别', '专业拍摄建议', '场景适配推荐'],
  },
  {
    id: 'outfit',
    icon: <ShirtIcon className="w-7 h-7" />,
    title: '智能穿搭',
    description: '根据目的地智能推荐穿搭',
    detailTitle: '智能穿搭推荐',
    detailDescription: '根据天气、场景、风格智能推荐穿搭',
    highlights: ['天气场景适配', '风格智能匹配', '虚拟试衣'],
  },
  {
    id: 'copywriting',
    icon: <MessageSquareIcon className="w-7 h-7" />,
    title: '文案生成',
    description: '朋友圈文案一键生成',
    detailTitle: '朋友圈文案生成',
    detailDescription: '根据照片内容，AI 生成吸睛文案',
    highlights: ['多风格可选', '智能配图建议', '一键复制分享'],
  },
  {
    id: 'share',
    icon: <Share2Icon className="w-7 h-7" />,
    title: '一键分享',
    description: '多平台同步分享',
    detailTitle: '一键多平台分享',
    detailDescription: '攻略、照片、动态，一键同步到多个平台',
    highlights: ['多平台同步', '智能格式适配', '定时发布'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<IFeature | null>(null);

  return (
    <section
      id="features"
      className="w-full relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* 背景装饰 - 柔色块 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[hsl(158_65%_40%)]/5 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-[hsl(158_65%_40%)]/8 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-[hsl(25_90%_55%)]/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 区块标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-[hsl(158_65%_40%)] uppercase tracking-wider">
            核心功能
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            AI 赋能，旅行更轻松
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            六大智能功能，从攻略规划到社交分享，全程陪伴你的每一次出行
          </p>
        </motion.div>

        {/* 功能卡片网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setSelectedFeature(feature)}
                className="w-full text-left"
              >
                <div className="bg-card rounded-xl shadow-md overflow-hidden border-2 border-transparent transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02] hover:border-[hsl(158_65%_40%)]/30 h-full">
                  <div className="p-6">
                    {/* 图标区 */}
                    <div className="w-14 h-14 rounded-xl bg-[hsl(158_65%_40%)]/10 flex items-center justify-center text-[hsl(158_65%_40%)] transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    {/* 标题 */}
                    <h3 className="text-xl font-semibold text-foreground mt-4">
                      {feature.title}
                    </h3>
                    {/* 描述 */}
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* 了解更多提示 */}
                    <div className="mt-4 flex items-center text-sm font-medium text-[hsl(158_65%_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      了解更多
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 详情浮层 */}
      <Dialog
        open={!!selectedFeature}
        onOpenChange={() => setSelectedFeature(null)}
      >
        <DialogContent className="sm:max-w-lg bg-card">
          <DialogHeader>
            <div className="flex items-center gap-3">
              {selectedFeature && (
                <div className="w-12 h-12 rounded-xl bg-[hsl(158_65%_40%)]/10 flex items-center justify-center text-[hsl(158_65%_40%)]">
                  {selectedFeature.icon}
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedFeature?.detailTitle}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground mt-1">
                  {selectedFeature?.detailDescription}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              核心亮点
            </h4>
            <ul className="space-y-2">
              {selectedFeature?.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(158_65%_40%)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              onClick={() => setSelectedFeature(null)}
              className="bg-[hsl(158_65%_40%)] hover:bg-[hsl(158_65%_35%)] text-primary-foreground"
            >
              <XIcon className="w-4 h-4 mr-2" />
              关闭
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturesSection;
