# simple-tcpscan
対象のホストのTCPポートが空いているかどうかをチェックします。

Promiseで返ってくるので、スッキリとしたコードにできます。

## インストール方法
```bash
npm install -S simple-tcpscan
```

## 使用方法(例)

### app.js
```javascript
const tcpscan = require('simple-tcpscan');
tcpscan.run({'host': 'localhost', 'port': 3000}).then(() => console.log('OK'), () => console.log('NG'));
```

```bash
$ node app.js

OK
```

## オプション

host: チェック対象のホスト名

port: チェック対象のポート

timeout: 接続までのタイムアウト(ms), デフォルト 1000ms


## ライセンス

MIT License

Copyright (c) 2017 Kentaro Kajino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
