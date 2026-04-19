interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-xl md:rounded-2xl border-2 border-gray-700 bg-gray-900 p-4 md:p-6 transition-all duration-300 hover:scale-[1.03] hover:border-purple-700 hover:shadow-xl hover:shadow-purple-900/30 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-700 dark:hover:shadow-purple-900/30">
      <span className="inline-block text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h3 className="mt-2 md:mt-3 text-base md:text-lg font-bold">{title}</h3>
      <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
