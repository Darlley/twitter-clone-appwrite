import UserStore from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function index() {
  const route = useRouter();

  const { user, getUser } = UserStore();
  useEffect(() => {
    getUser()
      .then()
      .catch(() => {
        route.push('/');
      });
  }, []);

  console.log(user)

  // const logoutSession = async () => {
  //   const client = new Client();
  //   const account = new Account(client);

  //   client.setEndpoint(ENDPOINT).setProject(PROJECT);

  //   const response = account.deleteSessions();

  //   response.then(
  //     function (response) {
  //       console.log(response);
  //       setUser(null);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
  // };

  return (
    <main className="flex items-center justify-center h-screen w-full bg-blue-600 text-white">
      <h3>Olá 🥳</h3>
    </main>
  );
}
