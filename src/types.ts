export interface ProjectFile {
  path: string;
  name: string;
  language: string;
  content: string;
  status: 'reconstructed' | 'verified' | 'extracted';
}

export interface InspectionStep {
  id: string;
  label: string;
  progress: number;
  status: 'complete' | 'in_progress' | 'pending';
  details: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  tags: string[];
  roiIncrease: string;
}

export interface LeadForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}
