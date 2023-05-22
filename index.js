const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  const accountSid = "ACf535795a896b32a696022e8b95a64640";
  const authToken = "48cc864b2475769f09935a62bc97b9dd";
  const client = require("twilio")(accountSid, authToken);

  var ss = await client.messages.create({
    body: "Your appointment is coming up on July 21 at 3PM",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+51951954633",
  });

  console.log(ss);
  res.status(200).json({ ok: true, msg: "test" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
