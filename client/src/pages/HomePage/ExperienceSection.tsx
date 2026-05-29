import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  CameraIcon, 
  ShirtIcon, 
  MessageSquareIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ArrowRightIcon
} from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const solutionCardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface IPainPoint {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const painPoints: IPainPoint[] = [
  {
    id: 'planning',
    icon: <MapPinIcon className="w-5 h-5" />,
    title: '行程规划繁琐',
    description: '翻遍攻略、对比景点、计算路线，耗时又费力',
  },
  {
    id: 'photo',
    icon: <CameraIcon className="w-5 h-5" />,
    title: '拍照效果不佳',
    description: '美景当前却拍不出满意的照片，pose僵硬不会摆',
  },
  {
    id: 'outfit',
    icon: <ShirtIcon className="w-5 h-5" />,
    title: '穿搭选择困难',
    description: '行李箱塞满衣服，出门却不知道怎么搭配',
  },
  {
    id: 'caption',
    icon: <MessageSquareIcon className="w-5 h-5" />,
    title: '文案难产',
    description: '想发朋友圈却憋不出文案，配图配文字头大',
  },
];

const solutions: IPainPoint[] = [
  {
    id: 'ai-planning',
    icon: <MapPinIcon className="w-5 h-5" />,
    title: 'AI一键生成攻略',
    description: '输入目的地和偏好，秒出完整行程，景点路线交通全搞定',
  },
  {
    id: 'ai-photo',
    icon: <CameraIcon className="w-5 h-5" />,
    title: 'AI修图+Pose指导',
    description: '智能美化照片，实时指导拍摄姿势，每一张都是大片',
  },
  {
    id: 'ai-outfit',
    icon: <ShirtIcon className="w-5 h-5" />,
    title: '智能穿搭推荐',
    description: '根据目的地天气和场景，为你推荐最适合的穿搭方案',
  },
  {
    id: 'ai-caption',
    icon: <MessageSquareIcon className="w-5 h-5" />,
    title: 'AI文案生成',
    description: '看图生成朋友圈文案，文艺、幽默、简约风格随心选',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
            体验升级
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            传统旅行 vs Waylia 智能旅行
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            告别繁琐，让 AI 成为你的私人旅行助手
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Before Card */}
          <motion.div
            className="relative"
            variants={cardVariants}
          >
            <div className="h-full bg-muted/50 rounded-2xl p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <XCircleIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">传统旅行</h3>
                  <p className="text-sm text-muted-foreground">费时费力的老方式</p>
                </div>
              </div>

              <div className="space-y-4">
                {painPoints.map((point) => (
                  <div
                    key={point.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/80 border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-muted-foreground">{point.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-0.5">{point.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            className="relative"
            variants={solutionCardVariants}
          >
            <div className="h-full bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <CheckCircle2Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Waylia 智能旅行</h3>
                  <p className="text-sm text-primary">轻松高效的全新体验</p>
                </div>
              </div>

              <div className="space-y-4">
                {solutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary">{solution.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-0.5">{solution.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.div 
                className="mt-6 pt-6 border-t border-primary/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <UniversalLink
                  to="#download"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-[hsl(25_90%_55%)] text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  立即体验
                  <ArrowRightIcon className="w-4 h-4" />
                </UniversalLink>
              </motion.div>
            </div>

            {/* VS Badge */}
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-background border-2 border-border items-center justify-center shadow-lg z-10">
              <span className="text-sm font-bold text-muted-foreground">VS</span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16"
          variants={itemVariants}
        >
          {[
            { value: '10分钟', label: '生成完整攻略' },
            { value: '95%', label: '用户满意度' },
            { value: '100万+', label: '旅行达人选择' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
