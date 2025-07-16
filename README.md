# 👑 Reinas del Chisme

Simulador de una batalla épica entre chismosas profesionales, donde cada una usa su estilo único para recolectar y difundir información. Al final, se determina quién logra hacer el chisme más viral.
```
batalla-chismes/
├── classes/
│ ├── Chismosa.js
│ ├── TiaVecina.js
│ ├── CompaneraCuriosa.js
│ └── EstudianteEspia.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Instrucciones para correr el proyecto

1. **Clona el repositorio:**

```bash
git clone https://github.com/07Manu03M/ReinitasDelChisme.git
cd ReinitasDelChisme
```

## Instala las dependencias:
1. Se usa chalk versión 4.1.2 para formatear salidas en consola:

```bash
npm install chalk@4.1.2
```

2. Ejecuta el proyecto:

```bash
npm start
```

## 📌 Requisitos técnicos

- Node.js instalado en tu máquina.

- Uso obligatorio de clases, herencia y métodos abstractos.

- Cada tipo de chismosa implementa su propia lógica de recolección y difusión de información.

- El sistema simula 2 rondas de chismes.

- Se utilizan valores aleatorios (Math.random()) para modificar reputación y nivel de chisme.

## 🧠 Lógica de clases
## 🔹 Chismosa (Clase abstracta)

### Propiedades privadas:

- #reputacion

- #nivelChisme

### Métodos abstractos:

- recolectarInfo()

- contarChisme()

### Métodos concretos:

- getReputacion()

- getNivelChisme()

## 🔹 TiaVecina
- Escucha en reuniones del barrio.

- Difunde el chisme mientras ofrece café.

- Aumenta mucho el nivel del chisme, pero puede perder reputación por exagerar.

## 🔹 CompaneraCuriosa
- Hace preguntas en el trabajo.

- Difunde como si fuera un ejemplo de vida.

- Gana reputación, pero el chisme sube lento.

## 🔹 EstudianteEspia
- Lee chats ajenos desde el salón.

- Difunde en estados de WhatsApp.

- El chisme sube rápido, pero puede perder reputación si es descubierta.

## 📊 Salida esperada
- Rondas con acciones de cada chismosa.

- Estadísticas finales: reputación y nivel de chisme.

- Se muestra quién fue la reina del chisme más viral.

# ✍️ Autor
- Manuel Meneses

