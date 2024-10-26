import { ArticleTitle } from '@/components/article'

export default function FaqsPage() {
  return (
    <div
      style={{ backgroundColor: 'white', margin: 'auto' }}
      className="w-full p-5 md:w-10/12 md:p-20"
    >
      <ArticleTitle>Tus preguntas respondidas</ArticleTitle>

      <details
        className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
        open
      >
        <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
          ¿Qué es Findee?
        </summary>
        <p>
          Findee es una aplicación de acompañamiento personalizada para viajes, diseñada para
          ayudarte a descubrir nuevos lugares basados en tus preferencias, estado de ánimo,
          ubicación e intereses. Ofrece recomendaciones únicas para comer, actividades y
          atracciones, todas personalizadas específicamente para ti.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">¿Cómo funciona Findee?</summary>
        <p>
          Findee utiliza un motor de recomendaciones inteligente que analiza tus preferencias,
          ubicación e interacciones pasadas para sugerir joyas escondidas y favoritos locales. Ya
          sea que busques comida saludable, una actividad divertida o el lugar perfecto para una
          cita, Findee encuentra la mejor opción para ti.
          <br />
          <br />
          Findee toma en cuenta factores como tu estado de ánimo, preferencias, ubicación actual e
          incluso el tipo de experiencia que buscas (por ejemplo, relajante, aventurera, social).
          Cuanto más uses Findee, más inteligentes y personalizadas se vuelven sus sugerencias.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">¿Qué significa estar en beta?</summary>
        <p>
          La prueba beta significa que la aplicación aún está en desarrollo y puede contener algunos
          errores o características incompletas. Tus comentarios durante esta fase nos ayudarán a
          mejorar la aplicación antes de su lanzamiento completo. Al unirte a la beta, obtendrás
          acceso anticipado a las funciones de Findee y una oportunidad para moldear el futuro de la
          aplicación.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          ¿Qué hace a Findee diferente de otras aplicaciones de viaje?
        </summary>
        <p>
          A diferencia de otras aplicaciones que muestran los mismos lugares de moda, Findee se
          enfoca en descubrir lugares únicos y menos conocidos adaptados a tus gustos específicos,
          ubicación y estado de ánimo. No se trata de lo que es popular, sino de lo que es adecuado
          para ti.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">
          ¿Puedo compartir los lugares que encuentro en Findee con mis amigos?
        </summary>
        <p>
          ¡Sí! Puedes compartir fácilmente tus lugares y recomendaciones favoritos con amigos
          directamente desde la aplicación.
        </p>
      </details>

      <details className="mt-4 block rounded-sm border border-gray-200 px-1 hover:border-primary-300 md:px-4 md:py-2">
        <summary className="-mx-4 cursor-pointer px-4 py-3">¿Findee es gratis?</summary>
        <p>
          Sí, Findee es gratis para descargar y usar. Puedes explorar todas sus funciones,
          incluyendo recomendaciones personalizadas, creación de listas de deseos y organización de
          tus propias colecciones de lugares que quieres visitar.
        </p>
      </details>
    </div>
  )
}
