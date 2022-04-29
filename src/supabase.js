import { createClient } from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
export const supabaseUrl = 'https://fqvqkeojqermirnjqjcy.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey);