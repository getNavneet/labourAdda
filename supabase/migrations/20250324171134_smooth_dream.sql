/*
  # Initial Schema for Labor Booking Platform

  1. New Tables
    - `workers`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `category` (text)
      - `experience_years` (integer)
      - `hourly_rate` (decimal)
      - `phone` (text)
      - `location` (text)
      - `available` (boolean)
      - `created_at` (timestamp)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `worker_id` (uuid, references workers)
      - `client_id` (uuid, references auth.users)
      - `booking_date` (date)
      - `status` (text)
      - `description` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for workers and bookings
*/

-- Create workers table
CREATE TABLE workers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  category text NOT NULL,
  experience_years integer NOT NULL DEFAULT 0,
  hourly_rate decimal NOT NULL DEFAULT 0,
  phone text,
  location text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id uuid REFERENCES workers NOT NULL,
  client_id uuid REFERENCES auth.users NOT NULL,
  booking_date date NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  description text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE workers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for workers
CREATE POLICY "Workers can view their own profile"
  ON workers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Public can view available workers"
  ON workers
  FOR SELECT
  TO authenticated
  USING (available = true);

CREATE POLICY "Workers can update their own profile"
  ON workers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create worker profile"
  ON workers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for bookings
CREATE POLICY "Users can view their bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = client_id OR auth.uid() IN (
    SELECT user_id FROM workers WHERE id = worker_id
  ));

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = client_id);

CREATE POLICY "Workers can update their bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (
    SELECT user_id FROM workers WHERE id = worker_id
  ));