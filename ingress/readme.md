# Ingress 
####  de ingresar xd

- Es posible acceder a los servicios del cluster a través de los puertos del nodo, pero no es la vía recomendada.
- Imagine que tuviese que habilitar uno o varios puertos en el nodo para cada aplicación desplegada. Notaría de forma inmediata que las configuraciones y el mantenimiento de los servicios se volverán tediosos, complejos y difíciles.
- En lugar de utilizar los puertos del nodo para acceder a las aplicaciones, se deben utilizar los nombres de dominio. Los nombres de dominio van a permitir el acceso a los sistemas a través de un nombre lógico sin necesidad de conocer el IP o puerto donde esté configurado. A través de un dominio el cliente tendrá la posibilidad de acceder a una o varias aplicaciones según sea el caso.
- Kubernetes no se encuentra ajeno a este beneficio y por lo tanto, ha diseñado el controlador Ingress.
- Ingress será el controlador encargado de habilitar las siguientes funcionalidades en la plataforma:
  balanceo de carga, terminación SSL y gestión de servicios basados en nombres de dominio.
- Este controlador es la puerta de entrada para todos los servicios del cluster. En esta puerta estarán registrados los nombres de dominio, los enlaces hacia las aplicaciones y las configuraciones de seguridad. Esta pieza será la que esté expuesta a posibles ataques cibernéticos y por tal motivo, es fundamental prestar atención a su configuración y a cómo protegerla.


## Controladres de Ingress
- **Nginx**
- **Traefik**
- **Istio**


### Manos al higado

- Cargamos toda la configuracion
```shell
kubectl apply -f .
```
- Listamos todos los namespace
```shell
kubectl get ns
```
- Listamos nuestro namespace
```shell
kubectl -n nginx-ingress get all
```

- seguir esta documentacion en microservicios/kube-manual
```shell
cd ../microservicios/kube-manual
``` 