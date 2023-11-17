import Heading from "../ui/Heading";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";
import { useForm } from "react-hook-form";
import { FormContainer } from "../ui/FormContainer";

import { useLogin } from "./Auth/useLogin";

function LoginForm() {
  const { login, isLoading } = useLogin();

  const { register, formState, reset, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = ({ email, password }, e) => {
    e.preventDefault();

    login(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("user", JSON.stringify(data.user));
        },
      },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <FormContainer>
      <Heading> Login </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.email?.message}>
          <Input
            disabled={isLoading}
            placeholder="Email address"
            variation="auth"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: " Wrong format, Provide valid email!",
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.password?.message}>
          <Input
            disabled={isLoading}
            placeholder="••••••••"
            variation="auth"
            type="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: `Password length should be greater than or equals 8 `,
              },
            })}
          />
        </FormRow>

        <Button disabled={isLoading} variation="auth">
          {" "}
          {isLoading ? "Logging you in..." : "Login to your account"}{" "}
        </Button>

        <AlternativeAuthentication method="Login" />
      </Form>
    </FormContainer>
  );
}

export default LoginForm;
