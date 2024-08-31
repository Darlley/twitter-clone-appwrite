import { Account, Client, ID } from 'appwrite';
import { create } from 'zustand';

const ENDPOINT_ID = process.env.NEXT_PUBLIC_ENDPOINT_ID!;
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID!;

const client = new Client();
const account = new Account(client);

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

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
};

const UserStore = create<IUserState>((set, get) => ({
  user: null,

  getUser: () => {
    return new Promise(async (resolve, reject) => {
      client.setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

      const promise = account.get();

      promise.then(
        function (response) {
          console.log('UserStore@getUser');
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
      client.setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

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
      client.setEndpoint(ENDPOINT_ID).setProject(PROJECT_ID);

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
}));

export default UserStore;
