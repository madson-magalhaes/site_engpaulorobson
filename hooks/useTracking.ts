import { useEffect } from "react";
import { isSupabaseConfigured } from "@/lib/config";
import type { PageViewPayload, CliquePayload } from "@/types/tracking";

export function useTracking() {
  // Track pageview on page load
  useEffect(() => {
    if (!isSupabaseConfigured()) {
      console.warn("[useTracking] Supabase não configurado - pageview não será rastreado");
      return;
    }

    trackPageView();
  }, []);

  async function trackPageView(): Promise<void> {
    try {
      const params = new URLSearchParams(window.location.search);
      const fbclid = params.get("fbclid");
      const fbp = getCookie("_fbp");
      const fbc = getCookie("_fbc");
      const utm_source = params.get("utm_source");
      const utm_medium = params.get("utm_medium");
      const utm_campaign = params.get("utm_campaign");
      const utm_content = params.get("utm_content");
      const utm_term = params.get("utm_term");
      const utm_id = params.get("utm_id");

      const refId = getOrCreateRefId();

      const payload: PageViewPayload = {
        ref_id: refId,
        landing_url: window.location.href,
        user_agent: navigator.userAgent,
        fbclid: fbclid,
        fbp: fbp,
        fbc: fbc,
        utm_source: utm_source,
        utm_medium: utm_medium,
        utm_campaign: utm_campaign,
        utm_content: utm_content,
        utm_term: utm_term,
        utm_id: utm_id,
        id_pixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || null,
      };

      const res = await fetch("/api/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("[tracking] ✅ PageView rastreado:", payload);
      } else {
        console.error("[tracking] Erro ao rastrear pageview:", res.status);
      }
    } catch (err) {
      console.error("[tracking] Erro ao rastrear pageview:", err);
    }
  }

  async function trackClique(phone?: string): Promise<void> {
    // Dispara evento Contact no Meta Pixel e no dataLayer do GTM
    if (typeof window !== "undefined") {
      try {
        if (typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Contact", {
            content_name: "WhatsApp Click",
          });
        }
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "whatsapp_click",
        });
      } catch (e) {
        console.warn("[tracking] Erro ao disparar fbq/dataLayer:", e);
      }
    }

    if (!isSupabaseConfigured()) {
      console.warn("[useTracking] Supabase não configurado - clique não será rastreado");
      return;
    }

    try {
      const fbp = getCookie("_fbp");
      const fbc = getCookie("_fbc");
      const refId = getOrCreateRefId();

      const payload: CliquePayload = {
        ref_id: refId,
        fbp: fbp,
        fbc: fbc,
        telefone: phone || null,
      };

      const res = await fetch("/api/clique", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("[tracking] ✅ Clique rastreado:", payload);
      } else {
        console.error("[tracking] Erro ao rastrear clique:", res.status);
      }
    } catch (err) {
      console.error("[tracking] Erro ao rastrear clique:", err);
    }
  }

  return { trackPageView, trackClique };
}

function getOrCreateRefId(): string {
  const storageKey = "tracking_ref_id";
  let refId = sessionStorage.getItem(storageKey);
  if (!refId) {
    refId = generateRefId();
    sessionStorage.setItem(storageKey, refId);
  }
  return refId;
}

function generateRefId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  const value = match?.[1];
  return value ? decodeURIComponent(value) : null;
}
