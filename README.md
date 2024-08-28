
## Aplicación  para grupos de trabajo frontend de Adopta un Junior en ReactJS.

## 1. Descripción General

Este proyecto es un clon sencillo de la interfaz de usuario de *Windows XP*, desarrollado en ReactJS e implementado con un template de VITE. Combina elementos de diseño inspirados en la terminal de Sevastopol de Alien: Isolation, con el objetivo principal de demostrar mis habilidades en desarrollo frontend y mostrar mis motivaciones para unirme a los grupos de trabajo frontend de Adopta un Junior. El proyecto busca crear una experiencia que combine la nostalgia del entorno clásico de Windows XP con la estética retro-futurista y tensa de la terminal de *Alien: Isolation*.

![PantallaInicio](https://github.com/user-attachments/assets/235e15dd-4e82-4e66-ba11-bb5b81f45562)
>*Pantalla de inicio que emula un escritorio de un erquipo de computo.*

## 2. ¿Por qué debería ser seleccionada para los grupos de trabajo de Frontend?

Desde que me introduje en el mundo del desarrollo web, me he dedicado con entusiasmo a mejorar mis habilidades técnicas y explorar soluciones creativas. Me encanta transformar conceptos en experiencias interactivas, utilizando tecnologías como HTML, CSS, Sass, JavaScript, TypeScript, Git y GitHub, así como frameworks como React, para crear interfaces funcionales, intuitivas y visualmente atractivas.

El proyecto que presento no es solo un ejercicio de codificación; es una muestra de mi capacidad para llevar una idea desde su concepción hasta su implementación final. Mi conocimiento en el manejo de componentes, organización y tecnologías me ha permitido enfrentar y resolver problemas complejos con soluciones efectivas.

Aunque aún no he tenido la oportunidad de adquirir experiencia profesional formal, mis proyectos personales y mi formación han sido fundamentales para construir una sólida base técnica. Además, aporto una actitud cooperativa, positiva, empática y responsable, que fortalece la confianza y la comunicación dentro de cualquier equipo. Mi curiosidad constante me impulsa a aprender y explorar nuevas tecnologías, mientras que mi imaginación me permite abordar los desafíos desde nuevas perspectivas.

Estoy profundamente motivada para ofrecer mis habilidades y conocimientos, colaborar con otros profesionales apasionados y asumir desafíos que nos ayuden a crecer juntos. Mi objetivo es continuar aprendiendo y evolucionando, para dar el siguiente paso en mi carrera y aprovechar al máximo esta oportunidad. 

*Gracias por considerar mi aplicación.*

## 3. Dependecias

 - react
 - react-dom  
 - react-icons
 
## 4. Requerimentos
 - NODE (v21.7.1)
 - NPM (v10.5.0)
 - GIT
 
## 5. Instalación y Configuración

**Pasos de Instalación**

 1. Clona el repositorio

         git clone https://github.com/NorimNori/IIPGTAuJ_frontendApplication.git
 2. **Instala las dependencias** ubicándote en la carpeta del proyecto:
 
         npm install
3. **Inicia la aplicación en modo desarrollo** en la carpeta interna:

        cd  IIPGTAuJ_frontend_app       
        npm run dev

## 6. Estructura del proyecto

La estructura del proyecto se basa en un template de VITE, con carpetas separadas para componentes, páginas y estilos, contexto y hooks personalizados.
     
/IIPGTAuJ_frontend_app
 >> /public
>> 
> > /src
>>
 >>  /components
>>
  > >>/barraCarga
>   >>
  > >> /fondoPantalla
>   >>
  > >> /icono
>   >>
  > >> /logoCarga
>   >>
  > >>/notasModal
>   >>
  > >> /piePagina
>>   
>>/context
>  >
> >/hooks
>  >
> >/pages
>  >
> >/App.css
>  >
> >/App.jsx
>  >
> >/index.css
>  >
> >/main.jsx
>  >
> 
> /.gitignore
>
> /eslint.config.js
>
> /index.html
>
> /package-lock.json
>
> /package.json
>
> /vite.config.js
>
README.md

    
## 7. Componentes de la aplicación

### Logo de carga (logoCarga)

Muestra un logo de “Wentanasas xd” (Windows XP).

### Barra de carga (barraCarga)

Una barra que muestra el progreso de carga simulando el inicio del sistema operativo.

### Icono para abrir el modal (ícono)

Representa un documento `.txt`. Al hacer clic, se abre un modal con un mensaje. Justo debajo se encuentra otro ícono no interactivo que representa una carpeta de documentos.

### Modal de motivación (notasModal)

Se activa desde el icono interactivo y contiene un mensaje explicando por qué deseo unirme a los grupos de trabajo frontend. Se cierra con un botón en la esquina superior derecha.

### Barra de tareas (piePagina)

Ubicada en la parte inferior de la pantalla, esta barra incluye un botón que muestra el logo del sistema junto con la palabra "Cerrar". Al hacer clic en este botón, se simula el proceso de apagado del sistema, proporcionando una experiencia interactiva que emula el cierre de un sistema operativo.

### Fondo de pantalla (piePagina)

Muestra un texto simulando un fondo de pantalla.

## 8. Custom hooks

 1. ### useLoading()

Interactúa con un contexto de carga (`LoadingContext`) para manejar el progreso de una operación de carga proporcionando una función para actualizarla de manera gradual, no acepta parámetros y retorna un objeto con la siguiente propiedad:

 - **handleLoading** (`función`): Una función que incrementa el estado de carga (`filled`) gradualmente. La función actualiza el estado cada 65 ms, incrementando el valor de `filled` en 1.5 si es menor de 50 y en 2 si es 50 o más.

2. ### useOpen()
Interactúa con un contexto de estado (`OpenContext`) para controlar la funcionalidad que puede ser abierta o cerrada. Puede usarse para manejar modales, paneles o cualquier elemento que requiera control de visibilidad. No acepta parámetros y retorna un objeto con las siguientes funciones:

-   **isOpen** (`función`): Función que establece el estado de apertura (`setOpen`) en `true`.
-   **isClose** (`función`): Función que establece el estado de apertura (`setOpen`) en `false`.
-   **isShutDown** (`función`): Función que establece el estado de cierre completo (`setClose`) en `true`.

3. ### useReload()

Su única tarea es recargar la página actual después de realizar una operación que requiere una actualización completa del estado de la aplicación, no acepta parámetros y retorna un objeto con la siguiente función:

-   **handleRefresh** (`función`): Una función que recarga la página actual usando `location.reload()`. 

## 9. Flujo de la aplicación

-   **Pantalla de carga:** Muestra un logo y una barra de progreso. Al completarse, redirige a la pantalla de inicio.
  ![PantallaLogo](https://github.com/user-attachments/assets/b4e3a05b-2946-441e-a0ed-5503a53ba012)
>*Pantalla de carga con el logo del proyecto.*
-   **Pantalla de inicio:** Interactúa con un ícono para abrir un modal. Un botón en la barra de tareas cierra la pantalla de inicio.
  ![PantallaModal](https://github.com/user-attachments/assets/8932ed67-4d5a-4634-8519-709573a85548)
>*Escritorio con documento(modal) txt abierto.*
-   **Pantalla de cierre:** Muestra un mensaje de “apagado exitoso” con un botón para recargar la aplicación y reiniciar el proceso.
  ![PantallaCierre](https://github.com/user-attachments/assets/6711901d-96c6-4b56-9b92-a6ad424f6e22)
>*Pantalla de cierre que permite reiniciar el sistema.*

## 10. Diseño y Estilos

El diseño del proyecto es una fusión de la estética de *Windows XP* y la terminal de Sevastopol de _Alien: Isolation_ . Se ha utilizado CSS tradicional ubicando los documentos en la carpeta de cada componente para mantener una mejor organizacion del proyecto. 

## 11. Aportaciones

Se agregó una colaboración con [Luzaks](https://github.com/Luzaks) para la resolución de una issue sencilla en una rama distinta para finalmente hacer merge de los cambios realizados an la rama principal y completar la tarea de la *semana 2* en el proceso de aplicación a los *grupos de trabajo frontend de Adopta un Junior*.

![favicon](https://github.com/user-attachments/assets/c4d3dae7-464f-4731-a0d3-8ee575d591d1)
>*Favicon actual de la aplicación.*

### Descripción General de la Issue

**Título:** Cambiar favicon de la aplicación

**Descripción:**

La tarea consiste en reemplazar el favicon predeterminado que viene con la plantilla de VITE en el proyecto de ReactJS con un nuevo favicon proporcionado. Este cambio es necesario para personalizar la apariencia del proyecto y mejorar su identidad visual. A continuación, se detallan los pasos que fueron necesarios para completar esta tarea:

 1.  **Descargar el proyecto:**
    
       Clonar el repositorio del proyecto desde GitHub a una máquina local.
   
2.  **Crear una nueva rama:**
    
      Generar una rama específica para esta tarea con el nombre `S2-issue/favicon`.
3.  **Actualizar el favicon:**
    
    -   Descargar el nuevo archivo de favicon desde una carpeta compartida en Google Drive.
    -   Renombrar el archivo a `favicon.ico`.
    -   Colocar el archivo en la carpeta `public` del proyecto.
    -   Realizar los cambios necesarios en el archivo `index.html`.
    -   Eliminar el favicon anterior.
4.  **Enviar los cambios:**
    
    -   Hacer commit de los cambios en la rama creada y subirla al repositorio remoto.
    -   Crear una pull request para integrar los cambios en la rama principal (`main`).

## 12. Deployment

**Descripción del deployment en [Netlify](https://www.netlify.com/)**

El proyecto se desplegó en Netlify utilizando la opción manual de *"drag and drop"*. Este proceso implicó los siguientes pasos:

1.  **Generación de la carpeta `dist`:** Primero, se preparó la aplicación para producción ejecutando el comando `npm run build`. Este comando construye el proyecto y genera la carpeta `dist`, que contiene todos los archivos optimizados y listos para ser desplegados.
    
2.  **Acceso a netlify:** Se accedió a la plataforma de Netlify y se seleccionó la opción de despliegue manual.
    
3.  **Despliegue manual:** Utilizando la interfaz de Netlify, se arrastró y soltó la carpeta `dist` en el área designada para cargas manuales. Esta opción permite un despliegue rápido y sencillo sin necesidad de configuración adicional.
    
4.  **Verificación del despliegue:** Tras completar la carga, Netlify desplegó automáticamente el sitio. Se revisó la URL proporcionada por Netlify para asegurar que el sitio se mostraba correctamente y funcionaba como se esperaba.
5. **Dirección del sitio:** Después del despliegue, Netlify asigna una URL provisional de forma aleatoria. Para personalizar la dirección del sitio, se ha cambiado el nombre predeterminado por uno más acorde. La URL final del sitio desplegado es: [https://macrohard-softwareclonev2wentanasasxd.netlify.app/](https://macrohard-softwareclonev2wentanasasxd.netlify.app/).

![deploymentW](https://github.com/user-attachments/assets/a28de70e-1d6c-4ccb-b955-37a445156741)
>*Proyecto desplegado en producción.*



    
