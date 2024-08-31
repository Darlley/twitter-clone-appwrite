import UserStore from '@/stores/userStore';
import { Button, Input } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormInput {
  name: string;
  email: string;
  password: string;
}

export default function CreateAccount({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError?: () => void;
}) {
  const { createUser } = UserStore();

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
    const { email, name, password } = data;
    createUser({ name, email, password }).then(() => {
      onSuccess();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-full ">
        <h2 className="text-xl">Cadastre-se no Twitter</h2>

        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: 'Campo obrigatório.',
          }}
          render={({ field: { onChange, value, name } }) => (
            <Input
              type="text"
              label="Name"
              isRequired={true}
              value={value}
              onChange={onChange}
              isInvalid={!!errors[name]}
              errorMessage={errors[name]?.message}
            />
          )}
        />

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
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
