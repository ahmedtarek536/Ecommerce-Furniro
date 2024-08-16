import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/apiUser";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createUser, {
    onSuccess: () => {
      toast.success("New user created successfully");
      queryClient.invalidateQueries("users");

      reset();
      navigate("/signin");
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    if (data.password !== data.confirmPassword) {
      toast.error("Confirm your password");
      return;
    }
    const values = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Qyt65bjxiN7Bybq76UTBfAHaHa&pid=Api&P=0&h=220",
    };
    mutate(values);
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div className="h-screen overflow-auto">
        <div className="m-auto my-28 w-[80%] max-w-[600px] rounded-3xl border border-stone-300 px-10 py-12 shadow-sm">
          <Logo />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="flex items-center justify-start gap-2 md:gap-4">
              <div className="mt-4 flex w-full flex-col items-start justify-start gap-1">
                <label className="font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input w-full"
                  placeholder="Enter First Name"
                  {...register("firstName")}
                  required
                />
              </div>
              <div className="mt-4 flex w-full flex-col items-start justify-start gap-1">
                <label className="font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input w-full"
                  placeholder="Enter Last Name"
                  {...register("lastName")}
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input w-full"
                placeholder="Enter Email"
                {...register("email")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input w-full"
                placeholder="At Least 6 Characters"
                {...register("password")}
                required
                minLength={6}
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="input w-full"
                placeholder=""
                {...register("confirmPassword")}
                required
                minLength={6}
              />
            </div>
            <p className="mt-4 text-xs text-stone-700">
              By continuing, you agree to Furniro's Conditions of Use and
              Privacy Notice.
            </p>
            <div className="text-center">
              <Button type="full">Continue</Button>
            </div>
            <div className="mt-4 text-xs font-semibold">
              Already have an account?
              <Link to="/signin" className="text-blue-600">
                {" "}
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
