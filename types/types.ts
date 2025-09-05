export enum Status {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  WAITLISTED = 'WAITLISTED'
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum AuthProvider {
  EMAIL = 'EMAIL',
  GOOGLE = 'GOOGLE',
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: Role;
  authProvider: AuthProvider;
  password?: string;
  applications?: Application[];
  // projects?: Project[];
  // judge?: Judge;
};

export type ShortUser = {
  id: string;
  email: string;
}

export type Application = {
  id: string;
  gender: string;
  pronouns: string;
  age: number;
  ethnicity: string;
  gradYear: number;
  phoneNumber: string;
  school: string;
  city: string;
  state: string;
  country: string;
  educationLevel: string;
  major: string;
  diet: string;
  shirtSize: string;
  sleep: boolean;
  github: string;
  linkedin: string;
  portfolio: string;
  whyBostonhacks: string;
  resumeUrl: string;
  applicationYear: number;
  userId: string;
  status: Status;
  authorizeMLHEmail: boolean;
  user?: User;
};

export type UploadApplication = Omit<Application, 'id' | 'resumeUrl' | 'user' | 'status'> & {
  resume: File;
};

