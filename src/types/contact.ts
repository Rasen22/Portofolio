// Contact Page Types

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormField {
  id: keyof ContactFormData;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
}

export interface ContactSocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface ContactPageData {
  title: string;
  subtitle: string;
  formFields: ContactFormField[];
  buttonText: string;
  socialTitle: string;
  socialLinks: ContactSocialLink[];
  whatsappNumber: string;
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
