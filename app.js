import express from 'express'
const app = express()
const port = 3000
import{router} from  './routes/route.js'

app.use(express.json())
app.use('/api/v1',router)

app.listen(port, () => {
  console.log(`Server is running  on port ${port}`)
})