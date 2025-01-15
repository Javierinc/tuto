import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

// const FeatureList = [
//   {
//     title: 'Fácil de Aprender',
//     Svg: require('@site/static/img/aprendizaje.svg').default,
//     description: (
//       <>
//         Todo está diseñado para que puedas aprender de manera simple y rápida.
//         Cada tutorial está explicado paso a paso, ideal para avanzar sin
//         complicaciones.
//       </>
//     ),
//   },
//   {
//     title: 'Centrate en lo Importante',
//     Svg: require('@site/static/img/concentracion.svg').default,
//     description: (
//       <>
//         Aquí encuentras lo esencial. Olvídate de perder tiempo buscando
//         información desordenada y enfócate en aplicar lo aprendido a tus tareas
//         académicas, proyectos personales o laborales.
//       </>
//     ),
//   },
//   {
//     title: 'Tecnología a tu Alcance',
//     Svg: require('@site/static/img/tecnologia.svg').default,
//     description: (
//       <>
//         Usamos las mejores herramientas y tecnologías para asegurarnos de que
//         aprendas con ejemplos prácticos que puedes aplicar en el mundo real.
//       </>
//     ),
//   },
// ];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures() {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


const FeatureList = [
  {
    title: 'Fácil de Aprender',
    imgSrc: useBaseUrl('/img/aprendizaje.svg'),
    description: (
      <>
        Todo está diseñado para que puedas aprender de manera simple y rápida.
        Cada tutorial está explicado paso a paso, ideal para avanzar sin
        complicaciones.
      </>
    ),
  },
  {
    title: 'Céntrate en lo Importante',
    imgSrc: useBaseUrl('/img/concentracion.svg'),
    description: (
      <>
        Aquí encuentras lo esencial. Olvídate de perder tiempo buscando
        información desordenada y enfócate en aplicar lo aprendido a tus tareas
        académicas, proyectos personales o laborales.
      </>
    ),
  },
  {
    title: 'Tecnología a tu Alcance',
    imgSrc: useBaseUrl('/img/tecnologia.svg'),
    description: (
      <>
        Usamos las mejores herramientas y tecnologías para asegurarnos de que
        aprendas con ejemplos prácticos que puedes aplicar en el mundo real.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
