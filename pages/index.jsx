import { Inter } from 'next/font/google';

import { Client, Account, Databases } from 'appwrite';
import Logo from '../components/Logo';
import { Button, Input, Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ tweets }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createName, setCreateName] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [selected, setSelected] = useState('sign-up');

  const [user, setUser] = useState(null);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const client = new Client();
    const account = new Account(client);
    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);

    const promise = account.get();

    promise.then(
      function (response) {
        setUser(response.email)
        setToast(true);

        const timer = setTimeout(() => {
          setToast(false);
        }, 3000);
    
        // Limpa o timer quando o componente for desmontado
        return () => {
          clearTimeout(timer);
        };
      },
      function (error) {
        console.log(error);
      }
    );
  }, [])

  // function async create user signup for AppWrite
  const register = async () => {
    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);

    const response = account.create(createEmail, createPassword, createName);

    response.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };
  
  const userLogin = async () => {
    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);

    const response = account.createEmailSession("newemail@mail.com", "test123");

    response.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  const login = async () => {
    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);

    const response = account.createEmailSession(loginEmail, loginPassword);

    response.then(
      function (response) {
        console.log(response);
        setUser(response.providerUid)
      },
      function (error) {
        console.log(error);
      }
    );
  };
  
  const logoutSession = async () => {
    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_PROJECT);

    const response = account.deleteSessions();

    response.then(
      function (response) {
        console.log(response);
        setUser(null)
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <>
    {user !== null ? 
      <main className='flex items-center justify-center h-screen w-full bg-blue-600 text-white'>
        <h3>Olá {user} 🥳</h3>

        {user !== null && (
          <button type='button' onClick={() => logoutSession()} className='fixed top-4 left-4 py-2 px-4 rounded-tr-lg rounded-bl-lg rounded-br border-4 border-red-200 bg-red-600 bg-opacity-90 backdrop-blur-md text-blue-50'>
            <span>Sair</span>
          </button>
        )}
      </main>
    :
      <main
        className={`flex min-h-screen md:flex-row flex-col items-center p-4 md:p-0 justify-center bg-gray-50 ${inter.className}`}
      >
        <section className="flex-1 flex items-center justify-center">
          <Logo classes="md:h-96 h-60 w-auto" />
        </section>
        <section className="flex-1 flex items-center justify-center">
          <div className="flex w-full flex-col items-start justify-start min-h-[550px] md:max-w-[65%]">
            <h1 className="text-gray-900 text-5xl mb-8">Acontecendo agora</h1>

            <Tabs
              aria-label="Options"
              color="primary"
              variant="bordered"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="sign-up" title="Sign up" className="w-full">
                <div className="flex flex-col gap-2 w-full ">
                  <h2 className="text-xl">Cadastre-se no Twitter</h2>

                  <Input
                    type="text"
                    label="Name"
                    value={createName}
                    onChange={(e) => setCreateName(e.target.value)}
                  />

                  <Input
                    type="email"
                    label="Email"
                    value={createEmail}
                    onChange={(e) => setCreateEmail(e.target.value)}
                  />

                  <Input
                    type="password"
                    label="Password"
                    value={createPassword}
                    onChange={(e) => setCreatePassword(e.target.value)}
                  />

                  <Button
                    color="primary"
                    variant="shadow"
                    onClick={() => register()}
                  >
                    Cadastrar
                  </Button>

                  <span className="mt-4 text-gray-500 text-sm">
                    Já tem uma conta?
                    <button
                      className="ml-2 inline-block font-bold text-blue-500"
                      onClick={() => setSelected('login')}
                    >
                      Faça login
                    </button>
                  </span>
                </div>
              </Tab>

              <Tab key="login" title="Login" className="w-full">
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-xl">Faça seu login</h2>
                  <Input
                    type="email"
                    label="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    label="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />

                  <Button
                    color="primary"
                    variant="shadow"
                    onClick={() => login()}
                  >
                    Entrar
                  </Button>

                  <span className="mt-4 text-gray-500 text-sm">
                    Não tem uma conta?
                    <button
                      className="ml-2 inline-block font-bold text-blue-500"
                      onClick={() => setSelected('sign-up')}
                    >
                      Faça seu cadastro
                    </button>
                  </span>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>

        {(user !== null && toast) && (
          <div className='fixed top-4 right-4 py-2 px-4 rounded-tl-lg rounded-bl-lg rounded-br border-4 border-blue-200 bg-blue-600 bg-opacity-90 backdrop-blur-md text-blue-50'>
            <h3>Olá {user} 🥳</h3>
          </div>
        )}
        
      </main>
    }
    </>
  );
}

export async function getServerSideProps(context) {
  const client = new Client();

  client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT);

  const databases = new Databases(client);

  const tweets = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE,
    process.env.NEXT_PUBLIC_TWEETS_COLLECTION
  );

  return {
    props: { tweets },
  };
}
