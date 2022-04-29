import { createClient } from "@supabase/supabase-js";

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdnFrZW9qcWVybWlybmpxamN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA5MDU4MTQsImV4cCI6MTk2NjQ4MTgxNH0.hfVJv3qOiNMo7jFZGblVzifbe6kqUN6v6qHH2itOP6Q';
export const supabaseUrl = 'https://fqvqkeojqermirnjqjcy.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey);