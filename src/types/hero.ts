// Hero Types

export interface HeroStat {
  value: string;
  label: string;
  icon: string;
}

export interface HeroButtons {
  download: string;
  contact: string;
}

export interface HeroData {
  badge: string;
  greeting: string;
  name: string;
  role: string;
  buttons: HeroButtons;
  stats: HeroStat[];
}
