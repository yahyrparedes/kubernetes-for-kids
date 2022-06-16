## Create container kubernetes

### Test docker-compose

- Para la primera prueba se recomienda que la propiedad **image** este comentada   

`$ docker-compose up -d`



- convert docker-compose.yml to kubernetes using **kompose**

$ kompose convert -f  docker-compose.yml



$ kubectl get pods


kubectl apply -f ms-book-networkpolicy.yaml
kubectl apply -f challenge-deployment.yaml
kubectl apply -f challenge-service.yaml
kubectl apply -f user-deployment.yaml
kubectl apply -f user-service.yaml




kubectl get all

kubectl 




