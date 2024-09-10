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

### gsap
`npm i @gsap/react gsap`

`import gsap from "gsap";`
`import { useGSAP } from "@gsap/react";`

### others
`npm i maath`

## notes
- convert GLTF files to jsx components https://gltf.pmnd.rs/
- use react-window to not render out-of-view components
- recreate my more obscure favorites. even if 50,000 people have seen something, there are 1,000,000,000+ people who haven't.

## ideas
- Anju's room
- LavitzStar
- Starscape
- me (TLoD, Warcraft, Starcraft, Three Kingdoms...)