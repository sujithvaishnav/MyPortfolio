
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 75 },
        { name: "JavaScript", level: 30 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 60 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "Keras", level: 80 },
        { name: "Scikit-learn", level: 95 },
        { name: "Pytorch", level: 30 },
        { name: "OpenCV", level: 80 },
      ]
    },
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 88 },
        { name: "Plotly", level: 75 },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 25 },
        { name: "Google Cloud", level: 40 },
        { name: "Docker", level: 50 },
        { name: "Git", level: 75 },
        { name: "Jupyter", level: 95 },
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
    "AWS", "Google Cloud", "Docker", "Git", "SQL", "MongoDB",
    "FastAPI", "Flask", "Jupyter", "VS Code"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data science, AI engineering, and Deep Learning
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="text-yellow-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-yellow-400">Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted text-sm font-medium rounded-full hover:bg-yellow-400 hover:text-black transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
