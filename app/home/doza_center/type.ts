export interface CenterStory {
  logo: string;
  name: string;
  role: string;
  image: string;
  stats: string;
  quote: string;
  results: string[];
}

export interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
  color?: string;
}

export interface CenterType {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
}
