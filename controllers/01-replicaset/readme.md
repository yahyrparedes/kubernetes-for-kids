## Basic 01 ReplicaSet

**Su objetivo es el de mantener un conjunto estable de réplicas de Pods ejecutándose en todo momento**

### Un poco de Teoria:

- Ha cambiado el api version
- El kind ahora es replicaSet
- Contamos con spec donde definiremos la cantidad de replicas y el template
- **replicas** cantidad PODS que queremos
- **template** template que va usar nuestros PODS

**Recuersa que los cambios lo aplica al namespace por defecto**

### 1. Ejecutamos

`kubectl apply -f 01-replicaset.yml`

### 2. Listamos los pod's 

`kubectl get pods`

### 3. Luego de unos segundos puede ver que ya estan listos

`kubectl get pods` 

### 4. Ahora eliminamos un POD

`kubectl delete pod nginx-replicaset-746b7bf77b-5sjtd`

### 5. Volvemos a listar los POD's

`kubectl get pods`
 - Como podemos observar seguimos teniendo tres POD's

### 6. Listamos la replica-set

`kubectl get rs`

### 7. Haremos un scaling por consola

`kubectl scale replicaset nginx-replicaset --replicas=5`


### 8. Detenemos la replica-set

`kubectl delete rs nginx-replicaset`

