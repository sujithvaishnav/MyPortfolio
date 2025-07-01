
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-400">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data scientist and AI engineer with a love for turning complex problems into elegant solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  {/* Visual Badge */}
  <div className="flex justify-center lg:justify-start">
    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center">
      <span className="text-7xl animate-bounce">🚀</span>
    </div>
  </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-yellow-400">My Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a background in data science and artificial intelligence, I'm passionate about leveraging 
              technology to solve real-world problems. My journey began with a curiosity about how can a 
              Machine make predictions and has evolved into building intelligent systems that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in machine learning, deep learning, and data analysis, with experience in 
              Python, R, TensorFlow, and some cloud platforms. I enjoy working on projects that 
              challenge me to think creatively and push the boundaries of what's possible with AI and with
              the help of AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, reading research papers, 
              or contributing to open-source projects. I believe in continuous learning and Sharing what 
              I know while actively learning new perspectives and skills from the community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Completed Projects" },
            { number: "1.5+", label: "Years of Learning & Practical Experience" },
            { number: "10+", label: "Technologies Used" },
            { number: "100%", label: "Passion for AI & Innovation" }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:bg-card/80 transition-colors">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
