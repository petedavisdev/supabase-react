import { createClient } from '@supabase/supabase-js';

export const supaClient = createClient(
	import.meta.env.VITE_SUPABASE_API_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);
