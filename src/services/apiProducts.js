import { deleteItemInCart } from "./apiCart";
import supabase from "./supabase";

export async function getProducts() {
  let { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return products;
}
export async function getProductDetails(id) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  if (products.length === 0) {
    throw new Error("Product not found");
  }
  return products[0];
}

export async function getProductsForUser(userId) {
  let { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("userId", userId);
  if (error) {
    throw new Error(error.message);
  }
  return products;
}

export async function createProduct(product) {
  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function deleteProduct(product) {
  const { error: DelteError } = await supabase
    .from("cart")
    .delete()
    .eq("productId", product.id);

  if (DelteError) {
    throw new Error(DelteError.message);
  }

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", product.id)
    .eq("userId", product.userId);
  if (error) {
    throw new Error(error.message);
  }
}
