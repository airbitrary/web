interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.03] hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-700 dark:hover:shadow-purple-900/30">
      <span className="inline-block text-4xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h3 className="mt-3 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
