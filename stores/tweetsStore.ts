import { Account, Client, ID } from 'appwrite';
import { create } from 'zustand';

const ENDPOINT_ID = process.env.NEXT_PUBLIC_ENDPOINT_ID!;
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID!;

const client = new Client();
const account = new Account(client);

client.setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

export interface IUser {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  labels: any[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  mfa: boolean;
  prefs: IPrefs;
  targets: ITarget[];
  accessedAt: string;
}

export interface IPrefs {}

export interface ITarget {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  userId: string;
  providerId: any;
  providerType: string;
  identifier: string;
}

export type IRequestError = {
  type: string;
  message: string;
  status: number;
};

export type IUserState = {
  user: IUser | null;
  getUser: () => Promise<void>;
  createUser: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  createUserSession: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;

  deleteUserSession: () => Promise<void>;
};

const UserStore = create<IUserState>((set, get) => ({
  user: null,

  getUser: () => {
    return new Promise(async (resolve, reject) => {
      client.setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

      const promise = account.get();

      promise.then(
        function (response) {
          const user = response as IUser;
          set({ user });
          resolve();
        },
        function (error) {
          console.log(error);
          reject(error);
        }
      );
    });
  },

  createUser: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      const response = account.create(ID.unique(), email, password, name);

      response.then(
        function (response) {
          console.log('UserStore@createUser');

          resolve();
        },
        function (error) {
          console.log(error);
          const customError: IRequestError = {
            type: 'networkError',
            message: 'Erro de rede ou servidor',
            status: 500,
          };
          reject(customError);
        }
      );
    });
  },

  createUserSession: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      const response = account.createEmailSession(email, password);

      response.then(
        function (response) {
          console.log('UserStore@createUserSession');
          resolve();
        },
        function (error) {
          console.log(error);
          const customError: IRequestError = {
            type: 'networkError',
            message: 'Erro de rede ou servidor',
            status: 500,
          };
          reject(customError);
        }
      );
    });
  },

  deleteUserSession: (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      const response = account.deleteSessions();

      response.then(
        function (response) {
          set({ user: null });
          resolve()
        },
        function (error) {
          console.log(error);
          reject()
        }
      );
    });
  },
}));

export default UserStore;
