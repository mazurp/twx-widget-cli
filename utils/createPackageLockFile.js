const fs = require('fs');
const path = require('path');

module.exports = (pathDir) =>{
    let packageLockJSON = {
      "name": "demoWebpack",
      "version": "1.0.0",
      "lockfileVersion": 1,
      "requires": true,
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.0.0.tgz",
          "integrity": "sha512-OfC2uemaknXr87bdLUkWog7nYuliM9Ij5HUcajsVcMCpQrcLmtxRbVFTIqmcSkSeYRBFBRxs2FiUqFJDLdiebA==",
          "dev": true,
          "requires": {
            "@babel/highlight": "^7.0.0"
          }
        },
        "@babel/core": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.0.1.tgz",
          "integrity": "sha512-7Yy2vRB6KYbhWeIrrwJmKv9UwDxokmlo43wi6AV84oNs4Gi71NTNGh3YxY/hK3+CxuSc6wcKSl25F2tQOhm1GQ==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/generator": "^7.0.0",
            "@babel/helpers": "^7.0.0",
            "@babel/parser": "^7.0.0",
            "@babel/template": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0",
            "convert-source-map": "^1.1.0",
            "debug": "^3.1.0",
            "json5": "^0.5.0",
            "lodash": "^4.17.10",
            "resolve": "^1.3.2",
            "semver": "^5.4.1",
            "source-map": "^0.5.0"
          }
        },
        "@babel/generator": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.0.0.tgz",
          "integrity": "sha512-/BM2vupkpbZXq22l1ALO7MqXJZH2k8bKVv8Y+pABFnzWdztDB/ZLveP5At21vLz5c2YtSE6p7j2FZEsqafMz5Q==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.10",
            "source-map": "^0.5.0",
            "trim-right": "^1.0.1"
          }
        },
        "@babel/helper-annotate-as-pure": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.0.0.tgz",
          "integrity": "sha512-3UYcJUj9kvSLbLbUIfQTqzcy5VX7GRZ/CCDrnOaZorFFM01aXp1+GJwuFGV4NDDoAS+mOUyHcO6UD/RfqOks3Q==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-builder-binary-assignment-operator-visitor": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.0.0.tgz",
          "integrity": "sha512-9HdU8lrAc4FUZOy+y2w//kUhynSpkGIRYDzJW1oKJx7+v8m6UEAbAd2tSvxirsq2kJTXJZZS6Eo8FnUDUH0ZWw==",
          "dev": true,
          "requires": {
            "@babel/helper-explode-assignable-expression": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-call-delegate": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-call-delegate/-/helper-call-delegate-7.0.0.tgz",
          "integrity": "sha512-HdYG6vr4KgXHK0q1QRZ8guoYCF5rZjIdPlhcVY+j4EBK/FDR+cXRM5/6lQr3NIWDc7dO1KfgjG5rfH6lM89VBw==",
          "dev": true,
          "requires": {
            "@babel/helper-hoist-variables": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-define-map": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-define-map/-/helper-define-map-7.0.0.tgz",
          "integrity": "sha512-acbCxYS9XufWxsBiclmXMK1CFz7en/XSYvHFcbb3Jb8BqjFEBrA46WlIsoSQTRG/eYN60HciUnzdyQxOZhrHfw==",
          "dev": true,
          "requires": {
            "@babel/helper-function-name": "^7.0.0",
            "@babel/types": "^7.0.0",
            "lodash": "^4.17.10"
          }
        },
        "@babel/helper-explode-assignable-expression": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.0.0.tgz",
          "integrity": "sha512-5gLPwdDnYf8GfPsjS+UmZUtYE1jaXTFm1P+ymGobqvXbA0q3ANgpH60+C6zDrRAWXYbQXYvzzQC/r0gJVNNltQ==",
          "dev": true,
          "requires": {
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.0.0.tgz",
          "integrity": "sha512-Zo+LGvfYp4rMtz84BLF3bavFTdf8y4rJtMPTe2J+rxYmnDOIeH8le++VFI/pRJU+rQhjqiXxE4LMaIau28Tv1Q==",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.0.0",
            "@babel/template": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",
          "integrity": "sha512-r2DbJeg4svYvt3HOS74U4eWKsUAMRH01Z1ds1zx8KNTPtpTL5JAsdFv8BNyOpVqdFhHkkRDIg5B4AsxmkjAlmQ==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-hoist-variables": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.0.0.tgz",
          "integrity": "sha512-Ggv5sldXUeSKsuzLkddtyhyHe2YantsxWKNi7A+7LeD12ExRDWTRk29JCXpaHPAbMaIPZSil7n+lq78WY2VY7w==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-member-expression-to-functions": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.0.0.tgz",
          "integrity": "sha512-avo+lm/QmZlv27Zsi0xEor2fKcqWG56D5ae9dzklpIaY7cQMK5N8VSpaNVPPagiqmy7LrEjK1IWdGMOqPu5csg==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-module-imports": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.0.0.tgz",
          "integrity": "sha512-aP/hlLq01DWNEiDg4Jn23i+CXxW/owM4WpDLFUbpjxe4NS3BhLVZQ5i7E0ZrxuQ/vwekIeciyamgB1UIYxxM6A==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-module-transforms": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.0.0.tgz",
          "integrity": "sha512-QdwmTTlPmT7TZcf30dnqm8pem+o48tVt991xXogE5CQCwqSpWKuzH2E9v8VWeccQ66a6/CmrLZ+bwp66JYeM5A==",
          "dev": true,
          "requires": {
            "@babel/helper-module-imports": "^7.0.0",
            "@babel/helper-simple-access": "^7.0.0",
            "@babel/helper-split-export-declaration": "^7.0.0",
            "@babel/template": "^7.0.0",
            "@babel/types": "^7.0.0",
            "lodash": "^4.17.10"
          }
        },
        "@babel/helper-optimise-call-expression": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.0.0.tgz",
          "integrity": "sha512-u8nd9NQePYNQV8iPWu/pLLYBqZBa4ZaY1YWRFMuxrid94wKI1QNt67NEZ7GAe5Kc/0LLScbim05xZFWkAdrj9g==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-plugin-utils": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
          "integrity": "sha512-CYAOUCARwExnEixLdB6sDm2dIJ/YgEAKDM1MOeMeZu9Ld/bDgVo8aiWrXwcY7OBh+1Ea2uUcVRcxKk0GJvW7QA==",
          "dev": true
        },
        "@babel/helper-regex": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-regex/-/helper-regex-7.0.0.tgz",
          "integrity": "sha512-TR0/N0NDCcUIUEbqV6dCO+LptmmSQFQ7q70lfcEB4URsjD0E1HzicrwUH+ap6BAQ2jhCX9Q4UqZy4wilujWlkg==",
          "dev": true,
          "requires": {
            "lodash": "^4.17.10"
          }
        },
        "@babel/helper-remap-async-to-generator": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.0.0.tgz",
          "integrity": "sha512-3o4sYLOsK6m0A7t1P0saTanBPmk5MAlxVnp9773Of4L8PMVLukU7loZix5KoJgflxSo2c2ETTzseptc0rQEp7A==",
          "dev": true,
          "requires": {
            "@babel/helper-annotate-as-pure": "^7.0.0",
            "@babel/helper-wrap-function": "^7.0.0",
            "@babel/template": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-replace-supers": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.0.0.tgz",
          "integrity": "sha512-fsSv7VogxzMSmGch6DwhKHGsciVXo7hbfhBgH9ZrgJMXKMjO7ASQTUfbVL7MU1uCfviyqjucazGK7TWPT9weuQ==",
          "dev": true,
          "requires": {
            "@babel/helper-member-expression-to-functions": "^7.0.0",
            "@babel/helper-optimise-call-expression": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-simple-access": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.0.0.tgz",
          "integrity": "sha512-CNeuX52jbQSq4j1n+R+21xrjbTjsnXa9n1aERbgHRD/p9h4Udkxr1n24yPMQmnTETHdnQDvkVSYWFw/ETAymYg==",
          "dev": true,
          "requires": {
            "@babel/template": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.0.0.tgz",
          "integrity": "sha512-MXkOJqva62dfC0w85mEf/LucPPS/1+04nmmRMPEBUB++hiiThQ2zPtX/mEWQ3mtzCEjIJvPY8nuwxXtQeQwUag==",
          "dev": true,
          "requires": {
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helper-wrap-function": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.0.0.tgz",
          "integrity": "sha512-kjprWPDNVPZ/9pyLRXcZBvfjnFwqokmXTPTaC4AV8Ns7WRl7ewSxrB19AWZzQsC/WSPQLOw1ciR8uPYkAM1znA==",
          "dev": true,
          "requires": {
            "@babel/helper-function-name": "^7.0.0",
            "@babel/template": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/helpers": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.0.0.tgz",
          "integrity": "sha512-jbvgR8iLZPnyk6m/UqdXYsSxbVtRi7Pd3CzB4OPwPBnmhNG1DWjiiy777NTuoyIcniszK51R40L5pgfXAfHDtw==",
          "dev": true,
          "requires": {
            "@babel/template": "^7.0.0",
            "@babel/traverse": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/highlight": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.0.0.tgz",
          "integrity": "sha512-UFMC4ZeFC48Tpvj7C8UgLvtkaUuovQX+5xNWrsIoMG8o2z+XFKjKaN9iVmS84dPwVN00W4wPmqvYoZF3EGAsfw==",
          "dev": true,
          "requires": {
            "chalk": "^2.0.0",
            "esutils": "^2.0.2",
            "js-tokens": "^4.0.0"
          },
          "dependencies": {
            "js-tokens": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
              "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
              "dev": true
            }
          }
        },
        "@babel/parser": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.0.0.tgz",
          "integrity": "sha512-RgJhNdRinpO8zibnoHbzTTexNs4c8ROkXFBanNDZTLHjwbdLk8J5cJSKulx/bycWTLYmKVNCkxRtVCoJnqPk+g==",
          "dev": true
        },
        "@babel/plugin-proposal-async-generator-functions": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.0.0.tgz",
          "integrity": "sha512-QsXmmjLrFADCcDQAfdQn7tfBRLjpTzRWaDpKpW4ZXW1fahPG4SvjcF1xfvVnXGC662RSExYXL+6DAqbtgqMXeA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-remap-async-to-generator": "^7.0.0",
            "@babel/plugin-syntax-async-generators": "^7.0.0"
          }
        },
        "@babel/plugin-proposal-json-strings": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.0.0.tgz",
          "integrity": "sha512-kfVdUkIAGJIVmHmtS/40i/fg/AGnw/rsZBCaapY5yjeO5RA9m165Xbw9KMOu2nqXP5dTFjEjHdfNdoVcHv133Q==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/plugin-syntax-json-strings": "^7.0.0"
          }
        },
        "@babel/plugin-proposal-object-rest-spread": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.0.0.tgz",
          "integrity": "sha512-14fhfoPcNu7itSen7Py1iGN0gEm87hX/B+8nZPqkdmANyyYWYMY2pjA3r8WXbWVKMzfnSNS0xY8GVS0IjXi/iw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/plugin-syntax-object-rest-spread": "^7.0.0"
          }
        },
        "@babel/plugin-proposal-optional-catch-binding": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.0.0.tgz",
          "integrity": "sha512-JPqAvLG1s13B/AuoBjdBYvn38RqW6n1TzrQO839/sIpqLpbnXKacsAgpZHzLD83Sm8SDXMkkrAvEnJ25+0yIpw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/plugin-syntax-optional-catch-binding": "^7.0.0"
          }
        },
        "@babel/plugin-proposal-unicode-property-regex": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.0.0.tgz",
          "integrity": "sha512-tM3icA6GhC3ch2SkmSxv7J/hCWKISzwycub6eGsDrFDgukD4dZ/I+x81XgW0YslS6mzNuQ1Cbzh5osjIMgepPQ==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-regex": "^7.0.0",
            "regexpu-core": "^4.2.0"
          }
        },
        "@babel/plugin-syntax-async-generators": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.0.0.tgz",
          "integrity": "sha512-im7ged00ddGKAjcZgewXmp1vxSZQQywuQXe2B1A7kajjZmDeY/ekMPmWr9zJgveSaQH0k7BcGrojQhcK06l0zA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-syntax-json-strings": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.0.0.tgz",
          "integrity": "sha512-UlSfNydC+XLj4bw7ijpldc1uZ/HB84vw+U6BTuqMdIEmz/LDe63w/GHtpQMdXWdqQZFeAI9PjnHe/vDhwirhKA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-syntax-object-rest-spread": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.0.0.tgz",
          "integrity": "sha512-5A0n4p6bIiVe5OvQPxBnesezsgFJdHhSs3uFSvaPdMqtsovajLZ+G2vZyvNe10EzJBWWo3AcHGKhAFUxqwp2dw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-syntax-optional-catch-binding": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.0.0.tgz",
          "integrity": "sha512-Wc+HVvwjcq5qBg1w5RG9o9RVzmCaAg/Vp0erHCKpAYV8La6I94o4GQAmFYNmkzoMO6gzoOSulpKeSSz6mPEoZw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-arrow-functions": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.0.0.tgz",
          "integrity": "sha512-2EZDBl1WIO/q4DIkIp4s86sdp4ZifL51MoIviLY/gG/mLSuOIEg7J8o6mhbxOTvUJkaN50n+8u41FVsr5KLy/w==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-async-to-generator": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.0.0.tgz",
          "integrity": "sha512-CiWNhSMZzj1n3uEKUUS/oL+a7Xi8hnPQB6GpC1WfL/ZYvxBLDBn14sHMo5EyOaeArccSonyk5jFIKMRRbrHOnQ==",
          "dev": true,
          "requires": {
            "@babel/helper-module-imports": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-remap-async-to-generator": "^7.0.0"
          }
        },
        "@babel/plugin-transform-block-scoped-functions": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.0.0.tgz",
          "integrity": "sha512-AOBiyUp7vYTqz2Jibe1UaAWL0Hl9JUXEgjFvvvcSc9MVDItv46ViXFw2F7SVt1B5k+KWjl44eeXOAk3UDEaJjQ==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-block-scoping": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.0.0.tgz",
          "integrity": "sha512-GWEMCrmHQcYWISilUrk9GDqH4enf3UmhOEbNbNrlNAX1ssH3MsS1xLOS6rdjRVPgA7XXVPn87tRkdTEoA/dxEg==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "lodash": "^4.17.10"
          }
        },
        "@babel/plugin-transform-classes": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.0.0.tgz",
          "integrity": "sha512-8LBm7XsHQiNISEmb+ejBiHi1pUihwUf+lrIwyVsXVbQ1vLqgkvhgayK5JnW3WXvQD2rmM0qxFAIyDE5vtMem2A==",
          "dev": true,
          "requires": {
            "@babel/helper-annotate-as-pure": "^7.0.0",
            "@babel/helper-define-map": "^7.0.0",
            "@babel/helper-function-name": "^7.0.0",
            "@babel/helper-optimise-call-expression": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-replace-supers": "^7.0.0",
            "@babel/helper-split-export-declaration": "^7.0.0",
            "globals": "^11.1.0"
          }
        },
        "@babel/plugin-transform-computed-properties": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.0.0.tgz",
          "integrity": "sha512-ubouZdChNAv4AAWAgU7QKbB93NU5sHwInEWfp+/OzJKA02E6Woh9RVoX4sZrbRwtybky/d7baTUqwFx+HgbvMA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-destructuring": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.0.0.tgz",
          "integrity": "sha512-Fr2GtF8YJSXGTyFPakPFB4ODaEKGU04bPsAllAIabwoXdFrPxL0LVXQX5dQWoxOjjgozarJcC9eWGsj0fD6Zsg==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-dotall-regex": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.0.0.tgz",
          "integrity": "sha512-00THs8eJxOJUFVx1w8i1MBF4XH4PsAjKjQ1eqN/uCH3YKwP21GCKfrn6YZFZswbOk9+0cw1zGQPHVc1KBlSxig==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-regex": "^7.0.0",
            "regexpu-core": "^4.1.3"
          }
        },
        "@babel/plugin-transform-duplicate-keys": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.0.0.tgz",
          "integrity": "sha512-w2vfPkMqRkdxx+C71ATLJG30PpwtTpW7DDdLqYt2acXU7YjztzeWW2Jk1T6hKqCLYCcEA5UQM/+xTAm+QCSnuQ==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-exponentiation-operator": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.0.0.tgz",
          "integrity": "sha512-Ig74elCuFQ0mvHkWUq5qDCNI3qHWlop5w4TcDxdtJiOk8Egqe2uxDRY9XnXGSlmWClClmnixcoYumyvbAuj4dA==",
          "dev": true,
          "requires": {
            "@babel/helper-builder-binary-assignment-operator-visitor": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-for-of": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.0.0.tgz",
          "integrity": "sha512-TlxKecN20X2tt2UEr2LNE6aqA0oPeMT1Y3cgz8k4Dn1j5ObT8M3nl9aA37LLklx0PBZKETC9ZAf9n/6SujTuXA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-function-name": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.0.0.tgz",
          "integrity": "sha512-mR7JN9vkwsAIot74pSwzn/2Gq4nn2wN0HKtQyJLc1ghAarsymdBMTfh+Q/aeR2N3heXs3URQscTLrKe3yUU7Yw==",
          "dev": true,
          "requires": {
            "@babel/helper-function-name": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-literals": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.0.0.tgz",
          "integrity": "sha512-1NTDBWkeNXgpUcyoVFxbr9hS57EpZYXpje92zv0SUzjdu3enaRwF/l3cmyRnXLtIdyJASyiS6PtybK+CgKf7jA==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-modules-amd": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.0.0.tgz",
          "integrity": "sha512-CtSVpT/0tty/4405qczoIHm41YfFbPChplsmfBwsi3RTq/M9cHgVb3ixI5bqqgdKkqWwSX2sXqejvMKLuTVU+Q==",
          "dev": true,
          "requires": {
            "@babel/helper-module-transforms": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-modules-commonjs": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.0.0.tgz",
          "integrity": "sha512-BIcQLgPFCxi7YygtNpz5xj+7HxhOprbCGZKeLW6Kxsn1eHS6sJZMw4MfmqFZagl/v6IVa0AJoMHdDXLVrpd3Aw==",
          "dev": true,
          "requires": {
            "@babel/helper-module-transforms": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-simple-access": "^7.0.0"
          }
        },
        "@babel/plugin-transform-modules-systemjs": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.0.0.tgz",
          "integrity": "sha512-8EDKMAsitLkiF/D4Zhe9CHEE2XLh4bfLbb9/Zf3FgXYQOZyZYyg7EAel/aT2A7bHv62jwHf09q2KU/oEexr83g==",
          "dev": true,
          "requires": {
            "@babel/helper-hoist-variables": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-modules-umd": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.0.0.tgz",
          "integrity": "sha512-EMyKpzgugxef+R1diXDwqw/Hmt5ls8VxfI8Gq5Lo8Qp3oKIepkYG4L/mvE2dmZSRalgL9sguoPKbnQ1m96hVFw==",
          "dev": true,
          "requires": {
            "@babel/helper-module-transforms": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-new-target": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.0.0.tgz",
          "integrity": "sha512-yin069FYjah+LbqfGeTfzIBODex/e++Yfa0rH0fpfam9uTbuEeEOx5GLGr210ggOV77mVRNoeqSYqeuaqSzVSw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-object-super": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.0.0.tgz",
          "integrity": "sha512-BfAiF1l18Xr1shy1NyyQgLiHDvh/S7APiEM5+0wxTsQ+e3fgXO+NA47u4PvppzH0meJS21y0gZHcjnvUAJj8tQ==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-replace-supers": "^7.0.0"
          }
        },
        "@babel/plugin-transform-parameters": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.0.0.tgz",
          "integrity": "sha512-eWngvRBWx0gScot0xa340JzrkA+8HGAk1OaCHDfXAjkrTFkp73Lcf+78s7AStSdRML5nzx5aXpnjN1MfrjkBoA==",
          "dev": true,
          "requires": {
            "@babel/helper-call-delegate": "^7.0.0",
            "@babel/helper-get-function-arity": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-regenerator": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.0.0.tgz",
          "integrity": "sha512-sj2qzsEx8KDVv1QuJc/dEfilkg3RRPvPYx/VnKLtItVQRWt1Wqf5eVCOLZm29CiGFfYYsA3VPjfizTCV0S0Dlw==",
          "dev": true,
          "requires": {
            "regenerator-transform": "^0.13.3"
          }
        },
        "@babel/plugin-transform-shorthand-properties": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.0.0.tgz",
          "integrity": "sha512-g/99LI4vm5iOf5r1Gdxq5Xmu91zvjhEG5+yZDJW268AZELAu4J1EiFLnkSG3yuUsZyOipVOVUKoGPYwfsTymhw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-spread": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.0.0.tgz",
          "integrity": "sha512-L702YFy2EvirrR4shTj0g2xQp7aNwZoWNCkNu2mcoU0uyzMl0XRwDSwzB/xp6DSUFiBmEXuyAyEN16LsgVqGGQ==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-sticky-regex": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.0.0.tgz",
          "integrity": "sha512-LFUToxiyS/WD+XEWpkx/XJBrUXKewSZpzX68s+yEOtIbdnsRjpryDw9U06gYc6klYEij/+KQVRnD3nz3AoKmjw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-regex": "^7.0.0"
          }
        },
        "@babel/plugin-transform-template-literals": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.0.0.tgz",
          "integrity": "sha512-vA6rkTCabRZu7Nbl9DfLZE1imj4tzdWcg5vtdQGvj+OH9itNNB6hxuRMHuIY8SGnEt1T9g5foqs9LnrHzsqEFg==",
          "dev": true,
          "requires": {
            "@babel/helper-annotate-as-pure": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-typeof-symbol": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.0.0.tgz",
          "integrity": "sha512-1r1X5DO78WnaAIvs5uC48t41LLckxsYklJrZjNKcevyz83sF2l4RHbw29qrCPr/6ksFsdfRpT/ZgxNWHXRnffg==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-unicode-regex": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.0.0.tgz",
          "integrity": "sha512-uJBrJhBOEa3D033P95nPHu3nbFwFE9ZgXsfEitzoIXIwqAZWk7uXcg06yFKXz9FSxBH5ucgU/cYdX0IV8ldHKw==",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-regex": "^7.0.0",
            "regexpu-core": "^4.1.3"
          }
        },
        "@babel/preset-env": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.0.0.tgz",
          "integrity": "sha512-Fnx1wWaWv2w2rl+VHxA9si//Da40941IQ29fKiRejVR7oN1FxSEL8+SyAX/2oKIye2gPvY/GBbJVEKQ/oi43zQ==",
          "dev": true,
          "requires": {
            "@babel/helper-module-imports": "^7.0.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/plugin-proposal-async-generator-functions": "^7.0.0",
            "@babel/plugin-proposal-json-strings": "^7.0.0",
            "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
            "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
            "@babel/plugin-proposal-unicode-property-regex": "^7.0.0",
            "@babel/plugin-syntax-async-generators": "^7.0.0",
            "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
            "@babel/plugin-syntax-optional-catch-binding": "^7.0.0",
            "@babel/plugin-transform-arrow-functions": "^7.0.0",
            "@babel/plugin-transform-async-to-generator": "^7.0.0",
            "@babel/plugin-transform-block-scoped-functions": "^7.0.0",
            "@babel/plugin-transform-block-scoping": "^7.0.0",
            "@babel/plugin-transform-classes": "^7.0.0",
            "@babel/plugin-transform-computed-properties": "^7.0.0",
            "@babel/plugin-transform-destructuring": "^7.0.0",
            "@babel/plugin-transform-dotall-regex": "^7.0.0",
            "@babel/plugin-transform-duplicate-keys": "^7.0.0",
            "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
            "@babel/plugin-transform-for-of": "^7.0.0",
            "@babel/plugin-transform-function-name": "^7.0.0",
            "@babel/plugin-transform-literals": "^7.0.0",
            "@babel/plugin-transform-modules-amd": "^7.0.0",
            "@babel/plugin-transform-modules-commonjs": "^7.0.0",
            "@babel/plugin-transform-modules-systemjs": "^7.0.0",
            "@babel/plugin-transform-modules-umd": "^7.0.0",
            "@babel/plugin-transform-new-target": "^7.0.0",
            "@babel/plugin-transform-object-super": "^7.0.0",
            "@babel/plugin-transform-parameters": "^7.0.0",
            "@babel/plugin-transform-regenerator": "^7.0.0",
            "@babel/plugin-transform-shorthand-properties": "^7.0.0",
            "@babel/plugin-transform-spread": "^7.0.0",
            "@babel/plugin-transform-sticky-regex": "^7.0.0",
            "@babel/plugin-transform-template-literals": "^7.0.0",
            "@babel/plugin-transform-typeof-symbol": "^7.0.0",
            "@babel/plugin-transform-unicode-regex": "^7.0.0",
            "browserslist": "^4.1.0",
            "invariant": "^2.2.2",
            "js-levenshtein": "^1.1.3",
            "semver": "^5.3.0"
          }
        },
        "@babel/template": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.0.0.tgz",
          "integrity": "sha512-VLQZik/G5mjYJ6u19U3W2u7eM+rA/NGzH+GtHDFFkLTKLW66OasFrxZ/yK7hkyQcswrmvugFyZpDFRW0DjcjCw==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.0.0",
            "@babel/types": "^7.0.0"
          }
        },
        "@babel/traverse": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.0.0.tgz",
          "integrity": "sha512-ka/lwaonJZTlJyn97C4g5FYjPOx+Oxd3ab05hbDr1Mx9aP1FclJ+SUHyLx3Tx40sGmOVJApDxE6puJhd3ld2kw==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/generator": "^7.0.0",
            "@babel/helper-function-name": "^7.0.0",
            "@babel/helper-split-export-declaration": "^7.0.0",
            "@babel/parser": "^7.0.0",
            "@babel/types": "^7.0.0",
            "debug": "^3.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.10"
          }
        },
        "@babel/types": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.0.0.tgz",
          "integrity": "sha512-5tPDap4bGKTLPtci2SUl/B7Gv8RnuJFuQoWx26RJobS0fFrz4reUA3JnwIM+HVHEmWE0C1mzKhDtTp8NsWY02Q==",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.10",
            "to-fast-properties": "^2.0.0"
          }
        },
        "@types/jquery": {
          "version": "3.3.6",
          "resolved": "https://registry.npmjs.org/@types/jquery/-/jquery-3.3.6.tgz",
          "integrity": "sha512-403D4wN95Mtzt2EoQHARf5oe/jEPhzBOBNrunk+ydQGW8WmkQ/E8rViRAEB1qEt/vssfGfNVD6ujP4FVeegrLg==",
          "dev": true
        },
        "@types/node": {
          "version": "10.9.4",
          "resolved": "https://registry.npmjs.org/@types/node/-/node-10.9.4.tgz",
          "integrity": "sha512-fCHV45gS+m3hH17zgkgADUSi2RR1Vht6wOZ0jyHP8rjiQra9f+mIcgwPQHllmDocYOstIEbKlxbFDYlgrTPYqw==",
          "dev": true
        },
        "@types/webpack-env": {
          "version": "1.13.6",
          "resolved": "https://registry.npmjs.org/@types/webpack-env/-/webpack-env-1.13.6.tgz",
          "integrity": "sha512-5Th3OsZ4gTRdr9Mho83BQ23cex4sRhOR4XTG+m+cJc0FhtUBK9Vn62hBJ+pnQYnSxoPOsKoAPOx6FcphxBC8ng==",
          "dev": true
        },
        "@webassemblyjs/ast": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.7.6.tgz",
          "integrity": "sha512-8nkZS48EVsMUU0v6F1LCIOw4RYWLm2plMtbhFTjNgeXmsTNLuU3xTRtnljt9BFQB+iPbLRobkNrCWftWnNC7wQ==",
          "dev": true,
          "requires": {
            "@webassemblyjs/helper-module-context": "1.7.6",
            "@webassemblyjs/helper-wasm-bytecode": "1.7.6",
            "@webassemblyjs/wast-parser": "1.7.6",
            "mamacro": "^0.0.3"
          }
        },
        "@webassemblyjs/floating-point-hex-parser": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.7.6.tgz",
          "integrity": "sha512-VBOZvaOyBSkPZdIt5VBMg3vPWxouuM13dPXGWI1cBh3oFLNcFJ8s9YA7S9l4mPI7+Q950QqOmqj06oa83hNWBA==",
          "dev": true
        },
        "@webassemblyjs/helper-api-error": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.7.6.tgz",
          "integrity": "sha512-SCzhcQWHXfrfMSKcj8zHg1/kL9kb3aa5TN4plc/EREOs5Xop0ci5bdVBApbk2yfVi8aL+Ly4Qpp3/TRAUInjrg==",
          "dev": true
        },
        "@webassemblyjs/helper-buffer": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.7.6.tgz",
          "integrity": "sha512-1/gW5NaGsEOZ02fjnFiU8/OEEXU1uVbv2um0pQ9YVL3IHSkyk6xOwokzyqqO1qDZQUAllb+V8irtClPWntbVqw==",
          "dev": true
        },
        "@webassemblyjs/helper-code-frame": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.7.6.tgz",
          "integrity": "sha512-+suMJOkSn9+vEvDvgyWyrJo5vJsWSDXZmJAjtoUq4zS4eqHyXImpktvHOZwXp1XQjO5H+YQwsBgqTQEc0J/5zg==",
          "dev": true,
          "requires": {
            "@webassemblyjs/wast-printer": "1.7.6"
          }
        },
        "@webassemblyjs/helper-fsm": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-fsm/-/helper-fsm-1.7.6.tgz",
          "integrity": "sha512-HCS6KN3wgxUihGBW7WFzEC/o8Eyvk0d56uazusnxXthDPnkWiMv+kGi9xXswL2cvfYfeK5yiM17z2K5BVlwypw==",
          "dev": true
        },
        "@webassemblyjs/helper-module-context": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-module-context/-/helper-module-context-1.7.6.tgz",
          "integrity": "sha512-e8/6GbY7OjLM+6OsN7f2krC2qYVNaSr0B0oe4lWdmq5sL++8dYDD1TFbD1TdAdWMRTYNr/Qq7ovXWzia2EbSjw==",
          "dev": true,
          "requires": {
            "mamacro": "^0.0.3"
          }
        },
        "@webassemblyjs/helper-wasm-bytecode": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.7.6.tgz",
          "integrity": "sha512-PzYFCb7RjjSdAOljyvLWVqd6adAOabJW+8yRT+NWhXuf1nNZWH+igFZCUK9k7Cx7CsBbzIfXjJc7u56zZgFj9Q==",
          "dev": true
        },
        "@webassemblyjs/helper-wasm-section": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.7.6.tgz",
          "integrity": "sha512-3GS628ppDPSuwcYlQ7cDCGr4W2n9c4hLzvnRKeuz+lGsJSmc/ADVoYpm1ts2vlB1tGHkjtQMni+yu8mHoMlKlA==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-buffer": "1.7.6",
            "@webassemblyjs/helper-wasm-bytecode": "1.7.6",
            "@webassemblyjs/wasm-gen": "1.7.6"
          }
        },
        "@webassemblyjs/ieee754": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.7.6.tgz",
          "integrity": "sha512-V4cIp0ruyw+hawUHwQLn6o2mFEw4t50tk530oKsYXQhEzKR+xNGDxs/SFFuyTO7X3NzEu4usA3w5jzhl2RYyzQ==",
          "dev": true,
          "requires": {
            "@xtuc/ieee754": "^1.2.0"
          }
        },
        "@webassemblyjs/leb128": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.7.6.tgz",
          "integrity": "sha512-ojdlG8WpM394lBow4ncTGJoIVZ4aAtNOWHhfAM7m7zprmkVcKK+2kK5YJ9Bmj6/ketTtOn7wGSHCtMt+LzqgYQ==",
          "dev": true,
          "requires": {
            "@xtuc/long": "4.2.1"
          }
        },
        "@webassemblyjs/utf8": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.7.6.tgz",
          "integrity": "sha512-oId+tLxQ+AeDC34ELRYNSqJRaScB0TClUU6KQfpB8rNT6oelYlz8axsPhf6yPTg7PBJ/Z5WcXmUYiHEWgbbHJw==",
          "dev": true
        },
        "@webassemblyjs/wasm-edit": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.7.6.tgz",
          "integrity": "sha512-pTNjLO3o41v/Vz9VFLl+I3YLImpCSpodFW77pNoH4agn5I6GgSxXHXtvWDTvYJFty0jSeXZWLEmbaSIRUDlekg==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-buffer": "1.7.6",
            "@webassemblyjs/helper-wasm-bytecode": "1.7.6",
            "@webassemblyjs/helper-wasm-section": "1.7.6",
            "@webassemblyjs/wasm-gen": "1.7.6",
            "@webassemblyjs/wasm-opt": "1.7.6",
            "@webassemblyjs/wasm-parser": "1.7.6",
            "@webassemblyjs/wast-printer": "1.7.6"
          }
        },
        "@webassemblyjs/wasm-gen": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.7.6.tgz",
          "integrity": "sha512-mQvFJVumtmRKEUXMohwn8nSrtjJJl6oXwF3FotC5t6e2hlKMh8sIaW03Sck2MDzw9xPogZD7tdP5kjPlbH9EcQ==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-wasm-bytecode": "1.7.6",
            "@webassemblyjs/ieee754": "1.7.6",
            "@webassemblyjs/leb128": "1.7.6",
            "@webassemblyjs/utf8": "1.7.6"
          }
        },
        "@webassemblyjs/wasm-opt": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.7.6.tgz",
          "integrity": "sha512-go44K90fSIsDwRgtHhX14VtbdDPdK2sZQtZqUcMRvTojdozj5tLI0VVJAzLCfz51NOkFXezPeVTAYFqrZ6rI8Q==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-buffer": "1.7.6",
            "@webassemblyjs/wasm-gen": "1.7.6",
            "@webassemblyjs/wasm-parser": "1.7.6"
          }
        },
        "@webassemblyjs/wasm-parser": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.7.6.tgz",
          "integrity": "sha512-t1T6TfwNY85pDA/HWPA8kB9xA4sp9ajlRg5W7EKikqrynTyFo+/qDzIpvdkOkOGjlS6d4n4SX59SPuIayR22Yg==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-api-error": "1.7.6",
            "@webassemblyjs/helper-wasm-bytecode": "1.7.6",
            "@webassemblyjs/ieee754": "1.7.6",
            "@webassemblyjs/leb128": "1.7.6",
            "@webassemblyjs/utf8": "1.7.6"
          }
        },
        "@webassemblyjs/wast-parser": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-parser/-/wast-parser-1.7.6.tgz",
          "integrity": "sha512-1MaWTErN0ziOsNUlLdvwS+NS1QWuI/kgJaAGAMHX8+fMJFgOJDmN/xsG4h/A1Gtf/tz5VyXQciaqHZqp2q0vfg==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/floating-point-hex-parser": "1.7.6",
            "@webassemblyjs/helper-api-error": "1.7.6",
            "@webassemblyjs/helper-code-frame": "1.7.6",
            "@webassemblyjs/helper-fsm": "1.7.6",
            "@xtuc/long": "4.2.1",
            "mamacro": "^0.0.3"
          }
        },
        "@webassemblyjs/wast-printer": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.7.6.tgz",
          "integrity": "sha512-vHdHSK1tOetvDcl1IV1OdDeGNe/NDDQ+KzuZHMtqTVP1xO/tZ/IKNpj5BaGk1OYFdsDWQqb31PIwdEyPntOWRQ==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/wast-parser": "1.7.6",
            "@xtuc/long": "4.2.1"
          }
        },
        "@xtuc/ieee754": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
          "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
          "dev": true
        },
        "@xtuc/long": {
          "version": "4.2.1",
          "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.1.tgz",
          "integrity": "sha512-FZdkNBDqBRHKQ2MEbSC17xnPFOhZxeJ2YGSfr2BKf3sujG49Qe3bB+rGCwQfIaA7WHnGeGkSijX4FuBCdrzW/g==",
          "dev": true
        },
        "accepts": {
          "version": "1.3.5",
          "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.5.tgz",
          "integrity": "sha1-63d99gEXI6OxTopywIBcjoZ0a9I=",
          "dev": true,
          "requires": {
            "mime-types": "~2.1.18",
            "negotiator": "0.6.1"
          }
        },
        "acorn": {
          "version": "5.7.3",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.3.tgz",
          "integrity": "sha512-T/zvzYRfbVojPWahDsE5evJdHb3oJoQfFbsrKM7w5Zcs++Tr257tia3BmMP8XYVjp1S9RZXQMh7gao96BlqZOw==",
          "dev": true
        },
        "acorn-dynamic-import": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/acorn-dynamic-import/-/acorn-dynamic-import-3.0.0.tgz",
          "integrity": "sha512-zVWV8Z8lislJoOKKqdNMOB+s6+XV5WERty8MnKBeFgwA+19XJjJHs2RP5dzM57FftIs+jQnRToLiWazKr6sSWg==",
          "dev": true,
          "requires": {
            "acorn": "^5.0.0"
          }
        },
        "ajv": {
          "version": "5.5.2",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-5.5.2.tgz",
          "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
          "dev": true,
          "requires": {
            "co": "^4.6.0",
            "fast-deep-equal": "^1.0.0",
            "fast-json-stable-stringify": "^2.0.0",
            "json-schema-traverse": "^0.3.0"
          }
        },
        "ajv-errors": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/ajv-errors/-/ajv-errors-1.0.0.tgz",
          "integrity": "sha1-7PAh+hCP0X37Xms4Py3SM+Mf/Fk=",
          "dev": true
        },
        "ajv-keywords": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.1.0.tgz",
          "integrity": "sha1-rCsnk5xUPpXSwG5/f1wnvkqlQ74=",
          "dev": true
        },
        "ansi-colors": {
          "version": "3.0.5",
          "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.0.5.tgz",
          "integrity": "sha512-VVjWpkfaphxUBFarydrQ3n26zX5nIK7hcbT3/ielrvwDDyBBjuh2vuSw1P9zkPq0cfqvdw7lkYHnu+OLSfIBsg==",
          "dev": true
        },
        "ansi-escapes": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.1.0.tgz",
          "integrity": "sha512-UgAb8H9D41AQnu/PbWlCofQVcnV4Gs2bBJi9eZPxfU/hgglFh3SMDMENRIqdr7H6XFnXdoknctFByVsCOotTVw==",
          "dev": true
        },
        "ansi-html": {
          "version": "0.0.7",
          "resolved": "https://registry.npmjs.org/ansi-html/-/ansi-html-0.0.7.tgz",
          "integrity": "sha1-gTWEAhliqenm/QOflA0S9WynhZ4=",
          "dev": true
        },
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "anymatch": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
          "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
          "dev": true,
          "requires": {
            "micromatch": "^3.1.4",
            "normalize-path": "^2.1.1"
          },
          "dependencies": {
            "arr-diff": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
              "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
              "dev": true
            },
            "array-unique": {
              "version": "0.3.2",
              "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
              "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
              "dev": true
            },
            "braces": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
              "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
              "dev": true,
              "requires": {
                "arr-flatten": "^1.1.0",
                "array-unique": "^0.3.2",
                "extend-shallow": "^2.0.1",
                "fill-range": "^4.0.0",
                "isobject": "^3.0.1",
                "repeat-element": "^1.1.2",
                "snapdragon": "^0.8.1",
                "snapdragon-node": "^2.0.1",
                "split-string": "^3.0.2",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "expand-brackets": {
              "version": "2.1.4",
              "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
              "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
              "dev": true,
              "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "0.2.5",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                  "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^0.1.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                },
                "is-descriptor": {
                  "version": "0.1.6",
                  "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
                  "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
                  "dev": true,
                  "requires": {
                    "is-accessor-descriptor": "^0.1.6",
                    "is-data-descriptor": "^0.1.4",
                    "kind-of": "^5.0.0"
                  }
                },
                "kind-of": {
                  "version": "5.1.0",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                  "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                  "dev": true
                }
              }
            },
            "extglob": {
              "version": "2.0.4",
              "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
              "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
              "dev": true,
              "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                  "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^1.0.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "fill-range": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
              "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
              "dev": true,
              "requires": {
                "extend-shallow": "^2.0.1",
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1",
                "to-regex-range": "^2.1.0"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            },
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            },
            "micromatch": {
              "version": "3.1.10",
              "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
              "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
              "dev": true,
              "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "braces": "^2.3.1",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "extglob": "^2.0.4",
                "fragment-cache": "^0.2.1",
                "kind-of": "^6.0.2",
                "nanomatch": "^1.2.9",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.2"
              }
            }
          }
        },
        "aproba": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
          "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
          "dev": true
        },
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "arr-flatten": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
          "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
          "dev": true
        },
        "arr-union": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
          "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
          "dev": true
        },
        "array-find-index": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
          "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
          "dev": true
        },
        "array-flatten": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.1.tgz",
          "integrity": "sha1-Qmu52oQJDBg42BLIFQryCoMx4pY=",
          "dev": true
        },
        "array-union": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
          "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
          "dev": true,
          "requires": {
            "array-uniq": "^1.0.1"
          }
        },
        "array-uniq": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
          "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "arrify": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
          "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
          "dev": true
        },
        "asn1": {
          "version": "0.2.4",
          "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
          "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
          "dev": true,
          "requires": {
            "safer-buffer": "~2.1.0"
          }
        },
        "asn1.js": {
          "version": "4.10.1",
          "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-4.10.1.tgz",
          "integrity": "sha512-p32cOF5q0Zqs9uBiONKYLm6BClCoBCM5O9JfeUSlnQLBTxYdTK+pW+nXflm8UkKd2UYlEbYz5qEi0JuZR9ckSw==",
          "dev": true,
          "requires": {
            "bn.js": "^4.0.0",
            "inherits": "^2.0.1",
            "minimalistic-assert": "^1.0.0"
          }
        },
        "assert": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/assert/-/assert-1.4.1.tgz",
          "integrity": "sha1-mZEtWRg2tab1s0XA8H7vwI/GXZE=",
          "dev": true,
          "requires": {
            "util": "0.10.3"
          },
          "dependencies": {
            "inherits": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
              "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
              "dev": true
            },
            "util": {
              "version": "0.10.3",
              "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
              "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
              "dev": true,
              "requires": {
                "inherits": "2.0.1"
              }
            }
          }
        },
        "assert-plus": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
          "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
          "dev": true
        },
        "assign-symbols": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
          "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
          "dev": true
        },
        "async": {
          "version": "2.6.0",
          "resolved": "https://registry.npmjs.org/async/-/async-2.6.0.tgz",
          "integrity": "sha512-xAfGg1/NTLBBKlHFmnd7PlmUW9KhVQIUuSrYem9xzFUZy13ScvtyGGejaae9iAVRiRq9+Cx7DPFaAAhCpyxyPw==",
          "dev": true,
          "requires": {
            "lodash": "^4.14.0"
          }
        },
        "async-each": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.1.tgz",
          "integrity": "sha1-GdOGodntxufByF04iu28xW0zYC0=",
          "dev": true
        },
        "asynckit": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
          "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
          "dev": true
        },
        "atob": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.1.tgz",
          "integrity": "sha1-ri1acpR38onWDdf5amMUoi3Wwio=",
          "dev": true
        },
        "aws-sign2": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
          "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
          "dev": true
        },
        "aws4": {
          "version": "1.8.0",
          "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.8.0.tgz",
          "integrity": "sha512-ReZxvNHIOv88FlT7rxcXIIC0fPt4KZqZbOlivyWtXLt8ESx84zd3kMC6iK5jVeS2qt+g7ftS7ye4fi06X5rtRQ==",
          "dev": true
        },
        "babel-code-frame": {
          "version": "6.26.0",
          "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
          "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
          "dev": true,
          "requires": {
            "chalk": "^1.1.3",
            "esutils": "^2.0.2",
            "js-tokens": "^3.0.2"
          },
          "dependencies": {
            "ansi-styles": {
              "version": "2.2.1",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
              "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
              "dev": true
            },
            "chalk": {
              "version": "1.1.3",
              "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
              "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
              "dev": true,
              "requires": {
                "ansi-styles": "^2.2.1",
                "escape-string-regexp": "^1.0.2",
                "has-ansi": "^2.0.0",
                "strip-ansi": "^3.0.0",
                "supports-color": "^2.0.0"
              }
            },
            "supports-color": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
              "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
              "dev": true
            }
          }
        },
        "babel-loader": {
          "version": "8.0.2",
          "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.0.2.tgz",
          "integrity": "sha512-Law0PGtRV1JL8Y9Wpzc0d6EE0GD7LzXWCfaeWwboUMcBWNG6gvaWTK1/+BK7a4X5EmeJiGEuDDFxUsOa8RSWCw==",
          "dev": true,
          "requires": {
            "find-cache-dir": "^1.0.0",
            "loader-utils": "^1.0.2",
            "mkdirp": "^0.5.1",
            "util.promisify": "^1.0.0"
          }
        },
        "balanced-match": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
          "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
          "dev": true
        },
        "base": {
          "version": "0.11.2",
          "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
          "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
          "dev": true,
          "requires": {
            "cache-base": "^1.0.1",
            "class-utils": "^0.3.5",
            "component-emitter": "^1.2.1",
            "define-property": "^1.0.0",
            "isobject": "^3.0.1",
            "mixin-deep": "^1.2.0",
            "pascalcase": "^0.1.1"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^1.0.0"
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "base64-js": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.0.tgz",
          "integrity": "sha512-ccav/yGvoa80BQDljCxsmmQ3Xvx60/UpBIij5QN21W3wBi/hhIC9OoO+KLpu9IJTS9j4DRVJ3aDDF9cMSoa2lw==",
          "dev": true
        },
        "batch": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
          "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",
          "dev": true
        },
        "bcrypt-pbkdf": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
          "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
          "dev": true,
          "optional": true,
          "requires": {
            "tweetnacl": "^0.14.3"
          }
        },
        "big.js": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/big.js/-/big.js-3.2.0.tgz",
          "integrity": "sha512-+hN/Zh2D08Mx65pZ/4g5bsmNiZUuChDiQfTUQ7qJr4/kuopCr88xZsAXv6mBoZEsUI4OuGHlX59qE94K2mMW8Q==",
          "dev": true
        },
        "binary-extensions": {
          "version": "1.11.0",
          "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.11.0.tgz",
          "integrity": "sha1-RqoXUftqL5PuXmibsQh9SxTGwgU=",
          "dev": true
        },
        "bluebird": {
          "version": "3.5.2",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.2.tgz",
          "integrity": "sha512-dhHTWMI7kMx5whMQntl7Vr9C6BvV10lFXDAasnqnrMYhXVCzzk6IO9Fo2L75jXHT07WrOngL1WDXOp+yYS91Yg==",
          "dev": true
        },
        "bn.js": {
          "version": "4.11.8",
          "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.8.tgz",
          "integrity": "sha512-ItfYfPLkWHUjckQCk8xC+LwxgK8NYcXywGigJgSwOP8Y2iyWT4f2vsZnoOXTTbo+o5yXmIUJ4gn5538SO5S3gA==",
          "dev": true
        },
        "body-parser": {
          "version": "1.18.2",
          "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.18.2.tgz",
          "integrity": "sha1-h2eKGdhLR9hZuDGZvVm84iKxBFQ=",
          "dev": true,
          "requires": {
            "bytes": "3.0.0",
            "content-type": "~1.0.4",
            "debug": "2.6.9",
            "depd": "~1.1.1",
            "http-errors": "~1.6.2",
            "iconv-lite": "0.4.19",
            "on-finished": "~2.3.0",
            "qs": "6.5.1",
            "raw-body": "2.3.2",
            "type-is": "~1.6.15"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "qs": {
              "version": "6.5.1",
              "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.1.tgz",
              "integrity": "sha512-eRzhrN1WSINYCDCbrz796z37LOe3m5tmW7RQf6oBntukAG1nmovJvhnwHHRMAfeoItc1m2Hk02WER2aQ/iqs+A==",
              "dev": true
            }
          }
        },
        "bonjour": {
          "version": "3.5.0",
          "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
          "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
          "dev": true,
          "requires": {
            "array-flatten": "^2.1.0",
            "deep-equal": "^1.0.1",
            "dns-equal": "^1.0.0",
            "dns-txt": "^2.0.2",
            "multicast-dns": "^6.0.1",
            "multicast-dns-service-types": "^1.1.0"
          }
        },
        "brace-expansion": {
          "version": "1.1.8",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.8.tgz",
          "integrity": "sha1-wHshHHyVLsH479Uad+8NHTmQopI=",
          "dev": true,
          "requires": {
            "balanced-match": "^1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "brorand": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
          "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
          "dev": true
        },
        "browserify-aes": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
          "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
          "dev": true,
          "requires": {
            "buffer-xor": "^1.0.3",
            "cipher-base": "^1.0.0",
            "create-hash": "^1.1.0",
            "evp_bytestokey": "^1.0.3",
            "inherits": "^2.0.1",
            "safe-buffer": "^5.0.1"
          }
        },
        "browserify-cipher": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
          "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
          "dev": true,
          "requires": {
            "browserify-aes": "^1.0.4",
            "browserify-des": "^1.0.0",
            "evp_bytestokey": "^1.0.0"
          }
        },
        "browserify-des": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
          "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
          "dev": true,
          "requires": {
            "cipher-base": "^1.0.1",
            "des.js": "^1.0.0",
            "inherits": "^2.0.1",
            "safe-buffer": "^5.1.2"
          },
          "dependencies": {
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
              "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
              "dev": true
            }
          }
        },
        "browserify-rsa": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
          "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
          "dev": true,
          "requires": {
            "bn.js": "^4.1.0",
            "randombytes": "^2.0.1"
          }
        },
        "browserify-sign": {
          "version": "4.0.4",
          "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.0.4.tgz",
          "integrity": "sha1-qk62jl17ZYuqa/alfmMMvXqT0pg=",
          "dev": true,
          "requires": {
            "bn.js": "^4.1.1",
            "browserify-rsa": "^4.0.0",
            "create-hash": "^1.1.0",
            "create-hmac": "^1.1.2",
            "elliptic": "^6.0.0",
            "inherits": "^2.0.1",
            "parse-asn1": "^5.0.0"
          }
        },
        "browserify-zlib": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
          "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
          "dev": true,
          "requires": {
            "pako": "~1.0.5"
          }
        },
        "browserslist": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.1.1.tgz",
          "integrity": "sha512-VBorw+tgpOtZ1BYhrVSVTzTt/3+vSE3eFUh0N2GCFK1HffceOaf32YS/bs6WiFhjDAblAFrx85jMy3BG9fBK2Q==",
          "dev": true,
          "requires": {
            "caniuse-lite": "^1.0.30000884",
            "electron-to-chromium": "^1.3.62",
            "node-releases": "^1.0.0-alpha.11"
          },
          "dependencies": {
            "electron-to-chromium": {
              "version": "1.3.66",
              "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.66.tgz",
              "integrity": "sha512-EXfLtc9JxX2AZxISZ10o6hXEXTtnLtj7il5eye5YMgmDf4HbBbg+QDXpUEspsFrUcUugJZd5QJ4iIkRrmQQqIg==",
              "dev": true
            }
          }
        },
        "buffer": {
          "version": "4.9.1",
          "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.1.tgz",
          "integrity": "sha1-bRu2AbB6TvztlwlBMgkwJ8lbwpg=",
          "dev": true,
          "requires": {
            "base64-js": "^1.0.2",
            "ieee754": "^1.1.4",
            "isarray": "^1.0.0"
          }
        },
        "buffer-crc32": {
          "version": "0.2.13",
          "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
          "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
          "dev": true
        },
        "buffer-from": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
          "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
          "dev": true
        },
        "buffer-indexof": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
          "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g==",
          "dev": true
        },
        "buffer-xor": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
          "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
          "dev": true
        },
        "builtin-status-codes": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
          "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
          "dev": true
        },
        "bytes": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
          "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
          "dev": true
        },
        "cacache": {
          "version": "10.0.4",
          "resolved": "https://registry.npmjs.org/cacache/-/cacache-10.0.4.tgz",
          "integrity": "sha512-Dph0MzuH+rTQzGPNT9fAnrPmMmjKfST6trxJeK7NQuHRaVw24VzPRWTmg9MpcwOVQZO0E1FBICUlFeNaKPIfHA==",
          "dev": true,
          "requires": {
            "bluebird": "^3.5.1",
            "chownr": "^1.0.1",
            "glob": "^7.1.2",
            "graceful-fs": "^4.1.11",
            "lru-cache": "^4.1.1",
            "mississippi": "^2.0.0",
            "mkdirp": "^0.5.1",
            "move-concurrently": "^1.0.1",
            "promise-inflight": "^1.0.1",
            "rimraf": "^2.6.2",
            "ssri": "^5.2.4",
            "unique-filename": "^1.1.0",
            "y18n": "^4.0.0"
          }
        },
        "cache-base": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
          "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
          "dev": true,
          "requires": {
            "collection-visit": "^1.0.0",
            "component-emitter": "^1.2.1",
            "get-value": "^2.0.6",
            "has-value": "^1.0.0",
            "isobject": "^3.0.1",
            "set-value": "^2.0.0",
            "to-object-path": "^0.3.0",
            "union-value": "^1.0.0",
            "unset-value": "^1.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        },
        "caniuse-lite": {
          "version": "1.0.30000885",
          "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30000885.tgz",
          "integrity": "sha512-cXKbYwpxBLd7qHyej16JazPoUacqoVuDhvR61U7Fr5vSxMUiodzcYa1rQYRYfZ5GexV03vGZHd722vNPLjPJGQ==",
          "dev": true
        },
        "caseless": {
          "version": "0.12.0",
          "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
          "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
          "dev": true
        },
        "chalk": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.3.2.tgz",
          "integrity": "sha512-ZM4j2/ld/YZDc3Ma8PgN7gyAk+kHMMMyzLNryCPGhWrsfAuDVeuid5bpRFTDgMH9JBK2lA4dyyAkkZYF/WcqDQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "chardet": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
          "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
          "dev": true
        },
        "chokidar": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.0.4.tgz",
          "integrity": "sha512-z9n7yt9rOvIJrMhvDtDictKrkFHeihkNl6uWMmZlmL6tJtX9Cs+87oK+teBx+JIgzvbX3yZHT3eF8vpbDxHJXQ==",
          "dev": true,
          "requires": {
            "anymatch": "^2.0.0",
            "async-each": "^1.0.0",
            "braces": "^2.3.0",
            "fsevents": "^1.2.2",
            "glob-parent": "^3.1.0",
            "inherits": "^2.0.1",
            "is-binary-path": "^1.0.0",
            "is-glob": "^4.0.0",
            "lodash.debounce": "^4.0.8",
            "normalize-path": "^2.1.1",
            "path-is-absolute": "^1.0.0",
            "readdirp": "^2.0.0",
            "upath": "^1.0.5"
          },
          "dependencies": {
            "array-unique": {
              "version": "0.3.2",
              "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
              "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
              "dev": true
            },
            "braces": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
              "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
              "dev": true,
              "requires": {
                "arr-flatten": "^1.1.0",
                "array-unique": "^0.3.2",
                "extend-shallow": "^2.0.1",
                "fill-range": "^4.0.0",
                "isobject": "^3.0.1",
                "repeat-element": "^1.1.2",
                "snapdragon": "^0.8.1",
                "snapdragon-node": "^2.0.1",
                "split-string": "^3.0.2",
                "to-regex": "^3.0.1"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "fill-range": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
              "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
              "dev": true,
              "requires": {
                "extend-shallow": "^2.0.1",
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1",
                "to-regex-range": "^2.1.0"
              }
            },
            "glob-parent": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
              "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
              "dev": true,
              "requires": {
                "is-glob": "^3.1.0",
                "path-dirname": "^1.0.0"
              },
              "dependencies": {
                "is-glob": {
                  "version": "3.1.0",
                  "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                  "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                  "dev": true,
                  "requires": {
                    "is-extglob": "^2.1.0"
                  }
                }
              }
            },
            "is-extglob": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
              "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
              "dev": true
            },
            "is-glob": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.0.tgz",
              "integrity": "sha1-lSHHaEXMJhCoUgPd8ICpWML/q8A=",
              "dev": true,
              "requires": {
                "is-extglob": "^2.1.1"
              }
            },
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "chownr": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.0.1.tgz",
          "integrity": "sha1-4qdQQqlVGQi+vSW4Uj1fl2nXkYE=",
          "dev": true
        },
        "chrome-trace-event": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.0.tgz",
          "integrity": "sha512-xDbVgyfDTT2piup/h8dK/y4QZfJRSa73bw1WZ8b4XM1o7fsFubUVGYcE+1ANtOzJJELGpYoG2961z0Z6OAld9A==",
          "dev": true,
          "requires": {
            "tslib": "^1.9.0"
          }
        },
        "cipher-base": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
          "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "safe-buffer": "^5.0.1"
          }
        },
        "class-utils": {
          "version": "0.3.6",
          "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
          "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
          "dev": true,
          "requires": {
            "arr-union": "^3.1.0",
            "define-property": "^0.2.5",
            "isobject": "^3.0.0",
            "static-extend": "^0.1.1"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "clean-webpack-plugin": {
          "version": "0.1.19",
          "resolved": "https://registry.npmjs.org/clean-webpack-plugin/-/clean-webpack-plugin-0.1.19.tgz",
          "integrity": "sha512-M1Li5yLHECcN2MahoreuODul5LkjohJGFxLPTjl3j1ttKrF5rgjZET1SJduuqxLAuT1gAPOdkhg03qcaaU1KeA==",
          "dev": true,
          "requires": {
            "rimraf": "^2.6.1"
          }
        },
        "cli-cursor": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
          "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
          "dev": true,
          "requires": {
            "restore-cursor": "^2.0.0"
          }
        },
        "cli-width": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
          "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=",
          "dev": true
        },
        "cliui": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
          "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
          "dev": true,
          "requires": {
            "string-width": "^2.1.1",
            "strip-ansi": "^4.0.0",
            "wrap-ansi": "^2.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
              "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
              "dev": true
            },
            "strip-ansi": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
              "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^3.0.0"
              }
            }
          }
        },
        "co": {
          "version": "4.6.0",
          "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
          "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
          "dev": true
        },
        "code-point-at": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
          "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
          "dev": true
        },
        "collection-visit": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
          "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
          "dev": true,
          "requires": {
            "map-visit": "^1.0.0",
            "object-visit": "^1.0.0"
          }
        },
        "color-convert": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.1.tgz",
          "integrity": "sha512-mjGanIiwQJskCC18rPR6OmrZ6fm2Lc7PeGFYwCmy5J34wC6F1PzdGL6xeMfmgicfYcNLGuVFA3WzXtIDCQSZxQ==",
          "dev": true,
          "requires": {
            "color-name": "^1.1.1"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "combined-stream": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.6.tgz",
          "integrity": "sha1-cj599ugBrFYTETp+RFqbactjKBg=",
          "dev": true,
          "requires": {
            "delayed-stream": "~1.0.0"
          }
        },
        "commander": {
          "version": "2.13.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.13.0.tgz",
          "integrity": "sha512-MVuS359B+YzaWqjCL/c+22gfryv+mCBPHAv3zyVI2GN8EY6IRP8VwtasXn8jyyhvvq84R4ImN1OKRtcbIasjYA==",
          "dev": true
        },
        "commondir": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
          "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
          "dev": true
        },
        "component-emitter": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.2.1.tgz",
          "integrity": "sha1-E3kY1teCg/ffemt8WmPhQOaUJeY=",
          "dev": true
        },
        "compressible": {
          "version": "2.0.14",
          "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.14.tgz",
          "integrity": "sha1-MmxfUH+7BV9UEWeCuWmoG2einac=",
          "dev": true,
          "requires": {
            "mime-db": ">= 1.34.0 < 2"
          }
        },
        "compression": {
          "version": "1.7.3",
          "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.3.tgz",
          "integrity": "sha512-HSjyBG5N1Nnz7tF2+O7A9XUhyjru71/fwgNb7oIsEVHR0WShfs2tIS/EySLgiTe98aOK18YDlMXpzjCXY/n9mg==",
          "dev": true,
          "requires": {
            "accepts": "~1.3.5",
            "bytes": "3.0.0",
            "compressible": "~2.0.14",
            "debug": "2.6.9",
            "on-headers": "~1.0.1",
            "safe-buffer": "5.1.2",
            "vary": "~1.1.2"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
              "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
              "dev": true
            }
          }
        },
        "concat-map": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
          "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
          "dev": true
        },
        "concat-stream": {
          "version": "1.6.2",
          "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
          "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
          "dev": true,
          "requires": {
            "buffer-from": "^1.0.0",
            "inherits": "^2.0.3",
            "readable-stream": "^2.2.2",
            "typedarray": "^0.0.6"
          }
        },
        "connect-history-api-fallback": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.5.0.tgz",
          "integrity": "sha1-sGhzk0vF40T+9hGhlqb6rgruAVo=",
          "dev": true
        },
        "console-browserify": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.1.0.tgz",
          "integrity": "sha1-8CQcRXMKn8YyOyBtvzjtx0HQuxA=",
          "dev": true,
          "requires": {
            "date-now": "^0.1.4"
          }
        },
        "constants-browserify": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
          "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
          "dev": true
        },
        "content-disposition": {
          "version": "0.5.2",
          "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.2.tgz",
          "integrity": "sha1-DPaLud318r55YcOoUXjLhdunjLQ=",
          "dev": true
        },
        "content-type": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
          "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
          "dev": true
        },
        "convert-source-map": {
          "version": "1.5.1",
          "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.5.1.tgz",
          "integrity": "sha1-uCeAl7m8IpNl3lxiz1/K7YtVmeU=",
          "dev": true
        },
        "cookie": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.3.1.tgz",
          "integrity": "sha1-5+Ch+e9DtMi6klxcWpboBtFoc7s=",
          "dev": true
        },
        "cookie-signature": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
          "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
          "dev": true
        },
        "copy-concurrently": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
          "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
          "dev": true,
          "requires": {
            "aproba": "^1.1.1",
            "fs-write-stream-atomic": "^1.0.8",
            "iferr": "^0.1.5",
            "mkdirp": "^0.5.1",
            "rimraf": "^2.5.4",
            "run-queue": "^1.0.0"
          }
        },
        "copy-descriptor": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
          "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
          "dev": true
        },
        "copy-webpack-plugin": {
          "version": "4.5.2",
          "resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-4.5.2.tgz",
          "integrity": "sha512-zmC33E8FFSq3AbflTvqvPvBo621H36Afsxlui91d+QyZxPIuXghfnTsa1CuqiAaCPgJoSUWfTFbKJnadZpKEbQ==",
          "dev": true,
          "requires": {
            "cacache": "^10.0.4",
            "find-cache-dir": "^1.0.0",
            "globby": "^7.1.1",
            "is-glob": "^4.0.0",
            "loader-utils": "^1.1.0",
            "minimatch": "^3.0.4",
            "p-limit": "^1.0.0",
            "serialize-javascript": "^1.4.0"
          },
          "dependencies": {
            "is-extglob": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
              "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
              "dev": true
            },
            "is-glob": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.0.tgz",
              "integrity": "sha1-lSHHaEXMJhCoUgPd8ICpWML/q8A=",
              "dev": true,
              "requires": {
                "is-extglob": "^2.1.1"
              }
            }
          }
        },
        "core-util-is": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
          "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
          "dev": true
        },
        "create-ecdh": {
          "version": "4.0.3",
          "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.3.tgz",
          "integrity": "sha512-GbEHQPMOswGpKXM9kCWVrremUcBmjteUaQ01T9rkKCPDXfUHX0IoP9LpHYo2NPFampa4e+/pFDc3jQdxrxQLaw==",
          "dev": true,
          "requires": {
            "bn.js": "^4.1.0",
            "elliptic": "^6.0.0"
          }
        },
        "create-hash": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
          "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
          "dev": true,
          "requires": {
            "cipher-base": "^1.0.1",
            "inherits": "^2.0.1",
            "md5.js": "^1.3.4",
            "ripemd160": "^2.0.1",
            "sha.js": "^2.4.0"
          }
        },
        "create-hmac": {
          "version": "1.1.7",
          "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
          "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
          "dev": true,
          "requires": {
            "cipher-base": "^1.0.3",
            "create-hash": "^1.1.0",
            "inherits": "^2.0.1",
            "ripemd160": "^2.0.0",
            "safe-buffer": "^5.0.1",
            "sha.js": "^2.4.8"
          }
        },
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "dev": true,
          "requires": {
            "nice-try": "^1.0.4",
            "path-key": "^2.0.1",
            "semver": "^5.5.0",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "crypto-browserify": {
          "version": "3.12.0",
          "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
          "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
          "dev": true,
          "requires": {
            "browserify-cipher": "^1.0.0",
            "browserify-sign": "^4.0.0",
            "create-ecdh": "^4.0.0",
            "create-hash": "^1.1.0",
            "create-hmac": "^1.1.0",
            "diffie-hellman": "^5.0.0",
            "inherits": "^2.0.1",
            "pbkdf2": "^3.0.3",
            "public-encrypt": "^4.0.0",
            "randombytes": "^2.0.0",
            "randomfill": "^1.0.3"
          }
        },
        "css-loader": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-1.0.0.tgz",
          "integrity": "sha512-tMXlTYf3mIMt3b0dDCOQFJiVvxbocJ5Ho577WiGPYPZcqVEO218L2iU22pDXzkTZCLDE+9AmGSUkWxeh/nZReA==",
          "dev": true,
          "requires": {
            "babel-code-frame": "^6.26.0",
            "css-selector-tokenizer": "^0.7.0",
            "icss-utils": "^2.1.0",
            "loader-utils": "^1.0.2",
            "lodash.camelcase": "^4.3.0",
            "postcss": "^6.0.23",
            "postcss-modules-extract-imports": "^1.2.0",
            "postcss-modules-local-by-default": "^1.2.0",
            "postcss-modules-scope": "^1.1.0",
            "postcss-modules-values": "^1.3.0",
            "postcss-value-parser": "^3.3.0",
            "source-list-map": "^2.0.0"
          }
        },
        "css-selector-tokenizer": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/css-selector-tokenizer/-/css-selector-tokenizer-0.7.0.tgz",
          "integrity": "sha1-5piEdK6MlTR3v15+/s/OzNnPTIY=",
          "dev": true,
          "requires": {
            "cssesc": "^0.1.0",
            "fastparse": "^1.1.1",
            "regexpu-core": "^1.0.0"
          },
          "dependencies": {
            "jsesc": {
              "version": "0.5.0",
              "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
              "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
              "dev": true
            },
            "regexpu-core": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-1.0.0.tgz",
              "integrity": "sha1-hqdj9Y7k18L2sQLkdkBQ3n7ZDGs=",
              "dev": true,
              "requires": {
                "regenerate": "^1.2.1",
                "regjsgen": "^0.2.0",
                "regjsparser": "^0.1.4"
              }
            },
            "regjsgen": {
              "version": "0.2.0",
              "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.2.0.tgz",
              "integrity": "sha1-bAFq3qxVT3WCP+N6wFuS1aTtsfc=",
              "dev": true
            },
            "regjsparser": {
              "version": "0.1.5",
              "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.1.5.tgz",
              "integrity": "sha1-fuj4Tcb6eS0/0K4ijSS9lJ6tIFw=",
              "dev": true,
              "requires": {
                "jsesc": "~0.5.0"
              }
            }
          }
        },
        "cssesc": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-0.1.0.tgz",
          "integrity": "sha1-yBSQPkViM3GgR3tAEJqq++6t27Q=",
          "dev": true
        },
        "currently-unhandled": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
          "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
          "dev": true,
          "requires": {
            "array-find-index": "^1.0.1"
          }
        },
        "cyclist": {
          "version": "0.2.2",
          "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-0.2.2.tgz",
          "integrity": "sha1-GzN5LhHpFKL9bW7WRHRkRE5fpkA=",
          "dev": true
        },
        "dashdash": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
          "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
          "dev": true,
          "requires": {
            "assert-plus": "^1.0.0"
          }
        },
        "date-now": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/date-now/-/date-now-0.1.4.tgz",
          "integrity": "sha1-6vQ5/U1ISK105cx9vvIAZyueNFs=",
          "dev": true
        },
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "decode-uri-component": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
          "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
          "dev": true
        },
        "deep-equal": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.0.1.tgz",
          "integrity": "sha1-9dJgKStmDghO/0zbyfCK0yR0SLU=",
          "dev": true
        },
        "default-gateway": {
          "version": "2.7.2",
          "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-2.7.2.tgz",
          "integrity": "sha512-lAc4i9QJR0YHSDFdzeBQKfZ1SRDG3hsJNEkrpcZa8QhBfidLAilT60BDEIVUUGqosFp425KOgB3uYqcnQrWafQ==",
          "dev": true,
          "requires": {
            "execa": "^0.10.0",
            "ip-regex": "^2.1.0"
          },
          "dependencies": {
            "execa": {
              "version": "0.10.0",
              "resolved": "https://registry.npmjs.org/execa/-/execa-0.10.0.tgz",
              "integrity": "sha512-7XOMnz8Ynx1gGo/3hyV9loYNPWM94jG3+3T3Y8tsfSstFmETmENCMU/A/zj8Lyaj1lkgEepKepvd6240tBRvlw==",
              "dev": true,
              "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^3.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
              }
            }
          }
        },
        "define-properties": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
          "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
          "dev": true,
          "requires": {
            "object-keys": "^1.0.12"
          }
        },
        "define-property": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
          "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.2",
            "isobject": "^3.0.1"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "del": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/del/-/del-3.0.0.tgz",
          "integrity": "sha1-U+z2mf/LyzljdpGrE7rxYIGXZuU=",
          "dev": true,
          "requires": {
            "globby": "^6.1.0",
            "is-path-cwd": "^1.0.0",
            "is-path-in-cwd": "^1.0.0",
            "p-map": "^1.1.1",
            "pify": "^3.0.0",
            "rimraf": "^2.2.8"
          },
          "dependencies": {
            "globby": {
              "version": "6.1.0",
              "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
              "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
              "dev": true,
              "requires": {
                "array-union": "^1.0.1",
                "glob": "^7.0.3",
                "object-assign": "^4.0.1",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
              },
              "dependencies": {
                "pify": {
                  "version": "2.3.0",
                  "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                  "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
                  "dev": true
                }
              }
            }
          }
        },
        "delayed-stream": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
          "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
          "dev": true
        },
        "depd": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
          "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
          "dev": true
        },
        "des.js": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.0.tgz",
          "integrity": "sha1-wHTS4qpqipoH29YfmhXCzYPsjsw=",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "minimalistic-assert": "^1.0.0"
          }
        },
        "destroy": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
          "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
          "dev": true
        },
        "detect-node": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.0.4.tgz",
          "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw==",
          "dev": true
        },
        "diffie-hellman": {
          "version": "5.0.3",
          "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
          "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
          "dev": true,
          "requires": {
            "bn.js": "^4.1.0",
            "miller-rabin": "^4.0.0",
            "randombytes": "^2.0.0"
          }
        },
        "dir-glob": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-2.0.0.tgz",
          "integrity": "sha512-37qirFDz8cA5fimp9feo43fSuRo2gHwaIn6dXL8Ber1dGwUosDrGZeCCXq57WnIqE4aQ+u3eQZzsk1yOzhdwag==",
          "dev": true,
          "requires": {
            "arrify": "^1.0.1",
            "path-type": "^3.0.0"
          }
        },
        "dns-equal": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
          "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0=",
          "dev": true
        },
        "dns-packet": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.1.tgz",
          "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
          "dev": true,
          "requires": {
            "ip": "^1.1.0",
            "safe-buffer": "^5.0.1"
          }
        },
        "dns-txt": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
          "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
          "dev": true,
          "requires": {
            "buffer-indexof": "^1.0.0"
          }
        },
        "domain-browser": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
          "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
          "dev": true
        },
        "dtsbundler-webpack-plugin": {
          "version": "github:stefan-lacatus/dtsbundler-webpack-plugin#a6bdb94effcc915cd85992bfab840454291b40ca",
          "from": "github:stefan-lacatus/dtsbundler-webpack-plugin#master",
          "dev": true
        },
        "duplexify": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.6.0.tgz",
          "integrity": "sha512-fO3Di4tBKJpYTFHAxTU00BcfWMY9w24r/x21a6rZRbsD/ToUgGxsMbiGRmB7uVAXeGKXD9MwiLZa5E97EVgIRQ==",
          "dev": true,
          "requires": {
            "end-of-stream": "^1.0.0",
            "inherits": "^2.0.1",
            "readable-stream": "^2.0.0",
            "stream-shift": "^1.0.0"
          }
        },
        "ecc-jsbn": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
          "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
          "dev": true,
          "optional": true,
          "requires": {
            "jsbn": "~0.1.0",
            "safer-buffer": "^2.1.0"
          }
        },
        "ee-first": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
          "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
          "dev": true
        },
        "elliptic": {
          "version": "6.4.1",
          "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz",
          "integrity": "sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==",
          "dev": true,
          "requires": {
            "bn.js": "^4.4.0",
            "brorand": "^1.0.1",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.0",
            "inherits": "^2.0.1",
            "minimalistic-assert": "^1.0.0",
            "minimalistic-crypto-utils": "^1.0.0"
          }
        },
        "emojis-list": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
          "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k=",
          "dev": true
        },
        "encodeurl": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
          "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
          "dev": true
        },
        "end-of-stream": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
          "integrity": "sha512-1MkrZNvWTKCaigbn+W15elq2BB/L22nqrSY5DKlo3X6+vclJm8Bb5djXJBmEX6fS3+zCh/F4VBK5Z2KxJt4s2Q==",
          "dev": true,
          "requires": {
            "once": "^1.4.0"
          }
        },
        "errno": {
          "version": "0.1.7",
          "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
          "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
          "dev": true,
          "requires": {
            "prr": "~1.0.1"
          }
        },
        "es-abstract": {
          "version": "1.12.0",
          "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.12.0.tgz",
          "integrity": "sha512-C8Fx/0jFmV5IPoMOFPA9P9G5NtqW+4cOPit3MIuvR2t7Ag2K15EJTpxnHAYTzL+aYQJIESYeXZmDBfOBE1HcpA==",
          "dev": true,
          "requires": {
            "es-to-primitive": "^1.1.1",
            "function-bind": "^1.1.1",
            "has": "^1.0.1",
            "is-callable": "^1.1.3",
            "is-regex": "^1.0.4"
          }
        },
        "es-to-primitive": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.1.1.tgz",
          "integrity": "sha1-RTVSSKiJeQNLZ5Lhm7gfK3l13Q0=",
          "dev": true,
          "requires": {
            "is-callable": "^1.1.1",
            "is-date-object": "^1.0.1",
            "is-symbol": "^1.0.1"
          }
        },
        "escape-html": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
          "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
          "dev": true
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
          "dev": true
        },
        "eslint-scope": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-4.0.0.tgz",
          "integrity": "sha512-1G6UTDi7Jc1ELFwnR58HV4fK9OQK4S6N985f166xqXxpjU6plxFISJa2Ba9KCQuFa8RCnj/lSFJbHo7UFDBnUA==",
          "dev": true,
          "requires": {
            "esrecurse": "^4.1.0",
            "estraverse": "^4.1.1"
          }
        },
        "esrecurse": {
          "version": "4.2.1",
          "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
          "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
          "dev": true,
          "requires": {
            "estraverse": "^4.1.0"
          }
        },
        "estraverse": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
          "integrity": "sha1-De4/7TH81GlhjOc0IJn8GvoL2xM=",
          "dev": true
        },
        "esutils": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.2.tgz",
          "integrity": "sha1-Cr9PHKpbyx96nYrMbepPqqBLrJs=",
          "dev": true
        },
        "etag": {
          "version": "1.8.1",
          "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
          "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
          "dev": true
        },
        "eventemitter3": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.0.tgz",
          "integrity": "sha512-ivIvhpq/Y0uSjcHDcOIccjmYjGLcP09MFGE7ysAwkAvkXfpZlC985pH2/ui64DKazbTW/4kN3yqozUxlXzI6cA==",
          "dev": true
        },
        "events": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/events/-/events-1.1.1.tgz",
          "integrity": "sha1-nr23Y1rQmccNzEwqH1AEKI6L2SQ=",
          "dev": true
        },
        "eventsource": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-0.1.6.tgz",
          "integrity": "sha1-Cs7ehJ7X3RzMMsgRuxG5RNTykjI=",
          "dev": true,
          "requires": {
            "original": ">=0.0.5"
          }
        },
        "evp_bytestokey": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
          "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
          "dev": true,
          "requires": {
            "md5.js": "^1.3.4",
            "safe-buffer": "^5.1.1"
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "^2.3.3",
            "define-property": "^0.2.5",
            "extend-shallow": "^2.0.1",
            "posix-character-classes": "^0.1.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "express": {
          "version": "4.16.3",
          "resolved": "https://registry.npmjs.org/express/-/express-4.16.3.tgz",
          "integrity": "sha1-avilAjUNsyRuzEvs9rWjTSL37VM=",
          "dev": true,
          "requires": {
            "accepts": "~1.3.5",
            "array-flatten": "1.1.1",
            "body-parser": "1.18.2",
            "content-disposition": "0.5.2",
            "content-type": "~1.0.4",
            "cookie": "0.3.1",
            "cookie-signature": "1.0.6",
            "debug": "2.6.9",
            "depd": "~1.1.2",
            "encodeurl": "~1.0.2",
            "escape-html": "~1.0.3",
            "etag": "~1.8.1",
            "finalhandler": "1.1.1",
            "fresh": "0.5.2",
            "merge-descriptors": "1.0.1",
            "methods": "~1.1.2",
            "on-finished": "~2.3.0",
            "parseurl": "~1.3.2",
            "path-to-regexp": "0.1.7",
            "proxy-addr": "~2.0.3",
            "qs": "6.5.1",
            "range-parser": "~1.2.0",
            "safe-buffer": "5.1.1",
            "send": "0.16.2",
            "serve-static": "1.13.2",
            "setprototypeof": "1.1.0",
            "statuses": "~1.4.0",
            "type-is": "~1.6.16",
            "utils-merge": "1.0.1",
            "vary": "~1.1.2"
          },
          "dependencies": {
            "array-flatten": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
              "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
              "dev": true
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "qs": {
              "version": "6.5.1",
              "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.1.tgz",
              "integrity": "sha512-eRzhrN1WSINYCDCbrz796z37LOe3m5tmW7RQf6oBntukAG1nmovJvhnwHHRMAfeoItc1m2Hk02WER2aQ/iqs+A==",
              "dev": true
            }
          }
        },
        "extend": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
          "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
          "dev": true
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "dev": true,
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          },
          "dependencies": {
            "is-extendable": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
              "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
              "dev": true,
              "requires": {
                "is-plain-object": "^2.0.4"
              }
            }
          }
        },
        "external-editor": {
          "version": "3.0.3",
          "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.0.3.tgz",
          "integrity": "sha512-bn71H9+qWoOQKyZDo25mOMVpSmXROAsTJVVVYzrrtol3d4y+AsKjf4Iwl2Q+IuT0kFSQ1qo166UuIwqYq7mGnA==",
          "dev": true,
          "requires": {
            "chardet": "^0.7.0",
            "iconv-lite": "^0.4.24",
            "tmp": "^0.0.33"
          },
          "dependencies": {
            "iconv-lite": {
              "version": "0.4.24",
              "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
              "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
              "dev": true,
              "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
              }
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "^0.3.2",
            "define-property": "^1.0.0",
            "expand-brackets": "^2.1.4",
            "extend-shallow": "^2.0.1",
            "fragment-cache": "^0.2.1",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^1.0.0"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "extract-text-webpack-plugin": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extract-text-webpack-plugin/-/extract-text-webpack-plugin-3.0.2.tgz",
          "integrity": "sha512-bt/LZ4m5Rqt/Crl2HiKuAl/oqg0psx1tsTLkvWbJen1CtD+fftkZhMaQ9HOtY2gWsl2Wq+sABmMVi9z3DhKWQQ==",
          "dev": true,
          "requires": {
            "async": "^2.4.1",
            "loader-utils": "^1.1.0",
            "schema-utils": "^0.3.0",
            "webpack-sources": "^1.0.1"
          }
        },
        "extsprintf": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
          "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
          "dev": true
        },
        "fast-deep-equal": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-1.0.0.tgz",
          "integrity": "sha1-liVqO8l1WV6zbYLpkp0GDYk0Of8=",
          "dev": true
        },
        "fast-json-stable-stringify": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.0.0.tgz",
          "integrity": "sha1-1RQsDK7msRifh9OnYREGT4bIu/I=",
          "dev": true
        },
        "fastparse": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.1.tgz",
          "integrity": "sha1-0eJkOzipTXWDtHkGDmxK/8lAcfg=",
          "dev": true
        },
        "faye-websocket": {
          "version": "0.10.0",
          "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
          "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
          "dev": true,
          "requires": {
            "websocket-driver": ">=0.5.1"
          }
        },
        "figures": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
          "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
          "dev": true,
          "requires": {
            "escape-string-regexp": "^1.0.5"
          }
        },
        "file-loader": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-2.0.0.tgz",
          "integrity": "sha512-YCsBfd1ZGCyonOKLxPiKPdu+8ld9HAaMEvJewzz+b2eTF7uL5Zm/HdBF6FjCrpCMRq25Mi0U1gl4pwn2TlH7hQ==",
          "dev": true,
          "requires": {
            "loader-utils": "^1.0.2",
            "schema-utils": "^1.0.0"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "schema-utils": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
              "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-errors": "^1.0.0",
                "ajv-keywords": "^3.1.0"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "finalhandler": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.1.tgz",
          "integrity": "sha512-Y1GUDo39ez4aHAw7MysnUD5JzYX+WaIj8I57kO3aEPT1fFRL4sr7mjei97FgnwhAyyzRYmQZaTHb2+9uZ1dPtg==",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "encodeurl": "~1.0.2",
            "escape-html": "~1.0.3",
            "on-finished": "~2.3.0",
            "parseurl": "~1.3.2",
            "statuses": "~1.4.0",
            "unpipe": "~1.0.0"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            }
          }
        },
        "find-cache-dir": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-1.0.0.tgz",
          "integrity": "sha1-kojj6ePMN0hxfTnq3hfPcfww7m8=",
          "dev": true,
          "requires": {
            "commondir": "^1.0.1",
            "make-dir": "^1.0.0",
            "pkg-dir": "^2.0.0"
          }
        },
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "dev": true,
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "flush-write-stream": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.0.3.tgz",
          "integrity": "sha512-calZMC10u0FMUqoiunI2AiGIIUtUIvifNwkHhNupZH4cbNnW1Itkoh/Nf5HFYmDrwWPjrUxpkZT0KhuCq0jmGw==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "readable-stream": "^2.0.4"
          }
        },
        "follow-redirects": {
          "version": "1.5.8",
          "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.5.8.tgz",
          "integrity": "sha512-sy1mXPmv7kLAMKW/8XofG7o9T+6gAjzdZK4AJF6ryqQYUa/hnzgiypoeUecZ53x7XiqKNEpNqLtS97MshW2nxg==",
          "dev": true,
          "requires": {
            "debug": "=3.1.0"
          }
        },
        "for-in": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
          "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
          "dev": true
        },
        "forever-agent": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
          "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
          "dev": true
        },
        "form-data": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.2.tgz",
          "integrity": "sha1-SXBJi+YEwgwAXU9cI67NIda0kJk=",
          "dev": true,
          "requires": {
            "asynckit": "^0.4.0",
            "combined-stream": "1.0.6",
            "mime-types": "^2.1.12"
          }
        },
        "forwarded": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
          "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
          "dev": true
        },
        "fragment-cache": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
          "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
          "dev": true,
          "requires": {
            "map-cache": "^0.2.2"
          }
        },
        "fresh": {
          "version": "0.5.2",
          "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
          "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
          "dev": true
        },
        "from2": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
          "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "readable-stream": "^2.0.0"
          }
        },
        "fs-write-stream-atomic": {
          "version": "1.0.10",
          "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
          "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "iferr": "^0.1.5",
            "imurmurhash": "^0.1.4",
            "readable-stream": "1 || 2"
          }
        },
        "fs.realpath": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
          "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
          "dev": true
        },
        "fsevents": {
          "version": "1.2.4",
          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.4.tgz",
          "integrity": "sha512-z8H8/diyk76B7q5wg+Ud0+CqzcAF3mBBI/bA5ne5zrRUUIvNkJY//D3BqyH571KuAC4Nr7Rw7CjWX4r0y9DvNg==",
          "dev": true,
          "optional": true,
          "requires": {
            "nan": "^2.9.2",
            "node-pre-gyp": "^0.10.0"
          },
          "dependencies": {
            "abbrev": {
              "version": "1.1.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "ansi-regex": {
              "version": "2.1.1",
              "bundled": true,
              "dev": true
            },
            "aproba": {
              "version": "1.2.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "are-we-there-yet": {
              "version": "1.1.4",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "delegates": "^1.0.0",
                "readable-stream": "^2.0.6"
              }
            },
            "balanced-match": {
              "version": "1.0.0",
              "bundled": true,
              "dev": true
            },
            "brace-expansion": {
              "version": "1.1.11",
              "bundled": true,
              "dev": true,
              "requires": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
              }
            },
            "chownr": {
              "version": "1.0.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "code-point-at": {
              "version": "1.1.0",
              "bundled": true,
              "dev": true
            },
            "concat-map": {
              "version": "0.0.1",
              "bundled": true,
              "dev": true
            },
            "console-control-strings": {
              "version": "1.1.0",
              "bundled": true,
              "dev": true
            },
            "core-util-is": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "debug": {
              "version": "2.6.9",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "deep-extend": {
              "version": "0.5.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "delegates": {
              "version": "1.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "detect-libc": {
              "version": "1.0.3",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "fs-minipass": {
              "version": "1.2.5",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "minipass": "^2.2.1"
              }
            },
            "fs.realpath": {
              "version": "1.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "gauge": {
              "version": "2.7.4",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "aproba": "^1.0.3",
                "console-control-strings": "^1.0.0",
                "has-unicode": "^2.0.0",
                "object-assign": "^4.1.0",
                "signal-exit": "^3.0.0",
                "string-width": "^1.0.1",
                "strip-ansi": "^3.0.1",
                "wide-align": "^1.1.0"
              }
            },
            "glob": {
              "version": "7.1.2",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.0.4",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
              }
            },
            "has-unicode": {
              "version": "2.0.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "iconv-lite": {
              "version": "0.4.21",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "safer-buffer": "^2.1.0"
              }
            },
            "ignore-walk": {
              "version": "3.0.1",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "minimatch": "^3.0.4"
              }
            },
            "inflight": {
              "version": "1.0.6",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "once": "^1.3.0",
                "wrappy": "1"
              }
            },
            "inherits": {
              "version": "2.0.3",
              "bundled": true,
              "dev": true
            },
            "ini": {
              "version": "1.3.5",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "is-fullwidth-code-point": {
              "version": "1.0.0",
              "bundled": true,
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "isarray": {
              "version": "1.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "minimatch": {
              "version": "3.0.4",
              "bundled": true,
              "dev": true,
              "requires": {
                "brace-expansion": "^1.1.7"
              }
            },
            "minimist": {
              "version": "0.0.8",
              "bundled": true,
              "dev": true
            },
            "minipass": {
              "version": "2.2.4",
              "bundled": true,
              "dev": true,
              "requires": {
                "safe-buffer": "^5.1.1",
                "yallist": "^3.0.0"
              }
            },
            "minizlib": {
              "version": "1.1.0",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "minipass": "^2.2.1"
              }
            },
            "mkdirp": {
              "version": "0.5.1",
              "bundled": true,
              "dev": true,
              "requires": {
                "minimist": "0.0.8"
              }
            },
            "ms": {
              "version": "2.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "needle": {
              "version": "2.2.0",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "debug": "^2.1.2",
                "iconv-lite": "^0.4.4",
                "sax": "^1.2.4"
              }
            },
            "node-pre-gyp": {
              "version": "0.10.0",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "detect-libc": "^1.0.2",
                "mkdirp": "^0.5.1",
                "needle": "^2.2.0",
                "nopt": "^4.0.1",
                "npm-packlist": "^1.1.6",
                "npmlog": "^4.0.2",
                "rc": "^1.1.7",
                "rimraf": "^2.6.1",
                "semver": "^5.3.0",
                "tar": "^4"
              }
            },
            "nopt": {
              "version": "4.0.1",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "abbrev": "1",
                "osenv": "^0.1.4"
              }
            },
            "npm-bundled": {
              "version": "1.0.3",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "npm-packlist": {
              "version": "1.1.10",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "ignore-walk": "^3.0.1",
                "npm-bundled": "^1.0.1"
              }
            },
            "npmlog": {
              "version": "4.1.2",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "are-we-there-yet": "~1.1.2",
                "console-control-strings": "~1.1.0",
                "gauge": "~2.7.3",
                "set-blocking": "~2.0.0"
              }
            },
            "number-is-nan": {
              "version": "1.0.1",
              "bundled": true,
              "dev": true
            },
            "object-assign": {
              "version": "4.1.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "once": {
              "version": "1.4.0",
              "bundled": true,
              "dev": true,
              "requires": {
                "wrappy": "1"
              }
            },
            "os-homedir": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "os-tmpdir": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "osenv": {
              "version": "0.1.5",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "os-homedir": "^1.0.0",
                "os-tmpdir": "^1.0.0"
              }
            },
            "path-is-absolute": {
              "version": "1.0.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "process-nextick-args": {
              "version": "2.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "rc": {
              "version": "1.2.7",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "deep-extend": "^0.5.1",
                "ini": "~1.3.0",
                "minimist": "^1.2.0",
                "strip-json-comments": "~2.0.1"
              },
              "dependencies": {
                "minimist": {
                  "version": "1.2.0",
                  "bundled": true,
                  "dev": true,
                  "optional": true
                }
              }
            },
            "readable-stream": {
              "version": "2.3.6",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.3",
                "isarray": "~1.0.0",
                "process-nextick-args": "~2.0.0",
                "safe-buffer": "~5.1.1",
                "string_decoder": "~1.1.1",
                "util-deprecate": "~1.0.1"
              }
            },
            "rimraf": {
              "version": "2.6.2",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "glob": "^7.0.5"
              }
            },
            "safe-buffer": {
              "version": "5.1.1",
              "bundled": true,
              "dev": true
            },
            "safer-buffer": {
              "version": "2.1.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "sax": {
              "version": "1.2.4",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "semver": {
              "version": "5.5.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "set-blocking": {
              "version": "2.0.0",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "signal-exit": {
              "version": "3.0.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "string-width": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true,
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            },
            "string_decoder": {
              "version": "1.1.1",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "safe-buffer": "~5.1.0"
              }
            },
            "strip-ansi": {
              "version": "3.0.1",
              "bundled": true,
              "dev": true,
              "requires": {
                "ansi-regex": "^2.0.0"
              }
            },
            "strip-json-comments": {
              "version": "2.0.1",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "tar": {
              "version": "4.4.1",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "chownr": "^1.0.1",
                "fs-minipass": "^1.2.5",
                "minipass": "^2.2.4",
                "minizlib": "^1.1.0",
                "mkdirp": "^0.5.0",
                "safe-buffer": "^5.1.1",
                "yallist": "^3.0.2"
              }
            },
            "util-deprecate": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true,
              "optional": true
            },
            "wide-align": {
              "version": "1.1.2",
              "bundled": true,
              "dev": true,
              "optional": true,
              "requires": {
                "string-width": "^1.0.2"
              }
            },
            "wrappy": {
              "version": "1.0.2",
              "bundled": true,
              "dev": true
            },
            "yallist": {
              "version": "3.0.2",
              "bundled": true,
              "dev": true
            }
          }
        },
        "function-bind": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
          "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
          "dev": true
        },
        "get-caller-file": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.2.tgz",
          "integrity": "sha1-9wLmMSfn4jHBYKgMFVSstw1QR+U=",
          "dev": true
        },
        "get-stream": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
          "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
          "dev": true
        },
        "get-value": {
          "version": "2.0.6",
          "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
          "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
          "dev": true
        },
        "getpass": {
          "version": "0.1.7",
          "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
          "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
          "dev": true,
          "requires": {
            "assert-plus": "^1.0.0"
          }
        },
        "glob": {
          "version": "7.1.2",
          "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.2.tgz",
          "integrity": "sha512-MJTUg1kjuLeQCJ+ccE4Vpa6kKVXkPYJ2mOCQyUuKLcLQsdrMCpBPUi8qVE6+YuaJkozeA9NusTAw3hLr8Xe5EQ==",
          "dev": true,
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "global-modules-path": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/global-modules-path/-/global-modules-path-2.3.0.tgz",
          "integrity": "sha512-HchvMJNYh9dGSCy8pOQ2O8u/hoXaL+0XhnrwH0RyLiSXMMTl9W3N6KUU73+JFOg5PGjtzl6VZzUQsnrpm7Szag==",
          "dev": true
        },
        "globals": {
          "version": "11.7.0",
          "resolved": "https://registry.npmjs.org/globals/-/globals-11.7.0.tgz",
          "integrity": "sha512-K8BNSPySfeShBQXsahYB/AbbWruVOTyVpgoIDnl8odPpeSfP2J5QO2oLFFdl2j7GfDCtZj2bMKar2T49itTPCg==",
          "dev": true
        },
        "globby": {
          "version": "7.1.1",
          "resolved": "https://registry.npmjs.org/globby/-/globby-7.1.1.tgz",
          "integrity": "sha1-+yzP+UAfhgCUXfral0QMypcrhoA=",
          "dev": true,
          "requires": {
            "array-union": "^1.0.1",
            "dir-glob": "^2.0.0",
            "glob": "^7.1.2",
            "ignore": "^3.3.5",
            "pify": "^3.0.0",
            "slash": "^1.0.0"
          }
        },
        "graceful-fs": {
          "version": "4.1.11",
          "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.1.11.tgz",
          "integrity": "sha1-Dovf5NHduIVNZOBOp8AOKgJuVlg=",
          "dev": true
        },
        "handle-thing": {
          "version": "1.2.5",
          "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-1.2.5.tgz",
          "integrity": "sha1-/Xqtcmvxpf0W38KbL3pmAdJxOcQ=",
          "dev": true
        },
        "har-schema": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
          "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
          "dev": true
        },
        "har-validator": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.0.tgz",
          "integrity": "sha512-+qnmNjI4OfH2ipQ9VQOw23bBd/ibtfbVdK2fYbY4acTDqKTW/YDp9McimZdDbG8iV9fZizUqQMD5xvriB146TA==",
          "dev": true,
          "requires": {
            "ajv": "^5.3.0",
            "har-schema": "^2.0.0"
          }
        },
        "has": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/has/-/has-1.0.1.tgz",
          "integrity": "sha1-hGFzP1OLCDfJNh45qauelwTcLyg=",
          "dev": true,
          "requires": {
            "function-bind": "^1.0.2"
          }
        },
        "has-ansi": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
          "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
          "dev": true
        },
        "has-value": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
          "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
          "dev": true,
          "requires": {
            "get-value": "^2.0.6",
            "has-values": "^1.0.0",
            "isobject": "^3.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "has-values": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
          "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
          "dev": true,
          "requires": {
            "is-number": "^3.0.0",
            "kind-of": "^4.0.0"
          },
          "dependencies": {
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "kind-of": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
              "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
              "dev": true,
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "hash-base": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.0.4.tgz",
          "integrity": "sha1-X8hoaEfs1zSZQDMZprCj8/auSRg=",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "safe-buffer": "^5.0.1"
          }
        },
        "hash.js": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.5.tgz",
          "integrity": "sha512-eWI5HG9Np+eHV1KQhisXWwM+4EPPYe5dFX1UZZH7k/E3JzDEazVH+VGlZi6R94ZqImq+A3D1mCEtrFIfg/E7sA==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "minimalistic-assert": "^1.0.1"
          }
        },
        "hmac-drbg": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
          "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
          "dev": true,
          "requires": {
            "hash.js": "^1.0.3",
            "minimalistic-assert": "^1.0.0",
            "minimalistic-crypto-utils": "^1.0.1"
          }
        },
        "hpack.js": {
          "version": "2.1.6",
          "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
          "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "obuf": "^1.0.0",
            "readable-stream": "^2.0.1",
            "wbuf": "^1.1.0"
          }
        },
        "html-entities": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.2.1.tgz",
          "integrity": "sha1-DfKTUfByEWNRXfueVUPl9u7VFi8=",
          "dev": true
        },
        "http-deceiver": {
          "version": "1.2.7",
          "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
          "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc=",
          "dev": true
        },
        "http-errors": {
          "version": "1.6.3",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
          "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
          "dev": true,
          "requires": {
            "depd": "~1.1.2",
            "inherits": "2.0.3",
            "setprototypeof": "1.1.0",
            "statuses": ">= 1.4.0 < 2"
          }
        },
        "http-parser-js": {
          "version": "0.4.13",
          "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.4.13.tgz",
          "integrity": "sha1-O9bW/ebjFyyTNMOzO2wZPYD+ETc=",
          "dev": true
        },
        "http-proxy": {
          "version": "1.17.0",
          "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.17.0.tgz",
          "integrity": "sha512-Taqn+3nNvYRfJ3bGvKfBSRwy1v6eePlm3oc/aWVxZp57DQr5Eq3xhKJi7Z4hZpS8PC3H4qI+Yly5EmFacGuA/g==",
          "dev": true,
          "requires": {
            "eventemitter3": "^3.0.0",
            "follow-redirects": "^1.0.0",
            "requires-port": "^1.0.0"
          }
        },
        "http-proxy-middleware": {
          "version": "0.18.0",
          "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.18.0.tgz",
          "integrity": "sha512-Fs25KVMPAIIcgjMZkVHJoKg9VcXcC1C8yb9JUgeDvVXY0S/zgVIhMb+qVswDIgtJe2DfckMSY2d6TuTEutlk6Q==",
          "dev": true,
          "requires": {
            "http-proxy": "^1.16.2",
            "is-glob": "^4.0.0",
            "lodash": "^4.17.5",
            "micromatch": "^3.1.9"
          },
          "dependencies": {
            "arr-diff": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
              "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
              "dev": true
            },
            "array-unique": {
              "version": "0.3.2",
              "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
              "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
              "dev": true
            },
            "braces": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
              "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
              "dev": true,
              "requires": {
                "arr-flatten": "^1.1.0",
                "array-unique": "^0.3.2",
                "extend-shallow": "^2.0.1",
                "fill-range": "^4.0.0",
                "isobject": "^3.0.1",
                "repeat-element": "^1.1.2",
                "snapdragon": "^0.8.1",
                "snapdragon-node": "^2.0.1",
                "split-string": "^3.0.2",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "expand-brackets": {
              "version": "2.1.4",
              "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
              "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
              "dev": true,
              "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "0.2.5",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                  "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^0.1.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                },
                "is-descriptor": {
                  "version": "0.1.6",
                  "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
                  "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
                  "dev": true,
                  "requires": {
                    "is-accessor-descriptor": "^0.1.6",
                    "is-data-descriptor": "^0.1.4",
                    "kind-of": "^5.0.0"
                  }
                },
                "kind-of": {
                  "version": "5.1.0",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                  "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                  "dev": true
                }
              }
            },
            "extglob": {
              "version": "2.0.4",
              "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
              "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
              "dev": true,
              "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                  "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^1.0.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "fill-range": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
              "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
              "dev": true,
              "requires": {
                "extend-shallow": "^2.0.1",
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1",
                "to-regex-range": "^2.1.0"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-extglob": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
              "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
              "dev": true
            },
            "is-glob": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.0.tgz",
              "integrity": "sha1-lSHHaEXMJhCoUgPd8ICpWML/q8A=",
              "dev": true,
              "requires": {
                "is-extglob": "^2.1.1"
              }
            },
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            },
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            },
            "micromatch": {
              "version": "3.1.10",
              "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
              "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
              "dev": true,
              "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "braces": "^2.3.1",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "extglob": "^2.0.4",
                "fragment-cache": "^0.2.1",
                "kind-of": "^6.0.2",
                "nanomatch": "^1.2.9",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.2"
              }
            }
          }
        },
        "http-signature": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
          "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
          "dev": true,
          "requires": {
            "assert-plus": "^1.0.0",
            "jsprim": "^1.2.2",
            "sshpk": "^1.7.0"
          }
        },
        "https-browserify": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
          "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
          "dev": true
        },
        "iconv-lite": {
          "version": "0.4.19",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.19.tgz",
          "integrity": "sha512-oTZqweIP51xaGPI4uPa56/Pri/480R+mo7SeU+YETByQNhDG55ycFyNLIgta9vXhILrxXDmF7ZGhqZIcuN0gJQ==",
          "dev": true
        },
        "icss-replace-symbols": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
          "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
          "dev": true
        },
        "icss-utils": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-2.1.0.tgz",
          "integrity": "sha1-g/Cg7DeL8yRheLbCrZE28TWxyWI=",
          "dev": true,
          "requires": {
            "postcss": "^6.0.1"
          }
        },
        "ieee754": {
          "version": "1.1.12",
          "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.12.tgz",
          "integrity": "sha512-GguP+DRY+pJ3soyIiGPTvdiVXjZ+DbXOxGpXn3eMvNW4x4irjqXm4wHKscC+TfxSJ0yw/S1F24tqdMNsMZTiLA==",
          "dev": true
        },
        "iferr": {
          "version": "0.1.5",
          "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
          "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE=",
          "dev": true
        },
        "ignore": {
          "version": "3.3.8",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-3.3.8.tgz",
          "integrity": "sha512-pUh+xUQQhQzevjRHHFqqcTy0/dP/kS9I8HSrUydhihjuD09W6ldVWFtIrwhXdUJHis3i2rZNqEHpZH/cbinFbg==",
          "dev": true
        },
        "import-local": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/import-local/-/import-local-1.0.0.tgz",
          "integrity": "sha512-vAaZHieK9qjGo58agRBg+bhHX3hoTZU/Oa3GESWLz7t1U62fk63aHuDJJEteXoDeTCcPmUT+z38gkHPZkkmpmQ==",
          "dev": true,
          "requires": {
            "pkg-dir": "^2.0.0",
            "resolve-cwd": "^2.0.0"
          }
        },
        "imurmurhash": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
          "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
          "dev": true
        },
        "indexof": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/indexof/-/indexof-0.0.1.tgz",
          "integrity": "sha1-gtwzbSMrkGIXnQWrMpOmYFn9Q10=",
          "dev": true
        },
        "inflight": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
          "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
          "dev": true,
          "requires": {
            "once": "^1.3.0",
            "wrappy": "1"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
          "dev": true
        },
        "inquirer": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.2.0.tgz",
          "integrity": "sha512-QIEQG4YyQ2UYZGDC4srMZ7BjHOmNk1lR2JQj5UknBapklm6WHA+VVH7N+sUdX3A7NeCfGF8o4X1S3Ao7nAcIeg==",
          "dev": true,
          "requires": {
            "ansi-escapes": "^3.0.0",
            "chalk": "^2.0.0",
            "cli-cursor": "^2.1.0",
            "cli-width": "^2.0.0",
            "external-editor": "^3.0.0",
            "figures": "^2.0.0",
            "lodash": "^4.17.10",
            "mute-stream": "0.0.7",
            "run-async": "^2.2.0",
            "rxjs": "^6.1.0",
            "string-width": "^2.1.0",
            "strip-ansi": "^4.0.0",
            "through": "^2.3.6"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
              "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
              "dev": true
            },
            "strip-ansi": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
              "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^3.0.0"
              }
            }
          }
        },
        "internal-ip": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-3.0.1.tgz",
          "integrity": "sha512-NXXgESC2nNVtU+pqmC9e6R8B1GpKxzsAQhffvh5AL79qKnodd+L7tnEQmTiUAVngqLalPbSqRA7XGIEL5nCd0Q==",
          "dev": true,
          "requires": {
            "default-gateway": "^2.6.0",
            "ipaddr.js": "^1.5.2"
          }
        },
        "interpret": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.1.0.tgz",
          "integrity": "sha1-ftGxQQxqDg94z5XTuEQMY/eLhhQ=",
          "dev": true
        },
        "invariant": {
          "version": "2.2.4",
          "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
          "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
          "dev": true,
          "requires": {
            "loose-envify": "^1.0.0"
          }
        },
        "ip": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
          "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo=",
          "dev": true
        },
        "ip-regex": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-2.1.0.tgz",
          "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk=",
          "dev": true
        },
        "ipaddr.js": {
          "version": "1.8.0",
          "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.8.0.tgz",
          "integrity": "sha1-6qM9bd16zo9/b+DJygRA5wZzix4=",
          "dev": true
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          },
          "dependencies": {
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            }
          }
        },
        "is-binary-path": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
          "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
          "dev": true,
          "requires": {
            "binary-extensions": "^1.0.0"
          }
        },
        "is-buffer": {
          "version": "1.1.6",
          "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
          "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
          "dev": true
        },
        "is-callable": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.1.4.tgz",
          "integrity": "sha512-r5p9sxJjYnArLjObpjA4xu5EKI3CuKHkJXMhT7kwbpUyIFD1n5PMAsoPvWnvtZiNz7LjkYDRZhd7FlI0eMijEA==",
          "dev": true
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          },
          "dependencies": {
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            }
          }
        },
        "is-date-object": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.1.tgz",
          "integrity": "sha1-mqIOtq7rv/d/vTPnTKAbM1gdOhY=",
          "dev": true
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            }
          }
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
          "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
          "dev": true
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          }
        },
        "is-odd": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/is-odd/-/is-odd-2.0.0.tgz",
          "integrity": "sha512-OTiixgpZAT1M4NHgS5IguFp/Vz2VI3U7Goh4/HA1adtwyLtSBrxYlcSYkhpAE07s4fKEcjrFxyvtQBND4vFQyQ==",
          "dev": true,
          "requires": {
            "is-number": "^4.0.0"
          },
          "dependencies": {
            "is-number": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
              "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
              "dev": true
            }
          }
        },
        "is-path-cwd": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-1.0.0.tgz",
          "integrity": "sha1-0iXsIxMuie3Tj9p2dHLmLmXxEG0=",
          "dev": true
        },
        "is-path-in-cwd": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-1.0.1.tgz",
          "integrity": "sha512-FjV1RTW48E7CWM7eE/J2NJvAEEVektecDBVBE5Hh3nM1Jd0kvhHtX68Pr3xsDf857xt3Y4AkwVULK1Vku62aaQ==",
          "dev": true,
          "requires": {
            "is-path-inside": "^1.0.0"
          }
        },
        "is-path-inside": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-1.0.1.tgz",
          "integrity": "sha1-jvW33lBDej/cprToZe96pVy0gDY=",
          "dev": true,
          "requires": {
            "path-is-inside": "^1.0.1"
          }
        },
        "is-plain-object": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
          "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
          "dev": true,
          "requires": {
            "isobject": "^3.0.1"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "is-promise": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
          "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o=",
          "dev": true
        },
        "is-regex": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.0.4.tgz",
          "integrity": "sha1-VRdIm1RwkbCTDglWVM7SXul+lJE=",
          "dev": true,
          "requires": {
            "has": "^1.0.1"
          }
        },
        "is-stream": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
          "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
          "dev": true
        },
        "is-symbol": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.1.tgz",
          "integrity": "sha1-PMWfAAJRlLarLjjbrmaJJWtmBXI=",
          "dev": true
        },
        "is-typedarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
          "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
          "dev": true
        },
        "is-windows": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
          "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
          "dev": true
        },
        "is-wsl": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
          "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
          "dev": true
        },
        "isarray": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
          "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
          "dev": true
        },
        "isexe": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
          "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
          "dev": true
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "isstream": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
          "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
          "dev": true
        },
        "js-levenshtein": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/js-levenshtein/-/js-levenshtein-1.1.3.tgz",
          "integrity": "sha512-/812MXr9RBtMObviZ8gQBhHO8MOrGj8HlEE+4ccMTElNA/6I3u39u+bhny55Lk921yn44nSZFy9naNLElL5wgQ==",
          "dev": true
        },
        "js-tokens": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
          "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls=",
          "dev": true
        },
        "jsbn": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
          "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
          "dev": true,
          "optional": true
        },
        "jsesc": {
          "version": "2.5.1",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.1.tgz",
          "integrity": "sha1-5CGiqOINawgZ3yiQj3glJrlt0f4=",
          "dev": true
        },
        "json-parse-better-errors": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
          "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
          "dev": true
        },
        "json-schema": {
          "version": "0.2.3",
          "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
          "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
          "dev": true
        },
        "json-schema-traverse": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
          "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
          "dev": true
        },
        "json-stringify-safe": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
          "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
          "dev": true
        },
        "json3": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/json3/-/json3-3.3.2.tgz",
          "integrity": "sha1-PAQ0dD35Pi9cQq7nsZvLSDV19OE=",
          "dev": true
        },
        "json5": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        },
        "jsprim": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
          "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
          "dev": true,
          "requires": {
            "assert-plus": "1.0.0",
            "extsprintf": "1.3.0",
            "json-schema": "0.2.3",
            "verror": "1.10.0"
          }
        },
        "killable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
          "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg==",
          "dev": true
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "lazy-cache": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/lazy-cache/-/lazy-cache-2.0.2.tgz",
          "integrity": "sha1-uRkKT5EzVGlIQIWfio9whNiCImQ=",
          "dev": true,
          "requires": {
            "set-getter": "^0.1.0"
          }
        },
        "loader-runner": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.3.0.tgz",
          "integrity": "sha1-9IKuqC1UPgeSFwDVpG7yb9rGuKI=",
          "dev": true
        },
        "loader-utils": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.1.0.tgz",
          "integrity": "sha1-yYrvSIvM7aL/teLeZG1qdUQp9c0=",
          "dev": true,
          "requires": {
            "big.js": "^3.1.3",
            "emojis-list": "^2.0.0",
            "json5": "^0.5.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "dev": true,
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "lodash": {
          "version": "4.17.10",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.10.tgz",
          "integrity": "sha512-UejweD1pDoXu+AD825lWwp4ZGtSwgnpZxb3JDViD7StjQz+Nb/6l093lx4OQ0foGWNRoc19mWy7BzL+UAK2iVg==",
          "dev": true
        },
        "lodash.camelcase": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
          "integrity": "sha1-soqmKIorn8ZRA1x3EfZathkDMaY=",
          "dev": true
        },
        "lodash.debounce": {
          "version": "4.0.8",
          "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
          "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168=",
          "dev": true
        },
        "loglevel": {
          "version": "1.6.1",
          "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.6.1.tgz",
          "integrity": "sha1-4PyVEztu8nbNyIh82vJKpvFW+Po=",
          "dev": true
        },
        "loose-envify": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.3.1.tgz",
          "integrity": "sha1-0aitM/qc4OcT1l/dCsi3SNR4yEg=",
          "dev": true,
          "requires": {
            "js-tokens": "^3.0.0"
          }
        },
        "loud-rejection": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
          "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
          "dev": true,
          "requires": {
            "currently-unhandled": "^0.4.1",
            "signal-exit": "^3.0.0"
          }
        },
        "lru-cache": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.1.tgz",
          "integrity": "sha512-q4spe4KTfsAS1SUHLO0wz8Qiyf1+vMIAgpRYioFYDMNqKfHQbg+AVDH3i4fvpl71/P1L0dBl+fQi+P37UYf0ew==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "make-dir": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-1.2.0.tgz",
          "integrity": "sha512-aNUAa4UMg/UougV25bbrU4ZaaKNjJ/3/xnvg/twpmKROPdKZPZ9wGgI0opdZzO8q/zUFawoUuixuOv33eZ61Iw==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "mamacro": {
          "version": "0.0.3",
          "resolved": "https://registry.npmjs.org/mamacro/-/mamacro-0.0.3.tgz",
          "integrity": "sha512-qMEwh+UujcQ+kbz3T6V+wAmO2U8veoq2w+3wY8MquqwVA3jChfwY+Tk52GZKDfACEPjuZ7r2oJLejwpt8jtwTA==",
          "dev": true
        },
        "map-age-cleaner": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/map-age-cleaner/-/map-age-cleaner-0.1.2.tgz",
          "integrity": "sha512-UN1dNocxQq44IhJyMI4TU8phc2m9BddacHRPRjKGLYaF0jqd3xLz0jS0skpAU9WgYyoR4gHtUpzytNBS385FWQ==",
          "dev": true,
          "requires": {
            "p-defer": "^1.0.0"
          }
        },
        "map-cache": {
          "version": "0.2.2",
          "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
          "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
          "dev": true
        },
        "map-visit": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
          "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
          "dev": true,
          "requires": {
            "object-visit": "^1.0.0"
          }
        },
        "md5.js": {
          "version": "1.3.4",
          "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.4.tgz",
          "integrity": "sha1-6b296UogpawYsENA/Fdk1bCdkB0=",
          "dev": true,
          "requires": {
            "hash-base": "^3.0.0",
            "inherits": "^2.0.1"
          }
        },
        "media-typer": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
          "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
          "dev": true
        },
        "memory-fs": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
          "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
          "dev": true,
          "requires": {
            "errno": "^0.1.3",
            "readable-stream": "^2.0.1"
          }
        },
        "merge-descriptors": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
          "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
          "dev": true
        },
        "methods": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
          "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            }
          }
        },
        "miller-rabin": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
          "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
          "dev": true,
          "requires": {
            "bn.js": "^4.0.0",
            "brorand": "^1.0.1"
          }
        },
        "mime": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/mime/-/mime-2.3.1.tgz",
          "integrity": "sha512-OEUllcVoydBHGN1z84yfQDimn58pZNNNXgZlHXSboxMlFvgI6MXSWpWKpFRra7H1HxpVhHTkrghfRW49k6yjeg==",
          "dev": true
        },
        "mime-db": {
          "version": "1.36.0",
          "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.36.0.tgz",
          "integrity": "sha512-L+xvyD9MkoYMXb1jAmzI/lWYAxAMCPvIBSWur0PZ5nOf5euahRLVqH//FKW9mWp2lkqUgYiXPgkzfMUFi4zVDw==",
          "dev": true
        },
        "mime-types": {
          "version": "2.1.20",
          "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.20.tgz",
          "integrity": "sha512-HrkrPaP9vGuWbLK1B1FfgAkbqNjIuy4eHlIYnFi7kamZyLLrGlo2mpcx0bBmNpKqBtYtAfGbodDddIgddSJC2A==",
          "dev": true,
          "requires": {
            "mime-db": "~1.36.0"
          }
        },
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
          "dev": true
        },
        "minimalistic-assert": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
          "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
          "dev": true
        },
        "minimalistic-crypto-utils": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
          "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
          "dev": true
        },
        "minimatch": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
          "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
          "dev": true,
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        },
        "minimist": {
          "version": "0.0.8",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz",
          "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
          "dev": true
        },
        "mississippi": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-2.0.0.tgz",
          "integrity": "sha512-zHo8v+otD1J10j/tC+VNoGK9keCuByhKovAvdn74dmxJl9+mWHnx6EMsDN4lgRoMI/eYo2nchAxniIbUPb5onw==",
          "dev": true,
          "requires": {
            "concat-stream": "^1.5.0",
            "duplexify": "^3.4.2",
            "end-of-stream": "^1.1.0",
            "flush-write-stream": "^1.0.0",
            "from2": "^2.1.0",
            "parallel-transform": "^1.1.0",
            "pump": "^2.0.1",
            "pumpify": "^1.3.3",
            "stream-each": "^1.1.0",
            "through2": "^2.0.0"
          }
        },
        "mixin-deep": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.1.tgz",
          "integrity": "sha512-8ZItLHeEgaqEvd5lYBXfm4EZSFCX29Jb9K+lAHhDKzReKBQKj3R+7NOF6tjqYi9t4oI8VUfaWITJQm86wnXGNQ==",
          "dev": true,
          "requires": {
            "for-in": "^1.0.2",
            "is-extendable": "^1.0.1"
          },
          "dependencies": {
            "is-extendable": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
              "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
              "dev": true,
              "requires": {
                "is-plain-object": "^2.0.4"
              }
            }
          }
        },
        "mkdirp": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.1.tgz",
          "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
          "dev": true,
          "requires": {
            "minimist": "0.0.8"
          }
        },
        "move-concurrently": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
          "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
          "dev": true,
          "requires": {
            "aproba": "^1.1.1",
            "copy-concurrently": "^1.0.0",
            "fs-write-stream-atomic": "^1.0.8",
            "mkdirp": "^0.5.1",
            "rimraf": "^2.5.4",
            "run-queue": "^1.0.3"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "multicast-dns": {
          "version": "6.2.3",
          "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
          "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
          "dev": true,
          "requires": {
            "dns-packet": "^1.3.1",
            "thunky": "^1.0.2"
          }
        },
        "multicast-dns-service-types": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
          "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE=",
          "dev": true
        },
        "mute-stream": {
          "version": "0.0.7",
          "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
          "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
          "dev": true
        },
        "nan": {
          "version": "2.11.0",
          "resolved": "https://registry.npmjs.org/nan/-/nan-2.11.0.tgz",
          "integrity": "sha512-F4miItu2rGnV2ySkXOQoA8FKz/SR2Q2sWP0sbTxNxz/tuokeC8WxOhPMcwi0qIyGtVn/rrSeLbvVkznqCdwYnw==",
          "dev": true,
          "optional": true
        },
        "nanomatch": {
          "version": "1.2.9",
          "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.9.tgz",
          "integrity": "sha512-n8R9bS8yQ6eSXaV6jHUpKzD8gLsin02w1HSFiegwrs9E098Ylhw5jdyKPaYqvHknHaSCKTPp7C8dGCQ0q9koXA==",
          "dev": true,
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "fragment-cache": "^0.2.1",
            "is-odd": "^2.0.0",
            "is-windows": "^1.0.2",
            "kind-of": "^6.0.2",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "arr-diff": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
              "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
              "dev": true
            },
            "array-unique": {
              "version": "0.3.2",
              "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
              "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
              "dev": true
            },
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            }
          }
        },
        "negotiator": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.1.tgz",
          "integrity": "sha1-KzJxhOiZIQEXeyhWP7XnECrNDKk=",
          "dev": true
        },
        "neo-async": {
          "version": "2.5.1",
          "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.5.1.tgz",
          "integrity": "sha512-3KL3fvuRkZ7s4IFOMfztb7zJp3QaVWnBeGoJlgB38XnCRPj/0tLzzLG5IB8NYOHbJ8g8UGrgZv44GLDk6CxTxA==",
          "dev": true
        },
        "nice-try": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.4.tgz",
          "integrity": "sha512-2NpiFHqC87y/zFke0fC0spBXL3bBsoh/p5H1EFhshxjCR5+0g2d6BiXbUFz9v1sAcxsk2htp2eQnNIci2dIYcA==",
          "dev": true
        },
        "node-forge": {
          "version": "0.7.5",
          "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.7.5.tgz",
          "integrity": "sha512-MmbQJ2MTESTjt3Gi/3yG1wGpIMhUfcIypUCGtTizFR9IiccFwxSpfp0vtIZlkFclEqERemxfnSdZEMR9VqqEFQ==",
          "dev": true
        },
        "node-libs-browser": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.1.0.tgz",
          "integrity": "sha512-5AzFzdoIMb89hBGMZglEegffzgRg+ZFoUmisQ8HI4j1KDdpx13J0taNp2y9xPbur6W61gepGDDotGBVQ7mfUCg==",
          "dev": true,
          "requires": {
            "assert": "^1.1.1",
            "browserify-zlib": "^0.2.0",
            "buffer": "^4.3.0",
            "console-browserify": "^1.1.0",
            "constants-browserify": "^1.0.0",
            "crypto-browserify": "^3.11.0",
            "domain-browser": "^1.1.1",
            "events": "^1.0.0",
            "https-browserify": "^1.0.0",
            "os-browserify": "^0.3.0",
            "path-browserify": "0.0.0",
            "process": "^0.11.10",
            "punycode": "^1.2.4",
            "querystring-es3": "^0.2.0",
            "readable-stream": "^2.3.3",
            "stream-browserify": "^2.0.1",
            "stream-http": "^2.7.2",
            "string_decoder": "^1.0.0",
            "timers-browserify": "^2.0.4",
            "tty-browserify": "0.0.0",
            "url": "^0.11.0",
            "util": "^0.10.3",
            "vm-browserify": "0.0.4"
          }
        },
        "node-releases": {
          "version": "1.0.0-alpha.11",
          "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.0.0-alpha.11.tgz",
          "integrity": "sha512-CaViu+2FqTNYOYNihXa5uPS/zry92I3vPU4nCB6JB3OeZ2UGtOpF5gRwuN4+m3hbEcL47bOXyun1jX2iC+3uEQ==",
          "dev": true,
          "requires": {
            "semver": "^5.3.0"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "npm-run-path": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
          "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
          "dev": true,
          "requires": {
            "path-key": "^2.0.0"
          }
        },
        "number-is-nan": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
          "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
          "dev": true
        },
        "oauth-sign": {
          "version": "0.9.0",
          "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
          "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
          "dev": true
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
          "dev": true
        },
        "object-copy": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
          "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
          "dev": true,
          "requires": {
            "copy-descriptor": "^0.1.0",
            "define-property": "^0.2.5",
            "kind-of": "^3.0.3"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              },
              "dependencies": {
                "kind-of": {
                  "version": "5.1.0",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                  "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                  "dev": true
                }
              }
            }
          }
        },
        "object-keys": {
          "version": "1.0.12",
          "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.0.12.tgz",
          "integrity": "sha512-FTMyFUm2wBcGHnH2eXmz7tC6IwlqQZ6mVZ+6dm6vZ4IQIHjs6FdNsQBuKGPuUUUY6NfJw2PshC08Tn6LzLDOag==",
          "dev": true
        },
        "object-visit": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
          "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
          "dev": true,
          "requires": {
            "isobject": "^3.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "object.getownpropertydescriptors": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.0.3.tgz",
          "integrity": "sha1-h1jIRvW0B62rDyNuCYbxSwUcqhY=",
          "dev": true,
          "requires": {
            "define-properties": "^1.1.2",
            "es-abstract": "^1.5.1"
          }
        },
        "object.pick": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
          "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
          "dev": true,
          "requires": {
            "isobject": "^3.0.1"
          },
          "dependencies": {
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "obuf": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
          "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
          "dev": true
        },
        "on-finished": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
          "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
          "dev": true,
          "requires": {
            "ee-first": "1.1.1"
          }
        },
        "on-headers": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.1.tgz",
          "integrity": "sha1-ko9dD0cNSTQmUepnlLCFfBAGk/c=",
          "dev": true
        },
        "once": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
          "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
          "dev": true,
          "requires": {
            "wrappy": "1"
          }
        },
        "onetime": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
          "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
          "dev": true,
          "requires": {
            "mimic-fn": "^1.0.0"
          }
        },
        "opn": {
          "version": "5.3.0",
          "resolved": "https://registry.npmjs.org/opn/-/opn-5.3.0.tgz",
          "integrity": "sha512-bYJHo/LOmoTd+pfiYhfZDnf9zekVJrY+cnS2a5F2x+w5ppvTqObojTP7WiFG+kVZs9Inw+qQ/lw7TroWwhdd2g==",
          "dev": true,
          "requires": {
            "is-wsl": "^1.1.0"
          }
        },
        "original": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/original/-/original-1.0.2.tgz",
          "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
          "dev": true,
          "requires": {
            "url-parse": "^1.4.3"
          }
        },
        "os-browserify": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
          "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
          "dev": true
        },
        "os-tmpdir": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
          "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
          "dev": true
        },
        "p-defer": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-defer/-/p-defer-1.0.0.tgz",
          "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
          "dev": true
        },
        "p-finally": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
          "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
          "dev": true
        },
        "p-is-promise": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/p-is-promise/-/p-is-promise-1.1.0.tgz",
          "integrity": "sha1-nJRWmJ6fZYgBewQ01WCXZ1w9oF4=",
          "dev": true
        },
        "p-limit": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.2.0.tgz",
          "integrity": "sha512-Y/OtIaXtUPr4/YpMv1pCL5L5ed0rumAaAeBSj12F+bSlMdys7i8oQF/GUJmfpTS/QoaRrS/k6pma29haJpsMng==",
          "dev": true,
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "dev": true,
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-map": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/p-map/-/p-map-1.2.0.tgz",
          "integrity": "sha512-r6zKACMNhjPJMTl8KcFH4li//gkrXWfbD6feV8l6doRHlzljFWGJ2AP6iKaCJXyZmAUMOPtvbW7EXkbWO/pLEA==",
          "dev": true
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
          "dev": true
        },
        "pako": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.6.tgz",
          "integrity": "sha512-lQe48YPsMJAig+yngZ87Lus+NF+3mtu7DVOBu6b/gHO1YpKwIj5AWjZ/TOS7i46HD/UixzWb1zeWDZfGZ3iYcg==",
          "dev": true
        },
        "parallel-transform": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.1.0.tgz",
          "integrity": "sha1-1BDwZbBdojCB/NEPKIVMKb2jOwY=",
          "dev": true,
          "requires": {
            "cyclist": "~0.2.2",
            "inherits": "^2.0.3",
            "readable-stream": "^2.1.5"
          }
        },
        "parse-asn1": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.1.tgz",
          "integrity": "sha512-KPx7flKXg775zZpnp9SxJlz00gTd4BmJ2yJufSc44gMCRrRQ7NSzAcSJQfifuOLgW6bEi+ftrALtsgALeB2Adw==",
          "dev": true,
          "requires": {
            "asn1.js": "^4.0.0",
            "browserify-aes": "^1.0.0",
            "create-hash": "^1.1.0",
            "evp_bytestokey": "^1.0.0",
            "pbkdf2": "^3.0.3"
          }
        },
        "parseurl": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.2.tgz",
          "integrity": "sha1-/CidTtiZMRlGDBViUyYs3I3mW/M=",
          "dev": true
        },
        "pascalcase": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
          "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
          "dev": true
        },
        "path-browserify": {
          "version": "0.0.0",
          "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.0.tgz",
          "integrity": "sha1-oLhwcpquIUAFt9UDLsLLuw+0RRo=",
          "dev": true
        },
        "path-dirname": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
          "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
          "dev": true
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
          "dev": true
        },
        "path-is-absolute": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
          "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
          "dev": true
        },
        "path-is-inside": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
          "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
          "dev": true
        },
        "path-key": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
          "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
          "dev": true
        },
        "path-parse": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.5.tgz",
          "integrity": "sha1-PBrfhx6pzWyUMbbqK9dKD/BVxME=",
          "dev": true
        },
        "path-to-regexp": {
          "version": "0.1.7",
          "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
          "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
          "dev": true
        },
        "path-type": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
          "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "pbkdf2": {
          "version": "3.0.16",
          "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.0.16.tgz",
          "integrity": "sha512-y4CXP3thSxqf7c0qmOF+9UeOTrifiVTIM+u7NWlq+PRsHbr7r7dpCmvzrZxa96JJUNi0Y5w9VqG5ZNeCVMoDcA==",
          "dev": true,
          "requires": {
            "create-hash": "^1.1.2",
            "create-hmac": "^1.1.4",
            "ripemd160": "^2.0.1",
            "safe-buffer": "^5.0.1",
            "sha.js": "^2.4.8"
          }
        },
        "performance-now": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
          "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
          "dev": true
        },
        "pify": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        },
        "pinkie": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
          "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
          "dev": true
        },
        "pinkie-promise": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
          "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
          "dev": true,
          "requires": {
            "pinkie": "^2.0.0"
          }
        },
        "pkg-dir": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
          "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
          "dev": true,
          "requires": {
            "find-up": "^2.1.0"
          }
        },
        "portfinder": {
          "version": "1.0.17",
          "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.17.tgz",
          "integrity": "sha512-syFcRIRzVI1BoEFOCaAiizwDolh1S1YXSodsVhncbhjzjZQulhczNRbqnUl9N31Q4dKGOXsNDqxC2BWBgSMqeQ==",
          "dev": true,
          "requires": {
            "async": "^1.5.2",
            "debug": "^2.2.0",
            "mkdirp": "0.5.x"
          },
          "dependencies": {
            "async": {
              "version": "1.5.2",
              "resolved": "https://registry.npmjs.org/async/-/async-1.5.2.tgz",
              "integrity": "sha1-7GphrlZIDAw8skHJVhjiCJL5Zyo=",
              "dev": true
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            }
          }
        },
        "posix-character-classes": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
          "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
          "dev": true
        },
        "postcss": {
          "version": "6.0.23",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          },
          "dependencies": {
            "chalk": {
              "version": "2.4.1",
              "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",
              "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",
              "dev": true,
              "requires": {
                "ansi-styles": "^3.2.1",
                "escape-string-regexp": "^1.0.5",
                "supports-color": "^5.3.0"
              }
            },
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
              "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
              "dev": true
            },
            "supports-color": {
              "version": "5.5.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
              "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
              "dev": true,
              "requires": {
                "has-flag": "^3.0.0"
              }
            }
          }
        },
        "postcss-modules-extract-imports": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-1.2.0.tgz",
          "integrity": "sha1-ZhQOzs447wa/DT41XWm/WdFB6oU=",
          "dev": true,
          "requires": {
            "postcss": "^6.0.1"
          }
        },
        "postcss-modules-local-by-default": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-1.2.0.tgz",
          "integrity": "sha1-99gMOYxaOT+nlkRmvRlQCn1hwGk=",
          "dev": true,
          "requires": {
            "css-selector-tokenizer": "^0.7.0",
            "postcss": "^6.0.1"
          }
        },
        "postcss-modules-scope": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-1.1.0.tgz",
          "integrity": "sha1-1upkmUx5+XtipytCb75gVqGUu5A=",
          "dev": true,
          "requires": {
            "css-selector-tokenizer": "^0.7.0",
            "postcss": "^6.0.1"
          }
        },
        "postcss-modules-values": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-1.3.0.tgz",
          "integrity": "sha1-7P+p1+GSUYOJ9CrQ6D9yrsRW6iA=",
          "dev": true,
          "requires": {
            "icss-replace-symbols": "^1.1.0",
            "postcss": "^6.0.1"
          }
        },
        "postcss-value-parser": {
          "version": "3.3.0",
          "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.0.tgz",
          "integrity": "sha1-h/OPnxj3dKSrTIojL1xc6IcqnRU=",
          "dev": true
        },
        "private": {
          "version": "0.1.8",
          "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
          "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
          "dev": true
        },
        "process": {
          "version": "0.11.10",
          "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
          "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
          "dev": true
        },
        "process-nextick-args": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.0.tgz",
          "integrity": "sha512-MtEC1TqN0EU5nephaJ4rAtThHtC86dNN9qCuEhtshvpVBkAW5ZO7BASN9REnF9eoXGcRub+pFuKEpOHE+HbEMw==",
          "dev": true
        },
        "promise-inflight": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
          "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
          "dev": true
        },
        "proxy-addr": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.4.tgz",
          "integrity": "sha512-5erio2h9jp5CHGwcybmxmVqHmnCBZeewlfJ0pex+UW7Qny7OOZXTtH56TGNyBizkgiOwhJtMKrVzDTeKcySZwA==",
          "dev": true,
          "requires": {
            "forwarded": "~0.1.2",
            "ipaddr.js": "1.8.0"
          }
        },
        "prr": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
          "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY=",
          "dev": true
        },
        "pseudomap": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
          "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
          "dev": true
        },
        "psl": {
          "version": "1.1.29",
          "resolved": "https://registry.npmjs.org/psl/-/psl-1.1.29.tgz",
          "integrity": "sha512-AeUmQ0oLN02flVHXWh9sSJF7mcdFq0ppid/JkErufc3hGIV/AMa8Fo9VgDo/cT2jFdOWoFvHp90qqBH54W+gjQ==",
          "dev": true
        },
        "public-encrypt": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.2.tgz",
          "integrity": "sha512-4kJ5Esocg8X3h8YgJsKAuoesBgB7mqH3eowiDzMUPKiRDDE7E/BqqZD1hnTByIaAFiwAw246YEltSq7tdrOH0Q==",
          "dev": true,
          "requires": {
            "bn.js": "^4.1.0",
            "browserify-rsa": "^4.0.0",
            "create-hash": "^1.1.0",
            "parse-asn1": "^5.0.0",
            "randombytes": "^2.0.1"
          }
        },
        "pump": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
          "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
          "dev": true,
          "requires": {
            "end-of-stream": "^1.1.0",
            "once": "^1.3.1"
          }
        },
        "pumpify": {
          "version": "1.5.1",
          "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
          "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
          "dev": true,
          "requires": {
            "duplexify": "^3.6.0",
            "inherits": "^2.0.3",
            "pump": "^2.0.0"
          }
        },
        "punycode": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        },
        "qs": {
          "version": "6.5.2",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
          "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
          "dev": true
        },
        "querystring": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
          "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
          "dev": true
        },
        "querystring-es3": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
          "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
          "dev": true
        },
        "querystringify": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.0.0.tgz",
          "integrity": "sha512-eTPo5t/4bgaMNZxyjWx6N2a6AuE0mq51KWvpc7nU/MAqixcI6v6KrGUKES0HaomdnolQBBXU/++X6/QQ9KL4tw==",
          "dev": true
        },
        "randombytes": {
          "version": "2.0.6",
          "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.0.6.tgz",
          "integrity": "sha512-CIQ5OFxf4Jou6uOKe9t1AOgqpeU5fd70A8NPdHSGeYXqXsPe6peOwI0cUl88RWZ6sP1vPMV3avd/R6cZ5/sP1A==",
          "dev": true,
          "requires": {
            "safe-buffer": "^5.1.0"
          }
        },
        "randomfill": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
          "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
          "dev": true,
          "requires": {
            "randombytes": "^2.0.5",
            "safe-buffer": "^5.1.0"
          }
        },
        "range-parser": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.0.tgz",
          "integrity": "sha1-9JvmtIeJTdxA3MlKMi9hEJLgDV4=",
          "dev": true
        },
        "raw-body": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.3.2.tgz",
          "integrity": "sha1-vNYMd9Prk83gBQKVw/N5OJvIj4k=",
          "dev": true,
          "requires": {
            "bytes": "3.0.0",
            "http-errors": "1.6.2",
            "iconv-lite": "0.4.19",
            "unpipe": "1.0.0"
          },
          "dependencies": {
            "depd": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.1.tgz",
              "integrity": "sha1-V4O04cRZ8G+lyif5kfPQbnoxA1k=",
              "dev": true
            },
            "http-errors": {
              "version": "1.6.2",
              "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.2.tgz",
              "integrity": "sha1-CgAsyFcHGSp+eUbO7cERVfYOxzY=",
              "dev": true,
              "requires": {
                "depd": "1.1.1",
                "inherits": "2.0.3",
                "setprototypeof": "1.0.3",
                "statuses": ">= 1.3.1 < 2"
              }
            },
            "setprototypeof": {
              "version": "1.0.3",
              "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.0.3.tgz",
              "integrity": "sha1-ZlZ+NwQ+608E2RvWWMDL77VbjgQ=",
              "dev": true
            }
          }
        },
        "readable-stream": {
          "version": "2.3.5",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.5.tgz",
          "integrity": "sha512-tK0yDhrkygt/knjowCUiWP9YdV7c5R+8cR0r/kt9ZhBU906Fs6RpQJCEilamRJj1Nx2rWI6LkW9gKqjTkshhEw==",
          "dev": true,
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.0.3",
            "util-deprecate": "~1.0.1"
          }
        },
        "readdirp": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.1.0.tgz",
          "integrity": "sha1-TtCtBg3zBzMAxIRANz9y0cxkLXg=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "minimatch": "^3.0.2",
            "readable-stream": "^2.0.2",
            "set-immediate-shim": "^1.0.1"
          }
        },
        "regenerate": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
          "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg==",
          "dev": true
        },
        "regenerate-unicode-properties": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-7.0.0.tgz",
          "integrity": "sha512-s5NGghCE4itSlUS+0WUj88G6cfMVMmH8boTPNvABf8od+2dhT9WDlWu8n01raQAJZMOK8Ch6jSexaRO7swd6aw==",
          "dev": true,
          "requires": {
            "regenerate": "^1.4.0"
          },
          "dependencies": {
            "regenerate": {
              "version": "1.4.0",
              "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
              "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg==",
              "dev": true
            }
          }
        },
        "regenerator-transform": {
          "version": "0.13.3",
          "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.13.3.tgz",
          "integrity": "sha512-5ipTrZFSq5vU2YoGoww4uaRVAK4wyYC4TSICibbfEPOruUu8FFP7ErV0BjmbIOEpn3O/k9na9UEdYR/3m7N6uA==",
          "dev": true,
          "requires": {
            "private": "^0.1.6"
          }
        },
        "regex-not": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
          "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
          "dev": true,
          "requires": {
            "extend-shallow": "^3.0.2",
            "safe-regex": "^1.1.0"
          }
        },
        "regexpu-core": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.2.0.tgz",
          "integrity": "sha512-Z835VSnJJ46CNBttalHD/dB+Sj2ezmY6Xp38npwU87peK6mqOzOpV8eYktdkLTEkzzD+JsTcxd84ozd8I14+rw==",
          "dev": true,
          "requires": {
            "regenerate": "^1.4.0",
            "regenerate-unicode-properties": "^7.0.0",
            "regjsgen": "^0.4.0",
            "regjsparser": "^0.3.0",
            "unicode-match-property-ecmascript": "^1.0.4",
            "unicode-match-property-value-ecmascript": "^1.0.2"
          },
          "dependencies": {
            "regenerate": {
              "version": "1.4.0",
              "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.0.tgz",
              "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg==",
              "dev": true
            }
          }
        },
        "regjsgen": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.4.0.tgz",
          "integrity": "sha512-X51Lte1gCYUdlwhF28+2YMO0U6WeN0GLpgpA7LK7mbdDnkQYiwvEpmpe0F/cv5L14EbxgrdayAG3JETBv0dbXA==",
          "dev": true
        },
        "regjsparser": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.3.0.tgz",
          "integrity": "sha512-zza72oZBBHzt64G7DxdqrOo/30bhHkwMUoT0WqfGu98XLd7N+1tsy5MJ96Bk4MD0y74n629RhmrGW6XlnLLwCA==",
          "dev": true,
          "requires": {
            "jsesc": "~0.5.0"
          },
          "dependencies": {
            "jsesc": {
              "version": "0.5.0",
              "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
              "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
              "dev": true
            }
          }
        },
        "remove-trailing-separator": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
          "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
          "dev": true
        },
        "repeat-element": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.2.tgz",
          "integrity": "sha1-7wiaF40Ug7quTZPrmLT55OEdmQo=",
          "dev": true
        },
        "repeat-string": {
          "version": "1.6.1",
          "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
          "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
          "dev": true
        },
        "request": {
          "version": "2.88.0",
          "resolved": "https://registry.npmjs.org/request/-/request-2.88.0.tgz",
          "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
          "dev": true,
          "requires": {
            "aws-sign2": "~0.7.0",
            "aws4": "^1.8.0",
            "caseless": "~0.12.0",
            "combined-stream": "~1.0.6",
            "extend": "~3.0.2",
            "forever-agent": "~0.6.1",
            "form-data": "~2.3.2",
            "har-validator": "~5.1.0",
            "http-signature": "~1.2.0",
            "is-typedarray": "~1.0.0",
            "isstream": "~0.1.2",
            "json-stringify-safe": "~5.0.1",
            "mime-types": "~2.1.19",
            "oauth-sign": "~0.9.0",
            "performance-now": "^2.1.0",
            "qs": "~6.5.2",
            "safe-buffer": "^5.1.2",
            "tough-cookie": "~2.4.3",
            "tunnel-agent": "^0.6.0",
            "uuid": "^3.3.2"
          },
          "dependencies": {
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
              "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
              "dev": true
            }
          }
        },
        "require-directory": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
          "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
          "dev": true
        },
        "require-main-filename": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
          "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
          "dev": true
        },
        "requires-port": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
          "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",
          "dev": true
        },
        "resolve": {
          "version": "1.7.1",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.7.1.tgz",
          "integrity": "sha512-c7rwLofp8g1U+h1KNyHL/jicrKg1Ek4q+Lr33AL65uZTinUZHe30D5HlyN5V9NW0JX1D5dXQ4jqW5l7Sy/kGfw==",
          "dev": true,
          "requires": {
            "path-parse": "^1.0.5"
          }
        },
        "resolve-cwd": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
          "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
          "dev": true,
          "requires": {
            "resolve-from": "^3.0.0"
          }
        },
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
          "dev": true
        },
        "resolve-url": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
          "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
          "dev": true
        },
        "restore-cursor": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
          "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
          "dev": true,
          "requires": {
            "onetime": "^2.0.0",
            "signal-exit": "^3.0.2"
          }
        },
        "ret": {
          "version": "0.1.15",
          "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
          "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
          "dev": true
        },
        "rimraf": {
          "version": "2.6.2",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.6.2.tgz",
          "integrity": "sha512-lreewLK/BlghmxtfH36YYVg1i8IAce4TI7oao75I1g245+6BctqTVQiBP3YUJ9C6DQOXJmkYR9X9fCLtCOJc5w==",
          "dev": true,
          "requires": {
            "glob": "^7.0.5"
          }
        },
        "ripemd160": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
          "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
          "dev": true,
          "requires": {
            "hash-base": "^3.0.0",
            "inherits": "^2.0.1"
          }
        },
        "run-async": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz",
          "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
          "dev": true,
          "requires": {
            "is-promise": "^2.1.0"
          }
        },
        "run-queue": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/run-queue/-/run-queue-1.0.3.tgz",
          "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
          "dev": true,
          "requires": {
            "aproba": "^1.1.1"
          }
        },
        "rxjs": {
          "version": "6.3.2",
          "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.3.2.tgz",
          "integrity": "sha512-hV7criqbR0pe7EeL3O66UYVg92IR0XsA97+9y+BWTePK9SKmEI5Qd3Zj6uPnGkNzXsBywBQWTvujPl+1Kn9Zjw==",
          "dev": true,
          "requires": {
            "tslib": "^1.9.0"
          }
        },
        "safe-buffer": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.1.tgz",
          "integrity": "sha512-kKvNJn6Mm93gAczWVJg7wH+wGYWNrDHdWvpUmHyEsgCtIwwo3bqPtV4tR5tuPaUhTOo/kvhVwd8XwwOllGYkbg==",
          "dev": true
        },
        "safe-regex": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
          "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
          "dev": true,
          "requires": {
            "ret": "~0.1.10"
          }
        },
        "safer-buffer": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
          "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
          "dev": true
        },
        "sax": {
          "version": "1.2.4",
          "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
          "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
          "dev": true
        },
        "schema-utils": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-0.3.0.tgz",
          "integrity": "sha1-9YdyIs4+kx7a4DnxfrNxbnE3+M8=",
          "dev": true,
          "requires": {
            "ajv": "^5.0.0"
          }
        },
        "select-hose": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
          "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo=",
          "dev": true
        },
        "selfsigned": {
          "version": "1.10.3",
          "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-1.10.3.tgz",
          "integrity": "sha512-vmZenZ+8Al3NLHkWnhBQ0x6BkML1eCP2xEi3JE+f3D9wW9fipD9NNJHYtE9XJM4TsPaHGZJIamrSI6MTg1dU2Q==",
          "dev": true,
          "requires": {
            "node-forge": "0.7.5"
          }
        },
        "semver": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.5.0.tgz",
          "integrity": "sha512-4SJ3dm0WAwWy/NVeioZh5AntkdJoWKxHxcmyP622fOkgHa4z3R0TdBJICINyaSDE6uNwVc8gZr+ZinwZAH4xIA==",
          "dev": true
        },
        "send": {
          "version": "0.16.2",
          "resolved": "https://registry.npmjs.org/send/-/send-0.16.2.tgz",
          "integrity": "sha512-E64YFPUssFHEFBvpbbjr44NCLtI1AohxQ8ZSiJjQLskAdKuriYEP6VyGEsRDH8ScozGpkaX1BGvhanqCwkcEZw==",
          "dev": true,
          "requires": {
            "debug": "2.6.9",
            "depd": "~1.1.2",
            "destroy": "~1.0.4",
            "encodeurl": "~1.0.2",
            "escape-html": "~1.0.3",
            "etag": "~1.8.1",
            "fresh": "0.5.2",
            "http-errors": "~1.6.2",
            "mime": "1.4.1",
            "ms": "2.0.0",
            "on-finished": "~2.3.0",
            "range-parser": "~1.2.0",
            "statuses": "~1.4.0"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "mime": {
              "version": "1.4.1",
              "resolved": "https://registry.npmjs.org/mime/-/mime-1.4.1.tgz",
              "integrity": "sha512-KI1+qOZu5DcW6wayYHSzR/tXKCDC5Om4s1z2QJjDULzLcmf3DvzS7oluY4HCTrc+9FiKmWUgeNLg7W3uIQvxtQ==",
              "dev": true
            }
          }
        },
        "serialize-javascript": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-1.5.0.tgz",
          "integrity": "sha512-Ga8c8NjAAp46Br4+0oZ2WxJCwIzwP60Gq1YPgU+39PiTVxyed/iKE/zyZI6+UlVYH5Q4PaQdHhcegIFPZTUfoQ==",
          "dev": true
        },
        "serve-index": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
          "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
          "dev": true,
          "requires": {
            "accepts": "~1.3.4",
            "batch": "0.6.1",
            "debug": "2.6.9",
            "escape-html": "~1.0.3",
            "http-errors": "~1.6.2",
            "mime-types": "~2.1.17",
            "parseurl": "~1.3.2"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            }
          }
        },
        "serve-static": {
          "version": "1.13.2",
          "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.13.2.tgz",
          "integrity": "sha512-p/tdJrO4U387R9oMjb1oj7qSMaMfmOyd4j9hOFoxZe2baQszgHcSWjuya/CiT5kgZZKRudHNOA0pYXOl8rQ5nw==",
          "dev": true,
          "requires": {
            "encodeurl": "~1.0.2",
            "escape-html": "~1.0.3",
            "parseurl": "~1.3.2",
            "send": "0.16.2"
          }
        },
        "set-blocking": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
          "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
          "dev": true
        },
        "set-getter": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/set-getter/-/set-getter-0.1.0.tgz",
          "integrity": "sha1-12nBgsnVpR9AkUXy+6guXoboA3Y=",
          "dev": true,
          "requires": {
            "to-object-path": "^0.3.0"
          }
        },
        "set-immediate-shim": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/set-immediate-shim/-/set-immediate-shim-1.0.1.tgz",
          "integrity": "sha1-SysbJ+uAip+NzEgaWOXlb1mfP2E=",
          "dev": true
        },
        "set-value": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.0.tgz",
          "integrity": "sha512-hw0yxk9GT/Hr5yJEYnHNKYXkIA8mVJgd9ditYZCe16ZczcaELYYcfvaXesNACk2O8O0nTiPQcQhGUQj8JLzeeg==",
          "dev": true,
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-extendable": "^0.1.1",
            "is-plain-object": "^2.0.3",
            "split-string": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "setimmediate": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
          "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
          "dev": true
        },
        "setprototypeof": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
          "dev": true
        },
        "sha.js": {
          "version": "2.4.11",
          "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
          "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.1",
            "safe-buffer": "^5.0.1"
          }
        },
        "shebang-command": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
          "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
          "dev": true,
          "requires": {
            "shebang-regex": "^1.0.0"
          }
        },
        "shebang-regex": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
          "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
          "dev": true
        },
        "signal-exit": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
          "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
          "dev": true
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "snapdragon": {
          "version": "0.8.1",
          "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.1.tgz",
          "integrity": "sha1-4StUh/re0+PeoKyR6UAL91tAE3A=",
          "dev": true,
          "requires": {
            "base": "^0.11.1",
            "debug": "^2.2.0",
            "define-property": "^0.2.5",
            "extend-shallow": "^2.0.1",
            "map-cache": "^0.2.2",
            "source-map": "^0.5.6",
            "source-map-resolve": "^0.5.0",
            "use": "^2.0.0"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "snapdragon-node": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
          "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
          "dev": true,
          "requires": {
            "define-property": "^1.0.0",
            "isobject": "^3.0.0",
            "snapdragon-util": "^3.0.1"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^1.0.0"
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "snapdragon-util": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
          "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
          "dev": true,
          "requires": {
            "kind-of": "^3.2.0"
          }
        },
        "sockjs": {
          "version": "0.3.19",
          "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.19.tgz",
          "integrity": "sha512-V48klKZl8T6MzatbLlzzRNhMepEys9Y4oGFpypBFFn1gLI/QQ9HtLLyWJNbPlwGLelOVOEijUbTTJeLLI59jLw==",
          "dev": true,
          "requires": {
            "faye-websocket": "^0.10.0",
            "uuid": "^3.0.1"
          }
        },
        "sockjs-client": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/sockjs-client/-/sockjs-client-1.1.5.tgz",
          "integrity": "sha1-G7fA9yIsQPQq3xT0RCy9Eml3GoM=",
          "dev": true,
          "requires": {
            "debug": "^2.6.6",
            "eventsource": "0.1.6",
            "faye-websocket": "~0.11.0",
            "inherits": "^2.0.1",
            "json3": "^3.3.2",
            "url-parse": "^1.1.8"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "faye-websocket": {
              "version": "0.11.1",
              "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.1.tgz",
              "integrity": "sha1-8O/hjE9W5PQK/H4Gxxn9XuYYjzg=",
              "dev": true,
              "requires": {
                "websocket-driver": ">=0.5.1"
              }
            }
          }
        },
        "source-list-map": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.0.tgz",
          "integrity": "sha512-I2UmuJSRr/T8jisiROLU3A3ltr+swpniSmNPI4Ml3ZCX6tVnDsuZzK7F2hl5jTqbZBWCEKlj5HRQiPExXLgE8A==",
          "dev": true
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        },
        "source-map-loader": {
          "version": "0.2.4",
          "resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-0.2.4.tgz",
          "integrity": "sha512-OU6UJUty+i2JDpTItnizPrlpOIBLmQbWMuBg9q5bVtnHACqw1tn9nNwqJLbv0/00JjnJb/Ee5g5WS5vrRv7zIQ==",
          "dev": true,
          "requires": {
            "async": "^2.5.0",
            "loader-utils": "^1.1.0"
          }
        },
        "source-map-resolve": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.1.tgz",
          "integrity": "sha512-0KW2wvzfxm8NCTb30z0LMNyPqWCdDGE2viwzUaucqJdkTRXtZiSY3I+2A6nVAjmdOy0I4gU8DwnVVGsk9jvP2A==",
          "dev": true,
          "requires": {
            "atob": "^2.0.0",
            "decode-uri-component": "^0.2.0",
            "resolve-url": "^0.2.1",
            "source-map-url": "^0.4.0",
            "urix": "^0.1.0"
          }
        },
        "source-map-url": {
          "version": "0.4.0",
          "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
          "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
          "dev": true
        },
        "spdy": {
          "version": "3.4.7",
          "resolved": "https://registry.npmjs.org/spdy/-/spdy-3.4.7.tgz",
          "integrity": "sha1-Qv9B7OXMD5mjpsKKq7c/XDsDrLw=",
          "dev": true,
          "requires": {
            "debug": "^2.6.8",
            "handle-thing": "^1.2.5",
            "http-deceiver": "^1.2.7",
            "safe-buffer": "^5.0.1",
            "select-hose": "^2.0.0",
            "spdy-transport": "^2.0.18"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            }
          }
        },
        "spdy-transport": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-2.1.0.tgz",
          "integrity": "sha512-bpUeGpZcmZ692rrTiqf9/2EUakI6/kXX1Rpe0ib/DyOzbiexVfXkw6GnvI9hVGvIwVaUhkaBojjCZwLNRGQg1g==",
          "dev": true,
          "requires": {
            "debug": "^2.6.8",
            "detect-node": "^2.0.3",
            "hpack.js": "^2.1.6",
            "obuf": "^1.1.1",
            "readable-stream": "^2.2.9",
            "safe-buffer": "^5.0.1",
            "wbuf": "^1.7.2"
          },
          "dependencies": {
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            }
          }
        },
        "split-string": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
          "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
          "dev": true,
          "requires": {
            "extend-shallow": "^3.0.0"
          }
        },
        "sshpk": {
          "version": "1.14.2",
          "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.14.2.tgz",
          "integrity": "sha1-xvxhZIo9nE52T9P8306hBeSSupg=",
          "dev": true,
          "requires": {
            "asn1": "~0.2.3",
            "assert-plus": "^1.0.0",
            "bcrypt-pbkdf": "^1.0.0",
            "dashdash": "^1.12.0",
            "ecc-jsbn": "~0.1.1",
            "getpass": "^0.1.1",
            "jsbn": "~0.1.0",
            "safer-buffer": "^2.0.2",
            "tweetnacl": "~0.14.0"
          }
        },
        "ssri": {
          "version": "5.3.0",
          "resolved": "https://registry.npmjs.org/ssri/-/ssri-5.3.0.tgz",
          "integrity": "sha512-XRSIPqLij52MtgoQavH/x/dU1qVKtWUAAZeOHsR9c2Ddi4XerFy3mc1alf+dLJKl9EUIm/Ht+EowFkTUOA6GAQ==",
          "dev": true,
          "requires": {
            "safe-buffer": "^5.1.1"
          }
        },
        "static-extend": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
          "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
          "dev": true,
          "requires": {
            "define-property": "^0.2.5",
            "object-copy": "^0.1.0"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "statuses": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.4.0.tgz",
          "integrity": "sha512-zhSCtt8v2NDrRlPQpCNtw/heZLtfUDqxBM1udqikb/Hbk52LK4nQSwr10u77iopCW5LsyHpuXS0GnEc48mLeew==",
          "dev": true
        },
        "stream-browserify": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.1.tgz",
          "integrity": "sha1-ZiZu5fm9uZQKTkUUyvtDu3Hlyds=",
          "dev": true,
          "requires": {
            "inherits": "~2.0.1",
            "readable-stream": "^2.0.2"
          }
        },
        "stream-each": {
          "version": "1.2.3",
          "resolved": "https://registry.npmjs.org/stream-each/-/stream-each-1.2.3.tgz",
          "integrity": "sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==",
          "dev": true,
          "requires": {
            "end-of-stream": "^1.1.0",
            "stream-shift": "^1.0.0"
          }
        },
        "stream-http": {
          "version": "2.8.3",
          "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
          "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
          "dev": true,
          "requires": {
            "builtin-status-codes": "^3.0.0",
            "inherits": "^2.0.1",
            "readable-stream": "^2.3.6",
            "to-arraybuffer": "^1.0.0",
            "xtend": "^4.0.0"
          },
          "dependencies": {
            "readable-stream": {
              "version": "2.3.6",
              "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.6.tgz",
              "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
              "dev": true,
              "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.3",
                "isarray": "~1.0.0",
                "process-nextick-args": "~2.0.0",
                "safe-buffer": "~5.1.1",
                "string_decoder": "~1.1.1",
                "util-deprecate": "~1.0.1"
              }
            },
            "string_decoder": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
              "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
              "dev": true,
              "requires": {
                "safe-buffer": "~5.1.0"
              }
            }
          }
        },
        "stream-shift": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.0.tgz",
          "integrity": "sha1-1cdSgl5TZ+eG944Y5EXqIjoVWVI=",
          "dev": true
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "dev": true,
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
              "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
              "dev": true
            },
            "strip-ansi": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
              "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
              "dev": true,
              "requires": {
                "ansi-regex": "^3.0.0"
              }
            }
          }
        },
        "string_decoder": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.0.3.tgz",
          "integrity": "sha512-4AH6Z5fzNNBcH+6XDMfA/BTt87skxqJlO0lAh3Dker5zThcAxG6mKz+iGu308UKoPPQ8Dcqx/4JhujzltRa+hQ==",
          "dev": true,
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "strip-eof": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
          "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
          "dev": true
        },
        "style-loader": {
          "version": "0.23.0",
          "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-0.23.0.tgz",
          "integrity": "sha512-uCcN7XWHkqwGVt7skpInW6IGO1tG6ReyFQ1Cseh0VcN6VdcFQi62aG/2F3Y9ueA8x4IVlfaSUxpmQXQD9QrEuQ==",
          "dev": true,
          "requires": {
            "loader-utils": "^1.1.0",
            "schema-utils": "^0.4.5"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "schema-utils": {
              "version": "0.4.7",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-0.4.7.tgz",
              "integrity": "sha512-v/iwU6wvwGK8HbU9yi3/nhGzP0yGSuhQMzL6ySiec1FSrZZDkhm4noOSWzrNFo/jEc+SJY6jRTwuwbSXJPDUnQ==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-keywords": "^3.1.0"
              }
            }
          }
        },
        "supports-color": {
          "version": "5.3.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.3.0.tgz",
          "integrity": "sha512-0aP01LLIskjKs3lq52EC0aGBAJhLq7B2Rd8HC/DR/PtNNpcLilNmHC12O+hu0usQpo7wtHNRqtrhBwtDb0+dNg==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        },
        "through": {
          "version": "2.3.8",
          "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
          "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
          "dev": true
        },
        "through2": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.3.tgz",
          "integrity": "sha1-AARWmzfHx0ujnEPzzteNGtlBQL4=",
          "dev": true,
          "requires": {
            "readable-stream": "^2.1.5",
            "xtend": "~4.0.1"
          }
        },
        "thunky": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.0.2.tgz",
          "integrity": "sha1-qGLgGOP7HqLsP85dVWBc9X8kc3E=",
          "dev": true
        },
        "timers-browserify": {
          "version": "2.0.10",
          "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.10.tgz",
          "integrity": "sha512-YvC1SV1XdOUaL6gx5CoGroT3Gu49pK9+TZ38ErPldOWW4j49GI1HKs9DV+KGq/w6y+LZ72W1c8cKz2vzY+qpzg==",
          "dev": true,
          "requires": {
            "setimmediate": "^1.0.4"
          }
        },
        "tmp": {
          "version": "0.0.33",
          "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
          "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
          "dev": true,
          "requires": {
            "os-tmpdir": "~1.0.2"
          }
        },
        "to-arraybuffer": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
          "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
          "dev": true
        },
        "to-fast-properties": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
          "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
          "dev": true
        },
        "to-object-path": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
          "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          }
        },
        "to-regex": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
          "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
          "dev": true,
          "requires": {
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "regex-not": "^1.0.2",
            "safe-regex": "^1.1.0"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "dev": true,
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          },
          "dependencies": {
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              }
            }
          }
        },
        "tough-cookie": {
          "version": "2.4.3",
          "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.4.3.tgz",
          "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
          "dev": true,
          "requires": {
            "psl": "^1.1.24",
            "punycode": "^1.4.1"
          }
        },
        "trim-right": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
          "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM=",
          "dev": true
        },
        "ts-loader": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ts-loader/-/ts-loader-5.1.0.tgz",
          "integrity": "sha512-pbESalpH3V8sh/JdG0Zq6Nqp7SzgvYLWapLCXtPXRb6gpW9svgPV2FO6//480iZZpQY9uQCJdfY+l7B5KMUMBg==",
          "dev": true,
          "requires": {
            "chalk": "^2.3.0",
            "enhanced-resolve": "^4.0.0",
            "loader-utils": "^1.0.2",
            "micromatch": "^3.1.4",
            "semver": "^5.0.1"
          },
          "dependencies": {
            "enhanced-resolve": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.1.0.tgz",
              "integrity": "sha512-F/7vkyTtyc/llOIn8oWclcB25KdRaiPBpZYDgJHgh/UHtpgT2p2eldQgtQnLtUvfMKPKxbRaQM/hHkvLHt1Vng==",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "memory-fs": "^0.4.0",
                "tapable": "^1.0.0"
              }
            },
            "tapable": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.0.tgz",
              "integrity": "sha512-IlqtmLVaZA2qab8epUXbVWRn3aB1imbDMJtjB3nu4X0NqPkcY/JH9ZtCBWKHWPxs8Svi9tyo8w2dBoi07qZbBA==",
              "dev": true
            }
          }
        },
        "tslib": {
          "version": "1.9.2",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.9.2.tgz",
          "integrity": "sha512-AVP5Xol3WivEr7hnssHDsaM+lVrVXWUvd1cfXTRkTj80b//6g2wIFEH6hZG0muGZRnHGrfttpdzRk3YlBkWjKw==",
          "dev": true
        },
        "tty-browserify": {
          "version": "0.0.0",
          "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
          "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
          "dev": true
        },
        "tunnel-agent": {
          "version": "0.6.0",
          "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
          "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
          "dev": true,
          "requires": {
            "safe-buffer": "^5.0.1"
          }
        },
        "tweetnacl": {
          "version": "0.14.5",
          "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
          "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
          "dev": true,
          "optional": true
        },
        "type-is": {
          "version": "1.6.16",
          "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.16.tgz",
          "integrity": "sha512-HRkVv/5qY2G6I8iab9cI7v1bOIdhm94dVjQCPFElW9W+3GeDOSHmy2EBYe4VTApuzolPcmgFTN3ftVJRKR2J9Q==",
          "dev": true,
          "requires": {
            "media-typer": "0.3.0",
            "mime-types": "~2.1.18"
          }
        },
        "typedarray": {
          "version": "0.0.6",
          "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
          "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
          "dev": true
        },
        "typescript": {
          "version": "3.0.3",
          "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.0.3.tgz",
          "integrity": "sha512-kk80vLW9iGtjMnIv11qyxLqZm20UklzuR2tL0QAnDIygIUIemcZMxlMWudl9OOt76H3ntVzcTiddQ1/pAAJMYg==",
          "dev": true
        },
        "typescriptwebpacksupport": {
          "version": "github:stefan-lacatus/ThingworxWidgetSupportPackage#c41413b8e738d42a4930cbbed2a34aa6e122e2e0",
          "from": "github:stefan-lacatus/ThingworxWidgetSupportPackage#master"
        },
        "uglify-es": {
          "version": "3.3.9",
          "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.3.9.tgz",
          "integrity": "sha512-r+MU0rfv4L/0eeW3xZrd16t4NZfK8Ld4SWVglYBb7ez5uXFWHuVRs6xCTrf1yirs9a4j4Y27nn7SRfO6v67XsQ==",
          "dev": true,
          "requires": {
            "commander": "~2.13.0",
            "source-map": "~0.6.1"
          },
          "dependencies": {
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
              "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
              "dev": true
            }
          }
        },
        "uglifyjs-webpack-plugin": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/uglifyjs-webpack-plugin/-/uglifyjs-webpack-plugin-1.3.0.tgz",
          "integrity": "sha512-ovHIch0AMlxjD/97j9AYovZxG5wnHOPkL7T1GKochBADp/Zwc44pEWNqpKl1Loupp1WhFg7SlYmHZRUfdAacgw==",
          "dev": true,
          "requires": {
            "cacache": "^10.0.4",
            "find-cache-dir": "^1.0.0",
            "schema-utils": "^0.4.5",
            "serialize-javascript": "^1.4.0",
            "source-map": "^0.6.1",
            "uglify-es": "^3.3.4",
            "webpack-sources": "^1.1.0",
            "worker-farm": "^1.5.2"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "punycode": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
              "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
              "dev": true
            },
            "schema-utils": {
              "version": "0.4.7",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-0.4.7.tgz",
              "integrity": "sha512-v/iwU6wvwGK8HbU9yi3/nhGzP0yGSuhQMzL6ySiec1FSrZZDkhm4noOSWzrNFo/jEc+SJY6jRTwuwbSXJPDUnQ==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-keywords": "^3.1.0"
              }
            },
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
              "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
              "dev": true
            },
            "uri-js": {
              "version": "4.2.2",
              "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
              "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
              "dev": true,
              "requires": {
                "punycode": "^2.1.0"
              }
            }
          }
        },
        "unicode-canonical-property-names-ecmascript": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
          "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
          "dev": true
        },
        "unicode-match-property-ecmascript": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
          "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
          "dev": true,
          "requires": {
            "unicode-canonical-property-names-ecmascript": "^1.0.4",
            "unicode-property-aliases-ecmascript": "^1.0.4"
          }
        },
        "unicode-match-property-value-ecmascript": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.0.2.tgz",
          "integrity": "sha512-Rx7yODZC1L/T8XKo/2kNzVAQaRE88AaMvI1EF/Xnj3GW2wzN6fop9DDWuFAKUVFH7vozkz26DzP0qyWLKLIVPQ==",
          "dev": true
        },
        "unicode-property-aliases-ecmascript": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.0.4.tgz",
          "integrity": "sha512-2WSLa6OdYd2ng8oqiGIWnJqyFArvhn+5vgx5GTxMbUYjCYKUcuKS62YLFF0R/BDGlB1yzXjQOLtPAfHsgirEpg==",
          "dev": true
        },
        "union-value": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.0.tgz",
          "integrity": "sha1-XHHDTLW61dzr4+oM0IIHulqhrqQ=",
          "dev": true,
          "requires": {
            "arr-union": "^3.1.0",
            "get-value": "^2.0.6",
            "is-extendable": "^0.1.1",
            "set-value": "^0.4.3"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "set-value": {
              "version": "0.4.3",
              "resolved": "https://registry.npmjs.org/set-value/-/set-value-0.4.3.tgz",
              "integrity": "sha1-fbCPnT0i3H945Trzw79GZuzfzPE=",
              "dev": true,
              "requires": {
                "extend-shallow": "^2.0.1",
                "is-extendable": "^0.1.1",
                "is-plain-object": "^2.0.1",
                "to-object-path": "^0.3.0"
              }
            }
          }
        },
        "unique-filename": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.0.tgz",
          "integrity": "sha1-0F8v5AMlYIcfMOk8vnNe6iAVFPM=",
          "dev": true,
          "requires": {
            "unique-slug": "^2.0.0"
          }
        },
        "unique-slug": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.0.tgz",
          "integrity": "sha1-22Z258fMBimHj/GWCXx4hVrp9Ks=",
          "dev": true,
          "requires": {
            "imurmurhash": "^0.1.4"
          }
        },
        "unpipe": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
          "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
          "dev": true
        },
        "unset-value": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
          "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
          "dev": true,
          "requires": {
            "has-value": "^0.3.1",
            "isobject": "^3.0.0"
          },
          "dependencies": {
            "has-value": {
              "version": "0.3.1",
              "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
              "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
              "dev": true,
              "requires": {
                "get-value": "^2.0.3",
                "has-values": "^0.1.4",
                "isobject": "^2.0.0"
              },
              "dependencies": {
                "isobject": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                  "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                  "dev": true,
                  "requires": {
                    "isarray": "1.0.0"
                  }
                }
              }
            },
            "has-values": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
              "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
              "dev": true
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            }
          }
        },
        "upath": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/upath/-/upath-1.1.0.tgz",
          "integrity": "sha512-bzpH/oBhoS/QI/YtbkqCg6VEiPYjSZtrHQM6/QnJS6OL9pKUFLqb3aFh4Scvwm45+7iAgiMkLhSbaZxUqmrprw==",
          "dev": true
        },
        "uri-js": {
          "version": "4.2.2",
          "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
          "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
          "dev": true,
          "requires": {
            "punycode": "^2.1.0"
          },
          "dependencies": {
            "punycode": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
              "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
              "dev": true
            }
          }
        },
        "urix": {
          "version": "0.1.0",
          "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
          "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
          "dev": true
        },
        "url": {
          "version": "0.11.0",
          "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
          "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
          "dev": true,
          "requires": {
            "punycode": "1.3.2",
            "querystring": "0.2.0"
          },
          "dependencies": {
            "punycode": {
              "version": "1.3.2",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
              "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
              "dev": true
            }
          }
        },
        "url-join": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/url-join/-/url-join-4.0.0.tgz",
          "integrity": "sha1-TTNA6AfTdzvamZH4MFrNzCpmXSo=",
          "dev": true
        },
        "url-loader": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/url-loader/-/url-loader-1.1.1.tgz",
          "integrity": "sha512-vugEeXjyYFBCUOpX+ZuaunbK3QXMKaQ3zUnRfIpRBlGkY7QizCnzyyn2ASfcxsvyU3ef+CJppVywnl3Kgf13Gg==",
          "dev": true,
          "requires": {
            "loader-utils": "^1.1.0",
            "mime": "^2.0.3",
            "schema-utils": "^1.0.0"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "punycode": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
              "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
              "dev": true
            },
            "schema-utils": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
              "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-errors": "^1.0.0",
                "ajv-keywords": "^3.1.0"
              }
            },
            "uri-js": {
              "version": "4.2.2",
              "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
              "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
              "dev": true,
              "requires": {
                "punycode": "^2.1.0"
              }
            }
          }
        },
        "url-parse": {
          "version": "1.4.3",
          "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.4.3.tgz",
          "integrity": "sha512-rh+KuAW36YKo0vClhQzLLveoj8FwPJNu65xLb7Mrt+eZht0IPT0IXgSv8gcMegZ6NvjJUALf6Mf25POlMwD1Fw==",
          "dev": true,
          "requires": {
            "querystringify": "^2.0.0",
            "requires-port": "^1.0.0"
          }
        },
        "use": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/use/-/use-2.0.2.tgz",
          "integrity": "sha1-riig1y+TvyJCKhii43mZMRLeyOg=",
          "dev": true,
          "requires": {
            "define-property": "^0.2.5",
            "isobject": "^3.0.0",
            "lazy-cache": "^2.0.2"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "util": {
          "version": "0.10.4",
          "resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
          "integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
          "dev": true,
          "requires": {
            "inherits": "2.0.3"
          }
        },
        "util-deprecate": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
          "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
          "dev": true
        },
        "util.promisify": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.0.tgz",
          "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
          "dev": true,
          "requires": {
            "define-properties": "^1.1.2",
            "object.getownpropertydescriptors": "^2.0.3"
          }
        },
        "utils-merge": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
          "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
          "dev": true
        },
        "uuid": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
          "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==",
          "dev": true
        },
        "v8-compile-cache": {
          "version": "2.0.2",
          "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.0.2.tgz",
          "integrity": "sha512-1wFuMUIM16MDJRCrpbpuEPTUGmM5QMUg0cr3KFwra2XgOgFcPGDQHDh3CszSCD2Zewc/dh/pamNEW8CbfDebUw==",
          "dev": true
        },
        "vary": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
          "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
          "dev": true
        },
        "verror": {
          "version": "1.10.0",
          "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
          "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
          "dev": true,
          "requires": {
            "assert-plus": "^1.0.0",
            "core-util-is": "1.0.2",
            "extsprintf": "^1.2.0"
          }
        },
        "vm-browserify": {
          "version": "0.0.4",
          "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-0.0.4.tgz",
          "integrity": "sha1-XX6kW7755Kb/ZflUOOCofDV9WnM=",
          "dev": true,
          "requires": {
            "indexof": "0.0.1"
          }
        },
        "watchpack": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.6.0.tgz",
          "integrity": "sha512-i6dHe3EyLjMmDlU1/bGQpEw25XSjkJULPuAVKCbNRefQVq48yXKUpwg538F7AZTf9kyr57zj++pQFltUa5H7yA==",
          "dev": true,
          "requires": {
            "chokidar": "^2.0.2",
            "graceful-fs": "^4.1.2",
            "neo-async": "^2.5.0"
          }
        },
        "wbuf": {
          "version": "1.7.3",
          "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
          "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
          "dev": true,
          "requires": {
            "minimalistic-assert": "^1.0.0"
          }
        },
        "webpack": {
          "version": "4.18.0",
          "resolved": "https://registry.npmjs.org/webpack/-/webpack-4.18.0.tgz",
          "integrity": "sha512-XOGIV1FuGSisuX0gJwoANpR0+rUnlDWf2dadNfdT8ftaM8QzIMsJin2vK9XaYuhsji321C6dnCV4bxbIwq9jrg==",
          "dev": true,
          "requires": {
            "@webassemblyjs/ast": "1.7.6",
            "@webassemblyjs/helper-module-context": "1.7.6",
            "@webassemblyjs/wasm-edit": "1.7.6",
            "@webassemblyjs/wasm-parser": "1.7.6",
            "acorn": "^5.6.2",
            "acorn-dynamic-import": "^3.0.0",
            "ajv": "^6.1.0",
            "ajv-keywords": "^3.1.0",
            "chrome-trace-event": "^1.0.0",
            "enhanced-resolve": "^4.1.0",
            "eslint-scope": "^4.0.0",
            "json-parse-better-errors": "^1.0.2",
            "loader-runner": "^2.3.0",
            "loader-utils": "^1.1.0",
            "memory-fs": "~0.4.1",
            "micromatch": "^3.1.8",
            "mkdirp": "~0.5.0",
            "neo-async": "^2.5.0",
            "node-libs-browser": "^2.0.0",
            "schema-utils": "^0.4.4",
            "tapable": "^1.0.0",
            "uglifyjs-webpack-plugin": "^1.2.4",
            "watchpack": "^1.5.0",
            "webpack-sources": "^1.2.0"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "arr-diff": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
              "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
              "dev": true
            },
            "array-unique": {
              "version": "0.3.2",
              "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
              "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
              "dev": true
            },
            "braces": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
              "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
              "dev": true,
              "requires": {
                "arr-flatten": "^1.1.0",
                "array-unique": "^0.3.2",
                "extend-shallow": "^2.0.1",
                "fill-range": "^4.0.0",
                "isobject": "^3.0.1",
                "repeat-element": "^1.1.2",
                "snapdragon": "^0.8.1",
                "snapdragon-node": "^2.0.1",
                "split-string": "^3.0.2",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
              "dev": true,
              "requires": {
                "ms": "2.0.0"
              }
            },
            "enhanced-resolve": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.1.0.tgz",
              "integrity": "sha512-F/7vkyTtyc/llOIn8oWclcB25KdRaiPBpZYDgJHgh/UHtpgT2p2eldQgtQnLtUvfMKPKxbRaQM/hHkvLHt1Vng==",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "memory-fs": "^0.4.0",
                "tapable": "^1.0.0"
              }
            },
            "expand-brackets": {
              "version": "2.1.4",
              "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
              "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
              "dev": true,
              "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "0.2.5",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                  "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^0.1.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                },
                "is-descriptor": {
                  "version": "0.1.6",
                  "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
                  "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
                  "dev": true,
                  "requires": {
                    "is-accessor-descriptor": "^0.1.6",
                    "is-data-descriptor": "^0.1.4",
                    "kind-of": "^5.0.0"
                  }
                },
                "kind-of": {
                  "version": "5.1.0",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                  "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                  "dev": true
                }
              }
            },
            "extglob": {
              "version": "2.0.4",
              "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
              "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
              "dev": true,
              "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
              },
              "dependencies": {
                "define-property": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                  "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                  "dev": true,
                  "requires": {
                    "is-descriptor": "^1.0.0"
                  }
                },
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "fill-range": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
              "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
              "dev": true,
              "requires": {
                "extend-shallow": "^2.0.1",
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1",
                "to-regex-range": "^2.1.0"
              },
              "dependencies": {
                "extend-shallow": {
                  "version": "2.0.1",
                  "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                  "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                  "dev": true,
                  "requires": {
                    "is-extendable": "^0.1.0"
                  }
                }
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-number": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
              "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "isobject": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
              "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
              "dev": true
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "kind-of": {
              "version": "6.0.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.2.tgz",
              "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
              "dev": true
            },
            "micromatch": {
              "version": "3.1.10",
              "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
              "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
              "dev": true,
              "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "braces": "^2.3.1",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "extglob": "^2.0.4",
                "fragment-cache": "^0.2.1",
                "kind-of": "^6.0.2",
                "nanomatch": "^1.2.9",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.2"
              }
            },
            "punycode": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
              "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
              "dev": true
            },
            "schema-utils": {
              "version": "0.4.7",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-0.4.7.tgz",
              "integrity": "sha512-v/iwU6wvwGK8HbU9yi3/nhGzP0yGSuhQMzL6ySiec1FSrZZDkhm4noOSWzrNFo/jEc+SJY6jRTwuwbSXJPDUnQ==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-keywords": "^3.1.0"
              }
            },
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
              "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
              "dev": true
            },
            "tapable": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.0.tgz",
              "integrity": "sha512-IlqtmLVaZA2qab8epUXbVWRn3aB1imbDMJtjB3nu4X0NqPkcY/JH9ZtCBWKHWPxs8Svi9tyo8w2dBoi07qZbBA==",
              "dev": true
            },
            "uri-js": {
              "version": "4.2.2",
              "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
              "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
              "dev": true,
              "requires": {
                "punycode": "^2.1.0"
              }
            },
            "webpack-sources": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.2.0.tgz",
              "integrity": "sha512-9BZwxR85dNsjWz3blyxdOhTgtnQvv3OEs5xofI0wPYTwu5kaWxS08UuD1oI7WLBLpRO+ylf0ofnXLXWmGb2WMw==",
              "dev": true,
              "requires": {
                "source-list-map": "^2.0.0",
                "source-map": "~0.6.1"
              }
            }
          }
        },
        "webpack-cli": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-3.1.0.tgz",
          "integrity": "sha512-p5NeKDtYwjZozUWq6kGNs9w+Gtw/CPvyuXjXn2HMdz8Tie+krjEg8oAtonvIyITZdvpF7XG9xDHwscLr2c+ugQ==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "cross-spawn": "^6.0.5",
            "enhanced-resolve": "^4.0.0",
            "global-modules-path": "^2.1.0",
            "import-local": "^1.0.0",
            "inquirer": "^6.0.0",
            "interpret": "^1.1.0",
            "loader-utils": "^1.1.0",
            "supports-color": "^5.4.0",
            "v8-compile-cache": "^2.0.0",
            "yargs": "^12.0.1"
          },
          "dependencies": {
            "chalk": {
              "version": "2.4.1",
              "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.1.tgz",
              "integrity": "sha512-ObN6h1v2fTJSmUXoS3nMQ92LbDK9be4TV+6G+omQlGJFdcUX5heKi1LZ1YnRMIgwTLEj3E24bT6tYni50rlCfQ==",
              "dev": true,
              "requires": {
                "ansi-styles": "^3.2.1",
                "escape-string-regexp": "^1.0.5",
                "supports-color": "^5.3.0"
              }
            },
            "enhanced-resolve": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.1.0.tgz",
              "integrity": "sha512-F/7vkyTtyc/llOIn8oWclcB25KdRaiPBpZYDgJHgh/UHtpgT2p2eldQgtQnLtUvfMKPKxbRaQM/hHkvLHt1Vng==",
              "dev": true,
              "requires": {
                "graceful-fs": "^4.1.2",
                "memory-fs": "^0.4.0",
                "tapable": "^1.0.0"
              }
            },
            "supports-color": {
              "version": "5.5.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
              "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
              "dev": true,
              "requires": {
                "has-flag": "^3.0.0"
              }
            },
            "tapable": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.0.tgz",
              "integrity": "sha512-IlqtmLVaZA2qab8epUXbVWRn3aB1imbDMJtjB3nu4X0NqPkcY/JH9ZtCBWKHWPxs8Svi9tyo8w2dBoi07qZbBA==",
              "dev": true
            }
          }
        },
        "webpack-dev-middleware": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-3.2.0.tgz",
          "integrity": "sha512-YJLMF/96TpKXaEQwaLEo+Z4NDK8aV133ROF6xp9pe3gQoS7sxfpXh4Rv9eC+8vCvWfmDjRQaMSlRPbO+9G6jgA==",
          "dev": true,
          "requires": {
            "loud-rejection": "^1.6.0",
            "memory-fs": "~0.4.1",
            "mime": "^2.3.1",
            "path-is-absolute": "^1.0.0",
            "range-parser": "^1.0.3",
            "url-join": "^4.0.0",
            "webpack-log": "^2.0.0"
          }
        },
        "webpack-dev-server": {
          "version": "3.1.8",
          "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-3.1.8.tgz",
          "integrity": "sha512-c+tcJtDqnPdxCAzEEZKdIPmg3i5i7cAHe+B+0xFNK0BlCc2HF/unYccbU7xTgfGc5xxhCztCQzFmsqim+KhI+A==",
          "dev": true,
          "requires": {
            "ansi-html": "0.0.7",
            "bonjour": "^3.5.0",
            "chokidar": "^2.0.0",
            "compression": "^1.5.2",
            "connect-history-api-fallback": "^1.3.0",
            "debug": "^3.1.0",
            "del": "^3.0.0",
            "express": "^4.16.2",
            "html-entities": "^1.2.0",
            "http-proxy-middleware": "~0.18.0",
            "import-local": "^2.0.0",
            "internal-ip": "^3.0.1",
            "ip": "^1.1.5",
            "killable": "^1.0.0",
            "loglevel": "^1.4.1",
            "opn": "^5.1.0",
            "portfinder": "^1.0.9",
            "schema-utils": "^1.0.0",
            "selfsigned": "^1.9.1",
            "serve-index": "^1.7.2",
            "sockjs": "0.3.19",
            "sockjs-client": "1.1.5",
            "spdy": "^3.4.1",
            "strip-ansi": "^3.0.0",
            "supports-color": "^5.1.0",
            "webpack-dev-middleware": "3.2.0",
            "webpack-log": "^2.0.0",
            "yargs": "12.0.2"
          },
          "dependencies": {
            "ajv": {
              "version": "6.5.3",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.5.3.tgz",
              "integrity": "sha512-LqZ9wY+fx3UMiiPd741yB2pj3hhil+hQc8taf4o2QGRFpWgZ2V5C8HA165DY9sS3fJwsk7uT7ZlFEyC3Ig3lLg==",
              "dev": true,
              "requires": {
                "fast-deep-equal": "^2.0.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
              }
            },
            "fast-deep-equal": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
              "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
              "dev": true
            },
            "find-up": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
              "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
              "dev": true,
              "requires": {
                "locate-path": "^3.0.0"
              }
            },
            "import-local": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
              "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
              "dev": true,
              "requires": {
                "pkg-dir": "^3.0.0",
                "resolve-cwd": "^2.0.0"
              }
            },
            "json-schema-traverse": {
              "version": "0.4.1",
              "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
              "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
              "dev": true
            },
            "locate-path": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
              "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
              "dev": true,
              "requires": {
                "p-locate": "^3.0.0",
                "path-exists": "^3.0.0"
              }
            },
            "p-limit": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.0.0.tgz",
              "integrity": "sha512-fl5s52lI5ahKCernzzIyAP0QAZbGIovtVHGwpcu1Jr/EpzLVDI2myISHwGqK7m8uQFugVWSrbxH7XnhGtvEc+A==",
              "dev": true,
              "requires": {
                "p-try": "^2.0.0"
              }
            },
            "p-locate": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
              "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
              "dev": true,
              "requires": {
                "p-limit": "^2.0.0"
              }
            },
            "p-try": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.0.0.tgz",
              "integrity": "sha512-hMp0onDKIajHfIkdRk3P4CdCmErkYAxxDtP3Wx/4nZ3aGlau2VKh3mZpcuFkH27WQkL/3WBCPOktzA9ZOAnMQQ==",
              "dev": true
            },
            "pkg-dir": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
              "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
              "dev": true,
              "requires": {
                "find-up": "^3.0.0"
              }
            },
            "punycode": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
              "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
              "dev": true
            },
            "schema-utils": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
              "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
              "dev": true,
              "requires": {
                "ajv": "^6.1.0",
                "ajv-errors": "^1.0.0",
                "ajv-keywords": "^3.1.0"
              }
            },
            "uri-js": {
              "version": "4.2.2",
              "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
              "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
              "dev": true,
              "requires": {
                "punycode": "^2.1.0"
              }
            }
          }
        },
        "webpack-log": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/webpack-log/-/webpack-log-2.0.0.tgz",
          "integrity": "sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==",
          "dev": true,
          "requires": {
            "ansi-colors": "^3.0.0",
            "uuid": "^3.3.2"
          }
        },
        "webpack-sources": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.1.0.tgz",
          "integrity": "sha512-aqYp18kPphgoO5c/+NaUvEeACtZjMESmDChuD3NBciVpah3XpMEU9VAAtIaB1BsfJWWTSdv8Vv1m3T0aRk2dUw==",
          "dev": true,
          "requires": {
            "source-list-map": "^2.0.0",
            "source-map": "~0.6.1"
          },
          "dependencies": {
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
              "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
              "dev": true
            }
          }
        },
        "websocket-driver": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.0.tgz",
          "integrity": "sha1-DK+dLXVdk67gSdS90NP+LMoqJOs=",
          "dev": true,
          "requires": {
            "http-parser-js": ">=0.4.0",
            "websocket-extensions": ">=0.1.1"
          }
        },
        "websocket-extensions": {
          "version": "0.1.3",
          "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.3.tgz",
          "integrity": "sha512-nqHUnMXmBzT0w570r2JpJxfiSD1IzoI+HGVdd3aZ0yNi3ngvQ4jv1dtHt5VGxfI2yj5yqImPhOK4vmIh2xMbGg==",
          "dev": true
        },
        "which": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.0.tgz",
          "integrity": "sha512-xcJpopdamTuY5duC/KnTTNBraPK54YwpenP4lzxU8H91GudWpFv38u0CKjclE1Wi2EH2EDz5LRcHcKbCIzqGyg==",
          "dev": true,
          "requires": {
            "isexe": "^2.0.0"
          }
        },
        "which-module": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
          "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
          "dev": true
        },
        "worker-farm": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/worker-farm/-/worker-farm-1.6.0.tgz",
          "integrity": "sha512-6w+3tHbM87WnSWnENBUvA2pxJPLhQUg5LKwUQHq3r+XPhIM+Gh2R5ycbwPCyuGbNg+lPgdcnQUhuC02kJCvffQ==",
          "dev": true,
          "requires": {
            "errno": "~0.1.7"
          }
        },
        "wrap-ansi": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
          "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
          "dev": true,
          "requires": {
            "string-width": "^1.0.1",
            "strip-ansi": "^3.0.1"
          },
          "dependencies": {
            "is-fullwidth-code-point": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
              "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
              "dev": true,
              "requires": {
                "number-is-nan": "^1.0.0"
              }
            },
            "string-width": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
              "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
              "dev": true,
              "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
              }
            }
          }
        },
        "wrappy": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
          "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
          "dev": true
        },
        "xml2js": {
          "version": "0.4.19",
          "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.19.tgz",
          "integrity": "sha512-esZnJZJOiJR9wWKMyuvSE1y6Dq5LCuJanqhxslH2bxM6duahNZ+HMpCLhBQGZkbX6xRf8x1Y2eJlgt2q3qo49Q==",
          "dev": true,
          "requires": {
            "sax": ">=0.6.0",
            "xmlbuilder": "~9.0.1"
          }
        },
        "xmlbuilder": {
          "version": "9.0.4",
          "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.4.tgz",
          "integrity": "sha1-UZy0ymhtAFqEINNJbz8MruzKWA8=",
          "dev": true
        },
        "xregexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/xregexp/-/xregexp-4.0.0.tgz",
          "integrity": "sha512-PHyM+sQouu7xspQQwELlGwwd05mXUFqwFYfqPO0cC7x4fxyHnnuetmQr6CjJiafIDoH4MogHb9dOoJzR/Y4rFg==",
          "dev": true
        },
        "xtend": {
          "version": "4.0.1",
          "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.1.tgz",
          "integrity": "sha1-pcbVMr5lbiPbgg77lDofBJmNY68=",
          "dev": true
        },
        "y18n": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
          "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
          "dev": true
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        },
        "yargs": {
          "version": "12.0.2",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-12.0.2.tgz",
          "integrity": "sha512-e7SkEx6N6SIZ5c5H22RTZae61qtn3PYUE8JYbBFlK9sYmh3DMQ6E5ygtaG/2BW0JZi4WGgTR2IV5ChqlqrDGVQ==",
          "dev": true,
          "requires": {
            "cliui": "^4.0.0",
            "decamelize": "^2.0.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^1.0.1",
            "os-locale": "^3.0.0",
            "require-directory": "^2.1.1",
            "require-main-filename": "^1.0.1",
            "set-blocking": "^2.0.0",
            "string-width": "^2.0.0",
            "which-module": "^2.0.0",
            "y18n": "^3.2.1 || ^4.0.0",
            "yargs-parser": "^10.1.0"
          },
          "dependencies": {
            "decamelize": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-2.0.0.tgz",
              "integrity": "sha512-Ikpp5scV3MSYxY39ymh45ZLEecsTdv/Xj2CaQfI8RLMuwi7XvjX9H/fhraiSuU+C5w5NTDu4ZU72xNiZnurBPg==",
              "dev": true,
              "requires": {
                "xregexp": "4.0.0"
              }
            },
            "execa": {
              "version": "0.10.0",
              "resolved": "https://registry.npmjs.org/execa/-/execa-0.10.0.tgz",
              "integrity": "sha512-7XOMnz8Ynx1gGo/3hyV9loYNPWM94jG3+3T3Y8tsfSstFmETmENCMU/A/zj8Lyaj1lkgEepKepvd6240tBRvlw==",
              "dev": true,
              "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^3.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
              }
            },
            "find-up": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
              "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
              "dev": true,
              "requires": {
                "locate-path": "^3.0.0"
              }
            },
            "invert-kv": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-2.0.0.tgz",
              "integrity": "sha512-wPVv/y/QQ/Uiirj/vh3oP+1Ww+AWehmi1g5fFWGPF6IpCBCDVrhgHRMvrLfdYcwDh3QJbGXDW4JAuzxElLSqKA==",
              "dev": true
            },
            "lcid": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/lcid/-/lcid-2.0.0.tgz",
              "integrity": "sha512-avPEb8P8EGnwXKClwsNUgryVjllcRqtMYa49NTsbQagYuT1DcXnl1915oxWjoyGrXR6zH/Y0Zc96xWsPcoDKeA==",
              "dev": true,
              "requires": {
                "invert-kv": "^2.0.0"
              }
            },
            "locate-path": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
              "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
              "dev": true,
              "requires": {
                "p-locate": "^3.0.0",
                "path-exists": "^3.0.0"
              }
            },
            "mem": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/mem/-/mem-4.0.0.tgz",
              "integrity": "sha512-WQxG/5xYc3tMbYLXoXPm81ET2WDULiU5FxbuIoNbJqLOOI8zehXFdZuiUEgfdrU2mVB1pxBZUGlYORSrpuJreA==",
              "dev": true,
              "requires": {
                "map-age-cleaner": "^0.1.1",
                "mimic-fn": "^1.0.0",
                "p-is-promise": "^1.1.0"
              }
            },
            "os-locale": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-3.0.1.tgz",
              "integrity": "sha512-7g5e7dmXPtzcP4bgsZ8ixDVqA7oWYuEz4lOSujeWyliPai4gfVDiFIcwBg3aGCPnmSGfzOKTK3ccPn0CKv3DBw==",
              "dev": true,
              "requires": {
                "execa": "^0.10.0",
                "lcid": "^2.0.0",
                "mem": "^4.0.0"
              }
            },
            "p-limit": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.0.0.tgz",
              "integrity": "sha512-fl5s52lI5ahKCernzzIyAP0QAZbGIovtVHGwpcu1Jr/EpzLVDI2myISHwGqK7m8uQFugVWSrbxH7XnhGtvEc+A==",
              "dev": true,
              "requires": {
                "p-try": "^2.0.0"
              }
            },
            "p-locate": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
              "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
              "dev": true,
              "requires": {
                "p-limit": "^2.0.0"
              }
            },
            "p-try": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.0.0.tgz",
              "integrity": "sha512-hMp0onDKIajHfIkdRk3P4CdCmErkYAxxDtP3Wx/4nZ3aGlau2VKh3mZpcuFkH27WQkL/3WBCPOktzA9ZOAnMQQ==",
              "dev": true
            },
            "yargs-parser": {
              "version": "10.1.0",
              "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-10.1.0.tgz",
              "integrity": "sha512-VCIyR1wJoEBZUqk5PA+oOBF6ypbwh5aNB3I50guxAL/quggdfs4TtNHQrSazFA3fYZ+tEqfs0zIGlv0c/rgjbQ==",
              "dev": true,
              "requires": {
                "camelcase": "^4.1.0"
              }
            }
          }
        },
        "yazl": {
          "version": "2.4.3",
          "resolved": "https://registry.npmjs.org/yazl/-/yazl-2.4.3.tgz",
          "integrity": "sha1-7CblzIfVYBud+EMtvdPNLlFzoHE=",
          "dev": true,
          "requires": {
            "buffer-crc32": "~0.2.3"
          }
        },
        "zip-webpack-plugin": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/zip-webpack-plugin/-/zip-webpack-plugin-3.0.0.tgz",
          "integrity": "sha512-5kNvPv+TUP3JqKWQUXj0vTgXHIRQpYw5YyBUVXQ0pumTAK+a4OZ+eXDHnh44nyr9B1XJQZq9WtSSm5j6NQhjWQ==",
          "dev": true,
          "requires": {
            "webpack-sources": "^1.1.0",
            "yazl": "^2.4.3"
          }
        }
      }
    };

  let fileName = pathDir + path.sep + 'package-lock.json';

  let data = JSON.stringify(packageLockJSON, null, 3);

  fs.writeFileSync(fileName, data, () => {
    return fileName;
  });
  return null;
}


