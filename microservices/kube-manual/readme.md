# create

1. Ejecutar el book deployment
```shell
kubectl apply -f book-deployment.yml
```
2. Ejecutar el book service
```shell
kubectl apply -f book-service.yml
```
3. Litamos todo
```shell
kubectl get all
```
4. Describimos un servicio para ver que ya va cogiendo las IP
```shell
kubectl describe service/hello-v1-svc
```
5. Ahora vamos a ejecutar el ingress
```shell
kubectl apply -f book-ingress.yml
```
6. Ahora vamos a listar las reglas de ingress
```shell
kubectl get ing
```