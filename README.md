This is a laughably simple fastify example, used mostly in testing my containerized computing stacks.

```bash
$ git clone git@github.com:charlesread/fastify-example.git
$ cd fastify-example
$ npm i
$ node index.js
$ curl <your-IP-address>:8080
# ==> {"address":"192.168.0.64","date":"2018-07-15T13:10:31.534Z"}
```