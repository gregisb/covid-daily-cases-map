import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabaseKey);