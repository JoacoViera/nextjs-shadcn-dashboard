export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "user";
  createdAt: Date;
}

export interface UserProfile extends User {
  phone?: string;
  company?: string;
  bio?: string;
}
