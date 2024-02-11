import Ably from "ably/promises";
import { NextResponse } from 'next/server';
//process.env.ABLY_API_KEY 

export async function GET(request) {
  const client = new Ably.Realtime({key: "tQdUQw.htKHyA:A8MEVHDwk_BncYKt-KLEOnu4VGWjHKEIBZdPQdhu2SU"} );
  const { searchParams } = new URL(request.url);
  let clientId = searchParams.get('clientId');
  clientId = clientId ? clientId : "unknown";
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: clientId,
  });
  console.log('clientId', clientId);

  return NextResponse.json(tokenRequestData);
}


















//tQdUQw.htKHyA:A8MEVHDwk_BncYKt-KLEOnu4VGWjHKEIBZdPQdhu2SU