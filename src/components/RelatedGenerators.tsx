import { Link } from 'react-router-dom';
import { Sparkles, Users, Baby, Flag, PawPrint } from 'lucide-react';

interface GeneratorLink {
  to: string;
  icon: React.ElementType;
  label: string;
  description: string;
}

const generators: GeneratorLink[] = [
  {
    to: '/',
    icon: Sparkles,
    label: 'Random Names',
    description: 'All countries'
  },
  {
    to: '/username-generator',
    icon: Users,
    label: 'Usernames',
    description: 'Gaming & social'
  },
  {
    to: '/baby-name-generator',
    icon: Baby,
    label: 'Baby Names',
    description: 'Find perfect name'
  },
  {
    to: '/indian-names',
    icon: Flag,
    label: 'Indian Names',
    description: 'Traditional & modern'
  },
  {
    to: '/pet-names',
    icon: PawPrint,
    label: 'Pet Names',
    description: 'For your furry friend'
  }
];

interface RelatedGeneratorsProps {
  currentPath?: string;
}

const RelatedGenerators: React.FC<RelatedGeneratorsProps> = ({ currentPath = '' }) => {
  return (
    <div className="relative z-10 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Explore More Generators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {generators.map((generator) => {
              const Icon = generator.icon;
              const isActive = currentPath === generator.to;
              
              return (
                <Link
                  key={generator.to}
                  to={generator.to}
                  className={`group flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:shadow-xl'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-purple-300'
                  }`} />
                  <h3 className={`font-semibold text-center mb-1 ${
                    isActive ? 'text-white' : 'text-white/90'
                  }`}>
                    {generator.label}
                  </h3>
                  <p className={`text-xs text-center ${
                    isActive ? 'text-white/90' : 'text-white/60'
                  }`}>
                    {generator.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedGenerators;
