"use strict";(self.webpackChunklecciones_docker=self.webpackChunklecciones_docker||[]).push([[808],{3130:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tutorial-docker/contenedores","title":"2. Los Contenedores \ud83d\udce6","description":"Contenedores \ud83d\udc69\u200d\ud83d\ude80","source":"@site/docs/tutorial-docker/contenedores.md","sourceDirName":"tutorial-docker","slug":"/tutorial-docker/contenedores","permalink":"/tuto/docs/tutorial-docker/contenedores","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-docker/contenedores.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"1. La Virtualizaci\xf3n \ud83d\udc69\u200d\ud83d\udcbb","permalink":"/tuto/docs/tutorial-docker/virtualizacion"},"next":{"title":"3. Instalaci\xf3n de Docker \ud83d\udc33","permalink":"/tuto/docs/tutorial-docker/instalacion"}}');var a=s(4848),r=s(8453);const i={sidebar_position:2},t="2. Los Contenedores \ud83d\udce6",c={},l=[{value:"Contenedores \ud83d\udc69\u200d\ud83d\ude80",id:"contenedores-",level:2},{value:"\xbfQu\xe9 son los contenedores?",id:"qu\xe9-son-los-contenedores",level:3},{value:"Diferencias clave: contenedores vs m\xe1quinas virtuales",id:"diferencias-clave-contenedores-vs-m\xe1quinas-virtuales",level:2},{value:"Virtualizaci\xf3n y Arquitectura",id:"virtualizaci\xf3n-y-arquitectura",level:3},{value:"Tecnolog\xeda principal",id:"tecnolog\xeda-principal",level:3},{value:"Tama\xf1o y uso de recursos",id:"tama\xf1o-y-uso-de-recursos",level:3},{value:"Ventajas en el mundo real",id:"ventajas-en-el-mundo-real",level:3},{value:"Casos en los que los contenedores son \xfatiles",id:"casos-en-los-que-los-contenedores-son-\xfatiles",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"2-los-contenedores-",children:"2. Los Contenedores \ud83d\udce6"})}),"\n",(0,a.jsx)(n.h2,{id:"contenedores-",children:"Contenedores \ud83d\udc69\u200d\ud83d\ude80"}),"\n",(0,a.jsxs)(n.p,{children:["Probablemente hayas o\xeddo en alg\xfan momento hablar de Docker (no nos referimos a la marca de ropa), lanzado en 2013 por la empresa del mismo nombre, r\xe1pidamente se ha convertido en una de las tecnolog\xedas m\xe1s populares en la inform\xe1tica. ",(0,a.jsx)(n.strong,{children:"Los contenedores no surgen con Docker"}),", sino que mucho antes con tecnolog\xedas que permiten la virtualizaci\xf3n a nivel de sistema operativo como Linux Containers, LXC."]}),"\n",(0,a.jsx)(n.h3,{id:"qu\xe9-son-los-contenedores",children:"\xbfQu\xe9 son los contenedores?"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Los contenedores son como peque\xf1as c\xe1psulas"})," dise\xf1adas para que las ",(0,a.jsx)(n.strong,{children:"aplicaciones puedan ejecutarse de manera predecible y repetible, sin importar el entorno en el que se encuentren"}),". Tal como un traje espacial protege a un astronauta \ud83d\udc69\u200d\ud83d\ude80 para que pueda sobrevivir en cualquier planeta sin necesidad de recrear toda la atm\xf3sfera de la Tierra \ud83c\udf0e, un contenedor ",(0,a.jsx)(n.strong,{children:"encapsula una aplicaci\xf3n junto con todas sus dependencias (bibliotecas, configuraciones y archivos necesarios) en un entorno aislado"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Esto ",(0,a.jsx)(n.strong,{children:"garantiza que la aplicaci\xf3n funcione de la misma forma en el entorno de desarrollo, pruebas o producci\xf3n"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"A diferencia de las m\xe1quinas virtuales"}),", que requieren un sistema operativo completo para cada instancia, ",(0,a.jsx)(n.strong,{children:"los contenedores utilizan tecnolog\xedas de virtualizaci\xf3n m\xe1s ligeras"})," que funcionan a nivel del sistema operativo. Esto significa que todos los ",(0,a.jsx)(n.strong,{children:"contenedores comparten el mismo n\xfacleo del sistema operativo"})," subyacente, el mismo kernel, ",(0,a.jsx)(n.strong,{children:"pero cada uno tiene su propio sistema de archivos, librer\xedas y configuraciones"}),", lo que los hace independientes entre s\xed."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\xbfPor qu\xe9 esto es importante?"})}),"\n",(0,a.jsxs)(n.p,{children:["Porque los contenedores no solo hacen que las aplicaciones sean ",(0,a.jsx)(n.strong,{children:"f\xe1ciles de mover entre diferentes entornos"}),", sino que ",(0,a.jsx)(n.strong,{children:"tambi\xe9n optimizan el uso de recursos del sistema, permitiendo que m\xfaltiples contenedores se ejecuten en el mismo servidor de manera eficiente"}),". Adem\xe1s, su p",(0,a.jsx)(n.strong,{children:"ortabilidad y escalabilidad hacen que sean ideales para manejar cargas de trabajo variables"}),", garantizando que tus aplicaciones est\xe9n listas para enfrentar cualquier desaf\xedo."]}),"\n",(0,a.jsx)(n.h2,{id:"diferencias-clave-contenedores-vs-m\xe1quinas-virtuales",children:"Diferencias clave: contenedores vs m\xe1quinas virtuales"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Imagen M\xe1quinas Virtuales vs Contenedores",src:s(1123).A+"",width:"1400",height:"724"})}),"\n",(0,a.jsx)(n.p,{children:"Cuando hablamos de contenedores y m\xe1quinas virtuales, nos referimos a dos tecnolog\xedas de virtualizaci\xf3n que permiten ejecutar m\xfaltiples aplicaciones en un mismo servidor f\xedsico. Sin embargo, sus diferencias son fundamentales y radican en c\xf3mo manejan la virtualizaci\xf3n, el uso de recursos y su arquitectura."}),"\n",(0,a.jsx)(n.p,{children:"Entonces veamos ahora algunas diferencias entre estas tecnolog\xedas"}),"\n",(0,a.jsx)(n.h3,{id:"virtualizaci\xf3n-y-arquitectura",children:"Virtualizaci\xf3n y Arquitectura"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Como ya vimos, las m\xe1quinas virtuales (VMs) emulan un hardware completo, incluido un sistema operativo (guest). Esto significa que cada VM act\xfaa como si fuera un computador completo y separado, gestionado por el hipervisor, que coordina los recursos del servidor f\xedsico (host)."}),"\n",(0,a.jsx)(n.li,{children:"Por otro lado, los contenedores virtualizan el sistema operativo en lugar del hardware. En lugar de duplicar sistemas operativos completos, comparten el n\xfacleo del sistema operativo subyacente y a\xedslan cada aplicaci\xf3n en su propio entorno. Esto los hace m\xe1s ligeros y r\xe1pidos que las m\xe1quinas virtuales."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"tecnolog\xeda-principal",children:"Tecnolog\xeda principal"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las VMs dependen de hipervisores, que gestionan el acceso entre el sistema operativo invitado y el sistema operativo host. Este enfoque es robusto, pero introduce una mayor sobrecarga en t\xe9rminos de rendimiento y uso de recursos."}),"\n",(0,a.jsx)(n.li,{children:"Los contenedores, en cambio, utilizan un motor de contenedores o un run-time (como Docker). Este software act\xfaa como intermediario, proporcionando y gestionando los recursos necesarios para que las aplicaciones funcionen de manera eficiente."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"tama\xf1o-y-uso-de-recursos",children:"Tama\xf1o y uso de recursos"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las m\xe1quinas virtuales suelen ser pesadas: sus archivos de imagen ocupan varios gigabytes, ya que incluyen un sistema operativo completo. Esto las hace ideales para escenarios donde se requiere emular hardware completo o ejecutar sistemas heterog\xe9neos."}),"\n",(0,a.jsx)(n.li,{children:"Los contenedores, por su parte, son mucho m\xe1s ligeros, con tama\xf1os en el rango de megabytes, ya que solo contienen los archivos y configuraciones necesarios para ejecutar una aplicaci\xf3n espec\xedfica. Esto permite ejecutar muchos m\xe1s contenedores en el mismo hardware en comparaci\xf3n con VMs."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"ventajas-en-el-mundo-real",children:"Ventajas en el mundo real"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Las m\xe1quinas virtuales ofrecen un aislamiento total, siendo ideales para ejecutar aplicaciones que requieren un entorno completamente independiente o para replicar infraestructuras complejas (servidores, redes, bases de datos)."}),"\n",(0,a.jsx)(n.li,{children:"Los contenedores son perfectos para aplicaciones modernas que necesitan rapidez, escalabilidad y eficiencia, ya que inician en segundos y aprovechan mejor los recursos del hardware."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"casos-en-los-que-los-contenedores-son-\xfatiles",children:"Casos en los que los contenedores son \xfatiles"}),"\n",(0,a.jsx)(n.p,{children:"Los contenedores tienen una amplia gama de aplicaciones. Entre los usos m\xe1s frecuentes se encuentran:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creaci\xf3n y pruebas de software"}),"\n",(0,a.jsx)(n.li,{children:"Despliegue de arquitecturas basadas en microservicios"}),"\n",(0,a.jsx)(n.li,{children:"Implementaci\xf3n de soluciones en entornos de nube"}),"\n",(0,a.jsx)(n.li,{children:"Procesos de Integraci\xf3n y Despliegue Continuo (CI/CD)"}),"\n",(0,a.jsx)(n.li,{children:"Separaci\xf3n de entornos para aplicaciones"}),"\n",(0,a.jsx)(n.li,{children:"Mejora en la escalabilidad y disponibilidad del sistema"}),"\n",(0,a.jsx)(n.li,{children:"Desarrollo compatible con m\xfaltiples plataformas"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"En resumen, las VMs son como construir casas completas en un terreno, con sus propias bases, paredes y techos (sistemas operativos completos), mientras que los contenedores son como departamentos en un edificio que comparten la misma estructura (el n\xfacleo del sistema operativo) pero con espacios completamente independientes. La elecci\xf3n entre ambas tecnolog\xedas depender\xe1 de las necesidades de tu proyecto."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1123:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/vm_containers-d306f0619a2640442a08b38b9f67beb4.webp"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var o=s(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);