# **Sugar Smart Scanner – Web Prototype**
AI-Driven Glycemic Impact Estimation and Food Recommendation System

## ⚡ **Project Overview**

Sugar Smart Scanner is a web-based research prototype that demonstrates AI-informed decision support for nutrition.

The system allows users to:
1) Input meals or snacks via a simple web interface
2) Estimate potential blood glucose response using nutritional content and portion size
3) Receive comparative food suggestions with lower estimated glycemic impact

Note: This prototype is web-based and currently uses rule-based or simple predictive modeling or generative AI. Future research directions include computer vision for automatic food recognition, mobile deployment, and personalized AI models.

## 🎯 Motivation

Rapid spikes in blood glucose are linked to metabolic health risks. People often lack tools to understand the relative glycemic impact of everyday meals.

Research Questions:
1) How can AI assist users in understanding estimated glycemic responses?
2) Can comparative recommendations influence healthier food choices?
3) How can a research-focused, non-prescriptive system support autonomous decision-making?

## 🛠 Prototype Features

Meal Input: Users enter food items, portion sizes, and optional nutritional data  
Glycemic Impact Estimation: Predicts potential glucose response (rule-based / simplified model)  
Food Replacement Suggestions: Provides alternatives with lower estimated spikes  
Visualizations: Bar charts and comparative tables for quick understanding  

Note: All outputs are informational; the system does not provide medical advice.

## 📷 Demo / Screenshots

<img width="547" height="574" alt="Screenshot 2026-02-15 at 6 01 35 PM" src="https://github.com/user-attachments/assets/b0b8ecd6-6650-488a-87c2-289dbf71a19b" />

Example workflow:  
User inputs a snack →  
System estimates impact →  
Displays side-by-side suggested alternative with predicted reduction  

## 🚀 Installation & Running Locally

Clone the repository and install dependencies:
```
git clone https://github.com/yourusername/SugarSmartScanner.git
cd SugarSmartScanner
pip install -r requirements.txt  # or npm install if using JS framework
python app.py                     # or run your web server
```
Open http://localhost:5000 in your browser to access the prototype.

## 🔬 Research & Future Work

Planned enhancements to demonstrate GenAI and real-world impact:

1) Computer Vision: Automatic food recognition from images  
2) Mobile Deployment: Cross-platform app for on-the-go usage  
3) Personalized ML Models: Predictions tailored to age, weight, activity level, or historical glucose data  
4) Context-Aware Recommendations: Consider time of day and meal context  
5) Integration with Wearables: CGM or fitness tracker data for real-world validation  

## 🛠 Tech Stack

Backend: Python / Flask (or FastAPI)  
Frontend: HTML, CSS, JavaScript (or framework used)  
Visualization: Matplotlib / Plotly / D3.js  
Predictive Modeling: Rule-based and prototype AI logic  

📂 License
MIT License

