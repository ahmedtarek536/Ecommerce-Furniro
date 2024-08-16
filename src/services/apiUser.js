import supabase, { supabaseUrl } from "./supabase";

export async function createUser(user) {
  const { error } = await supabase.from("users").insert([user]).select();

  if (error) {
    throw new Error(error.message);
  }
}
export async function getUsers(email, password) {
  let { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password);

  if (error) {
    throw new Error(error.message);
  }

  if (users.length === 0) {
    throw new Error("User not found or incorrect password.");
  }

  return users[0];
}

export async function updateUser(user, email) {
  const imageName = `${Math.random()}-${user?.image?.name}`.replaceAll("/", "");
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/user-images/${imageName}`;

  const userData = user?.image
    ? { ...user, image: imageUrl }
    : {
        firstName: user.firstName,
        secondName: user.secondName,
        password: user.password,
      };

  const { data, error } = await supabase
    .from("users")
    .update(userData)
    .eq("email", email)
    .select("*");
  if (error) {
    throw new Error(error.message);
  }

  if (!user?.image) return data;
  // upload image
  const { error: storageError } = await supabase.storage
    .from("user-images")
    .upload(imageName, user.image);
  if (storageError) {
    throw new Error(error.message);
  }
  return data;
}
