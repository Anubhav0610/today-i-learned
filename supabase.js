
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dvspnuvgnlwxmqykiprf.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2c3BudXZnbmx3eG1xeWtpcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjcwNTYsImV4cCI6MjA0MDg0MzA1Nn0.n08vFtW1bU2LYYAz0FoKLrPySWsMWDZdODS5DBWnFSE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;