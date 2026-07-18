/*
  # Create quote requests table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `services` (text array)
      - `description` (text)
      - `budget` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for authenticated users to read all data
    - Add policy for public users to insert data
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  services text[] NOT NULL,
  description text NOT NULL,
  budget numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert quote requests"
  ON quote_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);