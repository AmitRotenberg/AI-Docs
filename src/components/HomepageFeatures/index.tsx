import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'קיצור זמני עבודה',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        בינה מלאכותית מאפשרת לבצע משימות כמו סיכום, תרגום, חילוץ טקסט והבנת תמונה תוך שניות.
        במקום לעבוד ידנית על כל קובץ או מסמך — פשוט מעלים את התוכן ומקבלים תוצאה מידית.
      </>
    ),
  },
  {
    title: 'מיקוד במה שחשוב',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        המערכות שלנו עושות את העבודה הטכנית בשבילכם — אתם יכולים להתמקד בתוכן, בתובנות ובשיקול דעת אנושי.
        המודלים מטפלים בטקסטים, תמונות, קוד ומידע מגוון ומחזירים תוצאות מדויקות.
      </>
    ),
  },
  {
    title: 'הגברת האפקטיביות',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        באמצעות כלים חכמים מבוססי בינה מלאכותית, אתם חוסכים זמן, מצמצמים טעויות ומעלים את רמת האוטומציה והדיוק בכל משימה חוזרת.
        כל משתמש בארגון יכול להפוך ליותר אפקטיבי תוך דקות.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
