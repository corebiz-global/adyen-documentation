import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  subtitle?: string;
}

export default function PaymentMethodHeader({ title, description, image, subtitle }: Props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerMain}>
        {image && (
          <div className={styles.imageContainer}>
            <img src={useBaseUrl(image)} alt={title} className={styles.headerImage} />
          </div>
        )}
        <div className={styles.titleContainer}>
          <h1 className={styles.headerTitle}>{title}</h1>
          {subtitle && <span className={styles.headerSubtitle}>{subtitle}</span>}
        </div>
      </div>
      <p className={styles.headerDescription}>{description}</p>
      <div className={styles.headerSeparator} />
    </div>
  );
}
