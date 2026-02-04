import bcrypt from "bcryptjs";

export interface MockUser {
  id: string;
  email: string;
  password: string; // hashed
  name: string;
  avatar?: string;
  role: "admin" | "user";
  createdAt: Date;
  phone?: string;
  company?: string;
  bio?: string;
}

// Pre-hashed password for "password123"
const hashedPassword = bcrypt.hashSync("password123", 10);

export const mockUsers: MockUser[] = [
  {
    id: "1",
    email: "john@example.com",
    password: hashedPassword,
    name: "John Doe",
    role: "admin",
    createdAt: new Date("2024-01-15"),
    phone: "+1 (555) 123-4567",
    company: "Acme Corp",
    bio: "Product manager with 10 years of experience in SaaS",
  },
  {
    id: "2",
    email: "jane@example.com",
    password: hashedPassword,
    name: "Jane Smith",
    role: "user",
    createdAt: new Date("2024-02-20"),
    phone: "+1 (555) 987-6543",
    company: "Tech Solutions Inc",
    bio: "Software engineer passionate about web development",
  },
];

export function findUserByEmail(email: string): MockUser | undefined {
  return mockUsers.find((user) => user.email === email);
}

export function findUserById(id: string): MockUser | undefined {
  return mockUsers.find((user) => user.id === id);
}

export function createUser(email: string, password: string, name: string): MockUser {
  const newUser: MockUser = {
    id: String(mockUsers.length + 1),
    email,
    password: bcrypt.hashSync(password, 10),
    name,
    role: "user",
    createdAt: new Date(),
  };
  mockUsers.push(newUser);
  return newUser;
}

export function verifyPassword(plainPassword: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}
