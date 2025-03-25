async function sendVisitNotification() {
    try {
        // Get visitor IP info
        const response = await fetch("https://ipinfo.io/json?token=128f08de7f23bb");
        const ipData = await response.json();

        // Format the message
        const message = {
            content: `🔔 **New Website Visit!** 🔔\n\n📍 **IP Address:** \`${ipData.ip}\`\n🌍 **Location:** ${ipData.city}, ${ipData.region}, ${ipData.country}\n📡 **ISP:** ${ipData.org}\n🖥️ **User-Agent:** ${navigator.userAgent}`
        };

        // Send to Discord webhook
        await fetch("https://discord.com/api/webhooks/1353995033916735548/ccoI3QGYqtn2Bk392yvms27daWvBnr35AnXwRKUjk1WtogDBnQ1KrYG682tNd1g1lOO0", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        });

        console.log("Visit notification sent!");
    } catch (error) {
        console.error("Error sending visit notification:", error);
    }
}

// Run the function when the page loads
sendVisitNotification();
