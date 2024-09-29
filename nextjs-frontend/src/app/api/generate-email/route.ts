import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    
    // Send the URL to the FastAPI backend
    const res = await fetch('http://localhost:8000/generate-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to generate email' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ email: data.email });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred while generating the email' }, { status: 500 });
  }
}
