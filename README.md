# ¿Quieres ser mi novia? — Mini sitio estático

Sitio romántico, moderno y de colores cálidos con la pregunta **“¿Quieres ser mi novia?”**. Incluye dos rutas:
- `si.html`: cara feliz y mensaje positivo
- `no.html`: cara triste y mensaje empático

## Correr localmente
```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Subir a GitHub
```bash
git init
git add .
git commit -m "feat: sitio pregunta romantica"
git branch -M main
git remote add origin git@github.com:TU_USUARIO/quieres-ser-mi-novia.git
git push -u origin main
```

## Desplegar en Vercel
1) Conecta tu GitHub en Vercel y selecciona el repo.  
2) Framework: **Other** (estático).  
3) Deploy automático a producción.

## Estructura
- index.html / si.html / no.html
- styles.css / app.js
- assets/favicon.svg / assets/heart.svg
- README.md
