
"use strict";

let DeplacerPieceMsg = require('./DeplacerPieceMsg.js');
let Actionneurs = require('./Actionneurs.js');
let Msg_Erreur = require('./Msg_Erreur.js');
let Capteurs = require('./Capteurs.js');
let Msg_AddProduct = require('./Msg_AddProduct.js');
let Msg_PinControl = require('./Msg_PinControl.js');
let Msg_SwitchControl = require('./Msg_SwitchControl.js');
let Msg_Color = require('./Msg_Color.js');
let TacheFinieMsg = require('./TacheFinieMsg.js');
let RobotJoints = require('./RobotJoints.js');
let Msg_StopControl = require('./Msg_StopControl.js');

module.exports = {
  DeplacerPieceMsg: DeplacerPieceMsg,
  Actionneurs: Actionneurs,
  Msg_Erreur: Msg_Erreur,
  Capteurs: Capteurs,
  Msg_AddProduct: Msg_AddProduct,
  Msg_PinControl: Msg_PinControl,
  Msg_SwitchControl: Msg_SwitchControl,
  Msg_Color: Msg_Color,
  TacheFinieMsg: TacheFinieMsg,
  RobotJoints: RobotJoints,
  Msg_StopControl: Msg_StopControl,
};
