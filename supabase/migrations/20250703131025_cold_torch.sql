/*
  # Add missing fields to quote_requests table

  1. New Columns
    - `inspiration_source` (text) - Source of design inspiration
    - `inspiration_detail` (text) - Additional details about inspiration
    - `start_date` (date) - Preferred project start date
    - `expected_completion_date` (date) - Expected project completion date

  2. Changes
    - Remove NOT NULL constraint from description field since form no longer collects it
    - Make description field optional for backward compatibility
*/

-- Add new columns to quote_requests table
ALTER TABLE quote_requests 
ADD COLUMN IF NOT EXISTS inspiration_source TEXT,
ADD COLUMN IF NOT EXISTS inspiration_detail TEXT,
ADD COLUMN IF NOT EXISTS start_date DATE,
ADD COLUMN IF NOT EXISTS expected_completion_date DATE;

-- Make description field optional (remove NOT NULL constraint)
ALTER TABLE quote_requests 
ALTER COLUMN description DROP NOT NULL;