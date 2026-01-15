// About Me Section Types (Profile Singkat di Homepage)

export interface AboutMeButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface AboutMeData {
  badge: string;
  title: string;
  description: string;
  image: string;
  buttons: AboutMeButton[];
}
