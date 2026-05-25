export const resumeData = {
  name: "Lovesh Kumar",
  title: "Software & AI Engineer",
  contact: {
    email: "lk.loveshkumar@gmail.com",
    phone: "813-290-1680",
    location: "Tampa, FL",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/lovesh-kumar/",
    github: "GitHub",
    githubUrl: "https://github.com/lovesh124"
  },
  education: [
    {
      university: "University of South Florida",
      location: "Tampa, FL",
      degree: "B.S. Computer Science",
      gpa: "3.66/4.0",
      date: "May 2026",
      relevantCourses: [
        "Operating Systems",
        "Data Structures & Algorithms",
        "Analysis of Algorithms",
        "Software System Development",
        "Advanced OOP",
        "Automata Theory"
      ]
    }
  ],
  experience: [
    {
      company: "USF Water Institute",
      role: "Database Application Intern",
      date: "May 2025 – Aug 2025",
      bullets: [
        "Designed and implemented a RESTful API in .NET Core (Fast Endpoints) to serve water quality data across 40+ parameters, reducing average response time by 30% through server-side pagination and query optimization.",
        "Used Entity Framework Core with LINQ to query a production SQL database, abstracting complex multi-parameter joins and enabling scalable data delivery to external clients.",
        "Refactored backend with layered services and DTO mappings, reducing maintenance overhead by 30% and decoupling business logic from API contracts for easier feature expansion.",
        "Managed CI/CD pipelines using Git and Azure DevOps, automating build, test, and deployment workflows to improve release reliability."
      ]
    }
  ],
  projects: [
    {
      name: "MemeCrafter – Meme Analysis System",
      tech: "Python, PyTorch, BLIP-2, LoRA, EasyOCR, Gradio",
      link: "https://github.com/lovesh124/Meme_Caption",
      bullets: [
        "Fine-tuned BLIP-2 (2.7B parameter vision-language model) on a custom meme dataset using LoRA adapters, enabling meme-specific captioning and sentiment classification.",
        "Built a multi-modal analysis pipeline combining EasyOCR text extraction with BLIP-2 visual understanding to detect sentiment (positive, negative, neutral, sarcastic) with context-aware accuracy.",
        "Deployed an interactive Gradio web app for real-time meme analysis, including a side-by-side base vs. fine-tuned model comparison view."
      ]
    },
    {
      name: "ASL Gesture Recognition System",
      tech: "Python, TensorFlow, MediaPipe, CNN, OpenCV",
      link: "https://github.com/lovesh124/asl_recognition-",
      bullets: [
        "Built a complete CNN-based pipeline to classify 36 ASL signs (A–Z and 0–9) in real time, using MediaPipe for hand landmark detection and background segmentation.",
        "Trained multiple CNN architectures with data augmentation (rotation, zoom, shear), batch normalization, and dropout, achieving 88-93% test accuracy across 36 classes.",
        "Deployed a live webcam inference system using OpenCV with prediction smoothing and confidence scoring, running at 15–30 FPS."
      ]
    },
    {
      name: "Mental Health Chatbot",
      tech: "Python, TensorFlow, Flask, React, TypeScript, PostgreSQL, AWS",
      link: "https://github.com/lovesh124/mental",
      bullets: [
        "Developed a full-stack AI chatbot with a React/TypeScript frontend and Flask backend, using a hybrid TensorFlow NLP model + keyword matching to classify 7 intents with 95%+ validation accuracy.",
        "Trained a sequential neural network (Embedding → GlobalAveragePooling → Dense) with early stopping and learning rate scheduling, improving F1 score from 0.50 to 0.60 through iterative data expansion.",
        "Secured user data with AWS Cognito authentication and built a PostgreSQL-backed session logging system to enable continuous model retraining from new interaction data."
      ]
    }
  ],
  leadership: [
    {
      organization: "USF Bellini College of AI, Cybersecurity & Computing",
      role: "CS Tutor",
      date: "2025 – Present",
      bullets: [
        "Tutor students in Data Structures, Intro to Programming, Program Design, and Computer Architecture through one-on-one and small group sessions.",
        "Support students with code debugging, algorithm analysis, and exam preparation, improving comprehension and academic performance."
      ]
    },
    {
      organization: "Bhakti Yoga Society – USF",
      role: "President",
      date: "2023 – Present",
      bullets: [
        "Lead a 50+ member student organization, growing membership 20% YoY through expanded programming and university department partnerships.",
        "Manage a 6-person officer team overseeing weekly event logistics, budget allocation, and campus outreach."
      ]
    },
    {
      organization: "Society of Asian Scientists & Engineers (SASE)",
      role: "Conference Chair",
      date: "2025 – Present",
      bullets: [
        "Oversaw planning and execution of the 2025 SASE Regional Conference, coordinating 5+ corporate partners and university departments to deliver career panels, networking sessions, and technical workshops for 200+ STEM students across multiple universities.",
        "Led a 10-member team across logistics, marketing, and budgeting using structured project management, achieving a 95% attendee satisfaction rate."
      ]
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "RISC-V"] },
    { category: "Frameworks & Libraries", items: [".NET Core (Fast Endpoints)", "Flask", "TensorFlow", "PyTorch", "OpenCV", "MediaPipe", "React.js", "Node.js"] },
    { category: "Cloud & Tools", items: ["AWS (Lambda, S3, Cognito)", "Azure DevOps", "Git", "Linux", "PostgreSQL", "Entity Framework Core", "CI/CD", "Gradio"] }
  ]
};