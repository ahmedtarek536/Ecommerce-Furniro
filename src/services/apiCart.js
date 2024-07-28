import supabase from "./supabase";

export async function getCart(id) {
  const { data, error } = await supabase
    .from("cart")
    .select("*,products(*)")
    .eq("userId", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function addToCart(product) {
  const { data, error } = await supabase
    .from("cart")
    .insert([product])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteItemInCart(item) {
  const { error } = await supabase
    .from("cart")
    .delete()
    .eq("userId", item.userId)
    .eq("productId", item.productId);

  if (error) {
    throw new Error(error.message);
  }
}
