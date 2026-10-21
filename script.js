/* ==========================================================================
   1. CONFIGURACIÓN GENERAL DE PETIT PARIS (DATOS REALES DE TU CAPTURA)
   ========================================================================== */
const CONFIG = {
    // Número de Petit Paris con código de México (521 + 9622475627)
    telefonoWhatsApp: "5219622475627",
    
    // Número visible para llamadas
    telefonoLlamada: "962 247 5627",
    
    // Enlace directo a Petit Paris en Google Maps Tapachula
    enlaceGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Petit+Paris+Calle+Las+Rosas+y+Bugambilia+Tapachula",
    
    // Dirección escrita de la ficha de Google Maps
    direccionTexto: "Calle Las Rosas y Bugambilia, Carr. a Puerto Madero, Centro, 30700 Tapachula, Chis."
};


/* ==========================================================================
   2. CATÁLOGO DE PASTELES, CHEESECAKES Y PANADERÍA (24 PRODUCTOS)
   ========================================================================== */
const catalogoProductos = [
    // --- PASTELES COMPLETOS (1 al 6) ---
    {
        id: 1,
        nombre: "Pastel de Zanahoria Especial",
        precio: 420,
        categoria: "pasteles",
        etiqueta: "Favorito de la casa ⭐",
        imagen: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 15 porciones", "Pan especiado con nuez y zanahoria fresca", "Betún cremoso de queso crema", "Incluye dedicatoria gratis"],
        descripcion: "Nuestro pastel estrella recomendado por todos nuestros visitantes. Esponjoso, húmedo y cubierto con nuestro clásico frosting artesanal de queso crema."
    },
    {
        id: 2,
        nombre: "Pastel Red Velvet Imperial",
        precio: 450,
        categoria: "pasteles",
        etiqueta: "Más vendido",
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 15 porciones", "Pan aterciopelado con toque de cacao", "Relleno doble de queso crema", "Listo en vitrina o sobre pedido"],
        descripcion: "Suave pan rojo aterciopelado en capas con relleno y cobertura de queso crema dulce. Uno de los grandes favoritos de Petit Paris."
    },
    {
        id: 3,
        nombre: "Pastel Tres Leches con Fresas",
        precio: 390,
        categoria: "pasteles",
        etiqueta: "Disponible hoy",
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 14 porciones", "Pan esponja bañado en 3 leches", "Fresas naturales seleccionadas", "Crema batida ligera"],
        descripcion: "El clásico infalible para cumpleaños. Pan esponja perfectamente húmedo con relleno abundante de fresas frescas."
    },
    {
        id: 4,
        nombre: "Pastel Matilda Doble Chocolate",
        precio: 460,
        categoria: "pasteles",
        etiqueta: "Chocolatoso",
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 porciones", "Pan húmedo de chocolate oscuro", "Ganache de chocolate semiamargo", "Chispas de chocolate belga"],
        descripcion: "Para los verdaderos amantes del chocolate. Pan intenso y suave cubierto con ganache brillante de cacao."
    },
    {
        id: 5,
        nombre: "Pastel Fresas con Crema Francés",
        precio: 430,
        categoria: "pasteles",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 porciones", "Pan vainilla francesa", "Mousse suave de fresa", "Decoración elegante"],
        descripcion: "Delicado pastel de vainilla con crema batida artesanal y coronado con fresas frescas de temporada."
    },
    {
        id: 6,
        nombre: "Pastel Moka y Café Espresso",
        precio: 410,
        categoria: "pasteles",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 12 a 15 porciones", "Bañado en jarabe de café de la región", "Crema de moka y cacao", "Toque de nuez tostada"],
        descripcion: "Combinación exquisita de chocolate y café chiapaneco con textura suave y aroma inigualable."
    },

    // --- CHEESECAKES Y TARTAS (7 al 11) ---
    {
        id: 7,
        nombre: "Cheesecake New York con Frutos Rojos",
        precio: 480,
        categoria: "cheesecakes",
        etiqueta: "Favorito ⭐",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 rebanadas", "Horneado estilo New York", "Compota artesanal de frutos rojos", "Base crujiente de galleta"],
        descripcion: "Cremoso cheesecake horneado lentamente y cubierto con reducción casera de fresas, zarzamoras y frambuesas."
    },
    {
        id: 8,
        nombre: "Cheesecake de Zarzamora",
        precio: 460,
        categoria: "cheesecakes",
        etiqueta: "Disponible hoy",
        imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 rebanadas", "Queso crema Philadelphia", "Mermelada natural de zarzamora", "Listo para llevar"],
        descripcion: "Equilibrio perfecto entre la cremosidad del queso y el toque dulce-acidito de la zarzamora natural."
    },
    {
        id: 9,
        nombre: "Cheesecake Tortuga con Caramelo y Nuez",
        precio: 490,
        categoria: "cheesecakes",
        etiqueta: "Especial",
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 rebanadas", "Base de galleta de chocolate", "Dulce de leche y ganache", "Nueces pecanas tostadas"],
        descripcion: "Una delicia indulgente bañada en caramelo suave, hilos de chocolate y trozos de nuez."
    },
    {
        id: 10,
        nombre: "Tarta Francesa de Frutas Frescas",
        precio: 380,
        categoria: "cheesecakes",
        etiqueta: "Estilo París",
        imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 8 a 10 porciones", "Masa sablé crujiente de mantequilla", "Crema pastelera a la vainilla", "Frutas frescas brillantes"],
        descripcion: "Receta clásica de la repostería francesa con crema pastelera suave y selección de frutas del día."
    },
    {
        id: 11,
        nombre: "Cheesecake Lotus Biscoff",
        precio: 510,
        categoria: "cheesecakes",
        etiqueta: "Tendencia",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 10 a 12 rebanadas", "Crema y galleta Lotus original", "Textura ultra cremosa", "Decorado con borde de galleta"],
        descripcion: "Elaborado con el inconfundible sabor caramelizado de la galleta belga Lotus Biscoff."
    },

    // --- REBANADAS Y CUPCAKES (12 al 16) ---
    {
        id: 12,
        nombre: "Rebanada de Pastel Red Velvet o Zanahoria",
        precio: 75,
        categoria: "individuales",
        etiqueta: "En vitrina",
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
        detalles: ["Porción individual generosa", "Disponible en Zanahoria, Red Velvet o Chocolate", "Ideal para acompañar con café", "Para comer aquí o llevar"],
        descripcion: "¿Antojo de algo dulce hoy? Pide tu rebanada individual de nuestros pasteles estrella recién salidos de vitrina."
    },
    {
        id: 13,
        nombre: "Rebanada de Cheesecake Cremoso",
        precio: 80,
        categoria: "individuales",
        etiqueta: "Más pedido",
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        detalles: ["Porción individual", "Elige topping de fresa, zarzamora o caramelo", "Base crujiente", "Disponible todos los días"],
        descripcion: "La rebanada favorita de nuestros clientes en Tapachula, perfecta para disfrutar por la mañana o la tarde."
    },
    {
        id: 14,
        nombre: "Caja de 6 Cupcakes Petit Paris",
        precio: 210,
        categoria: "individuales",
        etiqueta: "Regalo ideal",
        imagen: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
        detalles: ["6 Cupcakes decorados", "Pan de chocolate y vainilla", "Frosting rosa cremoso y chispas", "Caja de regalo con ventana"],
        descripcion: "Seis hermosos cupcakes horneados del día con nuestro clásico betún rosa en espiral."
    },
    {
        id: 15,
        nombre: "Caja de Macarons Franceses (6 pzas)",
        precio: 195,
        categoria: "individuales",
        etiqueta: "Especialidad",
        imagen: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80",
        detalles: ["6 Macarons artesanales", "Sabores: Frambuesa, Pistache, Vainilla y Chocolate", "Harina de almendra fina", "Presentación para regalo"],
        descripcion: "El postre más emblemático de París: crujientes por fuera y suaves por dentro con rellenos intensos."
    },
    {
        id: 16,
        nombre: "Tiramisú Individual en Vaso",
        precio: 85,
        categoria: "individuales",
        etiqueta: "",
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
        detalles: ["Porción individual", "Soletas bañadas en espresso", "Crema de mascarpone suave", "Espolvoreado con cocoa fina"],
        descripcion: "Postre frío en capas con el balance ideal entre café recién extraído y crema dulce."
    },

    // --- CROISSANTS Y CAFÉ (17 al 20) ---
    {
        id: 17,
        nombre: "Croissant de Mantequilla Recién Horneado",
        precio: 55,
        categoria: "panaderia",
        etiqueta: "Recién horneado",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        detalles: ["Masa hojaldrada artesanal", "100% mantequilla", "Disponible natural, con jamón y queso o chocolate", "Horneado cada mañana"],
        descripcion: "Crujiente y dorado por fuera, suave y aireado por dentro. El desayuno parisino perfecto desde las 8:00 AM."
    },
    {
        id: 18,
        nombre: "Combo Petit Paris (Rebanada + Café o Jugo)",
        precio: 135,
        categoria: "panaderia",
        etiqueta: "Combo estrella",
        imagen: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
        detalles: ["1 Rebanada de pastel o cheesecake a elegir", "1 Café caliente/frío o jugo de naranja", "Para disfrutar en sucursal o para llevar", "Ahorra con este paquete"],
        descripcion: "La combinación perfecta que ves en nuestras fotos: tu rebanada favorita acompañada de un excelente café o jugo fresco."
    },
    {
        id: 19,
        nombre: "Combo Desayuno (Croissant Relleno + Café)",
        precio: 125,
        categoria: "panaderia",
        etiqueta: "Mañanas",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        detalles: ["1 Croissant salado con jamón y queso", "1 Café Americano, Capuchino o Latte", "Disponible desde las 8:00 AM", "Para llevar o comer en mesa"],
        descripcion: "Empieza tu mañana en Tapachula con un croissant caliente recién salido del horno y café de grano selecto."
    },
    {
        id: 20,
        nombre: "Caja de Mini Croissants y Pan Dulce (8 pzas)",
        precio: 220,
        categoria: "panaderia",
        etiqueta: "Para compartir",
        imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        detalles: ["8 piezas surtidas", "Mini croissants, chocolatinas y daneses", "Ideal para reuniones u oficina", "Empaque listo para mesa"],
        descripcion: "Charola de panadería francesa recién horneada para compartir con la familia o en el trabajo."
    },

    // --- DISEÑOS ESPECIALES Y EVENTOS (21 al 24) ---
    {
        id: 21,
        nombre: "Bento Cake Coreano con Mensaje",
        precio: 220,
        categoria: "eventos",
        etiqueta: "En tendencia",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 2 a 4 personas", "Personalizado con frase o dibujo corto", "Sabor vainilla o chocolate", "Empaque en cajita individual"],
        descripcion: "Mini pastel personalizado con el diseño, color y frase divertida o romántica que tú elijas."
    },
    {
        id: 22,
        nombre: "Pastel Vintage Aesthetic (15-20 personas)",
        precio: 580,
        categoria: "eventos",
        etiqueta: "Sobre pedido",
        imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 15 a 20 porciones", "Decorado con duyas estilo vintage y listón", "Elige colores y texto central", "Pídelo con 48 horas de anticipación"],
        descripcion: "Diseño elegante en tendencia con bordes decorados a mano, cerezas o perlas comestibles y tus colores favoritos."
    },
    {
        id: 23,
        nombre: "Pastel Infantil o Temático Personalizado",
        precio: 650,
        categoria: "eventos",
        etiqueta: "Personalizable",
        imagen: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 20 a 25 porciones", "Temática o personaje a tu elección", "Relleno de 3 leches, fresa o chocolate", "Cotización según diseño"],
        descripcion: "Creamos el pastel ideal para el cumpleaños de tus pequeños. Puedes mandarnos tu imagen de referencia por WhatsApp."
    },
    {
        id: 24,
        nombre: "Pastel de 2 Pisos para Bodas o XV Años",
        precio: 1450,
        categoria: "eventos",
        etiqueta: "Eventos",
        imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80",
        detalles: ["Rinde 40 a 50 personas", "Dos niveles con flores naturales o fondant", "Prueba de sabor disponible", "Agenda tu fecha por WhatsApp"],
        descripcion: "Pastel de gala diseñado a medida para bodas, XV años, bautizos y aniversarios importantes."
    }
];


