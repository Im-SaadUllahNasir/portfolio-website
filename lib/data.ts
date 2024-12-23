import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.jpeg";
import project2 from "@/public/project2.jpeg";
import project3 from "@/public/project3.jpeg";
import project4 from "@/public/project4.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {       
    "title": "Undergraduate Student in Data Science",
    "location": "University of Engineering and Technology (UET), Peshawar",
    "description": "I am currently pursuing my undergraduate studies in Data Science, gaining hands-on experience in machine learning, data analysis, and statistics through academic projects and internships.",
    "icon": React.createElement(LuGraduationCap),
    "date": "2026 (Expected)"
    
      
  },
  {
    "title": "Computer Science Student",
    "location": "Peshawar Model Degree College(PMDC), Peshawar",
    "description": "I have done my FSC Computer Science at PMDC, where I am gaining a strong foundation in programming, algorithms, and data structures, along with hands-on experience through academic projects.",
    "icon": React.createElement(LuGraduationCap),
    "date": "2017 - 2019"
      
  }
] as const;

export const projectsData = [
  {
    title: "Emotion Classification",
    description:
      "Emotion classification is the process of using machine learning techniques to analyze and categorize emotions from text, speech.",
        tags: ["Python", "Machine Learning", "NLP","Text Classification", "Transformers"],
        imageUrl: project1,
  },
  {
    title: "Movie Recommender System",
    description:
      "A movie recommender system suggests movies to users by analyzing their preferences, such as past ratings, genres, and watching.",
        tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],      
    imageUrl: project2,
  },
  {
    title: "Kidney Disease Classification",
    description:
      "Kidney disease classification involves using machine learning models to predict the presence or absence of kidney disease based on patient data.",
      tags: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow "],
    imageUrl: project3,
  },
  {
    title: "Plant Disease Prediction",
    description:
      "The Plant Disease Prediction project uses machine learning techniques to analyze plant leaf images and identify potential diseases.",
      tags: ["Python","OpenCV","Pandas","Deep Learning"],
      imageUrl: project4,
    },
    
] as const;

export const skillsData = [
  "Python",
  "Pandas",
  "Numpy",
  "Matplolib",
  "Seaborn",
  "Streamlit",
  "Plotly",
  "SciPy",
  "OpenCV",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "Machine Learning",
  "Deep Learning",
  "Jupyter Notebook",
  "Flask",
  "Computer Vision",
  "Tableau",
  "Power BI",
  "CNN",
  "RNN",
  "LSTM",
  "Transformers",
] as const;