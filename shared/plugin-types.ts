// ---- plugin:tourism_photo_style_conversion_1 ----
// ============================================================
// 插件 tourism_photo_style_conversion_1 (旅游照片美化风格转换) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface TourismPhotoStyleConversionOneInput {
  /** 目标风格，如：清新、复古、胶片、日系、油画等 */
  style: string;
  /** 增强选项列表，如：亮度提升、色彩饱和度增强、对比度优化、降噪、锐化等 */
  enhancement?: string[];
  /** 待处理的旅游原图 */
  sourceImage: string[];
}

/**
 * capabilityClient.load('tourism_photo_style_conversion_1').call<TourismPhotoStyleConversionOneOutput>('imageToImage', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { images } = result;
 */
export interface TourismPhotoStyleConversionOneOutput {
  /** [object Object] */
  images: string[];
}
// ---- end:tourism_photo_style_conversion_1 ----

// ---- plugin:pose_guidance_analysis_1 ----
// ============================================================
// 插件 pose_guidance_analysis_1 (Pose指导分析) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface PoseGuidanceAnalysisOneInput {
  /** 拍摄场景类型，如'人像'、'风景人像'、'街拍'、'证件照'、'运动写真'等 */
  sceneType: string;
  /** 需要分析的人物照片 */
  photo: string[];
}

/**
 * capabilityClient.load('pose_guidance_analysis_1').call<PoseGuidanceAnalysisOneOutput>('imageUnderstanding', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, reasoningContent, response } = result;
 */
export interface PoseGuidanceAnalysisOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  reasoningContent?: string;
  /** [object Object] */
  response?: string;
}
// ---- end:pose_guidance_analysis_1 ----

// ---- plugin:moments_copy_generator_1 ----
// ============================================================
// 插件 moments_copy_generator_1 (朋友圈文案生成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface MomentsCopyGeneratorOneInput {
  /** 期望的文案语气风格，如文艺、幽默、简约、活泼、治愈等 */
  tone?: string;
  /** 用于生成文案的参考图片 */
  image: string[];
  /** 当前心情状态，如开心、感动、平静、惬意等 */
  mood?: string;
}

/**
 * capabilityClient.load('moments_copy_generator_1').call<MomentsCopyGeneratorOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { response, content } = result;
 */
export interface MomentsCopyGeneratorOneOutput {
  /** [object Object] */
  response?: string;
  /** [object Object] */
  content: string;
}
// ---- end:moments_copy_generator_1 ----

// ---- plugin:travel_guide_generate_1 ----
// ============================================================
// 插件 travel_guide_generate_1 (旅游攻略生成) 的类型定义
// 由 get_plugin_ai_json 自动生成
// ============================================================

export interface TravelGuideGenerateOneInput {
  /** 旅游目的地 */
  destination: string;
  /** 旅游天数 */
  duration: string;
  /** 旅游偏好列表，如美食、人文、自然风光、购物等 */
  preferences: string[];
}

/**
 * capabilityClient.load('travel_guide_generate_1').call<TravelGuideGenerateOneOutput>('textGenerate', input)
 * 直接返回此类型，无 .data 包装，直接解构使用：
 * const { content, response } = result;
 */
export interface TravelGuideGenerateOneOutput {
  /** [object Object] */
  content: string;
  /** [object Object] */
  response?: string;
}
// ---- end:travel_guide_generate_1 ----