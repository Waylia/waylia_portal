import { motion } from 'framer-motion';
import { Map, Wand2, Camera, Shirt, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'AI 智能攻略生成',
    description: '告别繁琐的旅行规划，只需输入目的地、天数和偏好，AI 即刻为你量身定制完整攻略。从景点路线到美食推荐，从交通方案到住宿建议，让你的旅行无忧无虑。',
    highlights: ['智能路线规划，最优行程安排', '当地美食与特色体验推荐', '实时交通与住宿建议'],
    icon: Map,
    image: '/images/guide.jpg',
  },
  {
    number: '02',
    title: 'AI 魔法修图',
    description: '旅行照片不够完美？AI 修图功能一键美化，支持清新、复古、胶片等多种风格转换。智能增强光影、优化色彩，让每一张照片都宛如大片。',
    highlights: ['多种艺术风格一键转换', '智能光影与色彩优化', '人像美化与自然修饰'],
    icon: Wand2,
    image: '/images/photo.jpg',
  },
  {
    number: '03',
    title: 'Pose 智能指导',
    description: '拍照总是姿势僵硬？上传照片，AI 智能分析人物姿态，结合场景类型给出专业拍摄建议。从肢体语言到表情管理，让你轻松拍出杂志大片感。',
    highlights: ['智能姿态识别与分析', '场景化拍摄建议', '专业构图与光线指导'],
    icon: Camera,
    image: '/images/pose.jpg',
  },
  {
    number: '04',
    title: '智能穿搭推荐',
    description: '出行不知道怎么穿？根据目的地天气、场景和个人风格，AI 为你推荐最合适的旅行穿搭。智能搭配，让你在旅途中也能保持最佳状态。',
    highlights: ['目的地天气与场景适配', '个人风格智能匹配', '虚拟试衣与搭配预览'],
    icon: Shirt,
    image: '/images/outfit.jpg',
  },
  {
    number: '05',
    title: '朋友圈文案生成',
    description: '美景当前，文案难产？上传照片，AI 根据画面内容和你的心情，自动生成多条风格各异的文案。文艺、幽默、简约随心选，让分享更有格调。',
    highlights: ['基于图片内容智能创作', '多种语气风格可选', 'Emoji 与话题标签自动匹配'],
    icon: MessageSquare,
    image: '/images/copywriting.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DetailsSection() {
  return (
    <section id="details" className="w-full py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4" />
            <span>深入了解</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            强大功能，逐一解锁
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Waylia 汇聚前沿 AI 技术，为你的旅行注入智能与灵感
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-24 md:space-y-32"
        >
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                variants={itemVariants}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="space-y-6">
                    {/* Number */}
                    <span className="text-6xl md:text-7xl font-bold text-primary/20">
                      {feature.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 pt-2">
                      {feature.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + hIndex * 0.1 }}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <CheckCircle2Icon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm md:text-base">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

// Icon Components
function SparklesIcon({ className }: { className?: string }) {
  return (
    <Sparkles className={className} />
  );
}

function CheckCircle2Icon({ className }: { className?: string }) {
  return (
    <CheckCircle2 className={className} />
  );
}
