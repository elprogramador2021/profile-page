import React from 'react';
import './Perfil.css';
import Language from '@mui/icons-material/Language';
import InstallMobile from '@mui/icons-material/InstallMobile';
import Storage from '@mui/icons-material/Storage';
import Cloud from '@mui/icons-material/Cloud';

import ReceiptLong from "@mui/icons-material/ReceiptLong";
import HubIcon from '@mui/icons-material/Hub';

function Perfil() {
    return (
        <div className='perfil' id="Perfil">
            <div className='perfil__container'>
                <h2>Perfil</h2>
                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <HubIcon className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Web 3</h3>
                            <p>Cuento con conocimientos en el desarrollo de Dapps utilizando Frameworks
                                como React/Next JS e implementando tecnologías como react moralis, Ethers.js y Web3.js,
                                interactuando con contractos inteligentes y con Injected Providers como Metamask y haciendo uso del protoco IPFS para
                                el despligue de aplicaciones y persistencia de datos a través del protocolo IPFS.</p>
                        </div>
                    </div>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <ReceiptLong className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Smart Contracts</h3>
                            <p>He trabajado en proyectos utilizando solidity y hardhat para el desarrollo 
                                y despligue de los contratos a través de las testnet de ethereum implementando y haciendo 
                                uso las librerias de open zeppelin y uso de oracles de chainlink para automatizaciones.</p>
                        </div>
                    </div>
                </div>
                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Language className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Desarrollo Web</h3>
                            <p>Desarrollador con conocimientos en C#, Javascript y Java, 
                                bases de datos, Web Services REST y SOAP, manejando modelos MVC, 
                                MVVM, component-oriented, JDBC, y Frameworks como .NET, ASP.NET, 
                                React, React Native.</p>
                        </div>
                    </div>

                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <InstallMobile className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Aplicaciones Móviles e Híbridas</h3>
                            <p>Cuento con conocimientos en React y React Native - aplicaciones 
                                multiplataforma (Android & IOS) consumo de APIs, 
                                integración con Firebase e integración con SQLite para 
                                el manejo de bases de datos locales en aplicacion móviles.</p>
                        </div>
                    </div>
                </div>

                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Storage className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Bases de Datos</h3>
                            <p>Actualmente he trabajado con gestores de bases de datos como POSTGRESQL, 
                                SQLite y MySQL, para el desarrollo e integración de aplicaciones,
                                 APIs y migradores de bases de datos.</p>
                        </div>
                    </div>

                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Cloud className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Cloud</h3>
                            <p>He integrado soluciones para la autenticación, almacenamiento y despliegue 
                                de aplicaciones con Firebase y Google Cloud, ademas de implementar soluciones 
                                con Logic Apps en Azure para el envío automatizado de reportes e informes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil
