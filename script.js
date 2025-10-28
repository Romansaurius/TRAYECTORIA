 const proyectos = [

    {
    nombre: "Automatización con Bash",
    descripcion: "Automatización con Shell Script para simplificar tareas repetitivas en entornos Linux y despliegue de proyectos web.",
    img: "assets/img/bash.png",
    demo: "http://mattprofe.com.ar:81/alumno/9909/ACTIVIDADES/",
    codigo: "https://github.com/Romansaurius/scripts"
  },
    {
    nombre: "NucciClub",
    descripcion: "Red social diseñada con Django y SQLite para conectar persoans con intereses similares y compartir contenido.",
    img: "assets/img/NucciClubLogo (2).png",
    demo: "https://NucciClub.onrender.com",
    codigo: "https://github.com/Romansaurius/NucciClub"
  },

    {
    nombre: "All Nations",
    descripcion: "API REST desarrollada con Node.js que proporciona información detallada de países. Incluye documentación Swagger",
    img: "assets/img/allnations2.png",
    demo: "https://all-nations.onrender.com/api-docs/#/",
    codigo: "https://github.com/Romansaurius/AllNations"
  },

   {
    nombre: "Burger Kong",
    descripcion: "Sistema de pedidos para restaurante de hamburguesas con PHP y MySQL. Incluye panel de administración.",
    img: "assets/img/logo2.png",
    demo: "https://BurgerKong.onrender.com",
    codigo: "https://github.com/Romansaurius/app-burgerkong"
  },


  {
    nombre: "PokeApi",
    descripcion: "Aplicacion web con HTML, CSS y JavaScript que consume la PokeApi y muestra diversos escenarios.",
    img: "assets/img/pokeapi.png",
    demo: "https://PokeApi.onrender.com",
    codigo: "https://github.com/Romansaurius/PokeApi"
  },

    {
    nombre: "One CLink",
    descripcion: "Gestor personal de enlaces web con PHP que permite organizar sitios favoritos con interfaz intuitiva.",
    img: "assets/img/logo5.png",
    demo: "https://scripts.onrender.com",
    codigo: "https://github.com/Romansaurius/scripts"
  },

    {
    nombre: "TO-DO List",
    descripcion: "Aplicación web de gestión de tareas con PHP y MySQL. Permite crear, editar y organizar eventos con filtros.",
    img: "assets/img/todo-list.png",
    demo: "https://scripts.onrender.com",
    codigo: "https://github.com/Romansaurius/scripts"
  },

    {
    nombre: "React Dashboard",
    descripcion: "Panel moderno con React y Tailwind para visualizar datos en tiempo real.",
    img: "assets/img/React.png",
    demo: "https://react-dashboard.onrender.com",
    codigo: "https://github.com/RomanRanucci/react-dashboard"
  },

     {
    nombre: "React Dashboard",
    descripcion: "Panel moderno con React y Tailwind para visualizar datos en tiempo real.",
    img: "assets/img/React.png",
    demo: "https://react-dashboard.onrender.com",
    codigo: "https://github.com/RomanRanucci/react-dashboard"
  },
];

const grid = document.getElementById("proyectos-grid");

proyectos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("proyecto");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>${p.descripcion}</p>
    <a href="${p.demo}" target="_blank" class="demo">🔗 Ver demo</a>
    <a href="${p.codigo}" target="_blank" class="codigo">📂 Ver código</a>
  `;
  grid.appendChild(card);
});
