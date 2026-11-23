import { NextRequest } from 'next/server';
import { POST as chatHandler } from '../ai/chat/route';

export async function POST(req: NextRequest) {
  return chatHandler(req);
}
