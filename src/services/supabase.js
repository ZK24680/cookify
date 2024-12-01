import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vjkcxbhvuldrbfdziwfv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqa2N4Ymh2dWxkcmJmZHppd2Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTMyODEsImV4cCI6MjA0NzEyOTI4MX0.fUrjZd7BqzrZ3Yhw1TsFah7rPhJNOWFTnex337wmBbs";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase, supabaseUrl };
