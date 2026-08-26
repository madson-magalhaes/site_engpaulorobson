/**
 * Config pública do tenant (lida de env vars)
 */

export const config = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  whatsappMessage: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Quero saber mais",
  schemaId: process.env.NEXT_PUBLIC_SCHEMA_ID ?? "",
} as const;

// Supabase URLs (não precisa ser literal type)
export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};

export function isPixelConfigured(): boolean {
  return config.metaPixelId.trim().length > 0;
}

export function isWhatsAppConfigured(): boolean {
  return config.whatsappNumber.trim().length > 0;
}

export function isSchemaConfigured(): boolean {
  return config.schemaId.trim().length > 0;
}

export function isSupabaseConfigured(): boolean {
  return (
    supabaseConfig.url.trim().length > 0 &&
    supabaseConfig.anonKey.trim().length > 0
  );
}
