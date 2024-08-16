import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { getUsers } from "../services/apiUser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../features/Accounts/accountSlice";
import { useState } from "react";
import Spinner from "../ui/Spinner";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [isLoadin, setIsLoading] = useState(false);
  function onSubmit(values) {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const user = await getUsers(values.email, values.password);
        dispatch(login(user));
        reset();
        navigate("/");
      } catch (error) {
        console.error("Error fetching data:", error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }

  return (
    <>
      {isLoadin && <Spinner />}
      <div className="h-screen overflow-auto">
        <div className="m-auto my-28 w-[80%] max-w-[600px] rounded-3xl border border-stone-300 px-10 py-12 shadow-sm">
          <Logo />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mt-4 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="eamil">
                Email
              </label>
              <input
                id="eamil"
                type="text"
                className="input w-full"
                placeholder="Enter Email"
                {...register("email")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="password">
                Passoword
              </label>
              <input
                id="password"
                type="text"
                className="input w-full"
                placeholder="Enter Password"
                {...register("password")}
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
            <Link
              to="/signup"
              className="mt-4 text-xs font-semibold text-blue-600"
            >
              Create New Account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
