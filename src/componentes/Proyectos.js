import React, {useState} from 'react'
import './Proyectos.css';
import Modal from './elementos/Modal';

function Proyectos() {
    const [imagenActual, setImagenActual] = useState('');
    const [tituloActual, setTituloActual] = useState('');

    const verImagen = (img, titulo) => {
        setImagenActual(img);
        setTituloActual(titulo);

        let modalImg = document.getElementById("ModalImage");
        modalImg.style.display = "block";
    }
    return (
        <div className='proyectos' id="Proyectos">
            <div className='proyectos__container'>
            <h2>Proyectos</h2>
                <div className='proyectos__row'>

                    <div className='proyectos__tarjeta'>                        
                        <img src='nfts.png' onClick={()=> verImagen('nfts.png', 'NFT Collection')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Proyecto para la creación de NFTs dinámicos creado y desarrollado con hardha, solidity e implementando pinata.cloud, la red de prueba 
                            de Rinkerby para su despliegue y automatización con Keepers.
                            Para el frontend se utilizó NextJS y React Moralis para la interacción con el contrato desplegado.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/smart-contract.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>                        
                        <img src='pokemon-factory.jpg' onClick={()=> verImagen('pokemon-factory.jpg', 'Pokemon Factory')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Proyecto Reto realizado para la creación de Pokemons, utlizando hardhat, solidity y 
                            para el frontend se utiliza nextjs, react moralis, tailwincss, web3uikit y se publica 
                            a traves del protocolo IPFS, utilizando metamask y la red de prueba rinkeby para conectarse al proyecto.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/smart-contract.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>                        
                        <img src='proyectoUno.jpeg' onClick={()=> verImagen('proyectoUno.jpeg', 'Proyecto | Uno')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Aplicativo Móvil desarrollado en React Native enfocado a la toma 
                            de pedidos con integración de consumo de APIs y bases de datos SQLite, 
                            el cual permite un manejo offline tanto en dispositivos android y IOS.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactnt-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='ecommerceClone.png' onClick={()=> verImagen('ecommerceClone.png', 'Ecommerce Clone')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Sistem Web de ventas desarrollado e implementado con React.JS, 
                            Redux y Firebase, el cual permite un ágil manejo del sistema 
                            para la toma de pedidos de venta.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactjs-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='SQLiteProject.jpeg' onClick={()=> verImagen('SQLiteProject.jpeg', 'SQLite Project')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Aplicativo Móvil desarrollado en React Native para la gestión de usuarios implementando SQLite.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactnt-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='PortafolioProject.jpg' onClick={()=> verImagen('PortafolioProject.jpg', 'Portafolio')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Portafolio Web Responsivo desarrollado e implementado con React, TailWind CSS y Firebase.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactjs-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='RedSocial.jpg' onClick={()=> verImagen('RedSocial.jpg', 'Red Social')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Aplicativo Web para la generación de estados desarrollado en ASP.NET Core, 
                            Razor Pages, el cual implementa consumo de APIs y conexión de bases de datos 
                            Postgres atraves de EntityFrameworkCore.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='TicketsApp.jpg' onClick={()=> verImagen('TicketsApp.jpg', 'Impresora Virtual')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Aplicativo Web para la integración como impresora o tiquetera virtual desarrollado con ASP.NET Core.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='SoporteForm.jpg' onClick={()=> verImagen('SoporteForm.jpg', 'Formulario')} />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Aplicativo Web para el registro y evidencia de prestación de servicios con módulo 
                            para la firma del Cliente desarrollado en ASP.NET Core.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='PrimerosProyectos.png' onClick={()=> verImagen('PrimerosProyectos.png', 'Primeros Proyectos')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                            <p>
                            Primeros proyectos para plataformas de Escritorio y Web desarrollados en Java y con bases de datos MySQL.
                            </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/java-icon.png' />
                        </span>
                    </div>

                </div>
            </div>

            <Modal img={imagenActual} titulo={tituloActual} />

        </div>
    )
}

export default Proyectos
