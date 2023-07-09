import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { html } from 'hono/html'

const app = new Hono()

app.get('/images/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  c.header('Link', '</images/cloudflare.png>; rel=preload; as=image')
  return c.html(html` <html>
    <body>
      <h1>Hello!</h1>
      <img src="/images/cloudflare.png" width="300" />
    </body>
  </html>`)
})

export default app
