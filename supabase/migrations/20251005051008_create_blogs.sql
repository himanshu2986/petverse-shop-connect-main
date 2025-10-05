-- Create blogs table
CREATE TABLE public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  image_url TEXT,
  author_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blogs
CREATE POLICY "Anyone can view blogs"
  ON public.blogs FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create blogs"
  ON public.blogs FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their own blogs"
  ON public.blogs FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own blogs"
  ON public.blogs FOR DELETE
  USING (auth.uid() = author_id);
