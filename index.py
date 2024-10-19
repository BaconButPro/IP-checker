import requests
from flask import Flask, request

app = Flask(__name__)

# Your Discord webhook URL
WEBHOOK_URL = "https://discord.com/api/webhooks/1297195794776064115/26b8kyFlVOcQ1JTnK8d5iWRiZN0VvtdFfn2fuszW9ilcvdagY-O0cyNM4wjf8lfkF1az"

@app.route('/')
def log_ip():
    # Get the IP of the requester
    client_ip = request.remote_addr
    
    # Log to Discord webhook
    data = {
        "content": f"New request from IP: {client_ip}"
    }
    
    # Send the request to the Discord webhook
    response = requests.post(WEBHOOK_URL, json=data)
    
    # Check if the webhook succeeded
    if response.status_code == 204:
        return f"IP {client_ip} logged successfully!"
    else:
        return f"Failed to log IP. Status code: {response.status_code}"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
