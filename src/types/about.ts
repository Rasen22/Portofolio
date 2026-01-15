// About Section Types

export interface PersonalDetail {
  icon: string;
  label: string;
  value: string;
}

export interface AboutData {
  breadcrumb: {
    home: string;
    current: string;
  };
  title: {
    text: string;
    highlight: string;
  };
  experienceBadge: {
    value: string;
    label: string;
  };
  description: string[];
  quote: {
    text: string;
    highlight: string;
  };
  personalDetails: {
    title: string;
    location: PersonalDetail;
    education: PersonalDetail;
    languages: PersonalDetail;
    interests: PersonalDetail;
  };
  buttons: {
    download: string;
    contact: string;
  };
  socialLinks: {
    name: string;
    url: string;
  }[];
  footer: string;
}
