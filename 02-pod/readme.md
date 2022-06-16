## Basic 02 POD

### Un poco de Teoria:

- Recuerda que el nombre del pod es requerido
- En nuestros contenedores podemos trabajar con variables de entorno que pueden ser fijas o que se pueden heredar del contenedor como la IP
- Se pueden asignar recursos por contenedor y no por POD
- Si quieres puedes correr dos contenedores en un pod
- Request: Recursos que siempre vamos a garantizar que siempre va tener disponible
- Limits: Limite que el pod puede llegar a usar
- **readinessProbe**: Nos indica que esta listo para recibir trafico
- **livenessProbe**: Nos indica que la app esta vivo pero le debe mandar trafico


**Recuersa que los cambios lo aplica al namespace por defecto**

### 1. Creamos el pod

`kubectl apply -f 02-pod.yml`

### 2. Listamos los pod's Ready 1/1

`kubectl get pods` 

### 3. Mostrar toda la informacion del POD

`kubectl get pod nginx -o yml `

### 3. Eliminamos el POD

`kubectl delete pod nginx`

