const express=  require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use('/user', userRouter)
app.use('/note', noteRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log('Server started on server 4000')
})
