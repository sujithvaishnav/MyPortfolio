
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Computer Vision Core Member",
      company: "Epoch, AIML Club",
      period: "2024 - 2025",
      location: "Sri City, AP, India",
      description: [
        "Led computer vision projects involving image classification and object detection using CNNs.",
        "Collaborated with cross-functional teams to deploy models for real-world datasets.",
        "Organized workshops and hands-on sessions on OpenCV, deep learning, and model deployment.",
        "Contributed to open-source club projects and mentored juniors on model debugging and optimization."
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Scikit-learn"]
    },
    {
      title: "B.Tech in AI & DS",
      company: "IIIT Sricity",
      period: "2023 - 2027",
      location: "Sri City, AP, India",
      description: [
        "Studied core subjects such as Machine Learning, Deep Learning, Data Structures, and Probability.",
        "Built academic projects in NLP, recommendation systems, and supervised learning models.",
        "Participated in hackathons, coding contests, and AI-focused research groups.",
        "Explored data visualization and statistical analysis for academic and self-driven projects."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter","R", "SQL", "Statistics"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through my professional career in data science and AI engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-yellow-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="hover:bg-card/80 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col space-y-2">
                        <CardTitle className="text-yellow-400">{exp.title}</CardTitle>
                        <div className="text-lg font-semibold">{exp.company}</div>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-muted-foreground">
                          <span>{exp.period}</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-yellow-400 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
