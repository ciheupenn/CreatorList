import { createClient } from '@supabase/supabase-js'

const URL = 'https://uuqzqkecomfhfspyojsv.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1cXpxa2Vjb21maGZzcHlvanN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODg0MTYsImV4cCI6MjA3MTU2NDQxNn0.9QzcXiwOt13X1eEgxeq63tOnFNCMmmpbxMh_LkocdKM'

export const supabase = createClient(URL, API_KEY)
