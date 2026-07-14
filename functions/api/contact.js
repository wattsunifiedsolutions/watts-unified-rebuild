export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    if (!data?.firstName || !data?.lastName || !data?.email) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!env.GHL_WEBHOOK_URL) {
      return Response.json({ error: 'Contact destination is not configured' }, { status: 503 });
    }
    const response = await fetch(env.GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...data, source: 'wattsunified.com', submittedAt: new Date().toISOString() })
    });
    if (!response.ok) return Response.json({ error: 'Contact service rejected the message' }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
