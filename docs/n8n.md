# n8n Webhook

**Production URL:** `https://1524-747.n8nbysnbd.top/webhook/9f0bb592-049f-401a-bc37-558bf62ab01c`

## Usage

Contact form in `src/Components/contact.jsx` POSTs to this webhook via `VITE_N8N_WEBHOOK_URL` env variable.

### Payload

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "businessType": "string",
  "services": "string",
  "message": "string"
}
```

### Env config

Set `VITE_N8N_WEBHOOK_URL` in `twobotagency/.env`.
