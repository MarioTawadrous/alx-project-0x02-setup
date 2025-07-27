export interface CardProps {
  title: string;
  content: string;
}


export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

// Add ButtonProps
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}