import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'E-Commerce 360°',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Onee memiliki visi menjadi e-commerce platform 360° yang dapat memenuhi kebutuhan Transformasi Bisnis Digital 5.0. Mudah untuk dihubungkan dengan channel digital lainnya, sehingga memungkinan bisnis berkembang secara digital dengan cepat dan tepat.
      </>
    ),
  },
  {
    title: 'Build Future',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dengan memiliki website sendiri, Anda tidak hanya membangun  <code>Brand</code> yang kuat, menciptakan <code>Perjalanan Pelanggan</code> dari waktu ke waktu, dan <code>Bebas</code> dari <code>Persaingan Harga</code> secara langsung.
      </>
    ),
  },
  {
    title: 'Low Maintenance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Onee membantu Anda menghemat pengeluaran berlebih untuk perawatan aplikasi & menghindari biaya tak terduga seperti kenaikan layanan marketplace yang tidak dapat di prediksi, membuat Anda selangkah lebih maju dalam persaingan digital.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
