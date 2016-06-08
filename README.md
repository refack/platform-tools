# platform-tools

A toolchain to build and compile native dependencies with and for Node.

[![Build Status](https://travis-ci.org/eljefedelrodeodeljefe/platform-tools.svg?branch=master)](https://travis-ci.org/eljefedelrodeodeljefe/platform-tools) [![Build status](https://ci.appveyor.com/api/projects/status/59q34ua3i457k27x?svg=true)](https://ci.appveyor.com/project/eljefederodeodeljefe/platform-tools) [![Join the chat at https://gitter.im/eljefedelrodeodeljefe/platform-tools](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/eljefedelrodeodeljefe/platform-tools?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM](https://nodei.co/npm-dl/platform-tools.png?months=6&height=2)](https://nodei.co/npm/platform-tools/)

## TL;DR

> Compile C/C++ and native node addons with Node.js. Under the hood this is shelling
out to `gcc`, `clang` and `cl.exe` in a similar way `make` does. To mitigate `gyp` and
`autotools` dependencies node users (eventually) could use this.

Assume a file `exit_with_1.c`

```c
int main(int argc, char const* argv[]) {
  return 1;
}
```

The below would be an example of emulating with Node.js

```console
gcc -c exit_with_1
gcc -o exit_with_1.o
./exit_with_1
```

```js
const platform_tools = require('platform-tools')
const spawn = require('child_process').spawn

let out = 'exit_with_1'
// first compile without linking
platform_tools.compile('exit_with_1.c', {output: `${out}.o`}, () => {
	// then link the object file (here an easy case)
	platform_tools.link(`${out}.o`, {output: out}, () => {
		// now execute the compiled binary and expect the C-program to end
		// with code 1
		const cp = spawn(out, [], {shell: true});
		cp.on('close', (code) => {
			assert(code === 1), 'Compiled binary exit_with_1 must exit with code 1')
		})
	})
})
```

## Implementation Status<a name="status"></a>
| Method | implemented |
| --- | --- |
| .compile(source [,options, cb]) | **yes** |
| .compileAddon(source [,options, cb]) | **yes** |
| .link(object [,options, cb]) | **yes** |
| .config(library [,options, cb]) | **yes** |



### Overview

### Technical Overview

**Rquirements:**
* Node 4.5.0+

## Platform

This module is currently tested on:

| Platform | 0.10 | 0.12 | 4.0 | 5.0 | 6.0 |
| --- | --- | --- | --- | ---| ---|---|
| Mac OS X | - | - | **yes** | **yes**| **yes** |
| BSDs| - | - | **yes** | **yes**| **yes** |
| Linux | - | - | **yes** | **yes**  | **yes** |
| Windows | - | - | **yes** | **yes**  | **yes** |

## Roadmap

* have more complex C/C++ files compile and link
* make native addons built
* make node built
* make v8 v8
* override values that the lib takes as assumption


## API
<a name="PlatformTools"></a>

## PlatformTools
**Kind**: global class  

* [PlatformTools](#PlatformTools)
    * [.compile(source, cb)](#PlatformTools+compile) ⇒ <code>Callback</code>
    * [.link(object, options, cb)](#PlatformTools+link) ⇒ <code>Callback</code>
    * [.config(lib, cb)](#PlatformTools+config) ⇒ <code>Callback</code>
    * [.compileAddon(addonSrcFile, options, cb)](#PlatformTools+compileAddon) ⇒ <code>Callback</code>

<a name="PlatformTools+compile"></a>

### platformTools.compile(source, cb) ⇒ <code>Callback</code>
Compiles a given source code file to the platforms object code

**Kind**: instance method of <code>[PlatformTools](#PlatformTools)</code>  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>String</code> | Path to source |
| cb | <code>function</code> | Optional callback for completion |

<a name="PlatformTools+link"></a>

### platformTools.link(object, options, cb) ⇒ <code>Callback</code>
Links mutiple objects and libraries to a binary

**Kind**: instance method of <code>[PlatformTools](#PlatformTools)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>String</code> | Path for name of object code file |
| options | <code>Object</code> | Options object |
| cb | <code>function</code> | Optional callback |

<a name="PlatformTools+config"></a>

### platformTools.config(lib, cb) ⇒ <code>Callback</code>
Returns the necessary libraries to link against, similarly to pkg-config(1).

**Kind**: instance method of <code>[PlatformTools](#PlatformTools)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lib | <code>String</code> | Library to search dependencies against |
| cb | <code>function</code> | Optional Callback upon completion |

<a name="PlatformTools+compileAddon"></a>

### platformTools.compileAddon(addonSrcFile, options, cb) ⇒ <code>Callback</code>
This method compiles node native addons end-to-end. Motivation behind this
high level approach is past struggles with this technique, and especially
different behaviors across platforms. Eventually this method should take
care of all of the above. If the user has special cases, it is still
possible to pass instructions via the options object and (item for roadmap)
override certain common variables forcefully.

**Kind**: instance method of <code>[PlatformTools](#PlatformTools)</code>
**Returns**: <code>Callback</code> - returns optional callback

| Param | Type | Description |
| --- | --- | --- |
| addonSrcFile | <code>String</code> | Path to source file |
| options | <code>Object</code> | Options object |
| cb | <code>function</code> |  |

## License

MIT
