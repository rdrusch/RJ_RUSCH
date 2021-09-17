import React, { useContext, useState } from "react"
import 'firebase/firestore'
import { CartContext } from "../../context/CartContext";
import { generarOrden } from "../../Firebase/generarOrden";
import { Redirect } from "react-router";
import Swal from "sweetalert2";


export const Checkout = () => {

    const { carrito, precioCarrito, vaciarCarrito } = useContext(CartContext)


    const [values, setValues] = useState({
        nombre: " ",
        email: " ",
        tel: " "
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length >= 10) {
            generarOrden(values, carrito, precioCarrito())
                .then((res) => {

                    Swal.fire({
                        icon: 'success',
                        title: `Muchas gracias ${values.nombre}`,
                        text: `Tu orden de compra ha sido generada, en breve nos estaremos cominicando con usted. Su código de orden es ${res}, guardelo que se lo vamos a solicitar`,

                    })

                    vaciarCarrito()
                }
                )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Por favor revise que los datos sean correctos',
            })
        }
    }


    return (
        <div>
            <h2>Checkout</h2>
            {!carrito.length
                ? <Redirect to="/" />
                :

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                            required />

                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            required />

                        <label>Teléfono</label>
                        <input
                            type="tel"
                            name="tel"
                            value={values.tel}
                            onChange={handleInputChange}
                            required />

                        <button type="submit">Enviar</button>
                    </form>



                </div>
            }
        </div>
    )
}