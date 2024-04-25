
Componente que muestra una galería de imágenes, cada una de las cuales tiene un modal con una imagen,
título y una descripción.

USO DEL COMPONENTE

{/* Galería de imágenes */}

          <Row>
            <Col className={styles.imageGallerySection}>
              <h1 className={styles.galleryTitle}>Imágenes Destacadas</h1>
              <p className={styles.galleryDescription}>Especialidades y servicios que ofrezco</p>
              <ImageGallery images={images} />
            </Col>
          </Row>

ESTILOS EN INDEX

// ---------------------------------------------
// Image Gallery Section
// ---------------------------------------------

.imageGallerySection {
  background-color: $primary-color;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;

}

.galleryTitle {
  font-family: $font-primary;
  font-size: 2.5rem;
  color: $light-color;
  text-align: center;
  margin-bottom: $spacing-4;
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
}
.galleryDescription {
  color: $light-color;
  text-align: center;
  font-size: 1.2rem;
  font-family: $font-secondary;
}