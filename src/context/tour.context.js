import { createContext, useContext, useEffect, useState } from 'react';
import { useRef } from 'react';

export const TourContext = createContext();

const TourProvider = ({ children }) => {
  const [tourIsActive, setTourIsActive] = useState(false);
  const [isHeaderShow, setIsHeaderShow] = useState(true);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);

  const steps = [
    {
      title: 'Información de la landing',
      description: (
        <p>
          Unifiqué en esta landing la información dada en filadd.com y
          filadd.com/academia. Ambas son páginas que explican cosas esenciales
          del servicio y el usuario debería poder acceder a ellas desde un
          principio. Si el seccionamiento fue necesario por una cuestión
          técnica, se puede encarar el diseño de la página Academia desde un
          punto de vista más técnico y no tan comunicacional.
        </p>
      ),
      target: () => ref0.current,
    },
    {
      title: 'Selección del país',
      description: (
        <p>
          La seleción del país debería hacerse una sola vez y de forma general,
          no dentro de las secciones de la página.
        </p>
      ),
      target: () => ref1.current,
    },
    {
      title: 'Header',
      description: (
        <p>
          El Header debe poseer un link a las distintas páginas y hasta dos CTA
          que se consideren los más importantes (en este caso "Registrarme" e
          "Ingresar"). Van a notar que cuando están arriba del todo, estos dos
          CTA se reemplazan por un link a "Filad Profesional", esto es así
          porque en el Hero se repiten esos CTA y de otra manera seríamos muy
          redundantes.
          <br />
          Los links siempre deben ser visibles a menos que no quepan en el
          viewport y sólo en ese caso se deben resumir en un sidebar. Sería muy
          importante tratar de unificar el diseño de todas estas páginas
          (Nosotros, Preguntas Frecuentes, etc.) con en diseño y estructura del
          Inicio (por lo menos mismo Header y mismo Footer), y que no se linkee
          a aplicaciones de terceros como Notion. Esto va a permitir dar la
          impresión de un producto más homogéneo y sólido, lo que se traduce en
          mayor confianza para crearse una cuenta y pagar por el servicio.{' '}
          <br />
          Las páginas que tengan mucho copywrite y requieran actualizarse
          continuamente (como Preguntas Frecuentes) se pueden desarrollar con la
          misma tecnología que el Inicio y que los copywriters manejen su
          contenido mediante un CMS.
        </p>
      ),
      target: () => ref2.current,
    },
    {
      title: 'Hero',
      description: (
        <p>
          Existen varias razones por las que no aplicaría en el Hero (ni en las
          páginas en general) los mismos diseños con personajes propios de las
          publicidades de Filadd. La más importante es la necesidad de una
          vigencia más alta que la vigencia de las publicidades. Respecto a la
          altura del Hero me parece excelente la idea actual de que comprenda
          una altura reducida del viewport para dar de entrada una utilidad
          (sección siguiente de búsqueda).
        </p>
      ),
      target: () => ref3.current,
    },
    {
      title: 'Contador de pasos',
      description: (
        <p>
          Tener un contador de pasos da más dinamismo y claridad a la búsqueda.
          Siendo esta la sección estrella (pues ya le está dando una
          funcionalidad a los nuevos usuarios), hay que darle un poco de mimo.
        </p>
      ),
      target: () => ref4.current,
    },
    {
      title: 'Búsqueda',
      description: (
        <p>
          Lo más intuitivo es dar un ejemplo de búsqueda de forma directa en el
          placeholder. Me parece lo mejor que el ejemplo sea una universidad del
          interior, para dejar en claro lo profundo que es el rango de búsqueda.
        </p>
      ),
      target: () => ref5.current,
    },
    {
      title: 'Lista de opciones',
      description: (
        <p>
          Si la información de una lista no comprende imágenes o más información
          además del título, no se justifica la utilización de tarjetas (items
          en línea son más que suficientes). No utilizaría un orden alfabético
          sino ponderado en la lista de universidades (las más importantes o más
          buscadas irían primero). También se puede tener en cuenta la ubicación
          del usuario (posterior a solicitar permiso) para esta ponderación. Es
          importante también reducir la cantidad de items que pueden verse de
          primera mano, aplicando el botón de “Ver todo”.
        </p>
      ),
      target: () => ref6.current,
    },
    {
      title: 'Estadísticas',
      description: (
        <p>
          A esta información la traje desde la página actual "Sobre nosotros".
          Me pareció importante que esté aquí como parte de la narrativa de la
          landing.
        </p>
      ),
      target: () => ref7.current,
    },
    {
      title: 'Sección',
      description: (
        <p>
          Para generar esta sección reuní la información de varias páginas que
          existen ahora. Es muy importante que quede en claro de la forma más
          íntegra posible cómo funciona la aplicación.
        </p>
      ),
      target: () => ref8.current,
    },
    {
      title: 'Fotos',
      description: (
        <p>
          No soy fan de las fotografías de stock, pero es importante tener fotos
          en la landing y esta es la sección ideal para ello. Se puede hacer una
          producción propia o comprar una serie de fotografías coherentes entre
          sí que parezcan más naturales.
        </p>
      ),
      target: () => ref9.current,
    },
    {
      title: 'Asterisco',
      description: (
        <p>
          Acá la flashié un poco, pero me parece importante dejar en claro que
          hacerse Premium no involucra tener acceso directo a todos los cursos
          sino que hay que pagar por cada uno de ellos. Esta es una manera de
          decirlo sin decirlo, pero se puede optar por otras formas.
        </p>
      ),
      target: () => ref10.current,
    },
    {
      title: 'Testimonios',
      description: (
        <p>
          Es muy importante que esta sección aparezca directamente luego de la
          sección sobre "Cómo funciona Filadd" para darle legitimidad. Hice un
          rejunte de los testimonios que ahora tienen en las distintas páginas y
          los completé un poco artificalmente. Sería necesario buscar más
          testimonios y que todos tengan la info completa sobre la universidad y
          carrera de la persona. Deben ser testimonios reales y linkearse a los
          perfiles.
        </p>
      ),
      target: () => ref11.current,
    },
    {
      title: 'Conversión',
      description: (
        <p>
          Toda la página debe estar estructurada con el fin de llegar a esta
          sección de conversión. Está comprobado de que la mayoría de las
          conversiones se hacen directamente luego de haber leído testimonios,
          así que este es el lugar donde debe aparecer. Como verán no incluí la
          sección "Cursos de la Academia" en esta landing ya que cortaba con la
          narrativa persuasiva de la misma. Además, ya tenemos la sección
          siguiente de "Filadd Profesional" como un extra, y siendo esta sección
          de conversión "el fin de la landing" teóricamente debería ser la
          última antes de que aparezca el Footer. Tener tantos extras al final
          le quita un poco de fuerza a esta sección. De todas maneras, se
          podrían realizar tests A-B para probar cómo funcionaría con la sección
          de los cursos, o incluso sin la sección de "Filadd Profesional".
        </p>
      ),
      target: () => ref12.current,
    },
    {
      title: 'Footer',
      description: (
        <p>
          Al igual que el Header, el Footer también debe proporcionar un link a
          las distintas páginas para poder seguir navegando desde aquí sin tener
          que volver hacia arriba.
        </p>
      ),
      target: () => ref13.current,
    },
    {
      title: '¡Nos vemos!',
      description: (
        <p>
          Y hasta aquí por ahora. Como les dije, tengo un puñado más de cosas
          que me gustaría compartirles. ¡Espero verlos pronto!
        </p>
      ),
      target: () => ref14.current,
    },
  ];
  steps.forEach((step, index) => {
    step.nextButtonProps = {
      children: index !== steps.length - 1 ? 'Siguiente' : 'Finalizar',
    };
    step.prevButtonProps = {
      children: 'Atrás',
    };
  });

  const startTour = () => {
    setIsHeaderShow(true);
    setTimeout(() => {
      setTourIsActive(true);
    }, 200);
  };

  useEffect(() => {
    if (tourIsActive) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [tourIsActive])

  //// COMPONENT
  return (
    <TourContext.Provider
      value={{
        tourIsActive,
        setTourIsActive,
        isHeaderShow,
        setIsHeaderShow,
        steps,
        startTour,
        ref0,
        ref1,
        ref2,
        ref3,
        ref4,
        ref5,
        ref6,
        ref7,
        ref8,
        ref9,
        ref10,
        ref11,
        ref12,
        ref13,
        ref14,
        ref15,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTourContext = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('TourContext must be used within a TourProvider');
  }
  return context;
};

export default TourProvider;
