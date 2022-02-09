# Contribuyendo a caja de ritmos

¡En primer lugar, gracias por tomarse el tiempo para contribuir! ❤️

Todo tipo de contribución es valorada. Mira la [Tabla de Contenidos](#tabla-de-contenidos) para conocer las diferentes formas de ayudar y los detalles sobre cómo los maneja este proyecto. Por favor, asegúrese de leer la sección correspondiente antes de hacer su contribución. Hará que sea mucho más fácil para nosotros los mantenedores y suavizará la experiencia para todos los involucrados. La comunidad espera sus contribuciones. 🎉

> Y si te gusta el proyecto, pero no tienes tiempo para contribuir, está bien. Hay otras formas sencillas de apoyar el proyecto y mostrar su agradecimiento, que también nos encantaría:
> - Dale una estrella al proyecto
> - Tweetea sobre el proyecto
> - Refiere este proyecto en el readme de tus proyectos
> - Menciona el proyecto en reuniones locales y cuéntaselo a tus amigos/colegas

## Tabla de contenidos

- [Código de conducta](#código-de-conducta)
- [Tengo una pregunta](#tengo-una-pregunta)
- [Quiero contribuir](#quiero-contribuir)
  - [Reportando errores](#reportando-errores)
  - [Sugerencia de mejoras](#sugerencia-de-mejoras)
  - [Tu primera contribución de código](#tu-primera-contribución-de-codigo)
  - [Mejorando la documentación](#mejorando-la-documentación)
- [Guías de estilo](#guías-de-estilo)
  - [Mensajes-commit](#mensajes-commit)
- [Únete al equipo](#únete-al-equipo)

## Código de conducta

Este proyecto y todos los que participan en él se rigen por el
[Código de conducta](caja-de-ritmos/master/CODE_OF_CONDUCT.md).
Al participar, se espera que respete este código de conducta. Por favor reporte un comportamiento inaceptable<>.

## Tengo una pregunta

> Si desea hacer una pregunta, asumimos que ha leído los disponibles [Documentación]().

Antes de hacer una pregunta, lo mejor es buscar [Issues](caja-de-ritmos/issues) un issue existente que te pueda ayudar. En caso de que haya encontrado un problema adecuado y aún necesite una aclaración, puede escribir su pregunta en este problema. También es recomendable buscar primero en Internet las respuestas.

Si aún siente la necesidad de hacer una pregunta y necesita una aclaración, le recomendamos lo siguiente:

- Abre un [Issue](caja-de-ritmos/issues/new).
- Proporcione todo el contexto que puedas sobre lo que está encontrando.
- Proporcione versiones de proyectos y plataformas (nodejs, npm, etc.), según lo que parezca relevante.

Nos ocuparemos del problema lo antes posible.

Según el tamaño del proyecto, es posible que desee subcontratar el cuestionamiento, p. a Stack Overflow o Gitter. Puedes agregar posibilidades adicionales de contacto e información:

- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum

## Quiero contribuir

### Reportando errores

#### Antes de enviar un informe de errores

Un buen informe de errores no debería dejar a otros con la necesidad de perseguirlo para obtener más información. Por lo tanto, le pedimos que investigue cuidadosamente, recopile información y describa el problema en detalle en su informe. Complete los siguientes pasos con anticipación para ayudarnos a corregir cualquier posible error lo más rápido posible.

- Asegúrese de que está utilizando la última versión.
- Determine si su error es realmente un error y no un error de su parte, p. utilizando componentes/versiones de entorno incompatibles (Asegúrese de haber leído la [documentación](). Si está buscando soporte, es posible que desee consultar [esta sección](#tengo-una-pregunta)).
- Para ver si otros usuarios han experimentado (y potencialmente ya han resuelto) el mismo problema que usted tiene, verifique si aún no existe un informe de error para su error o error en el [buscador de errores](cajaderitmosissues?q=label%3Abug).
- También asegúrese de buscar en Internet (incluido Stack Overflow) para ver si los usuarios fuera de la comunidad de GitHub han discutido el problema.
- Recopile información sobre el error:
  - Rastreo de pila (Traceback)
  - SO, plataforma y versión (Windows, Linux, macOS, x86, ARM)
  - Versión del intérprete, compilador, SDK, entorno de ejecución, administrador de paquetes, según lo que parezca relevante.
  - Posiblemente su entrada y la salida
  - ¿Puedes reproducir el problema de forma fiable? ¿Y también se puede reproducir con versiones anteriores?

#### ¿Cómo envío un buen informe de errores?

> Nunca debe informar problemas relacionados con la seguridad, vulnerabilidades o errores, incluida información confidencial, al rastreador de problemas o en cualquier otro lugar en público. En su lugar, los errores sensibles deben enviarse por correo electrónico <>.

Usamos issues de GitHub para rastrear errores y fallas. Si te encuentras con un problema en el proyecto:

- Abre un [Issue](caja-de-ritmos/issues/new). (Dado que en este momento no podemos estar seguros de si se trata de un error o no, le pedimos que no hable sobre un error todavía y que no etiquete el problema..)
- Explica el comportamiento que esperaría y el comportamiento real.
- Proporciona todo el contexto posible y describa los *pasos de reproducción* que otra persona puede seguir para recrear el problema por su cuenta. Esto generalmente incluye su código. Para obtener buenos informes de errores, debe aislar el problema y crear un caso de prueba reducido.
- Proporcione la información que recopiló en la sección anterior.

Una vez que esté lleno:

- El equipo del proyecto etiquetará el problema respectivamente.
- Un miembro del equipo intentará reproducir el problema con los pasos proporcionados. Si no hay pasos de reproducción o una forma obvia de reproducir el problema, el equipo le pedirá esos pasos y marcará el problema como "necesita reproducción". Los errores con la etiqueta `needs-repro` no se abordarán hasta que se reproduzcan.
- Si el equipo puede reproducir el problema, se marcará como `necesita una solución`, así como posiblemente con otras etiquetas (como `crítico`), y se dejará que el problema se resuelva. [implementado por alguien](#tu-primera-contribución-de-código).

### Sugerencia de mejoras

Esta sección lo guía a través del envío de una sugerencia de mejora para ergre, **incluidas funciones completamente nuevas y mejoras menores a la funcionalidad existente**. Seguir estas pautas ayudará a los mantenedores y a la comunidad a comprender su sugerencia y encontrar sugerencias relacionadas.

#### Antes de enviar una mejora

- Asegúrese de que está utilizando la última versión.
- Lea la [documentación]() atentamente y averigüe si la funcionalidad ya está cubierta, tal vez por una configuración individual.
- Realiza una [búsqueda](ergre/issues) para ver si ya se ha sugerido la mejora. Si es así, agregue un comentario al problema existente en lugar de abrir uno nuevo.
- Averigüe si su idea encaja con el alcance y los objetivos del proyecto. Depende de usted presentar un caso sólido para convencer a los desarrolladores del proyecto de los méritos de esta característica. Tenga en cuenta que queremos funciones que sean útiles para la mayoría de nuestros usuarios y no solo para un pequeño subconjunto. Si solo se dirige a una minoría de usuarios, considere escribir una biblioteca de complementos/complementos.

#### ¿Cómo envío una buena sugerencia de mejora?

Las sugerencias de mejora se rastrean como [GitHub issues](ergre/issues).

- Utilice un **título claro y descriptivo** para identificar la sugerencia.
- Proporcione una **descripción paso a paso de la mejora sugerida** con tantos detalles como sea posible.
- **Describa el comportamiento actual** y **explique qué comportamiento esperaba ver en su lugar** y por qué. En este punto también puede saber qué alternativas no funcionan para usted.
- Es posible que desee **incluir capturas de pantalla y GIF animados** que lo ayuden a demostrar los pasos o señalar la parte con la que se relaciona la sugerencia. Puede usar [esta herramienta](https://www.cockos.com/licecap/) para grabar GIF en macOS y Windows, y [esta herramienta](https://github.com/colinkeenan/silentcast) o [esta herramienta](https://github.com/GNOME/byzanz) on Linux.
- **Explique por qué esta mejora sería útil** para la mayoría de los usuarios de ergre. También puedes señalar otros proyectos que lo resolvieron mejor y que podrían servirte de inspiración.

### Tu primera contribución de código
<!-- TODO
incluye la configuración del entorno, IDE y las típicas instrucciones para empezar
-->

### Mejorando la documentación
<!-- 
Actualizando, mejorando y corrigiendo la documentación
-->

## Guías de estilo
### Mensajes commit
<!-- 
Actualizando, mejorando y corrigiendo la documentación
-->

## Join The Project Team
- Hernando Abella

## Atribución
Hecho con ❤️ por [Hernando Abella](https://github.com/hernandoabella) 😊
