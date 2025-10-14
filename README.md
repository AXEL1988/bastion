# Bastione Legal Corp - Website

Sitio web informativo de una sola página para Bastione Legal Corp, especialistas en derecho de familia y alimentos.

## 🚀 Tecnologías

- **HTML5** - Estructura semántica y accesible
- **SCSS** - Estilos modularizados y escalables
- **JavaScript ES6+** - Funcionalidad moderna con módulos
- **Vanilla JS** - Sin dependencias de frameworks

## 📁 Estructura del Proyecto

```
Bastion/
├── index.html
├── assets/
│   ├── scss/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── layout/
│   │   │   ├── _grid.scss
│   │   │   ├── _header.scss
│   │   │   └── _footer.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _about.scss
│   │   │   ├── _service.scss
│   │   │   ├── _team.scss
│   │   │   └── _contact.scss
│   │   └── main.scss
│   ├── js/
│   │   ├── modules/
│   │   │   ├── navigation.js
│   │   │   ├── smoothScroll.js
│   │   │   ├── animations.js
│   │   │   └── contactLinks.js
│   │   └── main.js
│   └── images/
├── dist/
│   └── css/
└── README.md
```

## 🎨 Paleta de Colores

- **Primary Dark**: `#2B2B2B`
- **Primary Gray**: `#888888`
- **White**: `#FFFFFF`
- **Black**: `#000000`
- **Light Gray**: `#F5F5F5`

## 🔤 Tipografía

- **Títulos**: Playfair Display (serif)
- **Textos**: Inter (sans-serif)

## 🛠️ Compilación de SCSS

### Opción 1: Live Sass Compiler (VS Code)

1. Instalar la extensión "Live Sass Compiler" en VS Code
2. Abrir `main.scss`
3. Click en "Watch Sass" en la barra inferior
4. El CSS compilado se generará en `dist/css/main.css`

### Opción 2: Sass CLI

```bash
# Instalar Sass globalmente
npm install -g sass

# Compilar una vez
sass assets/scss/main.scss dist/css/main.css

# Watch mode (compilación automática)
sass --watch assets/scss/main.scss:dist/css/main.css
```

### Opción 3: NPM Scripts (recomendado para producción)

```bash
# Instalar dependencias
npm install

# Modo desarrollo (watch)
npm run dev

# Compilar para producción (minificado)
npm run build
```

## 🌐 Desarrollo Local

### Servidor Local Simple

**Opción 1: VS Code Live Server**
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. Seleccionar "Open with Live Server"

**Opción 2: Python**
```bash
# Python 3
python -m http.server 8000

# Abrir: http://localhost:8000
```

**Opción 3: Node.js**
```bash
npx serve .
```

## ✨ Características

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación suave entre secciones
- ✅ Animaciones al scroll (Intersection Observer)
- ✅ Menú móvil funcional
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ SEO optimizado
- ✅ Performance optimizado
- ✅ Código limpio y mantenible

## 📱 Secciones

1. **Header** - Navegación fija
2. **Hero** - Mensaje principal y CTA
3. **About** - Misión y Visión
4. **Service** - Tu Demanda Express
5. **Team** - Equipo de abogados
6. **Contact** - Información de contacto
7. **Footer** - Información adicional y redes sociales

## 🔧 Personalización

### Cambiar Colores

Editar `assets/scss/abstracts/_variables.scss`:

```scss
$color-primary-dark: #TU_COLOR;
$color-primary-gray: #TU_COLOR;
```

### Cambiar Tipografías

1. Actualizar Google Fonts en `index.html`
2. Modificar variables en `_variables.scss`:

```scss
$font-primary: 'Tu-Fuente-Titulo', serif;
$font-secondary: 'Tu-Fuente-Texto', sans-serif;
```

### Agregar Imágenes

1. Colocar imágenes en `assets/images/`
2. Actualizar rutas en `index.html`

## 📄 Licencia

© 2025 Bastione Legal Corp. Todos los derechos reservados.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ siguiendo las mejores prácticas de desarrollo web moderno.

# bastion
