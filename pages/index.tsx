import { Inter } from 'next/font/google';

import CreateAccount from '@/components/CreateAccount';
import SigninAccount from '@/components/SigninAccount';
import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import Logo from '../components/Logo';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function LogninPage() {
  const route = useRouter()
  const [selected, setSelected] = useState('signup');

  return (
    <main
      className={`flex min-h-screen md:flex-row flex-col items-center p-4 md:p-0 justify-center dark ${inter.className}`}
    >
      <section className="flex-1 flex items-center justify-center">
        <Logo classes="md:h-96 h-60 w-auto dark:fill-white fill-black" />
      </section>
      <section className="flex-1 flex items-center justify-center">
        <div className="flex w-full flex-col items-start justify-start min-h-[550px] md:max-w-[65%]">
          <h1 className="text-gray-900 dark:text-white text-5xl mb-8">
            Acontecendo agora
          </h1>

          <Tabs
            aria-label="Options"
            color="primary"
            variant="bordered"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as 'signup' | 'signin')}
          >
            <Tab key="signup" title="Sign up" className="w-full">
              <CreateAccount onSuccess={() => setSelected('signin')} />
              <div className="mt-4">
                <span className="mt-4 text-gray-500 text-sm">
                  Já tem uma conta?
                  <button
                    className="ml-2 inline-block font-bold text-blue-500"
                    onClick={() => setSelected('signin')}
                  >
                    Faça signin
                  </button>
                </span>
              </div>
            </Tab>

            <Tab key="signin" title="signin" className="w-full">
              <SigninAccount onSuccess={() => route.push('/feed')}  />
              <div className="mt-4">
                <span className="mt-4 text-gray-500 text-sm">
                  Não tem uma conta?
                  <button
                    className="ml-2 inline-block font-bold text-blue-500"
                    onClick={() => setSelected('signup')}
                  >
                    Faça seu cadastro
                  </button>
                </span>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
