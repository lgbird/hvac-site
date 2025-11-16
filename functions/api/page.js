export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const reqBody = await request.json();

    const host = request.headers.get('host');
    const userAgent = request.headers.get('user-agent');
    const xForwardedFor = request.headers.get('x-forwarded-for');
    const userIp = xForwardedFor ? xForwardedFor.split(',')[0] : request.headers.get('cf-connecting-ip');

    await fetch("https://n8n.orthogan.com/webhook/clima-page", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...reqBody, host, userAgent, userIp })
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(null, { status: 500 });
  }
}
