# Services - Servicios

- Las aplicaciones que están en funcionamiento dentro del cluster necesitan comunicarse. La comunicación puede ser entre microservicios dentro del cluster o desde clientes externos, pero en ambos casos, el destino será un Pod.

**La estructura necesaria para crear un objeto Service es la siguiente:**
```yaml
apiVersion: v1 
kind: Service 
metadata:
  name: server 
  labels:
    app: server 
spec:
  type: ClusterIP
  selector:
    app: server
  ports:
  - port: 8000 
  - protocol: TCP 
  - targetPort: http
```

### Tipos de servicios
- **ClusterIP** 
- **NodePort**
- **LoadBalancer** ( No será analizado porque resulta complejo simularlos en entorno local.)
- **ExternalName** ( No será analizado porque resulta complejo simularlos en entorno local.)
