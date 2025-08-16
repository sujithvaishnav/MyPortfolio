
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
  title: "Hear The Image",
  description: "Developed an assistive application that converts images into descriptive audio outputs for visually impaired users.",
  image: "https://plus.unsplash.com/premium_photo-1687880582685-b33bbca934b2?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Python", "BLIP", "CV","gTTS", "Streamlit"],
  githubUrl: "https://github.com/sujithvaishnav/Hear_the_image",
  liveUrl: "https://imagetoaudio-89pedz2lydwockpbvrtivm.streamlit.app/",
  category: "Computer Vision and GenAI"
},
{
  title: "Plant Disease Prediction",
  description: "Developed a deep learning model to detect plant leaf diseases using image classification techniques and deployed it using Flask.",
  image: "https://plus.unsplash.com/premium_photo-1687880582685-b33bbca934b2?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Python", "TensorFlow", "CV", "Flask"],
  githubUrl: "https://github.com/sujithvaishnav/AgriVision/tree/main/notebooks",
  liveUrl: "https://demo.com",
  category: "Deep Learning"
},
{
  title: "Bird Voice Recognizer",
  description: "Built an audio classification model using spectrograms and deep learning to identify bird species from their calls.",
  image: "https://images.unsplash.com/photo-1599550496117-50bf1d7b0a70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  technologies: ["Python", "Keras", "Pandas", "Librosa", "SMOTE"],
  githubUrl: "https://github.com/sujithvaishnav/Bird_Voice_Recognition",
  liveUrl: "https://demo.com",
  category: "Machine Learning"
},
{
  title: "EDA and Data Cleaning Tool",
  description: "Built an interactive Streamlit tool for automated data profiling, cleaning, and visualization using Plotly and Seaborn.",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  technologies: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Plotly"],
  githubUrl: "https://github.com/sujithvaishnav/EDA-and-Data-Cleaning-Tool",
  liveUrl: "https://demo.com",
  category: "Data Science"
},
{
  title: "Gender Classification",
  description: "Designed and trained a CNN model to classify gender from facial images, utilizing OpenCV for preprocessing and PyTorch for modeling.",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  technologies: ["Python", "OpenCV", "PyTorch", "YOLO"],
  githubUrl: "https://github.com/sujithvaishnav/GenderClassification_CNN",
  liveUrl: "https://demo.com",
  category: "Computer Vision"
},
{
  title: "Loan Approval Prediction",
  description: "Created a machine learning classification model to predict loan approvals based on applicant data and financial history.",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas", "Numpy"],
  githubUrl: "https://github.com/sujithvaishnav/Loan-approval",
  liveUrl: "https://demo.com",
  category: "Data Science"
}
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and AI engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
