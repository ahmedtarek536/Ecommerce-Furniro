import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("users")
    .update(user)
    .eq("email", email)
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
