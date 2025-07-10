document.addEventListener('DOMContentLoaded', () => {
    // --- BANCO DE PREGUNTAS COMPLETO ---
    const db = {
        reglamento: [
            {
                category: "Capítulo I: Disposiciones Generales",
                questions: [
                    { q: 'I.1 ¿Cuál es el objeto del "Reglamento General de Radioaficionados"?', o: ['Regular la actividad de los Radioaficionados, Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas.', 'Atribuir y reglamentar el uso de las bandas de frecuencias...', 'Establecer criterios técnicos para el diseño de equipamiento...'], a: [0, 1] },
                    { q: 'I.2 ¿Cuál es el alcance del "Reglamento General de Radioaficionados"?', o: ['Servicio de Aficionados.', 'Servicio de Aficionados por Satélite.', 'Servicio de Aficionados y Servicio de Aficionados por Satélite.'], a: [2] },
                    { q: 'I.3 ¿Cuál es la Autoridad de Aplicación?', o: ['SECRETARÍA DE COMUNICACIONES (SC).', 'COMISIÓN NACIONAL DE COMUNICACIONES (CNC).', 'ENTE NACIONAL DE COMUNICACIONES (ENACOM).', 'MINISTERIO DE COMUNICACIONES (MINCOM).'], a: [2] },
                    { q: 'I.4 Los términos "aficionados" y "radioaficionados" ¿son considerados equivalentes?', o: ['Sí.', 'No.'], a: [0] },
                    { q: 'I.5 Defina "SERVICIO DE RADIOAFICIONADOS":', o: ['Servicio... para operadores comerciales.', 'Servicio... público...', 'Servicio de radiocomunicación que tiene por objeto la instrucción individual, la intercomunicación y los estudios técnicos efectuados por Radioaficionados.'], a: [2] },
                    { q: 'I.6 Defina "SERVICIO DE RADIOAFICIONADOS POR SATÉLITE":', o: ['Servicio... para operadores comerciales.', 'Servicio de radiocomunicación que utiliza estaciones espaciales situadas en satélites... para los mismos fines que el Servicio de Radioaficionados.', 'Servicio... para operadores de radiodifusión.'], a: [1] },
                    { q: 'I.7 Defina "RADIOAFICIONADO":', o: ['Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente individual, sin fines de lucro...', 'Persona... con carácter exclusivamente comercial...', 'Persona... con fines de lucro...'], a: [0] },
                    { q: 'I.8 Defina "RADIO CLUB":', o: ['Asociación Civil, integrada por cualquier operador...', 'Asociación Civil... para la actividad comercial.', 'Persona Jurídica... Asociación Civil sin fines de lucro... para fomentar el ingreso, enseñanza, difusión y práctica de la actividad.'], a: [2] },
                    { q: 'I.9 Defina "INSTITUCIÓN AUTORIZADA":', o: ['Institución... autorizada... para dictar cursos... y tomar exámenes...', 'Institución... autorizada... para fomentar... a través de Prácticas Operativas'], a: [0] },
                    { q: 'I.10 Defina "INSTITUCIÓN RECONOCIDA":', o: ['Institución... reconocida... para fomentar... a través de Prácticas Operativas', 'Institución... autorizada... para dictar cursos... y tomar exámenes...'], a: [0] },
                    { q: 'I.11 Defina "LICENCIA DE RADIOAFICIONADO":', o: ['Autorización que otorga un Radio Club...', 'Autorización que otorga la Autoridad de Aplicación a... personas jurídicas... no facultando a instalar...', 'Autorización que otorga la Autoridad de Aplicación a... personas físicas y jurídicas... las faculta a instalar y operar estaciones...'], a: [2] },
                    { q: 'I.12 ¿Cuál es la sigla del PERMISO INTERNACIONAL DE RADIOAFICIONADOS?', o: ['I.A.R.P.', 'P.I.R.A.', 'I.R.P.A.'], a: [0] },
                    { q: 'I.13 Defina "PERMISO INTERNACIONAL DE RADIOAFICIONADOS":', o: ['Autorización extendida por la Autoridad de Aplicación de acuerdo con lo previsto en la Ley 24.730 y la Resolución 3745 SC/1997.', 'Autorización extendida... de acuerdo con... la Resolución SC 50/1998.'], a: [0] },
                    { q: 'I.14 Defina "SEÑAL DISTINTIVA":', o: ['Identificación otorgada por la Autoridad de Aplicación a un Radioaficionado, Radio Club, Institución Autorizada o Institución Reconocida.', 'Identificación otorgada por IARU...', 'Código que representa una clase de emisión...'], a: [0] },
                    { q: 'I.15 Defina "CATEGORÍA" de Radioaficionado:', o: ['Nivel de calificación... a los titulares de licencias comerciales...', 'Nivel de calificación que otorgan los Radio Clubes...', 'Nivel de calificación que otorga la Autoridad de Aplicación a aquel Radioaficionado que cumpla con los requisitos...'], a: [2] },
                    { q: 'I.16 Defina "CONTACTO DE DX":', o: ['...comunicados de duración ilimitada...', 'Comunicados entre estaciones que, por la distancia... inaccesibilidad geográfica, u otro factor de dificultad, no resulte frecuente...', '...comunicados con varios Radioaficionados a la vez...'], a: [1] },
                    { q: 'I.17 Defina "ESTACIÓN REPETIDORA DE AFICIONADO":', o: ['...reservada únicamente al titular...', '...actividad comercial...', 'Estación fija, destinada a la retransmisión automática... y abierta al tráfico general de los mismos...'], a: [2] },
                    { q: 'I.18 Defina "REPETIDOR DIGITAL (Digipeater)":', o: ['Estación capaz de recibir y retransmitir información digital por paquete (Packet - Radio), en tiempo real, en la misma frecuencia...', '...en distinta frecuencia...', '...información emitida en cualquier modo...', '...información analógica...'], a: [0] },
                    { q: 'I.19 Defina "CONTROLADOR NODO TERMINAL (TNC)":', o: ['...para el envío de datos analógicos.', 'Unidad o programa que permite la conexión entre computadoras y equipos de radio, para la recepción y transmisión de datos digitales...', '...retransmisión automática de mensajes analógicos...'], a: [1] },
                    { q: 'I.20 Defina "SISTEMA DE BOLETINES Y BASE DE DATOS (BBS)":', o: ['Sistema automático... que permite el almacenamiento y la distribución de mensajes y archivos... sin ningún tipo de limitación de acceso...', 'Sistema manual...', 'Sistema automático... para comunicaciones analógicas.', 'Sistema manual... para paquetes analógicos...'], a: [0] },
                    { q: 'I.21 Defina "SISTEMA DE MENSAJES PERSONALES (PMS/PBBS)":', o: ['Controlador Nodo Terminal (CNT) para almacenamiento de mensajes personales. Realiza correo electrónico...', 'Transceptor que posibilita el envío de mensajes generales...', 'TNC para almacenamiento de mensajes abiertos...'], a: [0] },
                    { q: 'I.22 Defina "DISTRIBUCIÓN DE MENSAJES (Forwarding)":', o: ["Mecanismo utilizado por los BBS's para la distribución de mensajes con otros BBS's", "Mecanismo utilizado por los digipeaters y TNC's para almacenar mensajes.", 'Mecanismo utilizado por las repetidoras...'], a: [0] },
                    { q: 'I.23 Defina "TARJETA QSL":', o: ['Confirmación (postal o virtual) que intercambian los Radioaficionados por sus comunicados realizados y los Radioescuchas por los comunicados recepcionados.', 'Confirmación... en todos sus comunicados...', 'Confirmación... por los comunicados bilaterales...'], a: [0] },
                    { q: 'I.24 Defina "INSTRUCTORES":', o: ['Miembros del Radio Club... No podrán intervenir... en la evaluación.', 'Radioaficionado nombrado por el Radio Club... que por su capacidad, experiencia y estudio acredita la competencia necesaria para el dictado de cursos...', 'Miembros de otro Radio Club que... podrán intervenir en la evaluación...'], a: [1] },
                    { q: 'I.25 Defina "CÓDIGO MORSE":', o: ['...contactos DX...', 'Sistema de escritura, estandarizado... que representa las letras... mediante una combinación de sonidos cortos ("puntos"), sonidos largos ("rayas") y silencios.', 'Condición de operación QRP...'], a: [1] },
                    { q: 'I.26 Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO":', o: ['Estación radioeléctrica... podrá ser "Fija", "Móvil", o "Móvil de mano".', 'Estación fija (repetidora)...', 'Estación radioeléctrica... para el Servicio de Radioaficionados por Satélite...'], a: [0] },
                    { q: 'I.27 Defina "RADIOBALIZA (RADIOFARO)":', o: ['Estación (Digipeater)...', 'Estación transmisora... utilizada para determinar las condiciones de propagación... que emite a intervalos regulares...', 'Estación fija (repetidora)...'], a: [1] },
                    { q: 'I.28 Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO POR SATELITE":', o: ['Estación fija (repetidora)...', 'Estación (Digipeater)...', 'Estación radioeléctrica... podrá ser "Terrena"... o "Espacial"...'], a: [2] },
                    { q: 'I.29 Defina "PROYECTO INTERNACIONAL DE BALIZAS (IBP)":', o: ['Permiso Internacional...', 'Red mundial de radiofaros en alta frecuencia (HF) organizado por IARU...', 'Método de comunicación... lunar (EME)...'], a: [1] },
                    { q: 'I.30 Defina "DESASTRE":', o: ['...desproporción entre los medios necesarios para superarla y aquellos medios a disposición...', '...puede ser atendida por los medios disponibles localmente...'], a: [0] },
                    { q: 'I.31 Defina "EMERGENCIA":', o: ['...(Desastre)...', '...puede ser atendida por los medios disponibles localmente...'], a: [1] },
                    { q: 'I.32 Defina "CONCURSO":', o: ['Evento nacional y/o internacional en donde se ponen a prueba las habilidades de los Radioaficionados...', 'Comunicados (DX)...', 'Sistema de escritura (Morse)...'], a: [0] },
                    { q: 'I.33 Defina "ÉTICA OPERATIVA":', o: ['Es el conjunto de deberes, obligaciones, conductas y principios establecidos en el Reglamento y... por la IARU...', 'Es el conjunto de símbolos, alfabetos y códigos...'], a: [0] },
                    { q: 'I.34 Defina "VEEDOR":', o: ['...para el dictado de cursos (Instructor)...', 'Radioaficionado de categoría GENERAL o SUPERIOR, designado... para estar presente en la sesión de exámenes...', 'Responsable de evaluar a los aspirantes...'], a: [1] },
                    { q: 'I.35 La licencia habilita a su titular a instalar y/u operar estaciones de:', o: ['Servicio de Radioaficionados.', 'Servicio de Radioaficionados por Satélite.', 'Servicio de Radioaficionados y Radioaficionados por Satélite.'], a: [2] },
                    { q: 'I.36 Las estaciones... estarán sujetas a lo dispuesto por:', o: ['Resolución SC 329/2000...', 'LEY N° 27078.', 'Resolución SC 50/1998...'], a: [0] },
                    { q: 'I.37 ¿En qué circunstancias se podrán conectar equipos a las líneas telefónicas?', o: ['Exclusivamente ante emergencias.', 'En situaciones de interés comunitario.', 'En eventos propios de la actividad.', 'En ninguna circunstancia.'], a: [0] },
                    { q: 'I.38 ¿Cuál es la vigencia de la licencia de radioaficionados?', o: ['1 año.', '5 años.', '10 años.', 'Depende de la categoría.'], a: [1] },
                    { q: 'I.39 ¿Por qué período se puede renovar la licencia?', o: ['5 años, con renovación automática.', 'Indefinido.', '5 años, al realizar el trámite de renovación, rehabilitación o exámen de ascenso.'], a: [2] },
                    { q: 'I.40 ¿Cuál es la vigencia de la autorización de una Estación Repetidora?', o: ['1 año.', '5 años.', '5 años o hasta la cancelación o caducidad de la licencia del titular.', 'Depende de la categoría.'], a: [2] },
                    { q: 'I.41 ¿Con qué intervalo de tiempo se debe transmitir la señal distintiva?', o: ['5 minutos.', '10 minutos.', '30 minutos.', 'Cuando lo desee.'], a: [1] },
                    { q: 'I.42 ¿Dónde se permite el funcionamiento de redes de Emergencia?', o: ['En todas las bandas...', 'En las frecuencias designadas a tal fin, en los casos que determine la Autoridad competente...', 'Cuando el Radioaficionado lo considere necesario.'], a: [1] },
                    { q: 'I.43 Plazo para desinstalar estaciones ante caducidad de licencia:', o: ['30 días.', '60 días.', '90 días.'], a: [2] },
                    { q: 'I.44 Plazo para desinstalar estaciones ante cancelación de licencia:', o: ['10 días.', '30 días.', '90 días.'], a: [0] },
                    { q: 'I.45 Principios básicos del Código de Conducta del Radioaficionado (IARU):', o: ['Sentido social y espíritu fraternal.', 'Lealtad.', 'Comprensión.', 'No discriminación.', 'Buenos modales.', 'Objetividad.', 'Tolerancia.'], a: [0, 2, 4, 6] },
                    { q: 'I.46 ¿Qué organización representa a los Radioaficionados internacionalmente?', o: ['A.R.R.L.', 'I.T.U.', 'I.A.R.U.', 'C.I.T.E.L.'], a: [2] },
                    { q: 'I.47 ¿Cuál es el orden de observancia de la reglamentación?', o: ['Reglamento General -> IARU -> UIT.', 'IARU -> Reglamento General -> UIT.', 'UIT -> IARU -> Reglamento General.'], a: [0] },
                ]
            },
            {
                category: "Capítulo II & III: Autoridad y Radio Clubes",
                questions: [
                    { q: 'II.1 Son facultades de la Autoridad de Aplicación:', o: ['Limitar, denegar, suspender o cancelar la licencia.', 'Asignar o modificar las señales distintivas.', 'Tomar exámenes de ingreso y ascenso.', 'Dictar cursos y fomentar la actividad.'], a: [0, 1] },
                    { q: 'III.1 ¿Qué categoría se le otorga a los Radio Clubes?', o: ['Novicio', 'General', 'Superior'], a: [1] },
                    { q: 'III.2 ¿Cómo se identifica el Radioaficionado al operar la estación del Radio Club?', o: ['Señal distintiva del Radio Club y señal distintiva propia.', 'Señal distintiva propia y señal distintiva del Radio Club.', 'Señal distintiva propia.'], a: [0] },
                    { q: 'III.3 Al operar la estación del Radio Club, ¿en qué bandas puede operar?', o: ['En las bandas autorizadas a su categoría.', 'En las bandas correspondientes a la categoría Superior.'], a: [0] },
                    { q: 'III.4 En Práctica Operativa, ¿cómo se identifican los aspirantes?', o: ['Con señal distintiva del Radio Club, aclarando "en Práctica Operativa".', 'Con señal distintiva del Instructor.'], a: [0] },
                    { q: 'III.7 ¿El Radio Club podrá poseer filiales?', o: ['Sí.', 'No.'], a: [0] },
                ]
            },
            {
                category: "Capítulo IV, V, VI, VII: Categorías y Extranjeros",
                questions: [
                     { q: 'IV.1 Identifique las categorías de radioaficionados:', o: ['Inicial', 'Novicio', 'Intermedia', 'General', 'Superior', 'Especial'], a: [1, 3, 4, 5]},
                     { q: 'IV.3 ¿Cuál es la edad mínima para la categoría Novicio?', o: ['12 años', '9 años', '18 años'], a: [1]},
                     { q: 'IV.5 ¿Cuál es la potencia de RF máxima para la categoría Novicio?', o: ['50 W.', '100 W.', '150 W.', '200 W.'], a: [3]},
                     { q: 'IV.6 ¿Años en categoría NOVICIO para ascender a GENERAL?', o: ['2 años.', '1 año.', '5 años.', '3 años.'], a: [3]},
                     { q: 'V.1 Defina RADIOESCUCHA:', o: ['Persona... que realiza actividades de instrucción, de intercomunicación...', 'Persona física autorizada exclusivamente a la recepción de emisiones...'], a: [1] },
                     { q: 'VI.1 Radioaficionados extranjeros "en tránsito", ¿ante quién gestionan la autorización?', o: ['Ante los RADIO CLUBES', 'Directamente ante la Autoridad de Aplicación.'], a: [0] },
                     { q: 'VII.1 ¿Qué es el Permiso Internacional de Aficionado (I.A.R.P.)?', o: ['Un documento... para operar sin restricciones en todos los países.', 'Un documento que faculta a su tenedor operar en los países de América signatarios del Convenio...'], a: [1] },
                ]
            },
            {
                category: "Capítulo VIII, IX, X, XI: Señales, Estaciones y Repetidoras",
                questions: [
                    { q: 'VIII.1 ¿En la señal distintiva a qué corresponde el prefijo?', o: ['Al país.', 'A la provincia.', 'A la categoría.'], a: [0] },
                    { q: 'VIII.2 ¿Cuál es el prefijo de Argentina?', o: ['LU/LW.', 'CX.', 'PY.'], a: [0] },
                    { q: 'VIII.9 ¿Por cuánto tiempo se otorga la Señal Distintiva Especial?', o: ['2 años.', '1 año.', '5 años.'], a: [1] },
                    { q: 'IX.2 ¿Quién puede operar una estación radioeléctrica?', o: ['Su titular u otro Radioaficionado que él mismo autorice.', 'Cualquier Radioaficionado.', 'Ningún Radioaficionado distinto a su titular.'], a: [0] },
                    { q: 'X.1 ¿La Estación Repetidora tiene que estar autorizada?', o: ['Sí.', 'No.'], a: [0] },
                    { q: 'X.6 ¿Puede haber Repetidoras con acceso codificado (subtonos)?', o: ['No, la Reglamentación lo prohibe.', 'No, los equipos no disponen de subtonos.', 'Sí, siempre que el código sea aprobado y de conocimiento público.', 'Sí, si el código es de conocimiento sólo de la Autoridad.'], a: [2] },
                    { q: 'XI.1 ¿Qué categoría se requiere para instalar una Radiobaliza?', o: ['Novicio.', 'General.', 'Superior.', 'No se requiere una categoría determinada.'], a: [3] },
                ]
            },
        ],
        tecnica: [
            {
                category: "Técnica, Teoría, Propagación y Antenas (Novicio)",
                questions: [
                    { q: '1) ¿Con qué elemento bloqueamos el paso de una corriente continua entre dos puntos de un circuito?', o: ['Resistor.', 'Inductor.', 'Capacitor.', 'Termistor'], a: [2] },
                    { q: '2) ¿Cuál es el cable coaxil menos recomendado para VHF y UHF por sus mayores pérdidas?', o: ['RG-58', 'RG-8', 'RG-213', 'RG-11'], a: [0] },
                    { q: '3) Una resistencia está identificada con los siguientes colores: Rojo-Naranja-Rojo ¿Qué valor tiene?', o: ['670 kohms.', '230 ohms.', '2,3 kohms.', '23 kohms'], a: [2] },
                    { q: '4) La banda de color dorado que se encuentra en un resistor, ¿qué tolerancia indica?', o: ['5%', '10%', '20%', '30%'], a: [0] },
                    { q: '5) ¿En qué unidad se mide una bobina?', o: ['Faradio.', 'Joule.', 'Henrio.', 'Coulomb'], a: [2] },
                    { q: '6) Enuncie la ley de Ohm:', o: ['La intensidad... es inversamente proporcional al cuadrado de la diferencia de potencial...', 'La intensidad de una corriente eléctrica es directamente proporcional a la diferencia de potencial... e inversamente proporcional a su resistencia.', 'La intensidad... es directamente proporcional a su resistencia e inversamente proporcional a la diferencia de potencial...', 'La intensidad... es directamente proporcional a su resistencia y directamente proporcional a la diferencia de potencial...'], a: [1] },
                    { q: '7) ¿Cuál es la unidad de medida de la intensidad de corriente?', o: ['Voltio.', 'Amper.', 'Watt.', 'Henrio'], a: [1] },
                    { q: '8) ¿Cuál es la unidad de medida de la tensión?', o: ['Voltio.', 'Amper.', 'Watt.', 'Henrio'], a: [0] },
                    { q: '9) Tenemos un circuito con 3 resistencias en serie de 10 Ohms cada una, conectadas a una fuente de 30 Volts. ¿Qué valor de intensidad de corriente circula?', o: ['10 Amper.', '100 Amper.', '1 Amper.', '0,1 Amper'], a: [2] },
                    { q: '10) ¿Con qué instrumento se mide tensión en un circuito eléctrico y cómo se conecta?', o: ['Amperímetro. Se conecta en serie.', 'Voltímetro. Se conecta en serie.', 'Voltímetro. Se conecta en paralelo.', 'Amperímetro. Se conecta en paralelo'], a: [2] },
                    { q: '11) ¿Con qué instrumento se mide la intensidad de corriente en un circuito eléctrico y cómo se conecta?', o: ['Voltímetro. Se conecta en serie.', 'Amperímetro. Se conecta en paralelo.', 'Amperímetro. Se conecta en serie.', 'Amperímetro. Se conecta en paralelo'], a: [2] },
                    { q: '12) ¿Cuál es la unidad de medida de la potencia eléctrica?', o: ['Amper.', 'Volts.', 'Watts.', 'Henrio'], a: [2] },
                    { q: '13) ¿Qué potencia se producirá en una resistencia de 400 ohms, si la tensión aplicada es de 20 Volts?', o: ['10 Watts.', '100 Watts.', '1 watt.', '20 Watts.'], a: [2] },
                    { q: '14) Se conectan en paralelo tres capacitores de 22, 33 y 5 microfaradios. ¿Cuál es la capacidad total?', o: ['3 uF', '60 uF', '45 uF', '70 uF'], a: [1] },
                    { q: '15) ¿Qué tipo de antena puede ser una buena elección para un equipo portable de HF en emergencia?', o: ['Quad de 3 elementos', 'Yagi de 3 elementos', 'Dipolo de 1/2 longitud de onda', 'Helicoidal'], a: [2] },
                    { q: '16) ¿Cuál es el ángulo ideal entre ramas de una antena dipolo tipo "V" invertida?', o: ['135°', '45°', '90°', '180°'], a: [2] },
                    { q: '17) ¿Qué diferencia fundamental existe entre la corriente continua y la alterna?', o: ['No existe diferencia.', 'La frecuencia.', 'La corriente continua es trifasica.', 'La corriente continua tiene una frecuencia de 50 Hz.'], a: [1] },
                    { q: '18) ¿Qué elemento permite elevar por sí solo una tensión alterna?', o: ['Resistencia', 'Transformador', 'Diodo', 'Impedancia'], a: [1] },
                    { q: '19) El período de una señal alterna es de 4 milisegundos. ¿Cuál es su frecuencia?', o: ['500 Hz.', '350 Hz.', '250 Hz.', '4 Hz.'], a: [2] },
                    { q: '20) El valor máximo de una corriente alterna es de 200 mA. ¿Cuál es su valor eficaz?', o: ['130 mA.', '141,1 mA.', '158 mA.', '282,8 mA.'], a: [1] },
                    { q: '21) Para proteger un equipo de 220V y 1KW de consumo, ¿qué valor de fusible sería conveniente?', o: ['500 mA', '1 A', '3 A', '6 A'], a: [3] },
                    { q: '22) En un capacitor, ¿qué fenómeno se produce entre la tensión y la corriente?', o: ['La tensión adelanta a la corriente.', 'La corriente adelanta a la tensión.', 'La tensión y la corriente están en fase.', 'La corriente está desfasada 360°'], a: [1] },
                    { q: '23) ¿Cuándo existe resonancia en un circuito?', o: ['Cuando la reactancia capacitiva es igual a la corriente.', 'Cuando la reactancia inductiva es igual a la tensión.', 'Cuando la reactancia capacitiva es igual a la reactancia inductiva.', 'Cuando la reactancia inductiva es igual a la corriente.'], a: [2] },
                    { q: '24) ¿Cómo se denomina el material que separa las placas de un capacitor?', o: ['Conductor.', 'Dieléctrico.', 'Cátodo.', 'Ánodo'], a: [1] },
                    { q: '25) ¿Los diodos comunes permiten circulación de corriente en ambas direcciones?', o: ['no.', 'si', 'sólo en fuentes de alimentación', 'sólo los diodos zener'], a: [0] },
                    { q: '26) ¿De qué elemento se compone un puente rectificador?', o: ['Capacitores.', 'Diodos.', 'Fets.', 'Bobinas'], a: [1] },
                    { q: '27) ¿Qué elementos indispensables componen un transformador?', o: ['Dos capacitores.', 'Un capacitor y una bobina.', 'Dos bobinas.', 'Una bobina y un diodo'], a: [2] },
                    { q: '28) ¿Qué elementos componen una fuente de alimentación típica de 12V c.c.?', o: ['Transformador, Capacitor, regulador y fusible.', 'Puente de diodos, Regulador, capacitor y fusible.', 'Transformador, puente de diodos, capacitor y fusible.', 'Transformador, resistencias, capacitor y fusible'], a: [2] },
                    { q: '29) ¿Qué tipo de corriente entrega una fuente de alimentación típica?', o: ['Pulsante.', 'Continua.', 'Alterna.', 'Monofásica'], a: [1] },
                    { q: '30) ¿Cuál es una de las funciones más importantes que realiza un transistor?', o: ['Amplificar señales débiles.', 'Rectificar la tensión de línea.', 'Regula la frecuencia del oscilador', 'Atenúa señales débiles'], a: [0] },
                    { q: '31) ¿Cómo se denominan los elementos que conforman un transistor?', o: ['Anodo, emisor y grilla.', 'Placa, pantalla y base.', 'Colector, base y emisor.', 'Colector, base y cátodo'], a: [2] },
                    { q: '32) Las frecuencias de audio en Packet-Radio a 1200 bauds en F2D son:', o: ['600 y 1200 Hz.', '1200 y 2200 Hz.', '1600 y 2400 Hz.', '1000 y 1200 Hz.'], a: [1] },
                    { q: '33) Un TNC de Packet-Radio suele conectarse a:', o: ['conector de video de una computadora', 'conector del scanner de una computadora', 'conector de teclado de una computadora', 'conector serie de una computadora'], a: [3] },
                    { q: '34) En 80m, una antena dipolo resuena en 3500 kHz (ROE 1.1:1) y tiene ROE 4:1 en 3750 kHz. ¿Qué debemos hacer?', o: ['Alargarla', 'Acortarla', 'Aumentar la impedancia del coaxil', 'Inclinarla'], a: [1] },
                    { q: '35) La telemetría de un satélite es:', o: ['Una forma de medir la distancia a la que se encuentra un satélite', 'Una forma de medir el tamaño del satélite', 'Una forma de obtener información del estado del satélite', 'Una forma de medir el peso del satélite'], a: [2] },
                    { q: '36) 4 resistencias en paralelo (50, 10, 120, 4700 ohms) a 12V. ¿Tensión en R4?', o: ['12 Volts', '0,0025 Volts', '47 Volts', '6 Volts'], a: [0] },
                    { q: '37) Para obtener una buena relación de ROE, ¿qué es conveniente?', o: ['Alta potencia reflejada y baja potencia incidente', 'Baja potencia reflejada y alta potencia incidente', 'Alta potencia reflejada y alta potencia incidente', 'Baja potencia reflejada y baja potencia incidente'], a: [1] },
                    { q: '38) Describir en bloque un receptor superheterodino en A3E:', o: ['Amp. RF, Mezclador, Osc. RF, Amp. FI, Amp. Audio y parlante.', 'Amp. RF, Mezclador, Osc. RF, Amp. FI, Detector, Amp. audio y parlante.', 'Amp. RF, mezclador, Amp. FI, Detector, Amp. audio y parlante.', 'Amp. RF, Detector de producto, Mezclador, Detector, Amp. audio y parlante.'], a: [1] },
                    { q: '39) Definición de selectividad:', o: ['Capacidad de evitar interferencias de estaciones potentes y cercanas.', 'Capacidad de escuchar las señales muy débiles.', 'Capacidad de escuchar las señales muy fuertes', 'Capacidad de bloquear las señales muy débiles'], a: [0] },
                    { q: '40) Definición de sensibilidad:', o: ['Capacidad de evitar interferencias de estaciones potentes y cercanas.', 'Capacidad de escuchar las señales muy débiles.', 'Capacidad de escuchar las señales muy fuertes', 'Capacidad de bloquear las señales muy débiles'], a: [1] },
                    { q: '41) Describir en bloque un receptor de F3E:', o: ['Amp. RF, mezclador, filtro pasa bajos, amp. FI. limitador, discriminador, amp. audio y parlante.', 'Amp. RF, Mezclador, Osc. RF, Amp. FI, Detector, Amp. audio y parlante.', 'Amp. RF, Detector de producto, Mezclador, Detector, Amp. audio y parlante.', 'Amp. RF, Mezclador, Osc. RF, Filtro, Amp. FI, Limitador, Discriminador, amp. audio y parlante.'], a: [3] },
                    { q: '42) ¿Para qué se emplea el amplificador de FI?', o: ['Aumentar la ganancia de la primera etapa de RF', 'Usarlo como discriminador de frecuencia.', 'Para obtener ganancia y selectividad.', 'Aumentar la ganancia de la ultima etapa de AF'], a: [2] },
                    { q: '43) ¿Qué función cumple el mezclador en un receptor superheterodino?', o: ['Mezclar la FI con la señal recibida', 'Conversión de la señal captada en otra de frecuencia distinta para ser amplificada con mayor facilidad.', 'Conversión de la señal en otra de características totalmente distintas.', 'Ninguna es correcta'], a: [1] },
                    { q: '44) 4 resistencias en paralelo (50, 10, 120, 4700 ohms) a 12V. ¿Potencia disipada por R1 (50 ohms)?', o: ['2,88 vatios', '1,44 vatios', '0,72 vatios', '0,36 vatios'], a: [0] },
                    { q: '45) Defina en bloques, un transmisor de Banda Lateral Única (J3E):', o: ['Osc. RF, Amp. mic, filtro, mezclador, amp. lineal.', 'Osc. RF, Modulador balanceado, Amp. mic, filtro, mezclador, amp. lineal.', 'Descripción de receptor F3E.', 'Descripción de receptor A3E.'], a: [1] },
                    { q: '46) El ancho de banda ocupado por una emisión J3E es:', o: ['Aprox. 3 kHz.', 'Aprox. 6 kHz.', 'Aprox. 16 kHz.', 'Aprox. 1,5 kHz'], a: [0] },
                    { q: '47) El ancho de banda de una emisión de F3E banda angosta (2m) es:', o: ['Aprox. 6 kHz.', 'Aprox. 16 kHz.', 'Aprox. 25 kHz.', 'Aprox. 3 kHz.'], a: [1] },
                    { q: '48) En clase de emisión F3E:', o: ['La portadora varia su amplitud...', 'La señal de micrófono hace variar la frecuencia de la portadora.', 'La portadora no varia de frecuencia...', 'Se transmite la portadora modulada con tres tonos.'], a: [1] },
                    { q: '49) En el modo RTTY:', o: ['Se transmite la portadora modulada con tres tonos.', 'Se transmiten tres tonos para modular en amplitud...', 'Dos tonos de audio modulan la portadora.', 'La señal de micrófono hace variar la frecuencia...'], a: [2] },
                    { q: '50) En clase de emisión A1A:', o: ['La portadora se modula con el micrófono.', 'Se transmite portadora al ritmo que marca el manipulador.', 'El manipulador corta la alimentación del amp. lineal.', 'Se transmiten tres tonos...'], a: [1] },
                    { q: '51) En clase de emisión J3E:', o: ['La portadora es modulada por el audio del amp. de RF.', 'La portadora es modulada por el audio del OFV.', 'La portadora es modulada por el audio proveniente del amplificador de micrófono.', 'La señal de micrófono hace variar la frecuencia...'], a: [2] },
                    { q: '52) En clase de emisión A3E:', o: ['La portadora es modulada en fase.', 'La portadora es modulada en amplitud.', 'La portadora es modulada por los armónicos.', 'La señal de micrófono hace variar la frecuencia...'], a: [1] },
                    { q: '53) ¿Qué instrumento se utiliza para ver la forma de onda?', o: ['Amperímetro.', 'Formametro.', 'Osciloscopio.', 'Ondámetro'], a: [2] },
                    { q: '54) ¿Qué instrumento se utiliza para medir la potencia de un transmisor?', o: ['Amperímetro.', 'Potenciómetro.', 'Wattimetro.', 'Medidor de ROE'], a: [2] },
                    { q: '55) La fórmula de frecuencia es: (P=período)', o: ['F=1/V', 'F=1/I', 'F=1/P', 'F=V/I'], a: [2] },
                    { q: '56) Antena Yagi 146MHz con Z=120Ω y coaxil Z=50Ω. Potencia 45W. ¿ROE mínima esperada?', o: ['1,2:1', '3:1', '2:1', '2,4:1'], a: [3] },
                    { q: '57) ¿Con qué instrumento se mide la frecuencia?', o: ['Amperímetro.', 'Wattimetro.', 'Frecuencímetro.', 'Potenciómetro'], a: [2] },
                    { q: '58) ¿Cómo se le llama a la inversa de la resistencia 1/R?', o: ['Suceptancia.', 'Admitancia.', 'Conductancia.', 'reactancia'], a: [2] },
                    { q: '59) Tensión 150V, corriente 2.5A. ¿Resistencia?', o: ['50 ohms.', '90 ohms.', '375 ohms', 'ninguna es correcta.'], a: [3] }, // Correct answer is 60 ohms.
                    { q: '60) ¿Qué intensidad de corriente fluirá si se aplican 250V a un resistor de 5000 ohms?', o: ['0,90 A', '10 A', '0,05 A', '0,5 A'], a: [2] },
                    { q: '61) Resistor de 500Ω en paralelo con otro de 1200Ω. ¿Resistencia total?', o: ['353 ohms.', '500 ohms.', '700 ohms.', '1700 ohms'], a: [0] },
                    { q: '62) Corriente 150mA en resistencia 20kΩ. ¿Caída de tensión?', o: ['2500 Volts.', '3000 Volts.', '5000 Volts.', '13333 Volts'], a: [1] },
                    { q: '63) ¿Qué elemento se utiliza para adaptar impedancias entre una antena dipolo y su línea?', o: ['Transistor.', 'Diodo.', 'Balun.', 'Transmatch'], a: [2] },
                    { q: '64) Un dipolo de media onda, ¿cómo irradia?', o: ['Unidireccional.', 'Omnidireccional.', 'Bidireccional.', 'Isotrópica.'], a: [2] },
                    { q: '65) ¿Cuántos elementos se necesitan (como mínimo) para construir una antena Yagi?', o: ['1', '2', '3', '4'], a: [1] },
                    { q: '66) ¿Longitud de onda para 1845 kHz?', o: ['104,46 mts.', '78 mts.', '24,57 mts.', '162,6 mts.'], a: [3] },
                    { q: '67) ¿Longitud de onda para 3657 kHz?', o: ['154,46 mts.', '94,57 mts.', '82,03 mts.', '75,01 mts'], a: [2] },
                    { q: '68) ¿Longitud de un dipolo de 1/2 onda para 28950 kHz?', o: ['5,34 mts.', '6,23 mts.', '4,9 mts.', '9,84 mts.'], a: [2] },
                    { q: '69) ¿Longitud de una de las ramas del dipolo de 1/2 onda para 7043 kHz?', o: ['10,11 mts.', '9,23 mts', '12,56 mts.', '20,22 mts.'], a: [0] },
                    { q: '70) Una antena de 4 medias ondas de largo para 14.2 MHz, ¿longitud?', o: ['50,14 mts.', '39,87 mts.', '40,14 mts.', '45,01 mts.'], a: [2] },
                    { q: '71) ¿Longitud aproximada de una antena vertical de 1/4 de onda para 146 MHz?', o: ['48,8 cm', '24,4 cm', '97,7 cm', '2 mts'], a: [0] },
                    { q: '72) ¿Cómo irradia una antena vertical?', o: ['Unidireccionalmente.', 'Omnidireccionalmente.', 'Bidireccionalmente', 'Isotrópicamente'], a: [1] },
                    { q: '73) ¿Cómo irradia una antena Yagi de 3 elementos?', o: ['Omnidireccionalmente.', 'Direccionalmente.', 'Isotrópicamente', 'Con polarización circular'], a: [1] },
                    { q: '74) ¿Ganancia de una Yagi de 3 elementos para VHF (respecto a isotrópica)?', o: ['3 a 5 dB.', '6 a 8 dB', '8 a 10 dB.', '9 a 11dB'], a: [1] },
                    { q: '75) Impedancia característica del coaxil RG-59-U:', o: ['75 ohms.', '50 ohms.', '300 ohms.', '600 ohms.'], a: [0] },
                    { q: '76) Impedancia característica del coaxil RG-58U:', o: ['50 ohms.', '75 ohms.', '300 ohms.', '600 ohms.'], a: [0] },
                    { q: '77) Impedancia característica de la "cinta de TV":', o: ['50 ohms.', '75 ohms.', '300 ohms.', '600 ohms'], a: [2] },
                    { q: '78) Impedancia característica del coaxil RG-8-U y RG-213U:', o: ['50 ohms.', '75 ohms.', '300 ohms.', '600 ohms'], a: [0] },
                    { q: '79) Transmisor 146MHz, coaxil RG-58 100m, antena. ¿Qué se verifica?', o: ['La potencia que llega es igual a la que sale.', 'La potencia que llega es menor que la que sale.', 'La potencia que llega es mayor que la que sale.', 'La potencia que llega es inversamente proporcional...'], a: [1] },
                    { q: '80) ¿Cuál es el mejor ángulo para una antena en "V" invertida?', o: ['45 grados.', '30 grados.', '90 grados.', '180°'], a: [2] },
                    { q: '81) ¿Qué permite realizar el sintonizador de antena (transmatch)?', o: ['Amplificar la potencia.', 'Adaptar impedancias entre transmisor y línea.', 'Adaptar impedancias entre línea y antena.', 'Enfasar dos antenas.'], a: [1] },
                    { q: '82) ¿A qué se le llama I.T.V.?', o: ['Interferencia de chispas de automotor.', 'interferencia a teléfonos.', 'Interferencia a televisores.', 'Interferencia total en VHF'], a: [2] },
                    { q: '83) ¿Qué antena tiene más ganancia en estaciones móviles?', o: ['1/4 de onda', '5/8 de onda.', 'Cola de chancho (0 dB)', '1,5 dBi'], a: [1] },
                    { q: '84) ¿Cuál es habitualmente la impedancia de salida de los transceptores?', o: ['75 ohms.', '300 ohms', '50 ohms', '35 ohms'], a: [2] },
                    { q: '85) ¿Cuál es el tipo de cable coaxil más apropiado para 2m por sus bajas pérdidas?', o: ['RG-58-U', 'RG-59-U', 'RG-213-U', 'RG-8'], a: [2] },
                    { q: '86) Impedancia de una "V" invertida con ramas a 90°:', o: ['75 ohms', '52 ohms', '35 ohms', '125 ohms'], a: [1] },
                    { q: '87) 21000 kHz, ¿cuál es su frecuencia en MHz?', o: ['0,21 MHz.', '21 MHz.', '210 MHz.', '2,1 MHz'], a: [1] },
                    { q: '88) Un resistor variable es llamado:', o: ['Potenciómetro', 'Capacitor.', 'Termistor.', 'Variac'], a: [0] },
                    { q: '89) En una Yagi de 3 elementos, ¿cómo se denominan sus elementos?', o: ['Director, Balun, Excitado.', 'Director, Excitado, Reflector.', 'Director, Excitado, Pasivo.', 'Director, Activo, Pasivo.'], a: [1] },
                    { q: '90) Fórmula aproximada de una vertical de 1/4 de onda:', o: ['142,5/Frec.(MHz)', '72/Frec.(MHz)', '142,5/Velocidad de la luz', 'Frec.(MHz)/72'], a: [1] },
                    { q: '91) La propagación por reflexión ionosférica en HF está influida por:', o: ['El ciclo de manchas solares.', 'La meteorología.', 'Ninguna de las opciones.', 'La posición planetaria'], a: [0] },
                    { q: '92) ¿A qué se denomina polarización de una onda?', o: ['Al componente de iones...', 'A que llega a los polos', 'A la posición relativa (vertical u horizontal) de su campo electromagnético', 'A la polaridad de la señal'], a: [2] },
                    { q: '93) La densidad, composición y altura de las capas ionosféricas:', o: ['Cambia con la luna y el estado meteorológico.', 'Cambia con el ciclo solar, la época del año, la hora y la latitud.', 'Es permanente y no cambia.', 'Cambia en relación a la posición planetaria'], a: [1] },
                    { q: '94) La banda de 80m ofrece posibilidades de comunicarse con la Antártida:', o: ['En invierno y a la media noche.', 'En cualquier época del año al mediodía.', 'Las respuestas a) y b) son correctas.', 'La banda de 80m no ofrece ninguna posibilidad.'], a: [0] },
                    { q: '95) Para comunicarse a 300 Km al mediodía, los resultados más seguros se obtendrían en:', o: ['160 mts.', '80 mts.', '40 mts.', '20 mts.'], a: [2] },
                    { q: '96) ¿Cómo se propagan usualmente las señales de VHF?', o: ['Se curvan en la ionosfera.', 'Se mueven en círculos.', 'Viajan en línea recta.', 'Viajan en ángulos rectos'], a: [2] },
                    { q: '97) ¿Cómo es la frecuencia de una armónica respecto a la fundamental?', o: ['Es apenas algo más alta.', 'Es apenas algo más baja', 'Es exactamente un múltiplo.', 'Ninguna de las opciones'], a: [2] },
                    { q: '98) Si los extremos de un dipolo horizontal señalan E-O, ¿en qué dirección irradia?', o: ['Fundamentalmente de Norte a Sur.', 'Fundamentalmente de Este a Oeste.', 'Fundamentalmente de arriba hacia abajo.', 'En todas direcciones'], a: [0] },
                    { q: '99) ¿Qué elemento se utiliza para irradiar energía?', o: ['Líneas de transmisión.', 'Antena.', 'Transmisores.', 'Amplificadores de RF'], a: [1] },
                    { q: '100) Un transceptor es un equipo:', o: ['Transmisor especifico.', 'Que reúne las funciones de transmisor y receptor.', 'Receptor especifico.', 'Receptor bibanda'], a: [1] },
                    { q: '101) El PTT de un equipo es:', o: ['La etapa de transmisión.', 'El interruptor para recibir.', 'El interruptor que se debe presionar para transmitir.', 'La fuente de alimentación'], a: [2] },
                    { q: '102) La antena puede ser desconectada del transmisor y operar en vacío:', o: ['Para comunicados de corta distancia.', 'Quando o transmissor está na classe C.', 'Nunca.', 'Quando se opera em VHF ou UHF'], a: [2] },
                    { q: '103) En un receptor, ¿qué etapa está inmediatamente después de la antena?', o: ['Mezclador.', 'Amplificador de FI.', 'Amplificador de RF.', 'Amplificador de AF'], a: [2] },
                    { q: '104) En un transformador reductor, el número de vueltas del primario es:', o: ['Menor que el secundario', 'Mayor que el secundario', 'Igual que las del secundario.', 'La mitad que las del secundario.'], a: [1] },
                    { q: '105) ¿Qué significa la sigla OFV?', o: ['Oscilador de fuente de voltaje.', 'Oscilador de frecuencia variable.', 'Oscilador foto voltaico.', 'Oscilador de fase virtual.'], a: [1] },
                    { q: '106) ¿Qué significa la sigla CAF?', o: ['Corriente audio frecuente.', 'Cristal de alta frecuencia.', 'Control automático de frecuencia.', 'Corriente de audio frecuencia.'], a: [2] },
                    { q: '107) ¿Qué significa la sigla ALC?', o: ['Control automático de nivel.', 'Control anual de nivel.', 'Control manual de audio.', 'Amplificador lineal controlado'], a: [0] },
                    { q: '108) ¿Qué relación existe entre la frecuencia y su longitud de onda?', o: ['Son directamente proporcionales...', 'Son inversamente proporcionales, al aumentar una la otra disminuye.', 'La frecuencia es directamente proporcional al cuadrado...', 'La frecuencia es directamente proporcional a la mitad...'], a: [1] },
                    { q: '109) ¿Qué polarización se utiliza para repetidoras en 2m?', o: ['Circular.', 'Vertical.', 'Horizontal.', 'Oblicua a 45°'], a: [1] },
                    { q: '110) ¿Qué polarización se utiliza para SSB en VHF y UHF?', o: ['Circular.', 'Vertical.', 'Horizontal.', 'Oblicua a 45°'], a: [2] },
                    { q: '111) ¿Qué significa la sigla R.O.E.?', o: ['Relación de polarización Oblicua Espacial.', 'Red Observadores Espaciales.', 'Relación de Ondas Especiales.', 'Relación de Ondas Estacionarias.'], a: [3] },
                    { q: '112) ¿Con qué instrumento medimos la R.O.E.?', o: ['Frecuencímetro.', 'Amperímetro.', 'Medidor de ondas estacionarias.', 'Osciloscopio'], a: [2] },
                    { q: '113) Potencia directa 10W, inversa 1W. ¿ROE aproximada?', o: ['1,92:1', '1:1,22', '3:1', '3,15:1'], a: [0] },
                    { q: '114) En un receptor, ¿qué etapa antecede al amplificador de FI?', o: ['Amplificador de RF', 'Mezclador.', 'Detector.', 'Amplificador de AF'], a: [1] },
                    { q: '115) En un receptor, ¿qué etapa está después del detector?', o: ['Amplificador de RF.', 'Amplificador de FI.', 'Amplificador de audio.', 'Mezclador'], a: [2] },
                    { q: '116) En un receptor, ¿qué etapa está antes de la etapa detectora?', o: ['Amplificador de RF.', 'Amplificador de FI.', 'Amplificador de AF.', 'Ninguna de las nombradas.'], a: [1] },
                    { q: '117) ¿Velocidad de las ondas electromagnéticas en el espacio libre?', o: ['3.000.000 km./seg.', '300.000 km./seg.', '300/frec(MHz.)', '142,5/Frec.(MHz)'], a: [1] },
                    { q: '118) Los coaxiles son líneas de transmisión:', o: ['Balanceadas', 'Desbalanceadas.', 'De muy alta impedancia', 'Para conectar en el punto de máxima tensión'], a: [1] },
                    { q: '119) Las líneas abiertas son líneas de transmisión:', o: ['Balanceadas.', 'Desbalanceadas.', 'De muy baja impedancia', 'Para conectar en el punto de máxima corriente'], a: [0] },
                    { q: '120) ¿Cómo están formadas las ondas de radio?', o: ['Por campos eléctricos.', 'Por campos magnéticos.', 'Por campos eléctricos y magnéticos.', 'Por campos electroestáticos'], a: [2] },
                    { q: '121) Señal en VHF muy débil, al límite del Squelch, ¿qué señal le daría?', o: ['Busy', 'S-1', 'S-9', 'S-5'], a: [1] },
                    { q: '122) Los "Handies" bi-banda, ¿en qué clase de emisión emiten?', o: ['F3E', 'A3E', 'J3E', 'J2D'], a: [0] },
                    { q: '123) Si una estación en 80m llega con muy buena señal, ¿qué señal le daría?', o: ['S-3 + 9 dB', 'S-9 + 20 dB', 'S-20 + 9 dB', 'S-3'], a: [1] },
                    { q: '124) En el símbolo de la batería, la línea más corta, ¿qué terminal indica?', o: ['Positivo.', 'Negativo.', 'Neutro.', 'Fase'], a: [1] },
                    { q: '125) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Corriente por R2 (10Ω)?', o: ['1200 mA', '120 mA', '12 mA', '1,2 mA'], a: [0] },
                    { q: '126) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Corriente por R1 (50Ω)?', o: ['10 mA', '240 mA', '1000 mA', '24 mA'], a: [1] },
                    { q: '127) ¿En qué posición un dipolo de 80m transmite más intensamente hacia un lado?', o: ['"V" invertida.', 'Inclinado.', 'Horizontal', 'Vertical.'], a: [1] },
                    { q: '128) ¿Qué antena tiene más ganancia?', o: ['Direccional de 3 elementos.', 'Dipolo 1/2 longitud de onda.', 'Vertical 1/4 onda con planos de tierra.', 'Colineal de 11 dBi'], a: [3] },
                    { q: '129) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Corriente por R4 (4700Ω)?', o: ['2,55 mA', '25,53 mA', '255,31mA', '2,55 A'], a: [0] },
                    { q: '130) ¿Qué es un tono DTMF?', o: ['Una señal especial para telemando', 'Un tono audible multifrecuente utilizado en transceptores.', 'Un tono especial de una repetidora.', 'Una señal especial para telemetría satelital'], a: [1] },
                    { q: '131) Las líneas abiertas tienen:', o: ['Menor perdida que las líneas coaxiles de costo comparable.', 'Igual perdida que las líneas coaxiles...', 'Mayor pérdida que las líneas coaxiles...', 'Pérdida del doble que las líneas coaxiles...'], a: [0] },
                    { q: '132) ¿Constante práctica (K) para cálculo de dipolos de 1/2 onda (Longitud=K/f(MHz))?', o: ['K=72', 'K=132,5', 'K=142.5', 'K=300'], a: [2] },
                    { q: '133) ¿Qué es un tono CTCSS?', o: ['Una señal especial para telemando', 'Un tono sub-audible agregado a la portadora, que hace que un receptor acepte la señal', 'Un tono especial de una repetidora...', 'Una señal especial para telemetría satelital'], a: [1] },
                    { q: '134) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Corriente por R3 (120Ω)?', o: ['1 mA', '10 mA', '100 mA', '1 A'], a: [2] },
                    { q: '135) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Corriente total aproximada?', o: ['1,54 A', '154 mA', '15,4 mA', '1,54 mA'], a: [0] },
                    { q: '136) ¿A qué se llama amplificador lineal?', o: ['A la etapa que amplifica una fuente de alimentación.', 'A la etapa que amplifica la salida de RF de un transmisor.', 'A la etapa que opera únicamente con componentes lineales', 'A la etapa que multiplica "n" veces la tensión domiciliaria.'], a: [1] },
                    { q: '137) ¿Qué simboliza la "flecha" en un transistor tipo PNP?', o: ['La flecha es el colector y apunta hacia adentro.', 'La flecha es la base y apunta hacia adentro.', 'La flecha es el emisor y apunta hacia adentro del círculo.', 'La flecha es el colector y apunta hacia fuera.'], a: [2] },
                    { q: '138) ¿Longitud de onda para 50,050 MHz?', o: ['6,85 mts.', '5,99 mts.', '6,10 mts.', '7,98 mts'], a: [1] },
                    { q: '139) ¿Longitud de onda para 430,130 MHz?', o: ['0,662 mts.', '0,595 mts.', '0,697 mts.', '0,98 mts.'], a: [2] },
                    { q: '140) ¿Ángulo ideal entre ramas de un dipolo horizontal de 1/2 onda?', o: ['45°', '90°', '135°', '180°'], a: [3] },
                    { q: '141) Dos resistencias de igual valor en paralelo. ¿Resistencia total?', o: ['La suma de las dos.', 'La mitad de una de ellas.', 'Tres veces el valor de una.', 'La cuarta parte del producto.'], a: [1] },
                    { q: '142) Dos resistencias de igual valor en serie. ¿Resistencia total?', o: ['La suma de las dos.', 'La mitad de una de ellas.', 'Tres veces el valor de una.', 'La cuarta parte del producto.'], a: [0] },
                    { q: '143) Una señal de 725 Hz, ¿a qué rango pertenece?', o: ['Radio frecuencia.', 'Audio frecuencia.', 'Alta frecuencia', 'VHF'], a: [1] },
                    { q: '144) Una antena dipolo plegado. ¿Qué impedancia presenta en su centro?', o: ['50 ohms.', '75 ohms.', '150 ohms.', '300 ohms.'], a: [3] },
                    { q: '145) 7125 kHz, ¿qué frecuencia es en Megahertz?', o: ['71,25 MHz.', '7,125 MHz.', '.007125 MHz.', '712,5 MHz.'], a: [1] },
                    { q: '146) ¿Cuál es el periodo de los máximos ciclos solares?', o: ['2 años.', '11 años.', '15 años.', '5 años'], a: [1] },
                    { q: '147) Código de colores para 290 ohms:', o: ['Naranja, blanco, negro', 'Rojo, blanco, marrón', 'Rojo, gris, marrón', 'Rojo, gris, negro'], a: [1] },
                    { q: '148) ¿Qué elemento de una válvula es el ánodo?', o: ['Filamento.', 'Placa.', 'Pantalla.', 'Drenaje'], a: [1] },
                    { q: '149) 4R en paralelo (50, 10, 120, 4700Ω) a 12V. ¿Resistencia total aproximada?', o: ['7,77 kohms', '77,7 ohms', '7,77 ohms', '777 ohms'], a: [2] },
                    { q: '150) Código de colores para 87 ohms:', o: ['Gris, azul, negro', 'Blanco, azul, negro', 'Blanco, verde, marrón', 'Gris, violeta, negro'], a: [3] },
                ]
            }
        ],
        planes_banda: [
            {
                category: "Plan de Bandas: General",
                questions: [
                    { q: 'PB.1 ¿Puede un Radioaficionado transmitir en los extremos de las bandas asignadas?', o: ['Si, porque está en una frecuencia autorizada.', 'No, porque debido a la anchura de banda de la transmisión, saldría fuera del sector.', 'Sí, porque está en la banda autorizada para su categoría.'], a: [1]},
                    { q: 'PB.2 ¿A qué corresponde la clase de emisión A3E?', o: ['Telefonía. Amplitud Modulada. Doble Banda Lateral.', 'Telefonía. Modulación de Frecuencia.', 'Telefonía. Banda Lateral Unica con Portadora Suprimida.'], a: [0]},
                    { q: 'PB.3 ¿A qué corresponde la clase de emisión A1A?', o: ['Telefonía. Modulación de Frecuencia.', 'Teletipo.', 'Telegrafía. Código Morse.'], a: [2]},
                    { q: 'PB.4 ¿A qué corresponde la clase de emisión J3E?', o: ['Telegrafía. Código Morse.', 'Telefonía. Banda Lateral Unica con Portadora Suprimida.', 'Televisión. Modulación de Frecuencia.'], a: [1]},
                    { q: 'PB.5 ¿A qué corresponde la clase de emisión F3E?', o: ['Facsímil.', 'Telegrafía. Código Morse.', 'Telefonía. Modulación de Frecuencia. Doble Banda Lateral.'], a: [2]},
                    { q: 'PB.7 ¿A qué modo corresponde la clase J3E?', o: ['SSB.', 'RTTY.', 'SSTV.', 'ATV.'], a: [0]},
                    { q: 'PB.8 ¿A qué modo corresponde la clase A1A?', o: ['SSB.', 'CW.', 'RTTY.', 'PACKET.'], a: [1]},
                    { q: 'PB.9 ¿A qué modo corresponde la clase F3E?', o: ['ATV.', 'FM.', 'FAX.', 'AM.'], a: [1]},
                    { q: 'PB.10 ¿A qué modo corresponde la clase F1B?', o: ['FAX.', 'CW.', 'RTTY.', 'PACKET.'], a: [2]},
                    { q: 'PB.11 ¿Cuándo se puede reclamar protección por interferencias en banda secundaria?', o: ['Si la interferencia proviene de una estación comercial.', 'Si la interferencia proviene de un servicio oficial.', 'Sólo si la interferencia proviene de una estación del mismo servicio o de otros servicios con atribución también secundaria.'], a: [2]},
                    { q: 'PB.12 ¿Dónde se puede transmitir en el Servicio de Radioaficionados por satélite?', o: ['En todas las bandas de radioaficionados.', 'En cualquier frecuencia de las bandas atribuidas al S.R.S.', 'En los segmentos autorizados para uso satelital dentro de las bandas atribuidas al S.R.S.'], a: [2]},
                ]
            },
            {
                category: "Plan de Bandas: Novicio",
                questions: [
                    { q: 'PBN.1 ¿En qué bandas puede operar un Novicio?', o: ['60 metros.', '30 metros.', '12 metros.', '70 centímetros.'], a: [0, 3]},
                    { q: 'PBN.2 ¿En qué frecuencias puede operar un Novicio?', o: ['146000 kHz.', '10135 kHz.', '3550 kHz.', '14235 kHz.'], a: [0, 2]},
                    { q: 'PBN.3 En 15 metros, un Novicio:', o: ['Puede emitir en todos los segmentos.', 'Puede emitir sólo en algunos segmentos.', 'No puede emitir en esta banda.'], a: [1]},
                    { q: 'PBN.4 ¿En qué porción de 20m NO puede operar un Novicio?', o: ['14000-14070 kHz.', '14070-14095 kHz.', '14095-14099 kHz.'], a: [0]},
                    { q: 'PBN.5 Potencia máxima para Novicio en 30 metros:', o: ['500 W.', '250 W.', 'No puede emitir en esta banda.'], a: [2]},
                    { q: 'PBN.6 PIRE máxima para Novicio en 2200 metros:', o: ['1 W.', '25 W.', 'No puede emitir en esta banda.'], a: [0]},
                    { q: 'PBN.7 PIRE máxima para Novicio en 630 metros:', o: ['1 W.', '5 W.', 'No puede emitir en esta banda.'], a: [1]},
                    { q: 'PBN.8 PIRE máxima para Novicio en 60 metros:', o: ['25 W.', '100 W.', 'No puede emitir en esta banda.'], a: [0]},
                    { q: 'PBN.9 La banda de 80 metros es de carácter:', o: ['Primario.', 'Secundario.', 'Primario o secundario según el segmento.'], a: [2]},
                    { q: 'PBN.10 Ancho de banda máx. para DIGIMODOS en 2m y 10m:', o: ['<=3 kHz.', '<=16 kHz.', '>=16 kHz.'], a: [1]},
                    { q: 'PBN.11 Ancho de banda máx. para DIGIMODOS en 40m y 80m:', o: ['<=3 kHz.', '<=50 kHz.', '<=100 kHz.'], a: [0]},
                    { q: 'PBN.12 Única actividad para Novicio en 17 metros:', o: ['Emitir en RTTY.', 'Emitir en SSB.', 'Emitir una Radiobaliza.'], a: [2]},
                    { q: 'PBN.13 Una frecuencia de uso exclusivo para un modo se puede usar para:', o: ['Emitir en otro modo si está desocupada.', 'Emitir únicamente en ese modo.', 'Depende de la categoría.'], a: [1]},
                    { q: 'PBN.14 ¿Puede un Novicio transmitir AM en 3 cm?', o: ['Con baja potencia.', 'En prueba.', 'No están permitidas.'], a: [2]},
                    { q: 'PBN.15 ¿Puede un Novicio transmitir satélite en 23 cm?', o: ['Sólo espacio-tierra.', 'Sólo tierra-espacio.', 'No están permitidas.'], a: [1]},
                ]
            },
            {
                category: "Plan de Bandas: General",
                questions: [
                    { q: 'PBG.1 ¿En qué porción de 15m NO puede operar un General?', o: ['21000-21070 kHz.', '21125-21149 kHz.', '21151-21250 kHz.', '21.250-21.450 kHz.'], a: [3] },
                    { q: 'PBG.2 ¿En qué porción de 30m puede operar CW un General?', o: ['10100-10130 kHz.', '10130-10140 kHz.', '10140-10150 kHz.', 'No puede operar en la banda de 30 metros.'], a: [3] },
                    { q: 'PBG.7 ¿Cuál es la frecuencia de llamada en FM en la banda de 6 metros?', o: ['50,11 MHz.', '51,50 MHz.', '52,00 MHz.', '53,11 MHz.'], a: [1]},
                    { q: 'PBG.9 ¿Cuál es la frecuencia internacional de llamada en SSB en 6 metros?', o: ['50,11 MHz.', '51,50 MHz.', '52,00 MHz.'], a: [0] },
                    { q: 'PBG.17 ¿Cuál es el centro de actividad global de emergencias IARU en 20 metros?', o: ['14180 kHz.', '14210 kHz.', '14300 kHz.'], a: [2] },
                ]
            },
            {
                category: "Plan de Bandas: Superior",
                questions: [
                    { q: 'PBS.1 ¿En qué porción de 2m NO está permitido ningún tipo de emisión?', o: ['145-145,2 MHz.', '145,79-145,8 MHz.', '145,8-146 MHz.'], a: [1] },
                    { q: 'PBS.2 ¿Cuál es el destino del segmento 220-220,05 MHz (1,25m)?', o: ['CW', 'T.LT y SSB.', 'Radiofaros y T.L.T.', 'DV.', 'CW T.L.T exclusivo.'], a: [4] },
                    { q: 'PBS.3 ¿Con qué carácter se encuentra atribuida la banda de 70 cm?', o: ['Primario - Primario.', 'Primario - Secundario.', 'Secundario - Primario.', 'Secundario - Secundario.'], a: [1] },
                    { q: 'PBS.4 Indique las bandas atribuidas al S.R. por Satélite:', o: ['160m', '80m', '15m', '10m', '6m', '2m', '23cm'], a: [2, 3, 5, 6] },
                    { q: 'PBS.8 ¿Cuál es el centro de actividad QRP en 160 metros?', o: ['1810 kHz.', '1900 kHz.', '1910 kHz.'], a: [2] },
                    { q: 'PBS.9 ¿Cuál es el centro de actividad para emergencias IARU en 80 metros?', o: ['3560 kHz.', '3750 kHz.', '3690 kHz.', '3985 kHz.'], a: [1, 3] },
                ]
            }
        ]
    };

    // --- GUÍA DE ESTUDIO POR TEMAS ---
    const studyGuideContent = [
        {
            title: "Reglamento y Ética Operativa",
            content: `
                <p><strong>Autoridad y Normativa:</strong> La entidad que regula la actividad en Argentina es el <strong>ENACOM</strong>. Los radioaficionados deben seguir un orden de observancia: 1° Reglamento General de Radioaficionados, 2° Disposiciones de la IARU (Unión Internacional de Radioaficionados), y 3° Reglamentación de la UIT (Unión Internacional de Telecomunicaciones).</p>
                <p><strong>Licencia y Señal Distintiva:</strong> La licencia tiene una vigencia de <strong>5 años</strong>. La señal distintiva (o indicativo) debe transmitirse como mínimo cada <strong>10 minutos</strong> para una correcta identificación.</p>
                <p><strong>Contenido y Conducta:</strong> Está prohibido transmitir música, tratar temas políticos, religiosos o raciales, y usar lenguaje ofensivo. La ética del radioaficionado se basa en el respeto, la cordialidad y la disciplina.</p>
                <p><strong>Libro de Guardia:</strong> Es obligatorio y debe estar foliado. Se deben registrar todos los comunicados con: fecha, hora de inicio y fin, señal distintiva del corresponsal, banda y modo de emisión.</p>
                <p><strong>Tarjeta QSL:</strong> Es la confirmación escrita de un comunicado. Debe contener los datos del QSO (fecha, hora UTC, banda, modo, RST) para ser válida para diplomas.</p>
                <p><strong>Códigos Esenciales:</strong></p>
                <ul>
                    <li class="ml-4 list-disc"><strong>Alfabeto Fonético:</strong> Se usa para deletrear indicativos y palabras (Alfa, Bravo, Charlie...).</li>
                    <li class="ml-4 list-disc"><strong>Código Q:</strong> Abreviaturas de tres letras para preguntas y respuestas rápidas (ej: QTH: Domicilio, QSY: Cambiar de frecuencia, QRM: Interferencia artificial).</li>
                    <li class="ml-4 list-disc"><strong>Código RST:</strong> Reporte de señal. En fonía se usa RS (Legibilidad y Fuerza). En telegrafía se añade la T de Tono (RST).</li>
                </ul>
            `
        },
        {
            title: "Electricidad Básica y Ley de Ohm",
            content: `
                <p><strong>Conceptos Fundamentales:</strong> La electricidad es el flujo de electrones. La <strong>Tensión (V)</strong> es la fuerza que los empuja, la <strong>Corriente (I)</strong> es la cantidad de electrones que fluyen, y la <strong>Resistencia (R)</strong> es la oposición a ese flujo.</p>
                <p><strong>Ley de Ohm:</strong> Es la relación clave: <strong>Tensión = Corriente × Resistencia (V = I × R)</strong>. Esta ley permite calcular cualquiera de las tres variables si se conocen las otras dos.</p>
                <p><strong>Potencia Eléctrica (P):</strong> Se mide en <strong>Watts (W)</strong> y representa el trabajo realizado por la electricidad. Se calcula como <strong>P = V × I</strong>.</p>
                <p><strong>Corriente Continua (CC) y Alterna (CA):</strong> La CC fluye en una sola dirección (ej: baterías). La CA invierte su dirección periódicamente (ej: red domiciliaria). La frecuencia de la CA se mide en <strong>Hertz (Hz)</strong>.</p>
            `
        },
        {
            title: "Componentes Electrónicos",
            content: `
                <p><strong>Resistencia:</strong> Se opone al paso de la corriente. Su valor se identifica con un <strong>código de colores</strong>. Un potenciómetro es una resistencia variable.</p>
                <p><strong>Capacitor (o Condensador):</strong> Almacena energía en un campo eléctrico. <strong>Bloquea la corriente continua</strong> pero deja pasar la corriente alterna. Su capacidad se mide en Faradios (F).</p>
                <p><strong>Bobina (o Inductor):</strong> Almacena energía en un campo magnético. Se opone a los cambios de corriente. Su inductancia se mide en Henrios (H).</p>
                <p><strong>Circuito Resonante (LC):</strong> Una combinación de una bobina (L) y un capacitor (C) que resuena (ofrece mínima o máxima oposición) a una frecuencia específica. Es la base de los circuitos sintonizados.</p>
                <p><strong>Diodo:</strong> Permite que la corriente fluya en un solo sentido. Son fundamentales en las <strong>fuentes de alimentación</strong> para rectificar la CA y convertirla en CC.</p>
                <p><strong>Transistor:</strong> Componente semiconductor que actúa como <strong>amplificador o interruptor</strong>. Es la base de casi toda la electrónica moderna. Sus clases de operación (A, B, C) definen su eficiencia y linealidad.</p>
            `
        },
        {
            title: "Antenas y Líneas de Transmisión",
            content: `
                <p><strong>Función de la Antena:</strong> Es un transductor que convierte la energía de radiofrecuencia en ondas electromagnéticas (al transmitir) y viceversa (al recibir).</p>
                <p><strong>Impedancia:</strong> La mayoría de los equipos de radioaficionado y cables coaxiales (como el RG-58 o RG-213) están diseñados para una impedancia característica de <strong>50 ohms</strong>. La correcta adaptación de impedancias es crucial para la máxima transferencia de potencia.</p>
                <p><strong>ROE (Relación de Ondas Estacionarias):</strong> Mide el desajuste de impedancia entre la línea y la antena. Un valor ideal es 1:1. Una ROE alta significa que parte de la potencia es reflejada de vuelta al transmisor, lo cual es ineficiente y puede ser perjudicial.</p>
                <p><strong>Tipos de Antena:</strong></p>
                <ul>
                    <li class="ml-4 list-disc"><strong>Dipolo de media onda:</strong> Antena básica, bidireccional. Su longitud física es aproximadamente un 5% menor que su longitud eléctrica debido al "efecto de puntas".</li>
                    <li class="ml-4 list-disc"><strong>Vertical:</strong> Omnidireccional en el plano horizontal. Requiere un buen plano de tierra (físico o con radiales) para ser eficiente.</li>
                    <li class="ml-4 list-disc"><strong>Yagi:</strong> Antena direccional con alta ganancia. Compuesta por un elemento excitado, un reflector (más largo) y uno o más directores (más cortos).</li>
                </ul>
                <p><strong>Líneas de Transmisión:</strong> El <strong>cable coaxial</strong> es una línea desbalanceada y blindada, ideal para evitar interferencias. La <strong>línea abierta</strong> (o bifilar) es balanceada y tiene menores pérdidas, pero es más susceptible a la interferencia.</p>
                <p><strong>Balun:</strong> Es un transformador que adapta una línea balanceada (como un dipolo) a una desbalanceada (como un cable coaxial).</p>
            `
        },
        {
            title: "Propagación y Modos Digitales",
            content: `
                <p><strong>Propagación Ionosférica (HF):</strong> Las ondas de radio en HF (3-30 MHz) se reflejan en las capas ionizadas de la atmósfera (capas E y F), permitiendo comunicados a larga distancia. Este fenómeno depende fuertemente del <strong>ciclo solar de 11 años</strong>.</p>
                <p><strong>MUF y LUF:</strong> La <strong>Frecuencia Máxima Utilizable (MUF)</strong> es la frecuencia más alta que se reflejará para una distancia dada. La <strong>Frecuencia Mínima Utilizable (LUF)</strong> es la más baja que no será absorbida por la capa D. La frecuencia óptima de trabajo (FOT) está ligeramente por debajo de la MUF.</p>
                <p><strong>Propagación en VHF/UHF:</strong> Normalmente es por <strong>línea de vista</strong>. Fenómenos como la "Esporádica-E" o la dispersión troposférica pueden permitir comunicados a larga distancia de forma ocasional.</p>
                <p><strong>Modos Digitales:</strong></p>
                <ul>
                    <li class="ml-4 list-disc"><strong>PSK31:</strong> Modo de teclado a teclado muy eficiente, con un ancho de banda muy estrecho, ideal para baja potencia y condiciones de mala propagación.</li>
                    <li class="ml-4 list-disc"><strong>RTTY (Radioteletipo):</strong> Uno de los modos digitales más antiguos, utiliza desplazamiento de frecuencia (FSK).</li>
                    <li class="ml-4 list-disc"><strong>SSTV (Televisión de Barrido Lento):</strong> Permite enviar y recibir imágenes fijas.</li>
                    <li class="ml-4 list-disc"><strong>Packet Radio:</strong> Permite la transmisión de "paquetes" de datos con corrección de errores, usado para BBS y APRS.</li>
                </ul>
            `
        }
    ];

    // --- LÓGICA DE LA APLICACIÓN ---
    const examContentArea = document.getElementById('exam-content-area');
    const studyModalBanco = document.getElementById('study-modal-banco');
    const studyModalGuia = document.getElementById('study-modal-guia');
    const bancoContentArea = document.getElementById('banco-content-area');
    const guiaContentArea = document.getElementById('guia-content-area');
    const quizModal = document.getElementById('quiz-modal');
    const quizTitle = document.getElementById('quiz-title');
    const quizContent = document.getElementById('quiz-content');
    const closeQuizBtn = document.getElementById('close-quiz');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const EXAM_QUESTIONS_COUNT = 15;

    function renderExamCategories(section) {
        const data = db[section];
        examContentArea.innerHTML = ''; // Clear previous content
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

        data.forEach((cat, index) => {
            const card = document.createElement('div');
            card.className = 'card bg-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-sky-50';
            card.innerHTML = `
                <div>
                    <h3 class="text-xl font-bold text-slate-800 mb-2">${cat.category}</h3>
                    <p class="text-slate-500">${cat.questions.length} preguntas en el banco</p>
                </div>
                <div class="mt-4">
                     <button class="w-full px-4 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75">
                        Iniciar Examen
                    </button>
                </div>
            `;
            card.addEventListener('click', () => startQuiz(section, index));
            grid.appendChild(card);
        });
        examContentArea.appendChild(grid);
    }

    function renderBancoDePreguntas() {
        bancoContentArea.innerHTML = ''; // Clear previous content
        const allCategories = [...db.reglamento, ...db.tecnica, ...db.planes_banda];
        const container = document.createElement('div');
        container.className = 'space-y-4';

        allCategories.forEach(cat => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'bg-white rounded-xl shadow-md overflow-hidden';
            accordionItem.innerHTML = `
                <div class="accordion-header p-6 flex justify-between items-center">
                    <div>
                        <h3 class="text-xl font-bold text-slate-800">${cat.category}</h3>
                        <p class="text-sm text-slate-500">${cat.questions.length} preguntas</p>
                    </div>
                    <svg class="accordion-icon h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
                <div class="accordion-content px-6">
                    <div class="border-t border-slate-200"></div>
                    ${cat.questions.map((q, i) => {
                        const correctAnswersText = q.a.map(ansIndex => `<p class="text-slate-800">${q.o[ansIndex]}</p>`).join('');
                        return `
                            <div class="py-4 border-b border-slate-100 last:border-b-0">
                                <p class="font-semibold text-slate-900 mb-2">${q.q}</p>
                                <div class="mt-2 pl-4 border-l-4 border-sky-500 bg-sky-50 p-3 rounded-r-lg">
                                    <p class="font-bold text-sky-700 text-sm mb-1">Respuesta Correcta:</p>
                                    <div class="space-y-1">${correctAnswersText}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            container.appendChild(accordionItem);
        });
        bancoContentArea.appendChild(container);
        
        container.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const wasOpen = content.classList.contains('open');
                container.querySelectorAll('.accordion-content.open').forEach(openContent => {
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.classList.remove('open');
                });
                if (!wasOpen) {
                    header.classList.add('open');
                    content.classList.add('open');
                }
            });
        });
    }

    function renderGuiaDeEstudio() {
        guiaContentArea.innerHTML = '';
        const container = document.createElement('div');
        container.className = 'space-y-4';
        studyGuideContent.forEach(topic => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'bg-white rounded-xl shadow-md overflow-hidden';
            accordionItem.innerHTML = `
                <div class="accordion-header p-6 flex justify-between items-center">
                     <h3 class="text-xl font-bold text-slate-800">${topic.title}</h3>
                     <svg class="accordion-icon h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </div>
                <div class="accordion-content">
                    <div class="prose max-w-none p-6 pt-0">${topic.content}</div>
                </div>
            `;
            container.appendChild(accordionItem);
        });
         guiaContentArea.appendChild(container);

         container.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const wasOpen = content.classList.contains('open');
                container.querySelectorAll('.accordion-content.open').forEach(openContent => {
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.classList.remove('open');
                });
                if (!wasOpen) {
                    header.classList.add('open');
                    content.classList.add('open');
                }
            });
        });
    }

    function startQuiz(section, categoryIndex) {
        const category = db[section][categoryIndex];
        const shuffled = [...category.questions].sort(() => 0.5 - Math.random());
        const examSize = Math.min(shuffled.length, EXAM_QUESTIONS_COUNT);
        currentQuestions = shuffled.slice(0, examSize).map(q => ({...q, answered: false, userSelection: [] }));
        currentQuestionIndex = 0;
        score = 0;
        quizTitle.textContent = `${category.category} (Examen)`;
        quizModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        displayQuestion();
    }

    function displayQuestion() {
        updateProgress();
        if (currentQuestionIndex >= currentQuestions.length) {
            showFinalScore();
            return;
        }
        const questionData = currentQuestions[currentQuestionIndex];
        const isMultiAnswer = questionData.a.length > 1;

        quizContent.innerHTML = `
            <div class="mb-6">
                <p class="text-xl font-semibold text-slate-900">${questionData.q}</p>
                <p class="text-sm text-slate-500 mt-2">${isMultiAnswer ? 'Selecciona todas las que correspondan y confirma.' : 'Selecciona una respuesta y confirma.'}</p>
            </div>
            <div id="options-container" class="grid grid-cols-1 gap-4">
                ${questionData.o.map((option, index) => `<button class="btn-option w-full text-left p-4 rounded-lg border-2 border-slate-300 bg-slate-100" data-index="${index}"><span class="font-bold mr-2">${String.fromCharCode(65 + index)}.</span> ${option}</button>`).join('')}
            </div>
            <div id="feedback-container" class="mt-6 text-center">
                <button id="confirm-answer" class="mt-4 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700">Confirmar Respuesta</button>
            </div>
        `;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.btn-option');
            if (button) {
                const index = parseInt(button.dataset.index);
                if (isMultiAnswer) {
                    button.classList.toggle('selected');
                    if (questionData.userSelection.includes(index)) {
                        questionData.userSelection = questionData.userSelection.filter(i => i !== index);
                    } else {
                        questionData.userSelection.push(index);
                    }
                } else {
                    optionsContainer.querySelectorAll('.btn-option').forEach(btn => btn.classList.remove('selected'));
                    button.classList.add('selected');
                    questionData.userSelection = [index];
                }
            }
        });

        document.getElementById('confirm-answer').addEventListener('click', () => checkAnswer());
    }
    
    function checkAnswer() {
        const questionData = currentQuestions[currentQuestionIndex];
        if (questionData.answered) return;
        
        if (questionData.userSelection.length === 0) {
            const feedbackContainer = document.getElementById('feedback-container');
            const originalButtonHTML = feedbackContainer.innerHTML;
            feedbackContainer.innerHTML = '<p class="text-red-500 font-semibold">Por favor, selecciona al menos una respuesta.</p>';
            setTimeout(() => {
                const confirmButton = document.getElementById('confirm-answer');
                if(confirmButton) {
                   feedbackContainer.innerHTML = originalButtonHTML;
                }
            }, 2000);
            return;
        }

        questionData.answered = true;
        
        const optionButtons = quizContent.querySelectorAll('.btn-option');
        const userAnswers = questionData.userSelection.sort();
        const correctAnswers = questionData.a.sort();

        const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
        if (isCorrect) score++;
        
        optionButtons.forEach((button, index) => {
            button.disabled = true;
            if (correctAnswers.includes(index)) {
                button.classList.add('correct');
            } else if (userAnswers.includes(index)) {
                button.classList.add('incorrect');
            }
        });
        
        document.getElementById('feedback-container').innerHTML = `<button id="next-question" class="mt-4 px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700">${currentQuestionIndex === currentQuestions.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}</button>`;
        document.getElementById('next-question').focus();
        document.getElementById('next-question').addEventListener('click', () => {
            currentQuestionIndex++;
            displayQuestion();
        });
    }

    function showFinalScore() {
        quizContent.innerHTML = `
            <div class="text-center py-10">
                <h3 class="text-3xl font-bold text-slate-900 mb-4">¡Examen Completado!</h3>
                <p class="text-xl text-slate-600 mb-6">Tu puntaje final es:</p>
                <div class="text-6xl font-bold text-sky-600 mb-8">${score} / ${currentQuestions.length}</div>
                <p class="text-lg text-slate-600 mb-8">(${((score/currentQuestions.length)*100).toFixed(0)}%)</p>
                <button id="close-and-finish" class="px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700">Finalizar</button>
            </div>
        `;
         document.getElementById('close-and-finish').addEventListener('click', closeQuiz);
        updateProgress();
    }

    function updateProgress() {
        const totalCount = currentQuestions.length;
        if (totalCount === 0) return;
        const answeredCount = currentQuestionIndex;
        const percentage = (answeredCount / totalCount) * 100;
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `Pregunta ${Math.min(answeredCount + 1, totalCount)} de ${totalCount}`;
        if(answeredCount === totalCount) {
            progressBar.style.width = `100%`;
            progressText.textContent = `Completado: ${score} de ${totalCount} correctas`;
        }
    }

    function closeQuiz() {
        quizModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeQuizBtn.addEventListener('click', closeQuiz);

    // --- Event Listeners para Modales y Tabs ---
    document.getElementById('btn-show-banco').addEventListener('click', () => {
        renderBancoDePreguntas();
        studyModalBanco.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('btn-show-guia').addEventListener('click', () => {
        renderGuiaDeEstudio();
        studyModalGuia.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    document.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('border-sky-500', 'text-sky-600');
                t.classList.add('border-transparent', 'text-slate-500');
            });
            tab.classList.add('border-sky-500', 'text-sky-600');
            tab.classList.remove('border-transparent', 'text-slate-500');
            renderExamCategories(tab.dataset.section);
        });
    });

    // Carga inicial
    renderExamCategories('reglamento');
});
    </script>
</body>
</html>
