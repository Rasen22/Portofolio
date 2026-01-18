// Footer Types

export interface SocialLink {
  name: string;
  icon: React.ComponentType;
  url: string;
}

export interface FooterData {
  socialTitle: string;
  socialLinks: SocialLink[];
  copyrightName: string;
}
