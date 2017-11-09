
import app from './app'
import { server } from './config'

app.listen(server.port, () => console.log(`Listening on port ${server.port}`))
