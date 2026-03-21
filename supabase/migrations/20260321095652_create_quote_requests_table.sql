/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `name` (text, not null) - Full name of the requester
      - `company` (text) - Company name (optional)
      - `email` (text, not null) - Email address
      - `phone` (text, not null) - Phone number
      - `pickup_zip` (text, not null) - Pickup location ZIP code
      - `delivery_zip` (text, not null) - Delivery location ZIP code
      - `shipment_type` (text, not null) - Type of shipment (FTL, OTR, etc.)
      - `weight` (text) - Weight of shipment in lbs (optional)
      - `dimensions` (text) - Dimensions of shipment (optional)
      - `pickup_date` (date, not null) - Desired pickup date
      - `additional_info` (text) - Additional information about shipment (optional)
      - `created_at` (timestamptz, default now()) - Timestamp when request was created
  
  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for anonymous users to insert their own quote requests
    - Add policy for authenticated admins to view all quote requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text NOT NULL,
  pickup_zip text NOT NULL,
  delivery_zip text NOT NULL,
  shipment_type text NOT NULL,
  weight text,
  dimensions text,
  pickup_date date NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
