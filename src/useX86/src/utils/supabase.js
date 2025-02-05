import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rtzwjflattrvmhgikvrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0endqZmxhdHRydm1oZ2lrdnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMzE0NDksImV4cCI6MjA1MzYwNzQ0OX0.UJaWCIMmGeXF0z7kRpPEtgBDSUxca7pBc1dPTAtzfGg";

export const supabase = createClient(supabaseUrl, supabaseKey);
