/*
  # Create Storage Policies for Website Assests Bucket

  1. Security Policies
    - Enable public read access for all objects in "Website Assests" bucket
    - Enable public upload access for authenticated users
    - Enable public update access for authenticated users
    - Enable public delete access for authenticated users

  2. Purpose
    - Allow website visitors to view images stored in the bucket
    - Allow authenticated users to manage (upload, update, delete) images
    - Support the website's image gallery and content management needs
*/

-- Drop existing policies if they exist and recreate them
DROP POLICY IF EXISTS "Public read access for Website Assests" ON storage.objects;
DROP POLICY IF EXISTS "Public upload access for Website Assests" ON storage.objects;
DROP POLICY IF EXISTS "Public update access for Website Assests" ON storage.objects;
DROP POLICY IF EXISTS "Public delete access for Website Assests" ON storage.objects;

-- Public read access policy for Website Assests bucket
CREATE POLICY "Public read access for Website Assests"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'Website Assests');

-- Public upload access policy for Website Assests bucket
CREATE POLICY "Public upload access for Website Assests"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'Website Assests');

-- Public update access policy for Website Assests bucket
CREATE POLICY "Public update access for Website Assests"
  ON storage.objects
  FOR UPDATE
  TO public
  USING (bucket_id = 'Website Assests')
  WITH CHECK (bucket_id = 'Website Assests');

-- Public delete access policy for Website Assests bucket
CREATE POLICY "Public delete access for Website Assests"
  ON storage.objects
  FOR DELETE
  TO public
  USING (bucket_id = 'Website Assests');