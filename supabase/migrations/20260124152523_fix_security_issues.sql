/*
  # Fix Security Issues

  ## Summary
  This migration addresses multiple security vulnerabilities and performance issues:

  1. **Remove Unused Indexes**
     - Drop `idx_file_uploads_folder` - not being used by queries
     - Drop `idx_file_uploads_created` - not being used by queries
     - Drop `idx_backup_sessions_status` - not being used by queries
     - Drop `idx_backup_sessions_started` - not being used by queries

  2. **Fix Function Search Path**
     - Update `update_updated_at_column` function to have stable search path

  3. **Fix Insecure RLS Policies**
     - Replace policies on `backup_sessions` that use `true` (unrestricted access)
     - Replace policies on `file_uploads` that use `true` (unrestricted access)
     - Keep `quote_requests` INSERT as public (legitimate use case for public form submissions)
     - All other operations restricted to authenticated users or service role

  ## Security Changes
  - Backup sessions: Only accessible via service role (admin operations)
  - File uploads: Only accessible via service role (admin operations)
  - Quote requests: Public can INSERT only, authenticated users can view
*/

-- =====================================================
-- 1. DROP UNUSED INDEXES
-- =====================================================

DROP INDEX IF EXISTS idx_file_uploads_folder;
DROP INDEX IF EXISTS idx_file_uploads_created;
DROP INDEX IF EXISTS idx_backup_sessions_status;
DROP INDEX IF EXISTS idx_backup_sessions_started;

-- =====================================================
-- 2. FIX FUNCTION SEARCH PATH
-- =====================================================

-- Recreate the function with stable search path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- =====================================================
-- 3. FIX INSECURE RLS POLICIES
-- =====================================================

-- -----------------------------------------------------
-- Fix backup_sessions policies
-- -----------------------------------------------------

-- Drop all existing insecure policies
DROP POLICY IF EXISTS "Allow public read access to backup_sessions" ON public.backup_sessions;
DROP POLICY IF EXISTS "Allow public insert to backup_sessions" ON public.backup_sessions;
DROP POLICY IF EXISTS "Allow public update to backup_sessions" ON public.backup_sessions;
DROP POLICY IF EXISTS "Allow public delete to backup_sessions" ON public.backup_sessions;

-- Create secure policies - only service role can access
-- Note: Service role bypasses RLS, but these policies document intent
-- and protect if someone accidentally uses anon/authenticated keys

CREATE POLICY "Service role can read backup sessions"
  ON public.backup_sessions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can insert backup sessions"
  ON public.backup_sessions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update backup sessions"
  ON public.backup_sessions
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete backup sessions"
  ON public.backup_sessions
  FOR DELETE
  TO service_role
  USING (true);

-- -----------------------------------------------------
-- Fix file_uploads policies
-- -----------------------------------------------------

-- Drop all existing insecure policies
DROP POLICY IF EXISTS "Allow public read access to file_uploads" ON public.file_uploads;
DROP POLICY IF EXISTS "Allow public insert to file_uploads" ON public.file_uploads;
DROP POLICY IF EXISTS "Allow public update to file_uploads" ON public.file_uploads;
DROP POLICY IF EXISTS "Allow public delete to file_uploads" ON public.file_uploads;

-- Create secure policies - only service role can access
CREATE POLICY "Service role can read file uploads"
  ON public.file_uploads
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can insert file uploads"
  ON public.file_uploads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update file uploads"
  ON public.file_uploads
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete file uploads"
  ON public.file_uploads
  FOR DELETE
  TO service_role
  USING (true);

-- -----------------------------------------------------
-- Fix quote_requests policies (keep INSERT public)
-- -----------------------------------------------------

-- Drop the existing insecure insert policy
DROP POLICY IF EXISTS "Allow public to insert quote requests" ON public.quote_requests;

-- Recreate with same functionality but better documentation
-- This is intentionally public for form submissions
CREATE POLICY "Public can submit quote requests"
  ON public.quote_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Keep the authenticated read policy as is (already secure)
-- Policy "Allow authenticated users to view quote requests" already exists

-- Add service role access for admin operations
CREATE POLICY "Service role full access to quote requests"
  ON public.quote_requests
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