/* ==========================================================================
   3. LÓGICA DEL CATÁLOGO, FILTROS, VENTANA EMERGENTE Y ENLACES
   ========================================================================== */
const gridCatalogo = document.getElementById("catalogo-grid");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const modal = document.getElementById("modal-ramo");
const btnCerrarModal = document.getElementById("cerrar-modal");

const nombresCategorias = {
    pasteles: "Pasteles Completos",
    cheesecakes: "Cheesecakes y Tartas",
    individuales: "Rebanadas y Cupcakes",
    panaderia: "Croissants y Café",
    eventos: "Diseños Especiales"
};

function mostrarProductos(lista) {
    gridCatalogo.innerHTML = "";

    lista.forEach((item) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-ramo";

        const etiquetaHTML = item.etiqueta 
            ? `<span class="etiqueta-ramo">${item.etiqueta}</span>` 
            : "";

        tarjeta.innerHTML = `
            <div class="tarjeta-img-caja">
                ${etiquetaHTML}
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
            </div>
            <div class="tarjeta-cuerpo">
                <div>
                    <h3 class="tarjeta-titulo">${item.nombre}</h3>
                    <p class="tarjeta-resumen">${item.descripcion}</p>
                </div>
                <div class="tarjeta-pie">
                    <span class="tarjeta-precio">$${item.precio} MXN</span>
                    <button class="btn-ver-mas">Ver porciones y detalles</button>
                </div>
            </div>
        `;

        tarjeta.addEventListener("click", () => abrirModal(item));
        gridCatalogo.appendChild(tarjeta);
    });

    activarAnimacionScroll();
}

