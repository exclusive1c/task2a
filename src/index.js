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

app.get('/task2b', (req, res) => {
  const fullname   = req.query.fullname;
  const fio_n      = fullname.substring(0, fullname.indexOf(' '));
  const fio_n_r = fio_n[0] + '.';

  const name2 = fullname.substring(fullname.indexOf(' ')+1);

  const fio_o = name2.substring(0, name2.indexOf(' '));
  const fio_o_r = fio_o[0] +'.';
  const fio_f = name2.substring(name2.indexOf(' ')+1);

  const fio_result3 = fio_f;
  const fio_result2 = fio_f +' ' + fio_n_r;
  const fio_result = fio_f +' ' + fio_n_r + ' '+fio_o_r;

  if(fio_f.indexOf(' ') == -1)
  {
    if(!fio_n){
      res.send(fio_result3);
      return;

    }

    if(!fio_o) {
          res.send(fio_result2);
        }
        else {
          res.send(fio_result);
        }
  }
  else
  {
    res.send("Invalid fullname");
  }
/*

  res.json({
    name1: fio_n,
    name2: fio_n_r,
    second: name2,
    otch1: fio_o,
    otch2: fio_o_r,
    name4: fio_f
  })
*/
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
