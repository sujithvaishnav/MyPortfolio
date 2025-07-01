
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Data Scientist', 'AI Engineer', 'Machine Learning Expert', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        charIndex--;
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
  <div className="max-w-4xl w-full text-center px-4 sm:px-6 lg:px-8">
    <div className="animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Hi, I'm <span className="text-yellow-400">Sujith Vaishnav</span>
      </h1>
      <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
        <span className="text-yellow-400">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </div>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Passionate about transforming data into insights and building intelligent solutions 
        that make a real-world impact through AI and machine learning.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
  <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
    <Link to="/projects">
      View My Projects <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </Button>

  <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
    <Link to="/contact">Get In Touch</Link>
  </Button>

  <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">
  <a href="/Malla_Sujith_Vaishnav_Resume.pdf" download>
    Download Resume
  </a>
</Button>

</div>
    </div>
  </div>

  {/* Scroll Button */}
  <button
    onClick={scrollToNext}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce"
    aria-label="Scroll down"
  >
    <ChevronDown className="h-8 w-8" />
  </button>
</section>


      {/* Quick Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building the Future with <span className="text-yellow-400">AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining analytical thinking with cutting-edge technology to solve complex problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Science",
                description: "Extracting meaningful insights from complex datasets using statistical analysis and visualization",
                icon: "📊"
              },
              {
                title: "AI Engineering",
                description: "Developing and deploying machine learning models that scale and perform in production",
                icon: "🤖"
              },
              {
                title: "Problem Solving",
                description: "Approaching challenges with analytical thinking and innovative solutions",
                icon: "🧠"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card hover:bg-card/80 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
