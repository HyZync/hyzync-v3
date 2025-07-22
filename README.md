# Customer Retention Agent

A Node.js application using the Okibi SDK to implement an AI agent specialized in customer retention. It applies loyalty program strategies via social media outreach to customer segments to achieve a 50% response rate KPI.

## Features

- Uses Okibi SDK to create an AI agent
- Defines a custom tool to apply loyalty program strategies
- Exposes `/execute` HTTP endpoint and WebSocket via `AgentServer`
- Environment-driven configuration via `.env`

## Prerequisites

- Node.js v16 or higher
- An Okibi API key
- A model provider API key (e.g., OpenAI)

## Setup

1. Clone the repository
2. Install dependencies:
      npm install
   3. Create a `.env` file in the project root:
      OKIBI_API_KEY=your_okibi_api_key_here
   MODEL_API_KEY=your_model_api_key_here
   
## Scripts

- `npm run dev` - Start in development mode with automatic reload
- `npm run build` - Compile TypeScript to JavaScript in `dist/`
- `npm run start` - Run the compiled production build

## Usage

Start the server:

npm run dev

Send a POST request to the `/execute` endpoint:

curl -X POST http://localhost:80/execute \
  -H "Content-Type: application/json" \
  -d '{"query":"Apply loyalty program to high churn probability segment"}'

## Examples

Below are sample requests to interact with the agent server

### HTTP POST

curl -X POST http://localhost:80/execute \
  -H "Content-Type: application/json" \
  -d '{
    "query": "For userId: '1234', predict churn risk, segment them, generate a personalized outreach message, deliver via social media, track performance with actionId:'act1', and adapt strategy for 'act1'"
  }'

### WebSocket

You can connect via WebSocket to send and receive real-time messages:

# using wscat
wscat -c ws://localhost:80
> { "type": "execute", "query": "For userId:'1234', predict churn risk and apply loyalty program via social media for high churn risk segment" }
< { "type": "execution_response", "response": "...", "executionId": "..." }

## License

MIT