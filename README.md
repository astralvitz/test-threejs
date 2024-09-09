## init
`npm i vite@latest ./`
options: react, javascript
`npm i -D tailwindcss postcss autoprefixer`
`npm tailwindcss init -p`
`npm run dev`

### for hero section
`npm i three @react-three/fiber @react-three/drei react-responsive leva`

### eslint update for threejs
`npm i @react-three/eslint-plugin --save-dev`
https://dev.to/chrislanejones/how-to-add-react-three-fiber-rules-to-eslint-v900-36in

and add to `eslint.config.js`:

`import ReactThreeFiber from '@react-three/fiber';`
and
`'@react-three': ReactThreeFiber,`
optionally add to rules `'react/no-unknown-property': 'off',`

## notes
- convert GLTF files to jsx components https://gltf.pmnd.rs/

## ideas
- Anju's room
- LavitzStar
- Starscape
- me (TLoD, Warcraft, Starcraft, Three Kingdoms...)