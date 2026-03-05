import { createClient } from '@supabase/supabase-js'

// Using .env.local with REACT_APP_ prefix
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials. Check your .env.local file.')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase