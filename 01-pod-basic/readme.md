## Basic 01 POD

**Recuersa que los cambios lo aplica al namespace por defecto**

### 1. Creamos el pod

`kubectl apply -f 01-pod.yml`

### 2. Listamos los pod's

`kubectl get pods`

### 3. Listamos los pod's con un extra de información 

`kubectl get pods -o wide`

### 4. Vamos a conectarnos al pod al mismo estilo que en docker

`kubectl exec -it nginx -- sh`

### 5. vamos a matar el pod

`kubectl delete pod nginx` 
 
