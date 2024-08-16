import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://myywxeebnqpndlvzzsqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15eXd4ZWVibnFwbmRsdnp6c3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDU4MTcsImV4cCI6MjAzNzU4MTgxN30.EFn7_qYdzvMWLK2FA_sK3j7oP6udvTXTAteYdrEkDNw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
