import UserStore from '@/stores/userStore';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function index() {
  const route = useRouter();

  const { user, getUser, deleteUserSession } = UserStore();
  useEffect(() => {
    getUser()
      .then()
      .catch(() => {
        route.push('/');
      });
  }, []);

  return (
    <main className="flex items-center justify-center h-screen w-full bg-blue-600 text-white">
      <h3>Olá {user?.name}</h3>
      <Button
        onClick={() =>
          deleteUserSession().then(() => {
            route.push('/');
          })
        }
      >
        Sair
      </Button>
    </main>
  );
}
