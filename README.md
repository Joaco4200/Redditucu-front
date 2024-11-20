Instrucciones de uso!!!

Instalaciones previas.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Visual Studio Code 1.79
- IntelliJ IDEA 21.6
- PostgreSQL 16.5.2
- pgAdmin 4
- Node.js 19.9
- React 18.3
- Git

Paso a paso
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Clonar el repositorio redditucu-front en el Visual Studio Code y redditucu-back en IntelliJ IDEA.
- Dentro de Visual Studio Code entrar a la carpeta que contiene el codigo del repositorio redditucu-front y ejecutar el comando npm install para instalar las dependencias necesarias, una vez instaladas, ejecutar el comando npm start!.
- Dentro de IntelliJ IDEA entrar a la carpeta que contiene el codigo del repositorio redditucu-back y ejecutar el programa (boton de play color verde arriba derecha)

Arquitectura FrontEnd
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Arquitectura basada en "Atomic Design" y comunicacion con el backend mediane API Rest.

/src  

  /public              : Archivos estáticos como imágenes.  
  
  /atoms               : Componentes atómicos reutilizables (Botones, Inputs, etc.)  
  
  /components          : Componentes más grandes que combinan átomos. (Header, Post, Comment, etc.) 
  
  /pages               : Páginas completas, cada una representando una vista.
  
  /axios               : Funciones para interactuar con el backend.  

Arquitectura BackEnd
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Arquitectura modular basada en Repository, Service, DTOs, Controllers, y Models.

/src

  /controllers       : Contiene clases que manejan las rutas y peticiones HTTP.
  
  /dtos              : Objetos de transferencia de datos que definen el formato de entrada y salida para mejorar la seguridad.
  
  /repositories      : Repositorios encargados de la interacción con la base de datos.
  
  /services          : Lógica de los metodos, donde realizo las operaciones con los datos.
  
  /models            : Definición de las clases que representan las entidades en la base de datos.

