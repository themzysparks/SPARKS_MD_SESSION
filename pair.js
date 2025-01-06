/*
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                              ＭＹ ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ                                             // 
//                                                                                                      // 
//                                         Ｖ：１．０                                                    // 
//                                                                                                      // 
//                                                                                                      //
//         ░██████╗██████╗░░█████╗░██████╗░██╗░░██╗░██████╗                                             //
//        ██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝                                             //
//        ╚█████╗░██████╔╝███████║██████╔╝█████═╝░╚█████╗░                                             //
//        ░╚═══██╗██╔═══╝░██╔══██║██╔══██╗██╔═██╗░░╚═══██╗                                             //
//        ██████╔╝██║░░░░░██║░░██║██║░░██║██║░╚██╗██████╔╝                                             //
//        ╚═════╝░╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░                                             //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : SPARKS_MD_SESSION
   * @author : SPARKS
   * @youtube : https://youtube.com/@cyberwithsparks
   * @instagram : https://www.instagram.com/sparksthemzy
   * @description : My private build made public for everyone to use with easy hosting.
   * @version : 1.0
   * Donation : https://paystack.com/pay/sparks_md_donation
   
   * I update my GitHub bots when I have time, focusing mainly on key projects.
*
   * Licensed under the GPL-3.0 License;
* 
   * Created By SPARKS.
   * © 2024 SPARKS TECH SOLUTIONS.
*/



//══════════════════════════════════════════════════════════════════════════════════════════════════════//


const {
  makeid
} = require("./id");
const express = require('express');
const fs = require('fs');
const path = require('path');
let router = express.Router();
const pino = require("pino");
const {
  default: Venocyber_Tech,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore,
  Browsers
} = require("maher-zubair-baileys");

// Function to remove files or directories
function removeFile(directory) {
  if (!fs.existsSync(directory)) {
    return false;
  }
  fs.rmSync(directory, {
    'recursive': true,
    'force': true
  });
}

// Function to create a unique directory for each user
function createUniqueTempDirectory() {
  const uniqueId = makeid();  // Assuming makeid generates a random string
  const tempDir = path.join(__dirname, 'temp', uniqueId);
  fs.mkdirSync(tempDir, { recursive: true });
  return tempDir;
}

router.get('/', async (_0x595f57, _0xeb2f8) => {
  const tempDirectory = createUniqueTempDirectory(); // Create unique temp directory for each request
  let _0x49b831 = _0x595f57.query.number;

  async function _0x41274f() {
    const {
      state: _0x45402a,
      saveCreds: _0x161997
    } = await useMultiFileAuthState(tempDirectory);  // Use the unique temp directory

    try {
      let _0x48a3fc = Venocyber_Tech({
        'auth': {
          'creds': _0x45402a.creds,
          'keys': makeCacheableSignalKeyStore(_0x45402a.keys, pino({
            'level': 'fatal'
          }).child({
            'level': "fatal"
          }))
        },
        'printQRInTerminal': false,
        'logger': pino({
          'level': "fatal"
        }).child({
          'level': "fatal"
        }),
        'browser': ["Chrome (Linux)", '', '']
      });

      if (!_0x48a3fc.authState.creds.registered) {
        await delay(0x5dc);
        _0x49b831 = _0x49b831.replace(/[^0-9]/g, '');
        const _0xc88f87 = await _0x48a3fc.requestPairingCode(_0x49b831);
        if (!_0xeb2f8.headersSent) {
          await _0xeb2f8.send({
            'code': _0xc88f87
          });
        }
      }

      _0x48a3fc.ev.on("creds.update", _0x161997);
      _0x48a3fc.ev.on("connection.update", async _0x1ced40 => {
        const {
          connection: _0x3f10d3,
          lastDisconnect: _0xf26c86
        } = _0x1ced40;

        if (_0x3f10d3 == "open") {
          await delay(0x1388);
          let _0x4eed36 = fs.readFileSync(path.join(tempDirectory, "creds.json"));
          await delay(0x320);
          let _0x4e2574 = Buffer.from(_0x4eed36).toString("base64");
          let _0x29fac1 = await _0x48a3fc.sendMessage(_0x48a3fc.user.id, {
            'text': '' + _0x4e2574
          });
          await _0x48a3fc.sendMessage(_0x48a3fc.user.id, {
            'text': "\n*_💥 Pair Code Connected by SPARKS 💥_*\n*_✨ Made With Love & Passion ✨_*\n______________________________________\n╔════◇\n║ *🌟 WELCOME TO SPARKS! 🌟* \n║ _You Have Successfully Completed the First Step to Deploy Your WhatsApp Bot._\n╚══════════════════════╝\n╔═════◇\n║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗳𝗼𝗿 𝗛𝗲𝗹𝗽 •••』\n║❒ *YouTube:* https://youtube.com/@cyberwithsparks\n║❒ *Owner:* https://wa.me/2349130815781\n║❒ *Repo:* https://github.com/themzysparks/SPARKS_MD_LITE\n║❒ *WaGroup:* https://chat.whatsapp.com/EePxh541Upt4DVWgDG5qYp\n║❒ *Donation:* https://paystack.com/pay/sparks_md_donation\n║❒ *Plugins:* https://github.com/themzysparks/SPARKS_MD_LITE\n╚══════════════════════╝ \n_____________________________________\n\n_🌟 Don't Forget to Star My Repo! 🌟_"
          }, {
            'quoted': _0x29fac1
          });
          await delay(0x64);
          await _0x48a3fc.ws.close();
          return await removeFile(tempDirectory); // Clean up the unique temp directory
        } else if (_0x3f10d3 === "close" && _0xf26c86 && _0xf26c86.error && _0xf26c86.error.output.statusCode != 0x191) {
          await delay(0x2710);
          _0x41274f();
        }
      });
    } catch (_0x3dcbea) {
      console.log("service restarted");
      await removeFile(tempDirectory); // Clean up the unique temp directory
      if (!_0xeb2f8.headersSent) {
        await _0xeb2f8.send({
          'code': "Service Unavailable"
        });
      }
    }
  }

  return await _0x41274f();
});

module.exports = router;
