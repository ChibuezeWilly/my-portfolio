import { NextResponse } from 'next/server';

const backends: Record<string, { baseUrl: string; healthPath: string }> = {
  operon: { baseUrl: 'https://backend-qg67.onrender.com', healthPath: '/' },
  novora: { baseUrl: 'https://novora-backend-616w.onrender.com', healthPath: '/health' },
  tallyflow: { baseUrl: 'https://ai-powered-financial-close.onrender.com', healthPath: '/' },
  churndesk: { baseUrl: 'https://ai-powered-incident-response-customer.onrender.com', healthPath: '/' },
};

const CACHE_MS = 4_000;
const cache = new Map<string, { checkedAt: number; ready: boolean; status: number | null }>();

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const backend = backends[slug];

  if (!backend) {
    return NextResponse.json({ error: 'No backend wake-up target is configured for this project.' }, { status: 404 });
  }

  const cached = cache.get(slug);
  if (cached && Date.now() - cached.checkedAt < CACHE_MS) {
    return NextResponse.json({ ready: cached.ready, status: cached.status }, { headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    const response = await fetch(`${backend.baseUrl}${backend.healthPath}`, {
      method: 'GET',
      cache: 'no-store',
      redirect: 'follow',
      signal: AbortSignal.timeout(8_000),
    });
    const status = response.status;
    await response.body?.cancel();

    // Any HTTP response below 500 confirms the service has started. Operon's
    // root may return 404 because the deployment does not document a health route.
    const ready = status < 500;
    cache.set(slug, { checkedAt: Date.now(), ready, status });
    return NextResponse.json({ ready, status }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    cache.set(slug, { checkedAt: Date.now(), ready: false, status: null });
    return NextResponse.json({ ready: false, status: null }, { headers: { 'Cache-Control': 'no-store' } });
  }
}