function abrirModal(item) {
    document.getElementById("modal-img").src = item.imagen;
    document.getElementById("modal-img").alt = item.nombre;
    document.getElementById("modal-titulo").textContent = item.nombre;
    document.getElementById("modal-precio").textContent = `$${item.precio} MXN`;
    document.getElementById("modal-descripcion").textContent = item.descripcion;
    document.getElementById("modal-categoria").textContent = nombresCategorias[item.categoria] || "Menú Petit Paris";

    const etiquetaModal = document.getElementById("modal-etiqueta");
    if (item.etiqueta) {
        etiquetaModal.textContent = item.etiqueta;
        etiquetaModal.style.display = "inline-block";
    } else {
        etiquetaModal.style.display = "none";
    }

    const listaDetalles = document.getElementById("modal-flores");
    listaDetalles.innerHTML = "";
    item.detalles.forEach((detalle) => {
        const li = document.createElement("li");
        li.textContent = `• ${detalle}`;
        listaDetalles.appendChild(li);
    });

    const mensaje = `Hola Petit Paris, vi en su catálogo web el *${item.nombre}* ($${item.precio} MXN) y me gustaría consultar disponibilidad.`;
    const urlWhatsApp = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    document.getElementById("modal-btn-whatsapp").href = urlWhatsApp;

    modal.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    modal.classList.remove("activo");
    document.body.style.overflow = "auto";
}

