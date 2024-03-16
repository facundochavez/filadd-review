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
          He consolidado en esta landing la información que se encuentra
          actualmente dispersa entre filadd.com y filadd.com/academia. Ambas
          páginas explican aspectos fundamentales del servicio, y es crucial que
          los usuarios puedan acceder a esta información desde el Inicio. La
          landing de la Academia debe estar destinada a proporcionar detalles
          más exclusivos y detallados sobre los cursos.
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
          que se consideren los más importantes (en este caso
          &quot;Registrarme&quot; e &quot;Ingresar&quot;). Van a notar que
          cuando están arriba del todo, estos dos CTA se reemplazan por un link
          a &quot;Filad Profesional&quot;, esto es así porque en el Hero se
          repiten esos CTA y de otra manera seríamos muy redundantes.
          <br />
          Los links siempre deben ser visibles a menos que no quepan en el
          viewport y entonces deben ser mudados a un sidebar. Sería muy
          importante tratar de unificar el diseño de todas estas páginas
          (Academia, Nosotros, Preguntas Frecuentes, incluso Políticas de
          Privacidad y Aviso de privacidad) con en diseño y estructura del
          Inicio (al menos mismo Header y mismo Footer), y que no se linkee a
          aplicaciones de terceros como Notion. Esto va a permitir presentar al
          servicio como algo más homogéneo y sólido, lo que se traduce en mayor
          confianza para crearse una cuenta y pagar por el servicio. <br />
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
          vigencia más alta que la vigencia de las publicidades. Respecto al
          Hero me parece excelente la idea actual de que comprenda una altura
          reducida del viewport para dar de entrada una utilidad (sección
          siguiente de búsqueda).
        </p>
      ),
      target: () => ref3.current,
    },
    {
      title: 'Contador de pasos',
      description: (
        <p>
          Tener un contador de pasos da más dinamismo y claridad a la búsqueda.
          Siendo esta la &quot;sección estrella&quot; (pues ya le está dando una
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
          interior, para dejar claro lo profunda que puede ser la búsqueda.
        </p>
      ),
      target: () => ref5.current,
    },
    {
      title: 'Lista de opciones',
      description: (
        <p>
          Si la información de una lista no comprende imágenes o información más
          allá de un título y una descripción, no se justifica la utilización de
          tarjetas y los items en línea son más que suficientes. No utilizaría
          un orden alfabético sino ponderado en la lista de universidades (las
          más importantes o más buscadas irían primero). También se puede tener
          en cuenta la ubicación del usuario (posterior a solicitar permiso)
          para esta ponderación.
          <br />
          Es importante también reducir la cantidad de items que pueden verse de
          primera mano, aplicando el botón de “Ver todo” para ampliar la lista.
        </p>
      ),
      target: () => ref6.current,
    },
    {
      title: 'Estadísticas',
      description: (
        <p>
          A esta información la traje desde la página actual &quot;Sobre
          nosotros&quot;. Me pareció importante que esté aquí como parte de la
          narrativa.
        </p>
      ),
      target: () => ref7.current,
    },
    {
      title: 'Sección',
      description: (
        <p>
          Para generar esta sección reuní la información de varias páginas
          actuales, incluso algunas a las que no se puede acceder sin haber
          creado una cuenta. Es muy importante que quede claro, de la forma
          más íntegra posible, cómo funciona la aplicación en esta página de
          Inicio.
        </p>
      ),
      target: () => ref8.current,
    },
    {
      title: 'Fotos',
      description: (
        <p>
          No soy fan de las fotografías de stock, pero es importante tener fotos
          en la landing y esta es la sección ideal para eso. Se puede hacer una
          producción propia o comprar una serie de fotografías coherentes entre
          sí que parezcan más naturales.
          <br />
          En la versión móvil las imágenes directamente no aparecen, es una
          práctica común para mejorar el UX.
        </p>
      ),
      target: () => ref9.current,
    },
    {
      title: 'Asterisco',
      description: (
        <p>
          Acá la flashié un poco, pero me parece importante dejar claro que
          ser Premium no involucra tener acceso directo a todos los cursos, sino
          que hay que pagar por cada uno de ellos. Esta es una manera de
          &quot;decirlo sin decirlo&quot;, pero se puede optar por otras formas.
        </p>
      ),
      target: () => ref10.current,
    },
    {
      title: 'Testimonios',
      description: (
        <p>
          Es muy importante que esta sección aparezca directamente luego de la
          sección sobre &quot;Cómo funciona Filadd&quot; para darle legitimidad
          a la misma. Reuní los testimonios que ahora tienen en las distintas
          páginas y los completé un poco artificalmente. Sería necesario buscar
          más testimonios reales, con links a los perfiles, y que todos tengan
          la info completa sobre la universidad y carrera de la persona.
        </p>
      ),
      target: () => ref11.current,
    },
    {
      title: 'Conversión',
      description: (
        <p>
          Toda la estructura de la página está diseñada para dirigir a los
          usuarios hacia esta sección de conversión. La mayoría de las
          conversiones ocurren después de leer testimonios, por lo que este es
          el lugar estratégico.
          <br />
          Teóricamente esta debería ser la última sección antes de que aparezca
          el Footer, así el usuario no se dispersa y no se pierde su conversión.
          Sin embargo, se pueden hacer algunos tests A-B para evaluar cómo
          rinden las secciones &quot;Filadd Profesional&quot; (como bien aparece
          en este caso), &quot;Top cursos de la Academia&quot; e incluso
          &quot;Planes disponibles&quot;. Todas estas son secciones
          &quot;extra&quot; que colocadas antes de la conversión cortan un poco
          con la narrativa persuasiva, por lo que deberían aparecer siempre
          después, justo antes del Footer.
        </p>
      ),
      target: () => ref12.current,
    },
    {
      title: 'Footer',
      description: (
        <p>
          Al igual que el Header, el Footer debe proporcionar un link a las
          distintas páginas para poder seguir navegando desde aquí sin tener que
          volver hacia arriba.
        </p>
      ),
      target: () => ref13.current,
    },
    {
      title: 'Incutex',
      description: (
        <p>
          Yo también pasé por aquí 👋😅
        </p>
      ),
      target: () => ref14.current,
    },
    {
      title: '¡Nos vemos!',
      description: (
        <p>
          Y hasta aquí por ahora. Como les conté, tengo un puñado más de cosas
          que me gustaría compartirles. ¡Espero verlos pronto!
        </p>
      ),
      target: () => ref15.current,
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
  }, [tourIsActive]);

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
