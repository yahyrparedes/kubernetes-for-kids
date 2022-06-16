## Basic 04 DaemonSet  
 
## Daemon set: Ejecuta un POD en todos los nodos con los que cuentas

### Un poco de Teoria:

- Ha cambiado el api version
- El kind ahora es DaemonSet
- Aqui ya no se usa replicas si no que cada pod se ejecuta en cada nodo que tengamos
- **template** template que va usar nuestros PODS

**Recuersa que los cambios lo aplica al namespace por defecto**

### 1. Ejecutamos

`kubectl apply -f 04-daemonset.yml`

### 2. Listamos los pod's de manera inmediata

`kubectl get pods`
- Cuando listemos los podemos veremos tantos POD'S como nodos tengamos

### 3. Listamos los pod's con mas informacion

`kubectl get pods -o wide`
- Cuando listemos los podemos veremos tantos POD'S como nodos tengamos y obtenemos mas informacion sobre el nodo

### 4. Ahora eliminamos un POD

`kubectl delete pod nginx-deployment-746b7bf77b-5sjtd`

- Recuerden que ahora desplegamos deployments y no pods entonces ahora que eliminamos un POD VEAMOS COMO SE RECREA SOLO

### 5. Volvemos a listar los POD's

`kubectl get pods`
 - Como podemos observar seguimos teniendo los mismos POD's  por que el pod eliminado del node se volvio a recrear en el mismo node

