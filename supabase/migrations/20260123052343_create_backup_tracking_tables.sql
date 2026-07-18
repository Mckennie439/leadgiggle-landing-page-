/*
  # Create Backup Tracking System

  ## Overview
  This migration creates tables to track image uploads and backup status, enabling automatic backup recovery and progress monitoring.

  ## New Tables
  
  ### `file_uploads`
  Tracks all file uploads with their status and metadata
  - `id` (uuid, primary key) - Unique identifier for each upload
  - `file_name` (text) - Original filename
  - `file_path` (text) - Relative path from public directory
  - `folder_name` (text) - Folder category (e.g., 'hero-images', 'portfolio-images')
  - `file_size` (bigint) - File size in bytes
  - `mime_type` (text) - File MIME type
  - `storage_path` (text) - Path in Supabase Storage
  - `upload_status` (text) - Status: 'pending', 'uploading', 'completed', 'failed'
  - `upload_progress` (integer) - Upload progress percentage (0-100)
  - `error_message` (text, nullable) - Error details if upload failed
  - `retry_count` (integer) - Number of retry attempts
  - `checksum` (text, nullable) - File checksum for integrity verification
  - `created_at` (timestamptz) - When upload was initiated
  - `updated_at` (timestamptz) - Last status update
  - `completed_at` (timestamptz, nullable) - When upload completed successfully

  ### `backup_sessions`
  Tracks backup sessions for grouping related uploads
  - `id` (uuid, primary key) - Unique session identifier
  - `session_name` (text) - Descriptive name for the session
  - `total_files` (integer) - Total number of files in session
  - `completed_files` (integer) - Number of successfully uploaded files
  - `failed_files` (integer) - Number of failed uploads
  - `status` (text) - Session status: 'active', 'completed', 'partial', 'failed'
  - `started_at` (timestamptz) - Session start time
  - `completed_at` (timestamptz, nullable) - Session completion time

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public read/write access for now (can be restricted later with auth)

  ## Indexes
  - Index on `upload_status` for efficient filtering
  - Index on `folder_name` for folder-based queries
  - Index on `created_at` for chronological queries
*/

-- Create file_uploads table
CREATE TABLE IF NOT EXISTS file_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  file_path text NOT NULL,
  folder_name text NOT NULL,
  file_size bigint NOT NULL DEFAULT 0,
  mime_type text NOT NULL DEFAULT 'application/octet-stream',
  storage_path text NOT NULL,
  upload_status text NOT NULL DEFAULT 'pending' CHECK (upload_status IN ('pending', 'uploading', 'completed', 'failed')),
  upload_progress integer NOT NULL DEFAULT 0 CHECK (upload_progress >= 0 AND upload_progress <= 100),
  error_message text,
  retry_count integer NOT NULL DEFAULT 0,
  checksum text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create backup_sessions table
CREATE TABLE IF NOT EXISTS backup_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_name text NOT NULL,
  total_files integer NOT NULL DEFAULT 0,
  completed_files integer NOT NULL DEFAULT 0,
  failed_files integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'partial', 'failed')),
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create indexes for efficient queries
CREATE INDEX IF NOT EXISTS idx_file_uploads_status ON file_uploads(upload_status);
CREATE INDEX IF NOT EXISTS idx_file_uploads_folder ON file_uploads(folder_name);
CREATE INDEX IF NOT EXISTS idx_file_uploads_created ON file_uploads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_backup_sessions_status ON backup_sessions(status);
CREATE INDEX IF NOT EXISTS idx_backup_sessions_started ON backup_sessions(started_at DESC);

-- Enable Row Level Security
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE backup_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (can be restricted later)
CREATE POLICY "Allow public read access to file_uploads"
  ON file_uploads FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to file_uploads"
  ON file_uploads FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to file_uploads"
  ON file_uploads FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete to file_uploads"
  ON file_uploads FOR DELETE
  TO public
  USING (true);

CREATE POLICY "Allow public read access to backup_sessions"
  ON backup_sessions FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to backup_sessions"
  ON backup_sessions FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update to backup_sessions"
  ON backup_sessions FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete to backup_sessions"
  ON backup_sessions FOR DELETE
  TO public
  USING (true);

-- Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating updated_at
CREATE TRIGGER update_file_uploads_updated_at
  BEFORE UPDATE ON file_uploads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();