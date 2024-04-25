import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import ContactIconsButton from "@/components/ContactIconsButton/contactIconsButton";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import Services from "@/components/ServicesSection/Services";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import CustomCarousel from "@/components/CustomCarousel/CustomCarousel";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import styles from "../styles/Home.module.scss";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function testpage() {
  //-----------------------------------------------
  // Education Data Array
  //-----------------------------------------------

  const educationData = [
    {
      title: "Abogada",
      institution: "Universidad Nacional de Loja",
      year: "2015",
      description: "Abogada de los Tribunales y Juzgados de la República del Ecuador",
      logo: "/images/education/unl_logo.png",
    },
    {
      title: "Community Manager",
      institution: "Letrada Academy",
      year: "2023",
      description: "Manejo de redes sociales y marketing digital",
      logo: "/images/education/letrada_logo.jpg",
    },
  ];

  //-----------------------------------------------
  // Services Data Array
  //-----------------------------------------------

  const service = [
    {
      service: "Diagnóstico y Reparación de Laptops",
      description:
        " Diagnóstico y reparación de laptops, computadoras de escritorio y dispositivos electrónicos.  Reparación de componentes electrónicos. ",
      imageUrl: "/images/servicio2.png",
    },
    {
      service: "Mantenimiento Preventivo y Correctivo de Laptops",
      description:
        "Mantenimiento preventivo y correctivo de laptops, computadoras de escritorio y dispositivos electrónicos. Atención a hogares y empresas ",
      imageUrl: "/images/servicio4.png",
    },

    {
      service: "Reparación Electrónica de Computadoras",
      description:
        "Reparación de componentes electrónicos de computadoras, laptops y dispositivos electrónicos. Reballing de chips gráficos y procesadores. ",
      imageUrl: "/images/servicio3.png",
    },
    {
      service: "Mantenimiento y Reparación de Impresoras",
      description:
        "Mantenimiento y reparación de impresoras, multifuncionales y dispositivos de impresión. Atención a hogares y empresas.",
      imageUrl: "/images/servicio1.png",
    },
  ];

  //-----------------------------------------------
  // Image Gallery Data Array
  //-----------------------------------------------

  const images = [
    {
      thumbnail: "/images/reparacion_electronica.jpg",
      full: "/images/reparacion_electronica.jpg",
      title: "Reparación electrónica",
      description:
        "Reparación de componentes electrónicos de computadoras, laptops y dispositivos electrónicos. Reballing de chips gráficos y procesadores.",
      descriptionItems: [
        "Reparación de componentes electrónicos",
        "Reballing de chips gráficos y procesadores",
        "Reparación de pantallas y teclados",
        "Reparación de tarjetas madre",
        "Reparación de fuentes de poder",
      ],
      highlightedText: "Incluye 1 consulta de valoración",
      alt: "Reparación electrónica",
    },
    {
      thumbnail: "/images/mantenimiento.jpg",
      full: "/images/mantenimiento.jpg",
      title: "Mantenimiento de laptops",
      description: "Mantenimiento preventivo y correctivo de laptops y dispositivos electrónicos.",
      descriptionItems: [
        "Mantenimiento preventivo",
        "Mantenimiento correctivo",
        "Limpieza interna y externa",
        "Revisión de componentes electrónicos",
      ],
      highlightedText: "Incluye 1 consulta de valoración",
      alt: "Mantenimiento de laptops",
    },
    {
      thumbnail: "/images/electronica_1.png",
      full: "/images/electronica_1.png",
      title: "Reparación de componentes electrónicos",
      description: "Reparación de componentes electrónicos.",
      descriptionItems: [
        "Reparación de tarjetas madre",
        "Reparación de fuentes de poder",
        "Reparación de chips gráficos",
        "Reparación de procesadores",
      ],
      highlightedText: "Incluye 1 consulta de valoración",
      alt: "Oferta 3",
    },
    {
      thumbnail: "/images/capacitacion_1.jpg",
      full: "/images/capacitacion_1.jpg",
      title: "Capacitación en reparación de laptops",
      description: "Capacitación en reparación de laptops y dispositivos electrónicos.",
      descriptionItems: [
        "Capacitación en reparación de laptops",
        "Capacitación en reparación de dispositivos electrónicos",
        "Capacitación en mantenimiento preventivo",
        "Capacitación en mantenimiento correctivo",
      ],
      highlightedText: "En línea o presencial",
      alt: "Capacitación en reparación de laptops",
    },
  ];

  //-----------------------------------------------

  return (
    <>
      <Head>
        <title>Canord</title>
        <meta name="description" content="Canord Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://canord.anvetcard.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anvetcard Canord Informatic Solutions" />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://carloscano.anvetcard.com/images/shared_image.png"
        />
      </Head>
      <Layout>
        <Container fluid className={styles.mainContainer}>
          {/* Profile Section */}

          <Row className={styles.mainRow}>
            {/* Columna con imagen de perfil, informacón general, redes sociales e imagen informativa */}

            <Col xs={10} className={styles.infoCol}>
              <section id="profile">
                {/* Image Profile Section */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage src="/images/logo.jpg" alt="Carlos Cano O." size={250} />
                </motion.div>
              </section>

              {/* Personal Information Section */}

              <section>
                <PersonalInfo
                  name="CANORD INFORMATIC SOLUTIONS"
                  title="Técnicos en Electrónica de Laptops"
                  description="Especialistas en electrónica de laptops. Ofrecemos servicios expertos en reparación y mantenimiento combinando técnica avanzada con atención personalizada."
                />
              </section>

              {/* Social Media Icons Section */}

              <Row>
                <Col className={styles.socialMediaSection}>
                  <section>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className={styles.socialIconsContainer}>
                        <SocialMediaIcons
                          facebook="https://www.facebook.com/Canordinfsolutions"
                          instagram="https://www.instagram.com/canordinformatic/"
                          //linkedin="https://www.linkedin.com/in/carlos-ivan-veintimilla-tinoco-msc-md-facs-12364973/"
                          tiktok="https://www.tiktok.com/@canordinf"
                          //twitter="https://twitter.com/CarlosIvanVein1"
                        />
                      </div>

                      <div className={styles.whatsappContactSection}>
                        <WhatsAppButton
                          phone="+593985794253"
                          message="Hola, me gustaría saber más sobre tus servicios"
                          stylesButton={styles.whatsappContactButton}
                        />
                      </div>
                    </motion.div>
                  </section>
                </Col>
              </Row>

              {/* Featured Image Section */}

              <section className={styles.featuredImageSection}>
                <Image
                  src="/images/empresa.jpg"
                  alt="Médico con los brazos cruzados"
                  width={1024}
                  height={768}
                  layout="responsive"
                  className={styles.featuredImage}
                />
              </section>
            </Col>

            {/* Columna con información de contacto */}

            <Col xs={2} className={styles.infoCol2}>
              <section>
                <ContactIcons
                  phone="+593985794253"
                  email="canordinfsolutions@outlook.com"
                  whatsapp="+593985794253"
                  telegram="+593985794253"
                  location={["Canord informatic Solutions"]}
                />
              </section>
            </Col>
          </Row>

          {/* Componente de Servicios */}

          <Row>
            <Col className={styles.servicesSection}>
              <section id="servicios">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.servicesText}>
                    <h2 className={styles.servicesTitle}>Servicios</h2>
                    <span className={styles.servicesInstructions}>
                      Haz clic en el item para ver la información
                    </span>
                  </div>

                  <div className={styles.servicesInfo}>
                    <Services services={service} />
                  </div>
                  <div className={styles.whatsappSection}>
                    <WhatsAppButton
                      phone="+593985794253"
                      message="Hola, me gustaría saber más sobre tus servicios"
                      stylesButton={styles.whatsappButton}
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Galería de imágenes */}

          <Row>
            <Col className={styles.imageGallerySection}>
              <h1 className={styles.galleryTitle}>Imágenes Destacadas</h1>
              <p className={styles.galleryDescription}>Especialidades y servicios que ofrezco</p>
              <ImageGallery images={images} />
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/reparacion_electronica.mp4" />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentInfo}>
              <section id="payment" className={styles.paymentSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <p className={styles.paymentDescription}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </p>

                  <div className={styles.bankInfo}>
                    {/* <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="5261117000"
                      identification="1103826614"
                      email="aveintimilla@anvetcorp.com"
                      bankLogo="/images/banco_pichincha.png"
                    /> */}
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2204346829"
                      accountType="Cuenta de ahorros"
                      identification="1104532831"
                      email="canordinfsolutions@outlook.com"
                      bankLogo="/images/banco_pichincha.jpg"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de QR Code */}

          <Row>
            <Col className={styles.qrCode}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className={styles.titleQrContainer}>
                  <h2 className={styles.qrTitle}>Escanea el código QR para compartir</h2>
                </div>
                <QRCodeComponent
                  qrCodeImageUrl="/images/qrcode_canord.png"
                  altText="QR Code"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
