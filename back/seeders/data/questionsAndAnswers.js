const questions = {
  '¿Cómo te enteraste de Mina Clavero como destino turístico?': [
    'Un amigo me recomendó el lugar.',
    'Vi anuncios en redes sociales.',
    'Lo descubrí en una revista de viajes.',
    'Escuché sobre el lugar en la radio.',
    'Vi un anuncio en la televisión.',
    'Lo encontré en una búsqueda en línea.',
    'Participé en un concurso y gané un viaje.',
    'Me lo recomendó una agencia de viajes.',
    'Lo vi en una guía turística impresa.',
    'Recibí información en un evento turístico.',
  ],
  '¿Qué te motivó a elegir Mina Clavero para pasar tus vacaciones?': [
    'Quería relajarme en un entorno natural.',
    'Había escuchado maravillas sobre sus playas.',
    'Buscaba actividades de aventura en las montañas.',
    'Me atraían sus festivales y eventos culturales.',
    'Quería explorar la belleza de la región serrana.',
    'Escogí Mina Clavero por su rica historia y patrimonio.',
    'Me interesaba probar su gastronomía local.',
    'Había leído recomendaciones en blogs de viajes.',
    'Buscaba un destino con opciones para toda la familia.',
    'Me aconsejaron visitarlo en época de festivales.',
  ],
  '¿Qué tipo de hospedaje elegiste durante tu estadía en Mina Clavero?': [
    'Opté por alojarme en un acogedor hotel boutique en el centro de la ciudad.',
    'Decidí quedarme en una cabaña junto al río para disfrutar de la tranquilidad.',
    'Elegí un camping en las afueras de Mina Clavero para estar en contacto directo con la naturaleza.',
    'Me hospedé en un resort con todas las comodidades y servicios.',
    'Opté por un hostal para conocer a otros viajeros y compartir experiencias.',
    'Alquilé un departamento para tener mayor espacio y comodidad.',
    'Me quedé en una casa de huéspedes atendida por locales.',
    'Reservé una posada tradicional en el corazón del pueblo.',
    'Opté por una villa de lujo con vistas panorámicas.',
    'Elegí una casona colonial para vivir una experiencia histórica.',
  ],
  '¿Cuál es el propósito de tu visita a Mina Clavero?': [
    'Mi propósito es relajarme y desconectar del estrés diario.',
    'Estoy buscando vivir aventuras emocionantes en la naturaleza.',
    'Quiero explorar la cultura y la historia de la región.',
    'Voy a disfrutar de eventos y festivales locales.',
    'Planeo disfrutar de la vida nocturna y entretenimiento.',
    'Deseo participar en actividades deportivas y recreativas.',
    'Voy a asistir a conferencias o eventos profesionales.',
    'Estoy interesado en la gastronomía y la cocina local.',
    'Quiero realizar compras y explorar mercados locales.',
    'Estoy en un viaje de negocios y turismo combinado.',
  ],
  '¿Cuánto tiempo planeas quedarte en Mina Clavero?': [
    'Planeo quedarme durante una semana completa para explorar a fondo.',
    'Tengo pensado quedarme un fin de semana largo para descansar.',
    'Mi estadía será de dos semanas, quiero aprovechar al máximo la experiencia.',
    'Solo planeo quedarme un par de días para un escape rápido.',
    'Voy a pasar un mes entero para sumergirme en la cultura local.',
    'No tengo un plan fijo, me quedaré el tiempo que me resulte agradable.',
    'Mi estadía será breve, solo un par de noches.',
    'No estoy seguro aún, dependerá de cómo me sienta en el lugar.',
    'Tengo reservado una estancia de tres días.',
    'Estoy planeando quedarme un par de semanas, pero seré flexible.',
  ],
  '¿Qué actividades planeas realizar durante tu estadía en Mina Clavero?': [
    'Tengo en mente hacer senderismo en los senderos naturales cercanos.',
    'Planeo disfrutar del sol y las aguas del río, practicando natación y relajación.',
    'Voy a participar en actividades de deportes acuáticos como kayak y rafting.',
    'Exploraré las opciones de turismo de aventura, como tirolesa y rappel.',
    'Asistiré a clases de yoga y meditación en el entorno natural.',
    'Disfrutaré de paseos a caballo por los alrededores.',
    'Exploraré las tiendas y mercados locales en busca de artesanías.',
    'Participaré en excursiones para avistamiento de aves y fauna local.',
    'Visitaré los museos y centros culturales de la ciudad.',
    'Asistiré a eventos y festivales locales durante mi estadía.',
  ],
  '¿Qué lugares planeas visitar durante tu estadía en Mina Clavero?': [
    'Tengo en mi lista visitar el Mirador del Águila y obtener vistas panorámicas.',
    'Planeo explorar el Museo Rocsen para conocer su impresionante colección.',
    'Voy a disfrutar del Río Los Sauces y relajarme en sus playas.',
    'Visitaré la Reserva Natural Quebrada del Condorito y admiraré el paisaje.',
    'Exploraré la Cascada La Toma y disfrutaré de su entorno natural.',
    'Recorreré la Plaza San Martín y conoceré su historia.',
    'Participaré en una excursión al Cerro Champaquí para una vista panorámica.',
    'Visitaré la Iglesia Nuestra Señora de la Merced y su arquitectura.',
    'Conoceré la Gruta de Inti Huasi y su significado espiritual.',
    'Exploraré la Ruta de los Artesanos para ver artesanías locales.',
  ],
  '¿Qué tipo de transporte utilizaste para llegar a Mina Clavero?': [
    'Llegué en mi propio automóvil para tener flexibilidad en mi viaje.',
    'Utilicé el servicio de autobuses interurbanos para llegar cómodamente.',
    'Opté por tomar un vuelo hasta la ciudad más cercana y luego un taxi.',
    'Utilicé el tren para llegar a la ciudad.',
    'Viajé en bicicleta hasta Mina Clavero.',
    'Me uní a un grupo de excursión en autobús.',
    'Llegué en una van compartida con otros viajeros.',
    'Utilicé un servicio de transporte privado.',
    'Tomé un vuelo directo a Mina Clavero.',
    'Llegué en un crucero fluvial y luego tomé un transporte terrestre.',
  ],
  '¿Qué medio de transporte utilizaste para moverte dentro de Mina Clavero?': [
    'Preferí moverme a pie para disfrutar de la belleza del lugar a mi propio ritmo.',
    'Utilicé bicicletas de alquiler para explorar la ciudad y sus alrededores.',
    'Opté por tomar taxis locales para mayor comodidad y rapidez en mis desplazamientos.',
    'Alquilé un auto para tener más libertad en mis recorridos.',
    'Utilicé el servicio de transporte público para moverme por la ciudad.',
    'Hice uso de aplicaciones de transporte compartido como Uber o Lyft.',
    'Me uní a tours guiados en autobús para explorar distintos lugares.',
    'Utilicé mi propia motocicleta para moverme con facilidad.',
    'Caminé en parte y en parte utilicé el servicio de transporte público.',
    'Alquilé una moto o scooter para desplazarme cómodamente.',
  ],
  '¿Cómo calificarías la calidad de los servicios turísticos en Mina Clavero?':
    [
      'La calidad de los servicios turísticos es excepcional, superó mis expectativas.',
      'En general, los servicios turísticos son buenos, pero hay margen de mejora.',
      'Me pareció que algunos servicios turísticos podrían mejorar para brindar una experiencia más completa.',
      'Los servicios turísticos son variados y se adaptan a diferentes preferencias.',
      'Los servicios turísticos cumplen con las expectativas básicas pero podrían innovar más.',
      'La mayoría de los servicios turísticos son de alta calidad y ofrecen una gran experiencia.',
      'He experimentado servicios turísticos de excelencia en varios aspectos.',
      'Algunos servicios turísticos destacan por su calidad, pero otros podrían mejorar.',
      'En general, los servicios turísticos son satisfactorios, pero hay espacio para crecimiento.',
      'La calidad de los servicios turísticos varía, algunos son excelentes mientras otros no tanto.',
    ],
  '¿Cómo te comunicaste con las empresas turísticas en Mina Clavero?': [
    'Me puse en contacto a través de correos electrónicos y llamadas telefónicas.',
    'Utilicé las redes sociales para enviar mensajes directos y hacer preguntas.',
    'Opté por visitar personalmente las oficinas de las empresas turísticas para obtener información.',
    'Utilicé aplicaciones de mensajería instantánea para chatear con representantes de las empresas.',
    'Contacté a las empresas a través de sus sitios web y formularios de contacto.',
    'Recibí información de las empresas en ferias y eventos turísticos.',
    'Solicité información a través de agencias de viajes locales.',
    'Me recomendaron empresas turísticas en grupos de viajeros en línea.',
    'Utilicé servicios de atención al cliente en línea para obtener detalles de las empresas.',
    'Me enteré de las empresas a través de amigos y familiares que visitaron antes.',
  ],
  '¿Qué tipo de material se te entregó en la Oficina de Turismo?': [
    'Recibí un folleto con mapas detallados de la ciudad y sus atracciones.',
    'Me proporcionaron una guía impresa con recomendaciones de restaurantes y actividades.',
    'Obtuve un paquete informativo con cupones de descuento para diferentes lugares de interés.',
    'Recibí un mapa interactivo en formato digital con puntos de interés marcados.',
    'Me entregaron una lista de eventos y festivales programados durante mi estadía.',
    'Obtuve un catálogo con opciones de tours y excursiones organizadas.',
    'Recibí un folleto cultural con información sobre la historia y la cultura local.',
    'Me proporcionaron un calendario de actividades recreativas y deportivas.',
    'Obtuve una tarjeta de descuentos exclusivos para lugares turísticos y restaurantes.',
    'Recibí un resumen de información en varios idiomas para facilitar la comunicación.',
  ],
  '¿Cómo evalúas el tipo de información brindada por las Oficinas de Turismo de Mina Clavero?':
    [
      'La información brindada fue detallada y me ayudó a planificar mi estadía de manera eficiente.',
      'En general, la información proporcionada fue útil, pero hubiera apreciado más detalles en algunas áreas.',
      'Sentí que la información fue limitada y faltaron recomendaciones personalizadas.',
      'Recibí información clara y precisa sobre las atracciones y servicios disponibles.',
      'La información fue insuficiente y no cumplió con mis expectativas.',
      'Obtuve respuestas satisfactorias a todas mis preguntas sobre el destino.',
      'Me proporcionaron información actualizada sobre eventos y actividades locales.',
      'La información brindada superó mis expectativas y me sorprendió gratamente.',
      'Sentí que la información estaba desorganizada y difícil de entender.',
      'La Oficina de Turismo fue de gran ayuda para planificar mi itinerario y actividades.',
    ],
  '¿Aparte de la información solicitada, se te brindó algún otro tipo de información de tu interés?':
    [
      'Sí, me proporcionaron detalles sobre eventos culturales que estaban ocurriendo durante mi visita.',
      'Recibí recomendaciones sobre rutas de senderismo que no habían sido mencionadas inicialmente.',
      'No, la información proporcionada se mantuvo principalmente en lo que había solicitado.',
      'Me dieron información sobre festivales locales que estaban programados.',
      'Sí, me informaron sobre opciones de entretenimiento nocturno en la ciudad.',
      'Recibí detalles sobre tours guiados y excursiones disponibles.',
      'Me proporcionaron información sobre opciones de compra y mercados locales.',
      'Sí, me informaron sobre eventos deportivos que se estaban llevando a cabo.',
      'Recibí recomendaciones de lugares para probar la gastronomía local.',
      'No, no se me brindó información adicional más allá de lo que pregunté.',
    ],
  '¿Qué información se te brindó?': [
    'Recibí detalles sobre las atracciones turísticas más populares, como museos y miradores.',
    'Me proporcionaron información sobre opciones gastronómicas, desde restaurantes locales hasta mercados.',
    'Obtuve datos sobre eventos y festivales que estaban teniendo lugar durante mi estadía en la ciudad.',
    'Recibí recomendaciones para excursiones y actividades al aire libre.',
    'Me informaron sobre opciones de transporte público y alquiler de vehículos.',
    'Obtuve información sobre tours guiados y visitas turísticas.',
    'Recibí detalles sobre opciones de entretenimiento nocturno y eventos culturales.',
    'Me proporcionaron información sobre opciones de compras y artesanías locales.',
    'Obtuve datos sobre servicios de salud y emergencia en la zona.',
    'Recibí información sobre opciones de spa y bienestar en Mina Clavero.',
  ],
  '¿Consideras a Mina Clavero como un destino completo en cuanto a su oferta y servicios?':
    [
      'Sí, considero que Mina Clavero ofrece una amplia variedad de actividades y servicios para todos los gustos.',
      'En general, creo que hay una buena oferta, pero podría haber más opciones en ciertas áreas.',
      'No, siento que la ciudad tiene potencial pero todavía hay áreas que podrían desarrollarse para enriquecer la experiencia.',
      'Definitivamente, Mina Clavero ofrece una experiencia turística completa y satisfactoria.',
      'En su mayoría, creo que los servicios turísticos son adecuados, pero podría haber mejoras.',
      'Aunque hay opciones, siento que Mina Clavero podría expandir su oferta de actividades y servicios.',
      'Sí, encuentro que Mina Clavero ofrece una gama diversa de atracciones y servicios para los visitantes.',
      'En términos generales, considero que hay un equilibrio entre las opciones disponibles y las que podrían agregarse.',
      'No tengo una opinión clara al respecto.',
      'Creo que Mina Clavero podría destacar más en áreas específicas de su oferta turística.',
    ],
  '¿Recomendarías Mina Clavero como destino turístico?': [
    'Definitivamente, Mina Clavero ofrece una combinación única de naturaleza y entretenimiento.',
    'Sí, especialmente si buscas relajación en un entorno natural y actividades al aire libre.',
    'Dependería de los intereses del viajero; para aquellos que disfrutan de la naturaleza, definitivamente lo recomendaría.',
    'No, creo que hay otros destinos que ofrecen más opciones y servicios.',
    'No, tuve algunas experiencias negativas durante mi visita.',
    'No, prefiero lugares más urbanos y desarrollados.',
    'Tal vez, me gustaría conocer más opiniones antes de recomendarlo.',
    'No estoy seguro, tendría que pensar más sobre ello.',
    'Sí, especialmente si te gustan las actividades culturales y la historia local.',
    'Sí, pero solo si puedes disfrutar de la ciudad fuera de la temporada alta.',
  ],
};
module.exports = {
  questions,
};
