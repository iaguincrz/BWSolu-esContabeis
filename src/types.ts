import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  benefit: string;
  desc: string;
  fullContent: string;
  price?: string;
  observations?: string;
  offerings?: { title: string; description: string }[];
  differentials?: string[];
}
