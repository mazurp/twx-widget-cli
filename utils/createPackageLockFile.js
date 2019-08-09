const fs = require('fs');
const path = require('path');

module.exports = (pathDir) =>{
    let packageLockJSON ={
      "name": "twx-widget",
      "version": "1.0.0",
      "lockfileVersion": 1,
      "requires": true,
      "dependencies": {
        "@samverschueren/stream-to-observable": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/@samverschueren/stream-to-observable/-/stream-to-observable-0.3.0.tgz",
          "integrity": "sha512-MI4Xx6LHs4Webyvi6EbspgyAb4D2Q2VtnCQ1blOJcoLS6mVa8lNN2rkIy1CVxfTUpoyIbCTkXES1rLXztFD1lg==",
          "requires": {
            "any-observable": "^0.3.0"
          }
        },
        "@types/execa": {
          "version": "0.9.0",
          "resolved": "https://registry.npmjs.org/@types/execa/-/execa-0.9.0.tgz",
          "integrity": "sha512-mgfd93RhzjYBUHHV532turHC2j4l/qxsF/PbfDmprHDEUHmNZGlDn1CEsulGK3AfsPdhkWzZQT/S/k0UGhLGsA==",
          "requires": {
            "@types/node": "*"
          }
        },
        "@types/node": {
          "version": "11.13.18",
          "resolved": "https://registry.npmjs.org/@types/node/-/node-11.13.18.tgz",
          "integrity": "sha512-sMHdXLccscaxI+Hlzz58yLQue3lQyXP+6aQniDRi5oju3n0123kcjhicVGF20WF7cHiwJ2vxMbXc4skOclosoA=="
        },
        "ansi-escapes": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
          "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
        },
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "any-observable": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/any-observable/-/any-observable-0.3.0.tgz",
          "integrity": "sha512-/FQM1EDkTsf63Ub2C6O7GuYFDsSXUwsaZDurV0np41ocwq0jthUAYCmhBX9f+KwlaCgIuWyr/4WlUQUBfKfZog=="
        },
        "arg": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.1.tgz",
          "integrity": "sha512-SlmP3fEA88MBv0PypnXZ8ZfJhwmDeIE3SP71j37AiXQBXYosPV0x6uISAaHYSlSVhmHOVkomen0tbGk6Anlebw=="
        },
        "axios": {
          "version": "0.18.1",
          "resolved": "https://registry.npmjs.org/axios/-/axios-0.18.1.tgz",
          "integrity": "sha512-0BfJq4NSfQXd+SkFdrvFbG7addhYSBA2mQwISr46pD6E5iqkWg02RAs8vyTT/j0RTnoYmeXauBuSv1qKwR179g==",
          "requires": {
            "follow-redirects": "1.5.10",
            "is-buffer": "^2.0.2"
          }
        },
        "balanced-match": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
          "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
        },
        "brace-expansion": {
          "version": "1.1.11",
          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
          "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
          "requires": {
            "balanced-match": "^1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "chardet": {
          "version": "0.7.0",
          "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
          "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
        },
        "cli-cursor": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
          "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
          "requires": {
            "restore-cursor": "^2.0.0"
          }
        },
        "cli-spinners": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-1.3.1.tgz",
          "integrity": "sha512-1QL4544moEsDVH9T/l6Cemov/37iv1RtoKf7NJ04A60+4MREXNfx/QvavbH6QoGdsD4N4Mwy49cmaINR/o2mdg=="
        },
        "cli-truncate": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/cli-truncate/-/cli-truncate-0.2.1.tgz",
          "integrity": "sha1-nxXPuwcFAFNpIWxiasfQWrkN1XQ=",
          "requires": {
            "slice-ansi": "0.0.4",
            "string-width": "^1.0.1"
          }
        },
        "cli-width": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.0.tgz",
          "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk="
        },
        "clone": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
          "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
        },
        "code-point-at": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
          "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
        },
        "concat-map": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
          "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
        },
        "copy-dir": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/copy-dir/-/copy-dir-1.1.0.tgz",
          "integrity": "sha512-eqHj1AMmS53QiLr8Xqcz754m6ljmG9eFnrzMhPGA1eKrsNYBGIKLktXz6JnzqNMSH/6Qksxgq8OMKsr0MPjKlw=="
        },
        "cross-spawn": {
          "version": "6.0.5",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
          "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
          "requires": {
            "nice-try": "^1.0.4",
            "path-key": "^2.0.1",
            "semver": "^5.5.0",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "date-fns": {
          "version": "1.30.1",
          "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-1.30.1.tgz",
          "integrity": "sha512-hBSVCvSmWC+QypYObzwGOd9wqdDpOt+0wl0KbU+R+uuZBS1jN8VsD1ss3irQDknRj5NvxiTF6oj/nDRnN/UQNw=="
        },
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "defaults": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
          "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
          "requires": {
            "clone": "^1.0.2"
          }
        },
        "elegant-spinner": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/elegant-spinner/-/elegant-spinner-1.0.1.tgz",
          "integrity": "sha1-2wQ1IcldfjA/2PNFvtwzSc+wcp4="
        },
        "end-of-stream": {
          "version": "1.4.1",
          "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.1.tgz",
          "integrity": "sha512-1MkrZNvWTKCaigbn+W15elq2BB/L22nqrSY5DKlo3X6+vclJm8Bb5djXJBmEX6fS3+zCh/F4VBK5Z2KxJt4s2Q==",
          "requires": {
            "once": "^1.4.0"
          }
        },
        "escape-string-regexp": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
          "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
        },
        "execa": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/execa/-/execa-2.0.3.tgz",
          "integrity": "sha512-iM124nlyGSrXmuyZF1EMe83ESY2chIYVyDRZKgmcDynid2Q2v/+GuE7gNMl6Sy9Niwf4MC0DDxagOxeMPjuLsw==",
          "requires": {
            "cross-spawn": "^6.0.5",
            "get-stream": "^5.0.0",
            "is-stream": "^2.0.0",
            "merge-stream": "^2.0.0",
            "npm-run-path": "^3.0.0",
            "onetime": "^5.1.0",
            "p-finally": "^2.0.0",
            "signal-exit": "^3.0.2",
            "strip-final-newline": "^2.0.0"
          },
          "dependencies": {
            "is-stream": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
              "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw=="
            },
            "mimic-fn": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
              "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
            },
            "onetime": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.0.tgz",
              "integrity": "sha512-5NcSkPHhwTVFIQN+TUqXoS5+dlElHXdpAWu9I0HP20YOtIi+aZ0Ct82jdlILDxjLEAWwvm+qj1m6aEtsDVmm6Q==",
              "requires": {
                "mimic-fn": "^2.1.0"
              }
            }
          }
        },
        "external-editor": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
          "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
          "requires": {
            "chardet": "^0.7.0",
            "iconv-lite": "^0.4.24",
            "tmp": "^0.0.33"
          }
        },
        "figures": {
          "version": "1.7.0",
          "resolved": "https://registry.npmjs.org/figures/-/figures-1.7.0.tgz",
          "integrity": "sha1-y+Hjr/zxzUS4DK3+0o3Hk6lwHS4=",
          "requires": {
            "escape-string-regexp": "^1.0.5",
            "object-assign": "^4.1.0"
          }
        },
        "follow-redirects": {
          "version": "1.5.10",
          "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.5.10.tgz",
          "integrity": "sha512-0V5l4Cizzvqt5D44aTXbFZz+FtyXV1vrDN6qrelxtfYQKW0KO0W2T/hkE8xvGa/540LkZlkaUjO4ailYTFtHVQ==",
          "requires": {
            "debug": "=3.1.0"
          }
        },
        "fs": {
          "version": "0.0.1-security",
          "resolved": "https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz",
          "integrity": "sha1-invTcYa23d84E/I4WLV+yq9eQdQ="
        },
        "fs.realpath": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
          "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
        },
        "get-stream": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.1.0.tgz",
          "integrity": "sha512-EXr1FOzrzTfGeL0gQdeFEvOMm2mzMOglyiOXSTpPC+iAjAKftbr3jpCMWynogwYnM+eSj9sHGc6wjIcDvYiygw==",
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "glob": {
          "version": "7.1.4",
          "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.4.tgz",
          "integrity": "sha512-hkLPepehmnKk41pUGm3sYxoFs/umurYfYJCerbXEyFIWcAzvpipAgVkBqqT9RBKMGjnq6kMuyYwha6csxbiM1A==",
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "has-ansi": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
          "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
          "requires": {
            "ansi-regex": "^2.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
              "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
            }
          }
        },
        "has-flag": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
          "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
        },
        "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        },
        "indent-string": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-3.2.0.tgz",
          "integrity": "sha1-Sl/W0nzDMvN+VBmlBNu4NxBckok="
        },
        "inflight": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
          "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
          "requires": {
            "once": "^1.3.0",
            "wrappy": "1"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
        },
        "inquirer": {
          "version": "6.5.0",
          "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-6.5.0.tgz",
          "integrity": "sha512-scfHejeG/lVZSpvCXpsB4j/wQNPM5JC8kiElOI0OUTwmc1RTpXr4H32/HOlQHcZiYl2z2VElwuCVDRG8vFmbnA==",
          "requires": {
            "ansi-escapes": "^3.2.0",
            "chalk": "^2.4.2",
            "cli-cursor": "^2.1.0",
            "cli-width": "^2.0.0",
            "external-editor": "^3.0.3",
            "figures": "^2.0.0",
            "lodash": "^4.17.12",
            "mute-stream": "0.0.7",
            "run-async": "^2.2.0",
            "rxjs": "^6.4.0",
            "string-width": "^2.1.0",
            "strip-ansi": "^5.1.0",
            "through": "^2.3.6"
          },
          "dependencies": {
            "figures": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
              "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
              "requires": {
                "escape-string-regexp": "^1.0.5"
              }
            },
            "is-fullwidth-code-point": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
              "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
            },
            "string-width": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
              "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
              "requires": {
                "is-fullwidth-code-point": "^2.0.0",
                "strip-ansi": "^4.0.0"
              },
              "dependencies": {
                "strip-ansi": {
                  "version": "4.0.0",
                  "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
                  "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
                  "requires": {
                    "ansi-regex": "^3.0.0"
                  }
                }
              }
            },
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "requires": {
                "ansi-regex": "^4.1.0"
              },
              "dependencies": {
                "ansi-regex": {
                  "version": "4.1.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                  "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
                }
              }
            }
          }
        },
        "interpret": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/interpret/-/interpret-1.2.0.tgz",
          "integrity": "sha512-mT34yGKMNceBQUoVn7iCDKDntA7SC6gycMAWzGx1z/CMCTV7b2AAtXlo3nRyHZ1FelRkQbQjprHSYGwzLtkVbw=="
        },
        "is-buffer": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-2.0.3.tgz",
          "integrity": "sha512-U15Q7MXTuZlrbymiz95PJpZxu8IlipAp4dtS3wOdgPXx3mqBnslrWU14kxfHB+Py/+2PVKSr37dMAgM2A4uArw=="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "is-observable": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/is-observable/-/is-observable-1.1.0.tgz",
          "integrity": "sha512-NqCa4Sa2d+u7BWc6CukaObG3Fh+CU9bvixbpcXYhy2VvYS7vVGIdAgnIS5Ks3A/cqk4rebLJ9s8zBstT2aKnIA==",
          "requires": {
            "symbol-observable": "^1.1.0"
          }
        },
        "is-promise": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-2.1.0.tgz",
          "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o="
        },
        "is-stream": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
          "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
        },
        "isexe": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
          "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
        },
        "listr": {
          "version": "0.14.3",
          "resolved": "https://registry.npmjs.org/listr/-/listr-0.14.3.tgz",
          "integrity": "sha512-RmAl7su35BFd/xoMamRjpIE4j3v+L28o8CT5YhAXQJm1fD+1l9ngXY8JAQRJ+tFK2i5njvi0iRUKV09vPwA0iA==",
          "requires": {
            "@samverschueren/stream-to-observable": "^0.3.0",
            "is-observable": "^1.1.0",
            "is-promise": "^2.1.0",
            "is-stream": "^1.1.0",
            "listr-silent-renderer": "^1.1.1",
            "listr-update-renderer": "^0.5.0",
            "listr-verbose-renderer": "^0.5.0",
            "p-map": "^2.0.0",
            "rxjs": "^6.3.3"
          }
        },
        "listr-silent-renderer": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/listr-silent-renderer/-/listr-silent-renderer-1.1.1.tgz",
          "integrity": "sha1-kktaN1cVN3C/Go4/v3S4u/P5JC4="
        },
        "listr-update-renderer": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/listr-update-renderer/-/listr-update-renderer-0.5.0.tgz",
          "integrity": "sha512-tKRsZpKz8GSGqoI/+caPmfrypiaq+OQCbd+CovEC24uk1h952lVj5sC7SqyFUm+OaJ5HN/a1YLt5cit2FMNsFA==",
          "requires": {
            "chalk": "^1.1.3",
            "cli-truncate": "^0.2.1",
            "elegant-spinner": "^1.0.1",
            "figures": "^1.7.0",
            "indent-string": "^3.0.0",
            "log-symbols": "^1.0.2",
            "log-update": "^2.3.0",
            "strip-ansi": "^3.0.1"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
              "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
            },
            "ansi-styles": {
              "version": "2.2.1",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
              "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4="
            },
            "chalk": {
              "version": "1.1.3",
              "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
              "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
              "requires": {
                "ansi-styles": "^2.2.1",
                "escape-string-regexp": "^1.0.2",
                "has-ansi": "^2.0.0",
                "strip-ansi": "^3.0.0",
                "supports-color": "^2.0.0"
              }
            },
            "log-symbols": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-1.0.2.tgz",
              "integrity": "sha1-N2/3tY6jCGoPCfrMdGF+ylAeGhg=",
              "requires": {
                "chalk": "^1.0.0"
              }
            },
            "strip-ansi": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
              "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
              "requires": {
                "ansi-regex": "^2.0.0"
              }
            },
            "supports-color": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
              "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc="
            }
          }
        },
        "listr-verbose-renderer": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/listr-verbose-renderer/-/listr-verbose-renderer-0.5.0.tgz",
          "integrity": "sha512-04PDPqSlsqIOaaaGZ+41vq5FejI9auqTInicFRndCBgE3bXG8D6W1I+mWhk+1nqbHmyhla/6BUrd5OSiHwKRXw==",
          "requires": {
            "chalk": "^2.4.1",
            "cli-cursor": "^2.1.0",
            "date-fns": "^1.27.2",
            "figures": "^2.0.0"
          },
          "dependencies": {
            "figures": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
              "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
              "requires": {
                "escape-string-regexp": "^1.0.5"
              }
            }
          }
        },
        "lodash": {
          "version": "4.17.15",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz",
          "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A=="
        },
        "log-symbols": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
          "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
          "requires": {
            "chalk": "^2.0.1"
          }
        },
        "log-update": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/log-update/-/log-update-2.3.0.tgz",
          "integrity": "sha1-iDKP19HOeTiykoN0bwsbwSayRwg=",
          "requires": {
            "ansi-escapes": "^3.0.0",
            "cli-cursor": "^2.0.0",
            "wrap-ansi": "^3.0.1"
          }
        },
        "merge-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
        },
        "meta-common-input-mixin": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/meta-common-input-mixin/-/meta-common-input-mixin-1.0.2.tgz",
          "integrity": "sha512-kZ74dGsmzP4Swnqt5xAxTNcCAArW2cByzamyeI88Y99AmNmG8zzkiAN/3WA+zRsYAct801VTUfrLuXs+LVhfxA==",
          "requires": {
            "vee-validate": "^2.0.0-rc.6",
            "vue": "^2.3.3"
          }
        },
        "meta-label": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/meta-label/-/meta-label-1.0.0.tgz",
          "integrity": "sha512-HOV0gDYbffLx8THfWbvRDrroj/SM6nO7cZfC39y5mhKxuH00qBGWYKzORg7qYqVjcD4YmQrtPd1dPO/EU7crfg==",
          "requires": {
            "vee-validate": "^2.0.0-rc.6",
            "vue": "^2.3.3"
          }
        },
        "meta-textual-input-mixin": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/meta-textual-input-mixin/-/meta-textual-input-mixin-1.0.3.tgz",
          "integrity": "sha512-bRoTv6wadB3bnAhzSPQlfT6xh549w512tyRuYyJxTI7VSPGuFCGWbaOvRYog9bKv2DYlE5uHj4zB2poJJDAimg==",
          "requires": {
            "meta-common-input-mixin": "^1.0.0",
            "vee-validate": "^2.0.0-rc.6",
            "vue": "^2.3.3"
          }
        },
        "meta-url": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/meta-url/-/meta-url-1.0.4.tgz",
          "integrity": "sha512-8oh21folvGlEk7AI1cJNfSbT82WWVGWTXsjsATLZ7O/7y9+7/WhvXLegeZgqljdrBGaQLNC9bhGQHXAx/EtEiA==",
          "requires": {
            "meta-label": "^1.0.0",
            "meta-textual-input-mixin": "^1.0.0"
          }
        },
        "mimic-fn": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
          "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
        },
        "minimatch": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
          "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        },
        "minimist": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.0.tgz",
          "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "mute-stream": {
          "version": "0.0.7",
          "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
          "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s="
        },
        "nice-try": {
          "version": "1.0.5",
          "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
          "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
        },
        "npm-run-path": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-3.1.0.tgz",
          "integrity": "sha512-Dbl4A/VfiVGLgQv29URL9xshU8XDY1GeLy+fsaZ1AA8JDSfjvr5P5+pzRbWqRSBxk6/DW7MIh8lTM/PaGnP2kg==",
          "requires": {
            "path-key": "^3.0.0"
          },
          "dependencies": {
            "path-key": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.0.tgz",
              "integrity": "sha512-8cChqz0RP6SHJkMt48FW0A7+qUOn+OsnOsVtzI59tZ8m+5bCSk7hzwET0pulwOM2YMn9J1efb07KB9l9f30SGg=="
            }
          }
        },
        "number-is-nan": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
          "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
          "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
        },
        "once": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
          "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
          "requires": {
            "wrappy": "1"
          }
        },
        "onetime": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
          "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
          "requires": {
            "mimic-fn": "^1.0.0"
          }
        },
        "ora": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ora/-/ora-2.0.0.tgz",
          "integrity": "sha512-g+IR0nMUXq1k4nE3gkENbN4wkF0XsVZFyxznTF6CdmwQ9qeTGONGpSR9LM5//1l0TVvJoJF3MkMtJp6slUsWFg==",
          "requires": {
            "chalk": "^2.3.1",
            "cli-cursor": "^2.1.0",
            "cli-spinners": "^1.1.0",
            "log-symbols": "^2.2.0",
            "strip-ansi": "^4.0.0",
            "wcwidth": "^1.0.1"
          }
        },
        "os-tmpdir": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
          "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
        },
        "p-finally": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-2.0.1.tgz",
          "integrity": "sha512-vpm09aKwq6H9phqRQzecoDpD8TmVyGw70qmWlyq5onxY7tqyTTFVvxMykxQSQKILBSFlbXpypIw2T1Ml7+DDtw=="
        },
        "p-map": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
          "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw=="
        },
        "path": {
          "version": "0.12.7",
          "resolved": "https://registry.npmjs.org/path/-/path-0.12.7.tgz",
          "integrity": "sha1-1NwqUGxM4hl+tIHr/NWzbAFAsQ8=",
          "requires": {
            "process": "^0.11.1",
            "util": "^0.10.3"
          }
        },
        "path-is-absolute": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
          "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
        },
        "path-key": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
          "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
        },
        "path-parse": {
          "version": "1.0.6",
          "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
          "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
        },
        "pkg-install": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/pkg-install/-/pkg-install-1.0.0.tgz",
          "integrity": "sha512-UGI8bfhrDb1KN01RZ7Bq08GRQc8rmVjxQ2up0g4mUHPCYDTK1FzQ0PMmLOBCHg3yaIijZ2U3Fn9ofLa4N392Ug==",
          "requires": {
            "@types/execa": "^0.9.0",
            "@types/node": "^11.9.4",
            "execa": "^1.0.0"
          },
          "dependencies": {
            "execa": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
              "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
              "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^4.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
              }
            },
            "get-stream": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
              "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
              "requires": {
                "pump": "^3.0.0"
              }
            },
            "npm-run-path": {
              "version": "2.0.2",
              "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
              "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
              "requires": {
                "path-key": "^2.0.0"
              }
            },
            "p-finally": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
              "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
            }
          }
        },
        "process": {
          "version": "0.11.10",
          "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
          "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI="
        },
        "pump": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
          "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
          "requires": {
            "end-of-stream": "^1.1.0",
            "once": "^1.3.1"
          }
        },
        "punycode": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
          "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0="
        },
        "querystring": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
          "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA="
        },
        "rechoir": {
          "version": "0.6.2",
          "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.6.2.tgz",
          "integrity": "sha1-hSBLVNuoLVdC4oyWdW70OvUOM4Q=",
          "requires": {
            "resolve": "^1.1.6"
          }
        },
        "resolve": {
          "version": "1.12.0",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.12.0.tgz",
          "integrity": "sha512-B/dOmuoAik5bKcD6s6nXDCjzUKnaDvdkRyAk6rsmsKLipWj4797iothd7jmmUhWTfinVMU+wc56rYKsit2Qy4w==",
          "requires": {
            "path-parse": "^1.0.6"
          }
        },
        "restore-cursor": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
          "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
          "requires": {
            "onetime": "^2.0.0",
            "signal-exit": "^3.0.2"
          }
        },
        "run-async": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.3.0.tgz",
          "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
          "requires": {
            "is-promise": "^2.1.0"
          }
        },
        "rxjs": {
          "version": "6.5.2",
          "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.5.2.tgz",
          "integrity": "sha512-HUb7j3kvb7p7eCUHE3FqjoDsC1xfZQ4AHFWfTKSpZ+sAhhz5X1WX0ZuUqWbzB2QhSLp3DoLUG+hMdEDKqWo2Zg==",
          "requires": {
            "tslib": "^1.9.0"
          }
        },
        "safer-buffer": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
          "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
        },
        "semver": {
          "version": "5.7.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.0.tgz",
          "integrity": "sha512-Ya52jSX2u7QKghxeoFGpLwCtGlt7j0oY9DYb5apt9nPlJ42ID+ulTXESnt/qAQcoSERyZ5sl3LDIOw0nAn/5DA=="
        },
        "shebang-command": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
          "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
          "requires": {
            "shebang-regex": "^1.0.0"
          }
        },
        "shebang-regex": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
          "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
        },
        "shelljs": {
          "version": "0.8.3",
          "resolved": "https://registry.npmjs.org/shelljs/-/shelljs-0.8.3.tgz",
          "integrity": "sha512-fc0BKlAWiLpwZljmOvAOTE/gXawtCoNrP5oaY7KIaQbbyHeQVg01pSEuEGvGh3HEdBU4baCD7wQBwADmM/7f7A==",
          "requires": {
            "glob": "^7.0.0",
            "interpret": "^1.0.0",
            "rechoir": "^0.6.2"
          }
        },
        "signal-exit": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.2.tgz",
          "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0="
        },
        "slice-ansi": {
          "version": "0.0.4",
          "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-0.0.4.tgz",
          "integrity": "sha1-7b+JA/ZvfOL46v1s7tZeJkyDGzU="
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
              "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
            },
            "strip-ansi": {
              "version": "3.0.1",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
              "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
              "requires": {
                "ansi-regex": "^2.0.0"
              }
            }
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        },
        "strip-eof": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
          "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
        },
        "strip-final-newline": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
          "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="
        },
        "supports-color": {
          "version": "5.5.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
          "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
          "requires": {
            "has-flag": "^3.0.0"
          }
        },
        "symbol-observable": {
          "version": "1.2.0",
          "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.2.0.tgz",
          "integrity": "sha512-e900nM8RRtGhlV36KGEU9k65K3mPb1WV70OdjfxlG2EAuM1noi/E/BaW/uMhL7bPEssK8QV57vN3esixjUvcXQ=="
        },
        "through": {
          "version": "2.3.8",
          "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
          "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
        },
        "tmp": {
          "version": "0.0.33",
          "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
          "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
          "requires": {
            "os-tmpdir": "~1.0.2"
          }
        },
        "tslib": {
          "version": "1.10.0",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.10.0.tgz",
          "integrity": "sha512-qOebF53frne81cf0S9B41ByenJ3/IuH8yJKngAX35CmiZySA0khhkovshKK+jGCaMnVomla7gVlIcc3EvKPbTQ=="
        },
        "url": {
          "version": "0.11.0",
          "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
          "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
          "requires": {
            "punycode": "1.3.2",
            "querystring": "0.2.0"
          }
        },
        "util": {
          "version": "0.10.4",
          "resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
          "integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
          "requires": {
            "inherits": "2.0.3"
          }
        },
        "vee-validate": {
          "version": "2.2.13",
          "resolved": "https://registry.npmjs.org/vee-validate/-/vee-validate-2.2.13.tgz",
          "integrity": "sha512-Mj5vFyrSnqIAFZOfhF1asLqymV/rEWQNv7gjWCQIydQ1evKoQ7TzP0F9HZzuWEIWotI2/UumMK5QI8wRkeL0kQ=="
        },
        "vue": {
          "version": "2.6.10",
          "resolved": "https://registry.npmjs.org/vue/-/vue-2.6.10.tgz",
          "integrity": "sha512-ImThpeNU9HbdZL3utgMCq0oiMzAkt1mcgy3/E6zWC/G6AaQoeuFdsl9nDhTDU3X1R6FK7nsIUuRACVcjI+A2GQ=="
        },
        "wcwidth": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
          "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
          "requires": {
            "defaults": "^1.0.3"
          }
        },
        "which": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
          "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
          "requires": {
            "isexe": "^2.0.0"
          }
        },
        "wrap-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-3.0.1.tgz",
          "integrity": "sha1-KIoE2H7aXChuBg3+jxNc6NAH+Lo=",
          "requires": {
            "string-width": "^2.1.1",
            "strip-ansi": "^4.0.0"
          },
          "dependencies": {
            "is-fullwidth-code-point": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
              "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
            },
            "string-width": {
              "version": "2.1.1",
              "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
              "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
              "requires": {
                "is-fullwidth-code-point": "^2.0.0",
                "strip-ansi": "^4.0.0"
              }
            }
          }
        },
        "wrappy": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
          "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
        }
      }
    }
    


  let fileName = pathDir + path.sep + 'package-lock.json';

  let data = JSON.stringify(packageJSON, null, 3);

  fs.writeFileSync(fileName, data, () => {
    return fileName;
  });
  return null;
}


