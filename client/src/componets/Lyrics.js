import React from "react";
import { AiFillStar } from 'react-icons/ai';

function Lyrics() {

  const single = {
    subject: "Khaligraph Jones - Mbona",
    lyrics: "Lorem ipsum dolor sit amet, at vel consectetuer definitionem. Ex mundi       delicata corrumpit sed, id suscipit comprehensam quo. Ferri incorrupte       comprehensam per an, sed diam quot euripidis in. Menandri electram       petentium et usu, solum eirmod numquam ei mei. Mea te scaevola interesset.       Et cum nostrum lobortis splendide. Novum aperiri discere eos no. Velit       sanctus mei in, ius cu iudicabit patrioque. Te pro sumo eirmod. Nam no       quando praesent dissentias. Duo hinc atqui ei. Sea in iusto qualisque. No       augue animal nam, quodsi iudicabit eu nam. Eum ea debet platonem, cu vis       repudiare definitionem. Eu error antiopam cum. Est illum numquam ut, an       phaedrum molestiae repudiandae eos. Mei et viderer fierent honestatis.       Exerci referrentur philosophia et qui, quo at mutat quaestio, minim       mandamus ut cum. Pericula torquatos sea et. Prima sententiae usu et, an       his elit consul expetendis, an est natum erroribus. Duo falli percipit       erroribus in, ea docendi invidunt quo. Detraxit patrioque consequat nam       eu. An labores sadipscing efficiantur vis, eu invenire argumentum quo, et       has nonumes luptatum. Ex alia brute pericula mel, latine suscipiantur et       eam, his iudicabit maiestatis voluptatibus id. His sumo accusam at, ius       bonorum definiebas ne. In odio dicit nostro sit, nec ut fugit posidonium       ullamcorper, altera labores qui ad. Eum te omnis saepe imperdiet. Nulla       verear propriae at eum, dico temporibus ut usu. Vim ea mundi nemore. Unum       dicit mel et, vix natum dolores conclusionemque id. Habeo fuisset sea ut.       Sea ea esse nibh delenit, atqui postulant persecuti cum an. Nusquam       delicata ad has. Te est tation suavitate scriptorem, an pro accusata       indoctum, no vis mundi oratio facilisis. Pri te mundi persecuti, sed ei       porro tibique. Nam malis detracto id, usu te dicant eruditi indoctum, in       assum labores his. Cu per amet facete, cum no quem cetero. Facilisis       salutatus at usu, melius cetero cum cu. Eos liber salutatus eu. Ne qui       verear equidem, ius zril nullam scriptorem ei. Mazim detracto liberavisse       ex his, in pro paulo eloquentiam, vis vero vitae cu. Duo choro maiestatis       consectetuer te, probo accommodare mea at. Mei et verterem detraxit, est       vulputate interesset vituperatoribus at. His id atqui virtute, sit ea quot       fuisset voluptatum. Altera partiendo ullamcorper ex quo, his quaeque       quaestio ei. Eripuit interesset eu pro, ex mei efficiendi dissentiet, in       vim graeci alienum commune. Et aliquid percipitur eam, ex cetero pertinax       duo, nec ei dicta impetus. Sint legimus lobortis qui eu. Nec idque mucius       cu. Purto ipsum exerci in ius. Ne erant possim perpetua mel, mei an assum       electram."
  };

  return (
    <div className="overflow-scroll lyrics p-4">
      <div className="d-inline text-center m-4">
        <span style={{fontSize: "36px"}} >{single.subject}</span> <AiFillStar color="#964B00" size={32}/> <span style={{color: "gray", fontSize: "18px"}}>Favourite this song</span>
      </div>
      <p className="mt-2">{single.lyrics}</p>
    </div>
  );
}

export default Lyrics;
