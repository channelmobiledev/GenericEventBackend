import app from "./app";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
