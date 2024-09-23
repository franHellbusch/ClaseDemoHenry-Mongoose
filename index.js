import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3080;

// Middleware para registro de solicitudes HTTP
app.use(morgan("dev"));

// Ruta GET de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente!");
});

// Servidor escuchando en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el http://localhost:${PORT}`);
});
