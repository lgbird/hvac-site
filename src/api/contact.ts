import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    let nn = await fetch("https://n8n.orthogan.com/webhook/5594b047-2243-47f7-a966-de6fcd178016", {
      method: 'POST', headers: {
    'Content-Type': 'application/json',
  }, body: JSON.stringify(req.body)})
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500);
  }
}
