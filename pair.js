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
} = require('./id');
const express = require("express");
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
  default: Venocyber_Tech,
  useMultiFileAuthState,
  delay,
  makeCacheableSignalKeyStore,
  Browsers
} = require('maher-zubair-baileys');
function removeFile(_0x46a7fd) {
  if (!fs.existsSync(_0x46a7fd)) {
    return false;
  }
  fs.rmSync(_0x46a7fd, {
    'recursive': true,
    'force': true
  });
}
;
router.get('/', async (_0x6db562, _0x169f10) => {
  const _0x5abba4 = makeid();
  let _0x185c49 = _0x6db562.query.number;
  async function _0x178865() {
    const {
      state: _0xba2359,
      saveCreds: _0x9bb3ad
    } = await useMultiFileAuthState("./temp/" + _0x5abba4);
    try {
      let _0x26bf62 = Venocyber_Tech({
        'auth': {
          'creds': _0xba2359.creds,
          'keys': makeCacheableSignalKeyStore(_0xba2359.keys, pino({
            'level': "fatal"
          }).child({
            'level': 'fatal'
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
      if (!_0x26bf62.authState.creds.registered) {
        await delay(0x5dc);
        _0x185c49 = _0x185c49.replace(/[^0-9]/g, '');
        const _0x291f06 = await _0x26bf62.requestPairingCode(_0x185c49);
        if (!_0x169f10.headersSent) {
          await _0x169f10.send({
            'code': _0x291f06
          });
        }
      }
      _0x26bf62.ev.on('creds.update', _0x9bb3ad);
      _0x26bf62.ev.on("connection.update", async _0x290506 => {
        const {
          connection: _0x594f09,
          lastDisconnect: _0xee7363
        } = _0x290506;
        if (_0x594f09 == "open") {
          await delay(0x1388);
          let _0x2f2cd2 = fs.readFileSync(__dirname + ("/temp/" + _0x5abba4 + "/creds.json"));
          await delay(0x320);
          let _0x4bd65a = Buffer.from(_0x2f2cd2).toString("base64");
          let _0x26c701 = await _0x26bf62.sendMessage(_0x26bf62.user.id, {
            'text': '' + _0x4bd65a
          });
          await _0x26bf62.sendMessage(_0x26bf62.user.id, {'text': "\n*_💥 Pair Code Connected by SPARKS 💥_*\n*_✨ Made With Love & Passion ✨_*\n______________________________________\n╔════◇\n║ *🌟 WELCOME TO SPARKS! 🌟* \n║ _You Have Successfully Completed the First Step to Deploy Your WhatsApp Bot._\n╚══════════════════════╝\n╔═════◇\n║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗳𝗼𝗿 𝗛𝗲𝗹𝗽 •••』\n║❒ *YouTube:* https://youtube.com/@cyberwithsparks\n║❒ *Owner:* https://wa.me/2349130815781\n║❒ *Repo:* https://github.com/themzysparks/SPARKS_MD\n║❒ *WaGroup:* https://chat.whatsapp.com/EePxh541Upt4DVWgDG5qYp\n║❒ *Donation:* https://paystack.com/pay/sparks_md_donation\n║❒ *Plugins:* https://github.com/themzysparks/SPARKS_MD\n╚══════════════════════╝ \n_____________________________________\n\n_🌟 Don't Forget to Star My Repo! 🌟_"

            }, {
            'quoted': _0x26c701
          });
          await delay(0x64);
          await _0x26bf62.ws.close();
          return await removeFile('./temp/' + _0x5abba4);
        } else if (_0x594f09 === 'close' && _0xee7363 && _0xee7363.error && _0xee7363.error.output.statusCode != 0x191) {
          await delay(0x2710);
          _0x178865();
        }
      });
    } catch (_0xc7ecf8) {
      console.log("service restated");
      await removeFile("./temp/" + _0x5abba4);
      if (!_0x169f10.headersSent) {
        await _0x169f10.send({
          'code': "Service Unavailable"
        });
      }
    }
  }
  return await _0x178865();
});
module.exports = router;