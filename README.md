# Staticizer Dynamics Demo

## How to Run

```bash
npm install
npm run build # to build files into /dist
npm run dev # to launch dev server on 8080
```

## Description

This demo defines two dynamic path segments in `staticizer.config.js`:

- `product_id` that represents an ID of a product in list (`0` and `1` in this demo);
- `color` that can be `'blue'`, `'red'` or `'black'`.

The structure of pages in `src/pages` renders into the following:

```
dist/
    index.html (contains a catalogue of products)
    products/
        0/
            index.html (page of #0 product)
            edit.html (an 'edit' page for #0 product, does not edit anything actually)
        1/
            index.html (page of #1 product)
            edit.html (an 'edit' page for #1 product)

    black/
        0.html (these pages does not have any sense, just a demo of nested dynamic path segments)
        1.html
    red/
        0.html
        1.html
    blue/
        0.html
        1.html
```

As you can see, files or directories named `_product_id` are *unwrapped* into `0` and `1`
(because this fragment has `mode: 'keys'`), and ones named `_color` are unwrapped into
`'blue'`, `'red'` and `'black'` (because it has `mode: 'values'`).
