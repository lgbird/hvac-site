import type { VercelRequest, VercelResponse } from '@vercel/node';

export const runtime = 'edge';
 
export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  response.redirect('https://api.whatsapp.com/send/?phone=351967087547');
}
