
# Ticketing application
```shell
$ mkdir ticketing
$ cd ticketing
```

## Auth application
```shell
$ mkdir auth && cd auth
$ npm init -y
$ npm install typescript ts-node-dev express @types/express --save
$ tsc --init
```
build the image of auth application
```shell
$ docker build -t themrinalsinha/
```
to run the application
```shell
$ skaffold dev
```
add `ticketing.local` to you /ets/hosts file
then, access the only configured URL:
http://ticketing.local/api/users/current
