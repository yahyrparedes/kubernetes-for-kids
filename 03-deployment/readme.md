## Basic 03 Deployments

## No se depliegan pods si no deployments

### Un poco de Teoria:

- Ha cambiado el api version
- El kind ahora es deployment
- Contamos con spec donde definiremos la cantidad de replicas y el template
- **replicas** cantidad PODS que queremos en nuestro deployment
- **template** template que va usar nuestros PODS

**Recuersa que los cambios lo aplica al namespace por defecto**

### 1. Ejecutamos

`kubectl apply -f 03-deployment.yml`

### 2. Listamos los pod's de manera inmediata

`kubectl get pods`
<table style="width: 100%; text-align: center;">
  <tr>
    <td style="width: 33%;">NAME</td>
    <td style="width: 33%;">READY</td>
    <td style="width: 33%;">STATUS</td>
  </tr>
    <tr>
    <td style="width: 33%;">nginx-XX</td>
    <td style="width: 33%;">0/1</td>
    <td style="width: 33%;">ContainerCreating</td>
  </tr> 
    <tr>
    <td style="width: 33%;">nginx-XX</td>
    <td style="width: 33%;">0/1</td>
    <td style="width: 33%;">ContainerCreating</td>
  </tr>
</table> 

### 3. Luego de unos segundos puede ver que ya estan listos

`kubectl get pods`
<table style="width: 100%; text-align: center;">
  <tr>
    <td style="width: 33%;">NAME</td>
    <td style="width: 33%;">READY</td>
    <td style="width: 33%;">STATUS</td>
  </tr>
    <tr>
    <td style="width: 33%;">nginx-deployment-XX</td>
    <td style="width: 33%;">1/1</td>
    <td style="width: 33%;">Running</td>
  </tr> 
    <tr>
    <td style="width: 33%;">nginx-deployment-XX</td>
    <td style="width: 33%;">1/1</td>
    <td style="width: 33%;">Running</td>
  </tr>
</table> `

### 4. Ahora eliminamos un POD

`kubectl delete pod nginx-deployment-746b7bf77b-5sjtd`

- Recuerden que ahora desplegamos deployments y no pods entonces ahora que eliminamos un POD VEAMOS COMO SE RECREA SOLO

### 5. Volvemos a listar los POD's

`kubectl get pods`
 - Como podemos observar seguimos teniendo dos POD's 

### Siempre contare dos pods de este deployment

### 6. Listamos el deploy

`kubectl get deploy`

### 7. Detenemos el deploy

`kubectl delete deploy nginx-deployment`

