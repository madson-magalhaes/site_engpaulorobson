/**
 * Tracking utilities for ref_id generation and management
 * ref_id = cupom = unique session identifier for tracking pageview → clique → checkout → purchase
 */

export function generateRefId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getOrCreateRefId(): string {
  const storageKey = "tracking_ref_id";

  if (typeof window === "undefined") return generateRefId();

  let refId = sessionStorage.getItem(storageKey);
  if (!refId) {
    refId = generateRefId();
    sessionStorage.setItem(storageKey, refId);
  }

  return refId;
}

export function formatWhatsAppMessage(
  baseMessage: string,
  refId: string
): string {
  // Se a mensagem contém {cupom}, substitui
  if (baseMessage.includes("{cupom}")) {
    return baseMessage.replace(/{cupom}/g, refId);
  }
  // Fallback: append ref_id no final
  return `${baseMessage} (Ref: ${refId})`;
}

export function buildWhatsAppUrl(
  whatsappNumber: string,
  message: string
): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
