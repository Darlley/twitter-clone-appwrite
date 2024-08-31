import { Button, Input } from '@nextui-org/react';
import { Account, Client } from 'appwrite';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormInput {
  email: string;
  password: string;
}

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT!;
const PROJECT = process.env.NEXT_PUBLIC_PROJECT!;

export default function SigninAccount() {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<FormInput>({
    mode: 'onBlur',
  });
  
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const { email, password } = data;
    
    const client = new Client();
    const account = new Account(client);

    client.setEndpoint(ENDPOINT).setProject(PROJECT);

    const response = account.createEmailSession(email, password);

    response.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-full ">
        <h2 className="text-xl">Entre em sua conta</h2>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Campo obrigatório.',
          }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              type="email"
              label="Email"
              isRequired={true}
              value={value}
              onChange={onChange}
              isInvalid={!!errors[name]}
              errorMessage={errors[name]?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Campo obrigatório.',
          }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              type="password"
              label="Password"
              isRequired={true}
              value={value}
              onChange={onChange}
              isInvalid={!!errors[name]}
              errorMessage={errors[name]?.message}
            />
          )}
        />
        <Button type="submit" color="primary" variant="shadow">
          Entrar
        </Button>
      </div>
    </form>
  );
}
