import {
  Bot,
  Boxes,
  Eye,
  GitBranch,
  LayoutDashboard,
  Search,
} from "lucide-react";

export const strengths = [
  {
    title: "用户研究",
    english: "User Research",
    icon: Search,
    accent: "blue",
    description:
      "能够通过访谈、竞品分析和用户反馈整理，发现真实场景中的体验问题。",
  },
  {
    title: "交互设计",
    english: "Interaction Design",
    icon: GitBranch,
    accent: "orange",
    description:
      "能够梳理用户流程、信息层级和操作路径，输出清晰的交互方案。",
  },
  {
    title: "产品思维",
    english: "Product Thinking",
    icon: Boxes,
    accent: "blue",
    description:
      "能够从产品目标、用户需求和功能边界出发，判断方案是否具备落地价值。",
  },
  {
    title: "视觉设计",
    english: "Visual Design",
    icon: Eye,
    accent: "orange",
    description:
      "具备 UI 设计基础和审美能力，关注版式、层级、细节和组件一致性。",
  },
  {
    title: "系统体验",
    english: "System UX",
    icon: LayoutDashboard,
    accent: "blue",
    description:
      "关注 HarmonyOS 实况窗、多设备协同和跨端体验中的信息分发逻辑。",
  },
  {
    title: "AI 工作流",
    english: "AI Workflow",
    icon: Bot,
    accent: "orange",
    description:
      "熟悉使用 AI 辅助调研整理、文案生成、规范提炼、组件归类和前端 Demo 探索。",
  },
];
