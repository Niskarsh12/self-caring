import React from 'react';
import { Heart, Sparkles, Brain, Battery, Moon, Timer, ArrowRight } from 'lucide-react';
import { Section } from './components/Section';
import { ConnectingLines } from './components/ConnectingLines';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TypeWriter } from './components/TypeWriter';

function FloatingCard({ icon: Icon, title, delay }: { icon: React.ElementType, title: string, delay: string }) {
  return (
    <div className={`floating-card bg-white/90 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-float ${delay} fade-in`}>
      <Icon className="w-8 h-8 text-pink-600 mb-3" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-pink-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const phrases = [
  "Self Care Assistant",
  "Wellness Companion",
  "Mindfulness Guide",
  "Health Navigator",
  "Lifestyle Coach",
  "Meditation Partner",
  "Growth Facilitator",
  "Balance Keeper"
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-32 px-4" variant="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <TypeWriter
              staticText="Your Personal"
              phrases={phrases}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            />
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your daily routine with AI-powered self-care recommendations tailored just for you.
            </p>
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 mx-auto group">
              Get Started Free 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Cards Grid with Connecting Lines */}
          <div className="relative">
            <ConnectingLines />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
              <FloatingCard icon={Heart} title="Personalized Care" delay="animate-delay-100" />
              <FloatingCard icon={Brain} title="Mental Wellness" delay="animate-delay-200" />
              <FloatingCard icon={Sparkles} title="Daily Inspiration" delay="animate-delay-300" />
              <FloatingCard icon={Battery} title="Energy Tracking" delay="animate-delay-400" />
              <FloatingCard icon={Moon} title="Sleep Insights" delay="animate-delay-500" />
              <FloatingCard icon={Timer} title="Mindful Minutes" delay="animate-delay-600" />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-20 px-4" variant="secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Features that put you first
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Insights"
              description="Get personalized recommendations based on your unique patterns and preferences."
            />
            <FeatureCard
              icon={Heart}
              title="Mood Tracking"
              description="Monitor your emotional well-being with advanced mood tracking and analysis."
            />
            <FeatureCard
              icon={Moon}
              title="Sleep Analysis"
              description="Optimize your sleep schedule with detailed sleep pattern insights."
            />
            <FeatureCard
              icon={Timer}
              title="Mindfulness Timer"
              description="Guided meditation and breathing exercises to reduce stress and anxiety."
            />
            <FeatureCard
              icon={Battery}
              title="Energy Management"
              description="Track and optimize your daily energy levels for peak performance."
            />
            <FeatureCard
              icon={Sparkles}
              title="Daily Motivation"
              description="Start each day with personalized affirmations and goals."
            />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;