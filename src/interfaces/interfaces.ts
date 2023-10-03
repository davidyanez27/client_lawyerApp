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

export interface ZodError extends Error {
  response: {
    data:  string[];
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

export interface props {
  children: JSX.Element | JSX.Element[];
}