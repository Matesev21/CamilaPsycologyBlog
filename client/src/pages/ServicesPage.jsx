import React from "react";
import styles from "../styles/ServicesPage.module.css";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import SupportAreas from "../components/SupportAreas/SupportAreas";
import ServiceModality from "../components/ServiceModality/ServiceModality";
import { servicesData } from "../constants/servicesData";
import BGimg from "../Images/PlantNoBack.png";

const ServicesPage = () => {
  return (
    <div className={styles.section}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Mis Servicios</h1>
          <p className={styles.subtitle}>
            Un espacio para tu bienestar integral.
          </p>
        </div>
        <img src={BGimg} alt="Wreath" className={styles.wreathImage} />
      </header>

      {/* Services Grid */}
      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            focus={service.focus}
            description={service.description}
          />
        ))}
      </div>

      {/* Support Areas */}
      <SupportAreas />

      {/* Service Modality */}
      <ServiceModality />
    </div>
  );
};

export default ServicesPage;
