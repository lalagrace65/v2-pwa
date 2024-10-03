// pages/api/test/route.js

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello from test!' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
