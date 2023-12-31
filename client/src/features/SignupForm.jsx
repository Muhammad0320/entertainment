import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import { useSignup } from "./Auth/useSignup";
import { FormContainer } from "../ui/FormContainer";
import AlternativeAuthentication from "../ui/AlternativeAuthentication";

function SignupForm() {
  const { signup, isLoading } = useSignup();

  const { register, formState, reset, handleSubmit, getValues } = useForm();

  const { errors } = formState;

  const onSubmit = ({ name, email, password, passwordConfirm }, e) => {
    e.preventDefault();

    signup(
      { name, email, password, passwordConfirm },
      {
        onSuccess: (data) => {
          console.log(data);
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
      <Heading> Create Account </Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.name?.message}>
          <Input
            disabled={isLoading}
            placeholder="Name"
            variation="auth"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>

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
            type="password"
            variation="auth"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: `Password length should be greater than or equals 8 `,
              },
            })}
          />
        </FormRow>

        <FormRow error={errors?.passwordConfirm?.message}>
          <Input
            disabled={isLoading}
            placeholder="••••••••"
            type="password"
            variation="auth"
            {...register("passwordConfirm", {
              required: "This field is required",

              validate: (value) =>
                value === getValues().password || "Passwords should be equal",
            })}
          />
        </FormRow>

        <Button disabled={isLoading} variation="auth">
          {" "}
          {isLoading ? "Creating new account..." : "Create new account"}{" "}
        </Button>

        <AlternativeAuthentication method="signup" />
      </Form>
    </FormContainer>
  );
}

export default SignupForm;
