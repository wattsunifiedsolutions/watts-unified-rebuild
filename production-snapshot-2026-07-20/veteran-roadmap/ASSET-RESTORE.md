# Veteran Roadmap image restoration

The optimized production images are stored as Base64 text so the connected GitHub backup can preserve the binary files without exposing credentials.

From the `veteran-roadmap/assets` directory, restore each image with:

```sh
base64 --decode brand.webp.b64 > brand.webp
base64 --decode hero.webp.b64 > hero.webp
base64 --decode portrait.webp.b64 > portrait.webp
base64 --decode secondary.png.b64 > secondary.png
```

On macOS, use `base64 -D` instead of `base64 --decode` if needed. The decoded filenames match the references already used by `index.html` and `styles.css`.
