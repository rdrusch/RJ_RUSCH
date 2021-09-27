# React App - Alkimia

Proyecto para curso REACT.JS de CoderHouse

Alkimia es una app web ecommerce destinada a facilitar el proceso de compra de los clientes de la empresa. La funcionalidad de la misma es muy sensilla y práctica.


## Funcionalidades

Proceso de compra de principio a fin: 
Busqueda de productos filtrados según categorías;
Posibilidad de agregar productos al carrito (cantidad máxima según stock disponible en la base de datos); 
Dentro de el carrito se pueden eliminar individualmente los productos o vaciar el carrito entero;
Para finalizar la compra se dirije a un formulario de datos personales:
- Si se cumple con las condiciones se genera una orden en la base de datos y se le avisa al comprador, a través de un alert, el código de su compra y se vacía el carrito.
- Si no se cumplen los requisitos (ej: el número de teléfono posee menos de 8 digitos) se le avisa al cliente que hay datos inválidos.
- En el caso de que al momento de finalizar la compra no haya stock de algún producto solicitado se le notificará a través de una alerta.

## Librerías

### React-icons:
Todos los íconos incluidos en la app como por ejemplo el carrito fueron importados de la libreria React-icons.
### Sweet Alert 2:
 Se utilizó esta librería para las alertas generadas una vez que se intente finalizar la compra.
### SASS:
Para estilar cada componente de la app se utilizó SASS ya que es una dependencia que permite darle estilos de una forma mucho más prolija en cuanto a código.
### Firebase:
Se utilizó como base de datos ya que es una buena forma para poder tener una web app completa sin necesidad de contratar a un programador backend.

