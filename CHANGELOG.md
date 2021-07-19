#### 2.0.1 (2021-07-19)

##### Chores

* **package:**  Minor cleanup ([b99811f7](https://github.com/fvdm/nodejs-bitonic/commit/b99811f7182184e045d493a05d5452de231755bf))

##### Bug Fixes

* **package:**  RunKit example key renamed ([4970a456](https://github.com/fvdm/nodejs-bitonic/commit/4970a4566e041fa134789416fba0169819fbd321))

## 2.0.0 (2021-07-19)

##### Breaking Changes

*  Rewritten to a class with promises ([#7](https://github.com/fvdm/nodejs-bitonic/pull/7)) ([d91a1c02](https://github.com/fvdm/nodejs-bitonic/commit/d91a1c02720fdf8733785cd8d46d3d1b6328b95b))

##### Chores

* **github:**  Added Dependabot action ([d5ad26a0](https://github.com/fvdm/nodejs-bitonic/commit/d5ad26a0c869d23df5aa711f38e72dad7131c87f))
* **package:**  Update dependencies ([d055813b](https://github.com/fvdm/nodejs-bitonic/commit/d055813b026521df7436b47e6899a4c0db01746d))
*  Clean up old stuff ([88f8105b](https://github.com/fvdm/nodejs-bitonic/commit/88f8105be10f106a534e5031bb4bb432b57b44b6))

##### Documentation Changes

*  Fixed example typo ([9495d87d](https://github.com/fvdm/nodejs-bitonic/commit/9495d87d6fda753ad84e6596dc259b05c7a713b2))
* **badges:**  Replaced Travis with Github action ([40811e0b](https://github.com/fvdm/nodejs-bitonic/commit/40811e0b733385201d22d0e6210c167bdf1905dd))

##### Bug Fixes

*  Global config const ([f466c72f](https://github.com/fvdm/nodejs-bitonic/commit/f466c72fb6128adbeefa2b329c19dabb6bcb4e47))
*  Wrong mapping from and amount params ([6615a9d1](https://github.com/fvdm/nodejs-bitonic/commit/6615a9d1e8f5276b4bebce395564700058fc5d38))
*  Config timeout in setup() ([84925c2f](https://github.com/fvdm/nodejs-bitonic/commit/84925c2f3de6f46f762a8ebfa4e5ae94de19bb9e))
*  Syntax typo ([f2a5d57d](https://github.com/fvdm/nodejs-bitonic/commit/f2a5d57df6d30616a9a949c560f7fd2851430700))

##### Refactors

*  Simplified parameters ([9b6c67c4](https://github.com/fvdm/nodejs-bitonic/commit/9b6c67c4adf6e8c90a7b81f67be52c657d28be6e))
*  Only require doRequest from httpreq ([da6668d4](https://github.com/fvdm/nodejs-bitonic/commit/da6668d4e109f83e87ee436ada2bf5de9846caa6))
*  Modernized inner workings ([5e23a64e](https://github.com/fvdm/nodejs-bitonic/commit/5e23a64ed32070ef65ad06e7c019a81c3aeeeb5d))

##### Code Style Changes

*  Remove unused var ([e9a0370d](https://github.com/fvdm/nodejs-bitonic/commit/e9a0370de99c3dbbfbd58fab9b6bf4ffb66b2960))
* **lint:**
  *  Fixed trailing commas ([f29a2cd2](https://github.com/fvdm/nodejs-bitonic/commit/f29a2cd25bc779afe7828d4e4f436f917b532521))
  *  Fixed dangling underscores ([7fd7c6ae](https://github.com/fvdm/nodejs-bitonic/commit/7fd7c6ae457cd566e937f5a4a210a530e646d8df))
  *  Fixed lint errors ([ae184629](https://github.com/fvdm/nodejs-bitonic/commit/ae184629120d96d5d86c00bd5052023e48bcb943))

##### Tests

* **config:**
  *  Added Github action for Node ([ba4bf572](https://github.com/fvdm/nodejs-bitonic/commit/ba4bf572dc51e4a82b170cd8d351115244dd7c5b))
  *  Added CodeQL analysis ([2f90868d](https://github.com/fvdm/nodejs-bitonic/commit/2f90868d5bdebe13582605de1703c965586d3e43))
  *  Modernized ESLint ([50f8c591](https://github.com/fvdm/nodejs-bitonic/commit/50f8c5910acaf884a3f505fbe40bfca94bce8729))
  *  Update Travis node versions and env ([cf43c3fa](https://github.com/fvdm/nodejs-bitonic/commit/cf43c3fae8ef260f02ab0d83ccee5d2f23275601))
  *  Update Travis CI node versions ([66ab2f9f](https://github.com/fvdm/nodejs-bitonic/commit/66ab2f9f18ab5d29285ee892556b27641d239bb4))
* **package:**  Change dev deps to dotest ([a7fdad8a](https://github.com/fvdm/nodejs-bitonic/commit/a7fdad8a70eefd0bb04fbebfd9bc20c630e8e1dc))

#### 1.0.1 (2017-09-06)

##### Chores

* **example:** Fixed config ([61333352](https://github.com/fvdm/nodejs-bitonic/commit/6133335218dac8b1d6f6243e141f92535915aaf9))

##### Documentation Changes

* **readme:** Fixed config ([90ca5dff](https://github.com/fvdm/nodejs-bitonic/commit/90ca5dff572b2ba4e45867c4fd40ccc3c74e8f55))

## 1.0.0 (2017-09-06)

### 0.2.0 (2017-09-04)

##### Documentation Changes

* **readme:**
  * Fixed autocorrect typos ([cb451cef](https://github.com/fvdm/nodejs-bitonic/commit/cb451cef7a1dee83b0e0febaae46e7f7494b9466))
  * Added method parameter to price.buy ([31a63281](https://github.com/fvdm/nodejs-bitonic/commit/31a63281e9dfe3598853afa786b603bb0619bc90))
  * Optional params now required ([7a0bdf03](https://github.com/fvdm/nodejs-bitonic/commit/7a0bdf03150fd2f7fc54043803436e756c27a158))

##### New Features

* **priceBuy:** Added method parameter ([802d7ce0](https://github.com/fvdm/nodejs-bitonic/commit/802d7ce058860f76eff689614a893cb0cd76e4f1))

##### Refactors

* **priceBuy:** Optional params now required ([fef7948a](https://github.com/fvdm/nodejs-bitonic/commit/fef7948a7c13da17b7c54fa3efbe61385b24499b))
* **priceSell:** Optional params now required ([edb55835](https://github.com/fvdm/nodejs-bitonic/commit/edb558358ac060a825790db3739630bd32b81b70))

##### Tests

* **main:**
  * Added price.sell test ([fa754f70](https://github.com/fvdm/nodejs-bitonic/commit/fa754f7062dbf54dfc12fa11dfadc8ff75bbd668))
  * Added price.buy with method param ([3eb9d934](https://github.com/fvdm/nodejs-bitonic/commit/3eb9d93431e17306184ab48c79d28a3d2193770f))
  * Added price.buy with default method ([bf483fdf](https://github.com/fvdm/nodejs-bitonic/commit/bf483fdf44a4d124abdcf16a14802ccba25534de))

#### 0.1.1 (2017-09-01)

##### Bug Fixes

* **request:** Fixed syntax typo ([d7433034](https://github.com/fvdm/nodejs-bitonic/commit/d7433034c9daea4e76a9723aaafd2b73550b16de))

##### Other Changes

* **request:** Added user-agent header ([733abce6](https://github.com/fvdm/nodejs-bitonic/commit/733abce653ca0e30cb94c89e0c8471d02c7905d6))

##### Refactors

* **response:** API always returns JSON data ([e8be4e42](https://github.com/fvdm/nodejs-bitonic/commit/e8be4e42a9c9e61b70ce7bda340092131914a3c9))

##### Tests

* **main:** Add timeout error test ([96570758](https://github.com/fvdm/nodejs-bitonic/commit/96570758cdbf42ffed3e0ffef72c13e30f4467ec))

### 0.1.0 (2017-08-31)

##### Chores

* **example:** Fixed data refs ([43d802ba](https://github.com/fvdm/nodejs-bitonic/commit/43d802ba012c2a5900a8a1b7999240d9be237435))

##### Documentation Changes

* **badges:** Added status badges to README.md ([0b97ba78](https://github.com/fvdm/nodejs-bitonic/commit/0b97ba78747db331db23e8d63b56d2bfd7d35d95))
* **readme:**
  * Fixed typos ([5d4e974d](https://github.com/fvdm/nodejs-bitonic/commit/5d4e974db6bd86e36ecd497a25b73972c2081062))
  * Added methods with examples ([42cddb16](https://github.com/fvdm/nodejs-bitonic/commit/42cddb1686030c599aff08dec6f4b43e8beeff37))
  * Added README.md contents ([ed60075c](https://github.com/fvdm/nodejs-bitonic/commit/ed60075c790d857e8b83ca71a77be000a6e05702))

##### Bug Fixes

* **request:** Fixed invalid request path ([8d19474e](https://github.com/fvdm/nodejs-bitonic/commit/8d19474e9b434b8e4ea8607f3d2e7f11f530bf0b))
* **setup:**
  * Fixed bad variable ref ([974a1de6](https://github.com/fvdm/nodejs-bitonic/commit/974a1de6544ff3b0239e217a54476aab98a2368e))
  * Fixed syntax error ([bd9f24e5](https://github.com/fvdm/nodejs-bitonic/commit/bd9f24e5f5f9d84b43aecc27972f2f26f6126827))
  * Fixed object iteration ([dced45c5](https://github.com/fvdm/nodejs-bitonic/commit/dced45c51ffbff51413beb590b8950252bfa4733))

##### Refactors

* **package:** Minimum node v6.0 ([57dffeec](https://github.com/fvdm/nodejs-bitonic/commit/57dffeec00b9062211e499587fd3d0700e2c0bf3))

##### Code Style Changes

* **comments:** Fixed JSDoc optional params ([f2085fa6](https://github.com/fvdm/nodejs-bitonic/commit/f2085fa6783df95f5c04c9048e46b6628ce4389f))
* **lint:** Fixed lint errors ([95a3c787](https://github.com/fvdm/nodejs-bitonic/commit/95a3c787bd80fb3b299e5fe4704fad850fb37935))

##### Tests

* **travis:** Minimum node version v6.0 ([47a96a25](https://github.com/fvdm/nodejs-bitonic/commit/47a96a25a50d925a7a9368e8050d2f641527ba32))
* **main:** Added test.js with basics ([dbd0eed6](https://github.com/fvdm/nodejs-bitonic/commit/dbd0eed65fd0ec301715aa05663a9ff3609e0b48))

