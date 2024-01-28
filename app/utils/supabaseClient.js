import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ernnkizczzyhwkdmmtis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVybm5raXpjenp5aHdrZG1tdGlzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjQxNzQ0NiwiZXhwIjoyMDIxOTkzNDQ2fQ.jWBDitvhCLRmjH3f5m7TpqAMqDbmJgIo2iPw8sNKTnM'
console.log('Supabase Key:', process.env.SUPABASE_KEY);
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase