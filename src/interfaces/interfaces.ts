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