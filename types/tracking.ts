/**
 * Tracking types
 */

export interface ApiOkResponse {
  ok: true;
  ref_id: string;
}

export interface ApiErrorResponse {
  ok: false;
  error: string;
}

export type ApiResponse = ApiOkResponse | ApiErrorResponse;

export interface PageViewPayload {
  ref_id: string;
  landing_url: string;
  user_agent: string;
  fbclid?: string | null;
  fbp?: string | null;
  fbc?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  utm_id?: string | null;
  id_pixel?: string | null;
}

export interface CliquePayload {
  ref_id: string;
  fbc?: string | null;
  fbp?: string | null;
  telefone?: string | null;
}
