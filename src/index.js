import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World132',
  });
});

app.get('/task2a', (req, res) => {
  const summa = (+req.query.a || 0) + (+req.query.b ||0);
  res.send(summa.toString());
});
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
