import React from "react"
import "./Footer.scss"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"

export const Footer = () => {

    return (
        <footer>
            <section class="footer__contacto">
                <h5 class="footer__contacto__encabezado">Contacto</h5>
                <div class="whatsappUno">
                    <AiOutlineWhatsApp />
                    <span>1122334455</span>
                </div>
                <div class="whatsappDos">
                    <AiOutlineWhatsApp />
                    <span>1166778899</span>
                </div>
                <div class="mail">
                    <AiOutlineMail />
                    <span>somosalkimia@gmail.com</span>
                </div>
            </section>
            <section class="footer__ubicación">
                <h5 class="footer__ubicación__encabezado">Ubicación</h5>
                <p>Calle 123</p>
                <p>Tigre, GBA norte</p>
                <p>Buenos Aires, Argentina</p>
            </section>
            <section class="footer__redes">
                <h5 class="footer__redes__encabezado">Encontranos en...</h5>
                <div class="facebook">
                    <AiFillFacebook />
                    <span>AlkimiaStore</span>
                </div>
                <div class="instagram">
                    <AiFillInstagram />
                    <span>@alkimiaStore</span>
                </div>
            </section>
        </footer>
    )
}