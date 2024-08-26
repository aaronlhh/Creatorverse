import { createClient } from '@supabase/supabase-js';
const URL = 'https://zwezbuxfohdjbtujpudz.supabase.co';
const API_KEY = process.env.API_KEY;
export const supabase = createClient(URL, API_KEY);