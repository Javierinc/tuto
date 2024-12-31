"use strict";(self.webpackChunklecciones_docker=self.webpackChunklecciones_docker||[]).push([[236],{8170:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorial-docker/docker-compose","title":"8. Docker Compose \ud83d\udc19","description":"\xbfQu\xe9 es docker compose y para qu\xe9 sirve?","source":"@site/docs/tutorial-docker/docker-compose.md","sourceDirName":"tutorial-docker","slug":"/tutorial-docker/docker-compose","permalink":"/tuto/docs/tutorial-docker/docker-compose","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-docker/docker-compose.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"7. Variables de Entorno y Vol\xfamenes","permalink":"/tuto/docs/tutorial-docker/ejemplo2"},"next":{"title":"8. No es un Adi\xf3s es un Hasta Pronto \ud83d\udc4b","permalink":"/tuto/docs/tutorial-docker/despedida"}}');var r=o(4848),c=o(8453);const i={sidebar_position:7},a="8. Docker Compose \ud83d\udc19",d={},l=[{value:"<strong>\xbfQu\xe9 es docker compose y para qu\xe9 sirve?</strong>",id:"qu\xe9-es-docker-compose-y-para-qu\xe9-sirve",level:3},{value:"<strong>Beneficios de Usar Docker Compose</strong>",id:"beneficios-de-usar-docker-compose",level:3},{value:"<strong>\xbfPor qu\xe9 usar docker compose con nuestras apps?</strong>",id:"por-qu\xe9-usar-docker-compose-con-nuestras-apps",level:3},{value:"Creando el docker-compose",id:"creando-el-docker-compose",level:3},{value:"Configurando el docker-compose",id:"configurando-el-docker-compose",level:3},{value:"Corramos junto a docker-compose",id:"corramos-junto-a-docker-compose",level:3},{value:"<strong>Beneficios espec\xedficos para este proyecto</strong>",id:"beneficios-espec\xedficos-para-este-proyecto",level:3},{value:"<strong>Resumiendo...</strong>",id:"resumiendo",level:3}];function t(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"8-docker-compose-",children:"8. Docker Compose \ud83d\udc19"})}),"\n",(0,r.jsx)(n.h3,{id:"qu\xe9-es-docker-compose-y-para-qu\xe9-sirve",children:(0,r.jsx)(n.strong,{children:"\xbfQu\xe9 es docker compose y para qu\xe9 sirve?"})}),"\n",(0,r.jsxs)(n.p,{children:["Docker Compose es una herramienta que nos permite definir y manejar m\xfaltiples contenedores Docker como una \xfanica aplicaci\xf3n. En lugar de correr cada contenedor manualmente con comandos largos, puedes configurar todos tus servicios (contenedores) en un solo archivo YAML (",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),") y ejecutarlos juntos con un solo comando."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"beneficios-de-usar-docker-compose",children:(0,r.jsx)(n.strong,{children:"Beneficios de Usar Docker Compose"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Simplicidad y organizaci\xf3n:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Todos los servicios est\xe1n definidos en un \xfanico archivo."}),"\n",(0,r.jsx)(n.li,{children:"F\xe1cil de leer y entender, especialmente en proyectos con varios contenedores."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Automatizaci\xf3n:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Puedes iniciar, detener y reiniciar todos los servicios con un solo comando."}),"\n",(0,r.jsx)(n.li,{children:"Define relaciones entre los servicios, como cu\xe1l debe iniciarse primero."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Consistencia:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Todos los miembros del equipo utilizan la misma configuraci\xf3n."}),"\n",(0,r.jsxs)(n.li,{children:["No necesitas recordar largos comandos ",(0,r.jsx)(n.code,{children:"docker run"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compartir recursos:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Los contenedores pueden compartir vol\xfamenes y redes, facilitando la comunicaci\xf3n y el intercambio de datos."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"por-qu\xe9-usar-docker-compose-con-nuestras-apps",children:(0,r.jsx)(n.strong,{children:"\xbfPor qu\xe9 usar docker compose con nuestras apps?"})}),"\n",(0,r.jsxs)(n.p,{children:["En nuestro caso, tenemos dos aplicaciones, ",(0,r.jsx)(n.code,{children:"app1"})," y ",(0,r.jsx)(n.code,{children:"app2"}),", que trabajan juntas:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"app1"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Genera bromas de Chuck Norris usando una API y las guarda en un archivo ",(0,r.jsx)(n.code,{children:"jokes.txt"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Este archivo se guarda en un volumen compartido (",(0,r.jsx)(n.code,{children:"data"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"app2"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Lee las bromas de ",(0,r.jsx)(n.code,{children:"jokes.txt"})," y las combina con im\xe1genes de personajes de Rick and Morty."]}),"\n",(0,r.jsx)(n.li,{children:"Muestra todo esto en un sitio web estilo Bootstrap."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Docker Compose simplifica la forma en que estas dos aplicaciones trabajan juntas. Veamos por qu\xe9:"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"creando-el-docker-compose",children:"Creando el docker-compose"}),"\n",(0,r.jsxs)(n.p,{children:["En el mismo directorio docker-tutorial que utilizamos la lecci\xf3n anterior, debes crear el archivo llamada ",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),"\nAsegurate que quede en el mismo nivel que est\xe1n ",(0,r.jsx)(n.code,{children:"app1"}),", ",(0,r.jsx)(n.code,{children:"app2"}),", y ",(0,r.jsx)(n.code,{children:"data"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-tutorial/\n\u251c\u2500\u2500 app1/               \n\u2502   \u251c\u2500\u2500 app.py\n\u2502   \u251c\u2500\u2500 requirements.txt\n\u2502   \u251c\u2500\u2500 Dockerfile\n|\u2500\u2500 data/\n\u251c\u2500\u2500 app2/               \n\u2502   \u251c\u2500\u2500 app.py\n\u2502   \u251c\u2500\u2500 requirements.txt\n\u2502   \u251c\u2500\u2500 Dockerfile\n\u2502   \u251c\u2500\u2500 static/\n\u2502       \u251c\u2500\u2500 style.css\n\u251c\u2500\u2500 docker-compose.yml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configurando-el-docker-compose",children:"Configurando el docker-compose"}),"\n",(0,r.jsxs)(n.p,{children:["Abre con el editor el archivo ",(0,r.jsx)(n.code,{children:"docker-compose.yml"}),", copia la configuraci\xf3n que est\xe1 a continuaci\xf3n y pegala en el archivo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"services:\n  app1:\n    image: chuck_norris_generator\n    build:\n      context: ./app1\n    environment:\n      - API_URL=https://api.chucknorris.io/jokes/random\n    volumes:\n      - ./data:/app/data  # Monta la carpeta 'data' del host en '/app/data' en el contenedor\n    restart: always\n\n  app2:\n    image: chuck_norris_web\n    build:\n      context: ./app2\n    environment:\n      - API_URL=https://rickandmortyapi.com/api/character\n    ports:\n      - \"8081:5000\"\n    volumes:\n      - ./data:/app/data  # Monta la carpeta 'data' del host en '/app/data' en el contenedor\n    depends_on:\n      - app1  # Asegura que 'app1' se inicie antes de 'app2'\n    restart: always\n"})}),"\n",(0,r.jsx)(n.h3,{id:"corramos-junto-a-docker-compose",children:"Corramos junto a docker-compose"}),"\n",(0,r.jsxs)(n.p,{children:["Abre una terminal y dirigete a docker-tutorial, y ejecuta el comando ",(0,r.jsx)(n.code,{children:"docker-compose up --build"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd docker-turorial\ndocker-compose up --build\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si toda va bien deber\xedas ver como se est\xe1n iniciando los contenedores con las dos apps."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"compose",src:o(4584).A+"",width:"1332",height:"1648"})}),"\n",(0,r.jsxs)(n.p,{children:["Si abres docker desktop deber\xedas tener un contenedor llamado ",(0,r.jsx)(n.code,{children:"docker-tutorial"}),"y si le das click deber\xedas ver la orquestaci\xf3n de los dos contenedores"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"desktop",src:o(3324).A+"",width:"2918",height:"1644"})}),"\n",(0,r.jsx)(n.p,{children:"Ahora si ingresas al localhost:8081 en tu navegador deber\xedas ver la app funcionando."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"navegador compose",src:o(4627).A+"",width:"2066",height:"1646"})}),"\n",(0,r.jsx)(n.h3,{id:"beneficios-espec\xedficos-para-este-proyecto",children:(0,r.jsx)(n.strong,{children:"Beneficios espec\xedficos para este proyecto"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Orquestaci\xf3n de ",(0,r.jsx)(n.code,{children:"app1"})," y ",(0,r.jsx)(n.code,{children:"app2"}),":"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Con ",(0,r.jsx)(n.code,{children:"depends_on"}),", nos aseguramos de que ",(0,r.jsx)(n.code,{children:"app1"})," (el generador de bromas) se inicie antes que ",(0,r.jsx)(n.code,{children:"app2"})," (el visualizador de bromas e im\xe1genes)."]}),"\n",(0,r.jsx)(n.li,{children:"Esto evita errores de sincronizaci\xf3n."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Volumen compartido (",(0,r.jsx)(n.code,{children:"data"}),"):"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ambos contenedores comparten el volumen ",(0,r.jsx)(n.code,{children:"data"})," para leer y escribir las bromas."]}),"\n",(0,r.jsx)(n.li,{children:"Con docker compose, este volumen se configura f\xe1cilmente en el archivo YAML."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Gesti\xf3n de Variables de Entorno:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cada app recibe la URL de su respectiva API (",(0,r.jsx)(n.code,{children:"Chuck Norris"})," para ",(0,r.jsx)(n.code,{children:"app1"})," y ",(0,r.jsx)(n.code,{children:"Rick and Morty"})," para ",(0,r.jsx)(n.code,{children:"app2"}),") a trav\xe9s de variables de entorno."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Facilidad para probar y reiniciar:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si algo falla, puedes detener y reiniciar todo con:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose down\ndocker-compose up\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Compatibilidad de puertos:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app2"})," expone su contenido en el puerto 8081 para acceder al sitio web."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"resumiendo",children:(0,r.jsx)(n.strong,{children:"Resumiendo..."})}),"\n",(0,r.jsxs)(n.p,{children:["Usar Docker Compose con ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"app1"})})," y ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"app2"})})," nos permite:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ejecutar ambas aplicaciones juntas con un solo comando."}),"\n",(0,r.jsx)(n.li,{children:"Compartir datos entre los contenedores de manera eficiente."}),"\n",(0,r.jsxs)(n.li,{children:["Asegurar que ",(0,r.jsx)(n.code,{children:"app2"})," no intente funcionar hasta que ",(0,r.jsx)(n.code,{children:"app1"})," haya comenzado a generar datos."]}),"\n",(0,r.jsx)(n.li,{children:"Hacer nuestro entorno m\xe1s f\xe1cil de manejar y reproducir."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Docker compose no solo simplifica el trabajo, sino que tambi\xe9n muestra el poder de la orquestaci\xf3n y la modularidad en proyectos Docker. \ud83d\ude80"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},4584:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/compose-4de93970a4c70901fdbd125f794fe740.png"},3324:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/desktop-4960b08f8cb47d3e7a66a456c46413f3.png"},4627:(e,n,o)=>{o.d(n,{A:()=>s});const s=o.p+"assets/images/navegador compose-ef6dcb945f471b03965f24597a61b117.png"},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var s=o(6540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);