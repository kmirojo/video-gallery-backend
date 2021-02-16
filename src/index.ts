import app from "./app";
import "./database";

const PORT = app.get("PORT");

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});
