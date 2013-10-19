#fat.js


###How to Use
include `fat.js`
```html
<script src="fat.js"></script>
```

Examples for HTML Tags:

A necessary parameter  `width`x`height`
```html
<fat 200x200></fat>
```

All parameters are `width`x`height`&`background color`&`font color`
```html
<fat 120x80&#BEDDFF&#fff>Logo</fat>
```

###Javascript API
fat.js create a global variable `FatPlaceHolder`

###### setDefault
```js
// default settings
FatPlaceHolder.setDefault({
  fontSize: 16,
  color: '#999',
  bg: '#ddd'
})
```

###### init
```js
// initialization all fat elements
FatPlaceHolder.init()
```

###### update
```js
// for the dynamic  elements
FatPlaceHolder.update()
```
