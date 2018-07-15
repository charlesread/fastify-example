This is a laughably simple fastify example, used mostly in testing my containerized computing stacks.

## Running the Node app directly

```bash
$ git clone git@github.com:charlesread/fastify-example.git
$ cd fastify-example/src
$ npm i
$ node index.js
$ curl <your-IP-address>:8080 # in another shell
# ==> {"address":"192.168.0.64","date":"2018-07-15T13:10:31.534Z"}
```

## Running the Node app in the supplied Docker container

```bash
$ git clone git@github.com:charlesread/fastify-example.git
$ cd fastify-example
$ ./run.sh
$ curl localhost:8080 # in another shell
# ==> {"address":"192.168.0.64","date":"2018-07-15T13:10:31.534Z"}
```
