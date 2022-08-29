import React from 'react';
import './Footer.css';
import LogoDev from '@mui/icons-material/DeveloperMode';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__row'>
                <div className='footer__logo' >
                    <LogoDev className='footer__icono' />
                    <span className='footer_option'>DevJm</span>
                </div>

                
                <div className='footer_menu'>
                    <span>Correo: jthmacias1995@gmail.com</span>                 
                </div>

                <div className='footer_menuDos'>
                    <span onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Inicio</span>
                    <span onClick={() => {document.location.href = "#Perfil";}}>Perfil</span>
                    <span onClick={() => {document.location.href = "#Proyectos";}}>Proyectos</span>
                    <span onClick={() => {document.location.href = "#Tecnologias";}}>Tecnologías</span>
                    <span onClick={() => { window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jthmacias1995@gmail.com', 'name', 'height=805,width=650,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes')}}>Contáctanos</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
