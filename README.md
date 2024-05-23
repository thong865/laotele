<img src="https://github.com/thong865/laotele/blob/master/image/rainb-bg-lao-tele.png"/>

<div align="center">

[![npm version](https://img.shields.io/npm/v/lao-tele.svg?style=flat-square)](https://www.npmjs.org/package/lao-tele)


</div>


## Installing

### Package manager

Using npm:

```bash
$ npm install lao-tele
```

Using bower:

```bash
$ bower install lao-tele
```

Using yarn:

```bash
$ yarn add lao-tele
```

Using pnpm:

```bash
$ pnpm add lao-tele
```

You can also use the default export, since the named export is just a re-export from the `laotele` factory:

```js
import laotele from 'lao-tele';

console.log(laotele('55555555')) /* -> if number is correct return the same input 55555555;*/

```

```js

console.log(laotele('55555555').countryCode()) /* -> transform to  8562055555555;*/

```


```js

console.log(laotele('55555555').countryCode({internal:true})) /* -> transform to  2055555555;*/

console.log(laotele('55555555').countryCode({internal:true,zerostart:true})) /* -> transform to  02055555555;*/

```

* Extract Phone number

```js

console.log(laotele('55555555').extractPhone({internal:true})) /* -> transform and return Object is  {ccode:'85620',incode:'20',dial:'55555555'};*/

console.log(laotele('55555555').extractPhone({internal:true,zerostart:true})) /* -> transform and return Object is  {ccode:'85620',incode:'020',dial:'55555555'};*/

```

## laotele API



--- | --- | --- |
API | Options | Description |
`.countryCode()` | `Object`. 
- `internal`: `false|true` and default is false. 

-  `zerostart`: `false|true` and default is false  | `countryCode` make transform return with phone country code of Laos like 85620 or 85630.
-  `internal` is optional of `countryCode` to transform return internal phone code like `20xxxxxxxx | 30xxxxxxx` . by defual is `false`.
-  `zerostart` is optional of `countryCode` use it together  `internal`. it's option to return internal phone code like `020xxxxxxxx | 030xxxxxxx`|
`.extractPhone()` | `Object`. 
- `internal`: `false|true` and default is false. 

-  `zerostart`: `false|true` and default is false  | `internal` make transform and extract phone number with country code, internal code and phone number of Laos like `{ccode:'85620' | '85630', incode: '20'|'30',dial: '55555555'}`
-  `zerostart` is optional of `extractPhone` to add `0` to internal code like: `020 | 030` |



## License

[MIT](LICENSE)