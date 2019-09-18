const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const { Message } = require('./database')

const app = new Koa()
const router = new Router()

router.get('/messages', async (ctx) => {
  const messages = await Message.find()

  ctx.status = 200
  ctx.body = messages.map(({ text }) => ({
    message: text,
  }))
})

router.post('/messages', async (ctx) => {
  const message = await Message.create({
    text: ctx.request.body.message,
  })

  ctx.status = 200
  ctx.body = {
    message: message.text,
  }
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
