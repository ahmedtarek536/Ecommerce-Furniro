import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Header from "../ui/Header";
import Logo from "../ui/Logo";
import Spinner from "../ui/Spinner";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser } from "../services/apiUser";
import { login } from "../features/Accounts/accountSlice";
import { useEffect } from "react";
import Footer from "../ui/Footer";

function Profile() {
  const dispatch = useDispatch();
  const { id, firstName, lastName, email, password, image, isSeller } =
    useSelector((state) => state.account);
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const {
    mutate,
    data: user,
    isLoading,
  } = useMutation((data) => updateUser(data, email), {
    onSuccess: () => {
      toast.success("update user  successfully");

      queryClient.invalidateQueries({ key: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  useEffect(
    function () {
      if (user) dispatch(login(user?.at(0)));
    },
    [user],
  );

  function onSubmit(data) {
    const values = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      image: data.image[0],
    };

    mutate(values, id);
  }

  if (!id) return null;

  return (
    <>
      {isLoading && <Spinner />}
      <div className="h-screen overflow-auto">
        <Header />
        <div className="m-auto my-28 grid w-[98%] grid-cols-8 gap-6 rounded-3xl px-10 py-4 shadow-sm md:w-[90%] md:gap-12">
          <div className="col-span-2 text-center text-lg font-semibold">
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt="image-photo"
                className="user-img rounded-full border border-stone-100 shadow-sm"
              />
            </div>
            <p className="mt-3">{firstName + " " + lastName}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="col-span-6">
            <div className="mt-4 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="userId">
                User ID
              </label>
              <input
                id="userId"
                type="text"
                className="input w-full"
                value={id}
                disabled
                placeholder="Enter Email"
                {...register("userid")}
                required
              />
            </div>
            <div className="flex items-center justify-start gap-2 md:gap-4">
              <div className="mt-4 flex w-full flex-col items-start justify-start gap-1">
                <label className="font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  defaultValue={firstName}
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
                  defaultValue={lastName}
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
                value={email}
                disabled
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
                defaultValue={password}
                placeholder="At Least 6 Characters"
                {...register("password")}
                required
                minLength={6}
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="image">
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                className="input-file mt-2 w-full"
                {...register("image")}
              />
            </div>
            <p className="mt-4 text-xs text-stone-700">
              By continuing, you agree to Furniro's Conditions of Use and
              Privacy Notice.
            </p>
            <div className="text-center">
              <Button type="full">Update</Button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default Profile;
