export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ValidationError extends Error {
  response: {
    data: {
      message: string[];
    };
  };
}

export interface InputProps {
  type: string;
  id: string;
  name: string;
  values: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}