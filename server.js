const app = require("./src/app")
const PORT = process.env.PORT || 8000


app.listen(PORT, () => console.log(`porta rodando ${PORT}`))