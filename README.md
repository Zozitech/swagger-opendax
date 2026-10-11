# KpowBIT Exchange API Template

Swagger UI documentation template based on the supplied OpenDAX/Peatio Swagger specification.

## Included
- Swagger UI React application
- OpenAPI 3.0.1 specification at `public/swagger.json`
- 44 existing endpoint paths retained from the supplied specification
- Grouped Swagger tags for public market data, accounts/wallet, trading, and market-data integrations
- Dockerfile and Docker Compose configuration

## Configure the API base URL
Edit `servers[0].url` in **both** `public/swagger.json` and `build/swagger.json` if you want to point the docs at another environment. Current value:
`https://trade.kpowbit.com/rest/core`

If using the React development server, `public/swagger.json` is loaded. The `build/swagger.json` copy is kept aligned for the included prebuilt output.

## Run locally
Requirements: Node.js and npm/yarn compatible with this legacy Create React App project.

```bash
npm install
npm start
```

## Build
```bash
npm run build
```

## Run with Docker
```bash
docker build -t kpowbit-api-template:1.0.0 .
docker run --rm -p 8000:8080 kpowbit-api-template:1.0.0
```
Open `http://localhost:8000`.

## Important before production
This is an API **documentation/UI template**, not a new backend implementation. It does not create or change API behavior on the exchange server. The endpoints and schemas are inherited from the provided specification. Before publishing, verify:
- Authentication/security requirements and signed-request format
- Actual response/request schemas and required parameters
- Withdrawal, beneficiary, and account permissions
- CORS, rate limits, and API versioning
- That the documented server URL matches the intended environment

Do not expose private API credentials in Swagger examples or commit them to source control.
