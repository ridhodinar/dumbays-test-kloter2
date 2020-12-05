## Tech Stack yang digunakan

- Backend/server  : [Express](https://github.com/expressjs/express)
- Database        : [MySQL](https://www.mysql.com/)
- CSS Framework   : [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- Template Engine : [express-handlebars](https://github.com/ericf/express-handlebars)

## Menjalankan program

Repo ini menggunakan Node.js, pastikan Node.js sudah terinstall di mesin anda. Clone repo dan ketik dibawah ini dalam repo:

```sh
$ npm install
```

Untuk menjalankan setiap program .js, ketik:

```sh
$ node 1.js #ubah sesuai file .js yang ingin dijalankan
```

Untuk pengaturan database pada soal nomor 4, dapat dilakukan dengan kode di bawah ini dalam file 4.js

```js
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "frozen_food",
  password: ""
});
```
