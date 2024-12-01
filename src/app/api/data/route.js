export async function POST(request) {
    const receivedData = await request.json();
    console.log(receivedData);
    if (request.method == "POST") {
        return NextResponse.json({ success: true });
    }
    else {
        return NextResponse.json({ "success": false, "error": "Request type error." });
    }
}