btnCerrarModal.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
});

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoriaSeleccionada = boton.getAttribute("data-categoria");

        if (categoriaSeleccionada === "todos") {
            mostrarProductos(catalogoProductos);
        } else {
            const filtrados = catalogoProductos.filter(
                (item) => item.categoria === categoriaSeleccionada
            );
            mostrarProductos(filtrados);
        }
    });
});

function activarAnimacionScroll() {
    const tarjetas = document.querySelectorAll(".tarjeta-ramo");
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada, index) => {
            if (entrada.isIntersecting) {
                setTimeout(() => {
                    entrada.target.classList.add("visible");
                }, (index % 4) * 80);
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.1 });

    tarjetas.forEach((t) => observador.observe(t));
}

function inicializarEnlacesContacto() {
    const msgGeneral = "Hola Petit Paris, vi su página web y tengo una consulta.";
    document.getElementById("btn-whatsapp-flotante").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgGeneral)}`;

    const msgPersonalizado = "Hola Petit Paris, me gustaría cotizar un pastel personalizado con ustedes.";
    document.getElementById("btn-whatsapp-personalizado").href = 
        `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(msgPersonalizado)}`;

    document.getElementById("btn-google-maps").href = CONFIG.enlaceGoogleMaps;
    document.getElementById("texto-direccion").textContent = CONFIG.direccionTexto;

    const numeroLimpio = CONFIG.telefonoLlamada.replace(/\s+/g, "");
    document.getElementById("btn-llamar").href = `tel:+52${numeroLimpio}`;
    document.getElementById("numero-visible").textContent = CONFIG.telefonoLlamada;
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarEnlacesContacto();
    mostrarProductos(catalogoProductos);
});