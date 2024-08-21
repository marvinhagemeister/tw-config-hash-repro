import postcss from "postcss"
import tailwindcss from "tailwindcss"

console.time("processing")
const processor = postcss(tailwindcss({config: {
  content: ["content/**/*.html"]
}}))

const CSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`

for (let i = 0; i < 10; i++) {
  await processor.process(CSS, { from: "foo.css"})
}
console.timeEnd("processing")