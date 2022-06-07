## Consulta valor do dólar

* Vite JS;
* JavaScript;
* React c/ TypeScript;
* Docker

### Init
criar image Docker
```
docker build -t walterpaulo/dolarhoje -f Dockerfile .
```

subir container Docker
```
docker run -d -p 4002:4173 --name dolarhoje walterpaulo/dolarhoje
```
*acesso em http://localhost:4002*

#### Camandos Essenciais Container

acessar
```
docker exec -it dolarhoje bash
```

parar
```
docker stop dolarhoje
```

iniciar
```
docker start dolarhoje
```

### Resultados

  <img src="./public/dolar-hoje-walterpaulo.jpg" targer="_blank" alt="Dolar hoje" height="auto"/> 

### 


<img src="./public/dolar-hoje-walter.gif" targer="_blank" alt="Dolar hoje" height="auto"/> 
