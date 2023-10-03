class ProductDTO {
  nombre;
  precio;
  descripcion;
  img;
  categoria;

  constructor(data) {
    this.nombre = data.nombre;
    this.precio = data.precio;
    this.descripcion = data.descripcion;
    this.img = data.img;
    this.categoria = data.categoria;
  }
}
