<a name="PlatformTools"></a>

## PlatformTools
**Kind**: global class  

* [PlatformTools](#PlatformTools)
    * [.compile(source, cb)](#PlatformTools+compile) ⇒ <code>Callback</code>
    * [.link(object, options, cb)](#PlatformTools+link) ⇒ <code>Callback</code>
    * [.pkgConfig(lib, cb)](#PlatformTools+pkgConfig) ⇒ <code>Callback</code>

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

<a name="PlatformTools+pkgConfig"></a>

### platformTools.pkgConfig(lib, cb) ⇒ <code>Callback</code>
Returns the necessary libraries to link against, similarly to pkg-config(1).

**Kind**: instance method of <code>[PlatformTools](#PlatformTools)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lib | <code>String</code> | Library to search dependencies against |
| cb | <code>function</code> | Optional Callback upon completion |
