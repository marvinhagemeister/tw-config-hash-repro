# Tailwind object hash performance reproduction

Steps to reproduce:

1. Clone this repo
2. Run `npm i`
3. Run `node foo.mjs` -> observe time printed to console
4. Edit `node_modules/tailwindcss/lib/util/hashConfig.js` and replace the contents of the hashing function with `JSON.stringify(config)`
   ```diff
     function hashConfig(config) {
   -   return (0, _objecthash.default)(config, {
   -     ignoreUnknown: true
   -   });
   +   return JSON.stringify(config);
     }
   ```
5. Run `node foo.mjs` again -> observe much faster time
