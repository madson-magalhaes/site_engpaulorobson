/**
 * Security validation utilities
 */

export const MAX_BODY_BYTES = 16 * 1024; // 16KB

export function validateRefId(
  value: unknown
): { ok: boolean; data?: string; error?: string } {
  if (typeof value !== "string") {
    return { ok: false, error: "ref_id deve ser uma string" };
  }

  if (value.length !== 12) {
    return { ok: false, error: "ref_id deve ter 12 caracteres" };
  }

  if (!/^[A-Z0-9]{12}$/.test(value)) {
    return {
      ok: false,
      error: "ref_id deve conter apenas letras maiúsculas e números",
    };
  }

  return { ok: true, data: value };
}

export function sanitizeOptionalString(
  value: unknown,
  maxLength: number = 256
): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (trimmed.length === 0) return null;

  return trimmed.slice(0, maxLength);
}

export function sanitizeUserAgent(value: unknown): string | null {
  return sanitizeOptionalString(value, 512);
}

export function sanitizeFbcFbp(value: unknown): string | null {
  return sanitizeOptionalString(value, 256);
}
