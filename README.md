# microservice_design

## Local Setup
---
### Installing kubectl
source: https://kubernetes.io/docs/tasks/tools/install-kubectl/
```shell
$ curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
$ chmod +x ./kubectl
$ sudo mv ./kubectl /usr/local/bin/kubectl
```
OR
```shell
$ sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
$ echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
$ sudo apt-get update
$ sudo apt-get install -y kubectl
```

### Installing and setting up minikube
source: https://kubernetes.io/docs/tasks/tools/install-minikube/
```shell
$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube
$ sudo install minikube /usr/local/bin/
```
```shell
$ minikube start
```
Now, we should enable `ingress-nginx`
source: https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
```shell
$ minikube start
$ minikube addons enable ingress
```

### Installing and setting up skaffold
```shell
$ curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && sudo install skaffold /usr/local/bin/
```
