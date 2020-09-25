### Running miniapp microservice application in kubernetes cluster using minikube.

**NOTE:** in order to run and build the container inside the kubernetes cluster you may have to run `eval $(minikube docker-env)`

- find the minikube ip using `$ minikube ip`
- then, setup the `host` file which redirects the minikube ip to our defined host in ingress-service.yaml file,
    - to find minikube ip `$ minikube ip` eg: 172.17.0.3
    - `$ nano /etc/hosts` and add
      ```
        # temperory - for kubernetes
        172.17.0.3 miniapp.com
      ```
- once all is done, run `$ skaffold dev` it will create all the deployments and services then you can assess it on your browser goto: `http://miniapp.com` it will take you to the cluster.
