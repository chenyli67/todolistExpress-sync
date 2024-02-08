import express from 'express'
const app = express()
const port = 3000
import{router} from  './route.js'

app.use(express.json())
app.use('/api/v3',router)

app.listen(port, () => {
  console.log(`Server is running  on port ${port}`)
})