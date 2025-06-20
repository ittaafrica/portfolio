import { Brain, Cpu, Database, TrendingUp, Wifi } from "lucide-react";
import { FaAws,FaGithub, FaClipboard, FaCloud, FaCode, FaDatabase, FaDocker, FaTerminal } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";

export const skillsData = {
  languages: [
    { name: "Python", percentage: 95 },
    { name: "C++", percentage: 85 },
    { name: "R", percentage: 80 },
    { name: "SQL", percentage: 90 },
    { name: "Bash/Shell", percentage: 75 },
  ],
  libraries: [
    { name: "TensorFlow/Keras", percentage: 90 },
    { name: "PyTorch", percentage: 85 },
    { name: "scikit-learn", percentage: 95 },
    { name: "pandas/numpy", percentage: 95 },
    { name: "OpenCV", percentage: 80 },
  ],
  tools: [
    { name: "Git", icon:FaGithub, color: "red-500" },
    { name: "Docker", icon: FaDocker, color: "blue-500" },
    { name: "AWS", icon:FaAws , color: "orange-500" },
    { name: "GCP", icon: FaCloud, color: "blue-400" },
    { name: "SQL/NoSQL", icon: FaDatabase, color: "green-500" },
    { name: "VS Code", icon: FaCode, color: "purple-500" },
    { name: "Jupyter", icon: FaTerminal, color: "gray-600 dark:text-gray-400" },
    { name: "CI/CD", icon: FaClipboard, color: "blue-600" },
  ],
  domains: [
    {
      name: "Machine Learning Algorithms",
      description: "Classification, Regression, Clustering, Dimensionality Reduction"
    },
    {
      name: "Deep Learning",
      description: "CNNs, RNNs, Transformers, GANs, Reinforcement Learning"
    },
    {
      name: "Natural Language Processing",
      description: "Text Classification, Named Entity Recognition, Sentiment Analysis"
    },
    {
      name: "Computer Vision",
      description: "Object Detection, Image Segmentation, Feature Extraction"
    },
  ]
};

export const projects = [
  {
    id: 1,
    title: "DeepVision Analyzer",
    description: "A real-time object detection and classification system capable of processing video streams with 95% accuracy. Implemented using YOLOv5 architecture and optimized for edge devices.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ef2ce82142-fba9ca169e0780b0bad2.png"
  },
  // Add other projects similarly...
];

export const experience = [
  {
    id: 1,
    title: "Senior ML Engineer",
    company: "TechVision AI, San Francisco",
    period: "2020 - Present",
    points: [
      "Led a team of 5 engineers to develop and deploy production-ready ML models, increasing prediction accuracy by 35%.",
      "Designed and implemented a real-time recommendation system serving 10M+ users daily with 99.9% uptime.",
      "Optimized ML pipeline, reducing inference time by 60% and cutting cloud infrastructure costs by $200K annually."
    ],
    skills: ["TensorFlow", "Python", "Kubernetes", "AWS"]
  },
  // Add other experiences similarly...
];
// ... (keep existing exports)

export const blogPosts = [
  {
    id: 1,
    title: "Artificial Intelligence (AI): A Simple Introduction",
    description: "Click here to start your journey into an interesting field of machine learning.",
    category: "Artificial Intelligence",
    date: "Oct 15, 2023",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_iK8sFQfWX8OZ6J_5QY_Qg.jpeg",
    link: "https://medium.com/@yusufrufaiabdullahi/artificial-intelligence-ai-a-simple-introduction-27578e1b44b8",
    icon: Brain
  },
  {
    id: 2,
    title: "Embedded System: A Simple Introduction",
    description: "Stay updated with the latest trends, technologies, and best practices in embedded systems.",
    category: "Embedded Systems",
    date: "Nov 2, 2023",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5oVbG5nZz8DmMpIwQkU7Lg.jpeg",
    link: "https://medium.com/@yusufrufaiabdullahi/embedded-system-a-simple-introduction-bb5d7c5125e3",
    icon: Cpu
  },
  {
    id: 3,
    title: "Latest Tech Trends",
    description: "Cultivate a habit of lifelong learning, vital in the ever-evolving tech landscape.",
    category: "Technology",
    date: "Dec 5, 2023",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_iK8sFQfWX8OZ6J_5QY_Qg.jpeg",
    link: "https://hashnode.com/edit/clmm99bqv000309l61qvhfbds",
    icon: TrendingUp
  },
  {
    id: 4,
    title: "Internet of Things (IoT)",
    description: "Reading IoT blog posts enables you to stay at the forefront of this dynamic field.",
    category: "IoT",
    date: "Jan 10, 2024",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5oVbG5nZz8DmMpIwQkU7Lg.jpeg",
    link: "",
    icon: Wifi
  },
  {
    id: 5,
    title: "Data Science Fundamentals",
    description: "Understand how data science is driving innovation across various industries.",
    category: "Data Science",
    date: "Feb 18, 2024",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_iK8sFQfWX8OZ6J_5QY_Qg.jpeg",
    link: "",
    icon: Database
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    description: "Learn about new AI techniques, algorithms, and tools to improve your skills.",
    category: "Machine Learning",
    date: "Mar 5, 2024",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5oVbG5nZz8DmMpIwQkU7Lg.jpeg",
    link: "https://medium.com/@yusufrufaiabdullahi/artificial-intelligence-ai-a-simple-introduction-27578e1b44b8",
    icon: Cpu
  }
];