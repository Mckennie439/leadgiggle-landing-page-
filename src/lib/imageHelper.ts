import { supabase } from './supabase';

const WEBSITE_ASSETS_BUCKET = 'Website Assests';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop';

export function getImageUrlWithFallback(path: string, fallback?: string): string {
  if (!path) {
    return fallback || FALLBACK_IMAGE;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const isDevelopment = import.meta.env.DEV;
  const useSupabaseStorage = import.meta.env.VITE_USE_SUPABASE_IMAGES === 'true';

  if (isDevelopment && !useSupabaseStorage) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  const { data } = supabase.storage
    .from(WEBSITE_ASSETS_BUCKET)
    .getPublicUrl(cleanPath);

  return data.publicUrl || fallback || FALLBACK_IMAGE;
}
