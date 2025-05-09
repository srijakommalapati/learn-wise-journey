
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xcizujzihmbdygzqrkyw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaXp1anppaG1iZHlnenFya3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3ODczOTMsImV4cCI6MjA2MjM2MzM5M30.K0rd3_L_INn1c6uZD3QtegddiWdEpp7ezmnelh9QCzE";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      storage: localStorage
    }
  }
);
