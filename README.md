# Master Projetos

![home.png](/home/cristiano/Imagens/Prints/master-project/home.png)

> Aqui você poderá gerenciar seus projetos de forma escalável e controlar os serviços dele

## Criação do projeto

```bash
npx create-react-app master-project
```


![estrutura-inicial.png](/home/cristiano/Imagens/Prints/master-project/estrutura-inicial.png)

### Instalado bibliotecas

```bash
npm install json-server react-icons react-router-dom uuid
```

-  **json-server**: será responsável pelo o back-end "fake", onde irá receber e enviar dados da API;

- **react-icons**: é uma biblioteca com vários ícones para usar no projeto de forma grátis;

- **react-router-dom**: é a biblioteca padrão para que consiga fazer o roteamento das páginas de forma que a aplicação seja dinâmica;

- **uuid**: é um identificar exclusivo e único para;

Depois da instalação das bibliotecas fazer uma limpeza no projeto

![limpeza.png](/home/cristiano/Imagens/Prints/master-project/limpeza.png)

### Adicionando imagens do projeto

* Criar uma pasta dentro de **src** com nome **img** e nela colocar as imagens do prjeto

* Dentro da pasta **public** excluir o `favicon.ico` e adicionar o `favicon.ico` do logo do projeto

![estrutura-alterada.png](/home/cristiano/Imagens/Prints/master-project/estrutura-alterada.png)



## Criando o Back-End com Json

* Na raiz do projeto criar um arquivo `db.json` com a seguinte estrutura:

```json
{
    "projects": [],
    "categories": [{
            "id": 1,
            "name": "Infra"
        },
        {
            "id": 2,
            "name": "Desenvolvimento"
        },
        {
            "id": 3,
            "name": "Design"
        },
        {
            "id": 4,
            "name": "Planejamento"
        }
    ]
}
```

* Em `package.json` criar um novo script para acessa a API:

```json
"backend": "json-server --watch db.json --port 5000",
```

* Na qual o `watch` estará monitorando as mudanças no projeto e `--port 5000` será a nova porta que irá abri

*  No browser abri o endereço <a href="http://localhost:5000/categories" target="_blank">http://localhost:5000/categories</a>


#### Observação: 

Projeto todo criando baseado em componentes, não estará sendo informado nesse `README.md` o passo-a-passo de criação de cada parte, mas sim já implementado. 
