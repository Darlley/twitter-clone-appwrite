import UserStore from '@/stores/userStore';
import { Button, Input } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormInput {
  email: string;
  password: string;
}

export default function SigninAccount({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError?: () => void;
}) {
  const { createUserSession } = UserStore();

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

    createUserSession({
      email,
      password,
    }).then(() => {
      onSuccess();
    });
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
        <Button
          type="submit"
          color="primary"
          variant="shadow"
          isDisabled={isLoading || isSubmitting}
          isLoading={isLoading || isSubmitting}
        >
          Entrar
        </Button>
      </div>
    </form>
  );
}
