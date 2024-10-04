import { Article } from '@/components/article'
import { useRef, useState } from 'react'
import founderWelcome from '../emails/founderWelcome'
import onboarding1 from '../emails/onboarding1'
import launch_password from '../emails/launch_password'

import axios from 'axios'

export default function SupportPage({ scrollRef }: { scrollRef: any }) {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [instagram, setInstagram] = useState('')
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  const sendEmail = async (subject: string, emailHtml: any, sender: string, emails: string) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/send`,
        {
          from: sender,
          to: emails,
          subject,
          message: emailHtml,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) return
    setLoading(true)
    fetch(
      'https://script.google.com/macros/s/AKfycbwtHPuEx4CFUterXlvVC4xggGjKhA-Pi0u0fc2kk7Jo4osAHV3oxvAta7PlgjPPW9AVZw/exec',
      {
        method: 'POST',
        body: new FormData(formRef.current),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        sendEmail(
          `¡${name.split(' ')[0] || name}, bienvenido a la prueba beta de Findee!`,
          founderWelcome(name.split(' ')[0] || name),
          '"Isa de Findee" <isa@findee.mx>',
        )
        sendEmail(
          `Beta Findee - Aquí están los próximos pasos`,
          onboarding1(name.split(' ')[0] || name),
          '"Erick de Findee" <ti@findee.mx>',
        )
        setInstagram('')
        setName('')
        setEmail('')
        setSuccess(true)
        setLoading(false)
      })
      .catch((err) => {
        setSuccess(false)
        console.log(err)
        setLoading(false)
      })
  }

  const users = [
    {
      firstname: 'Daniel',
      username: 'danielzaragoza',
      email: 'daniel.ddzp@gmail.com',
      password: 'Daniel22355@',
    },
    {
      firstname: 'David abraham',
      username: 'davidabrahamfloresmedina',
      email: 'davidfloresmed@gmail.com',
      password: 'Davida54354@',
    },
    {
      firstname: 'Yahir alejandro',
      username: 'yahiralejandrogaytnsegura',
      email: 'segurayahir250@gmail.com',
      password: 'Yahira22293@',
    },
    {
      firstname: 'Sergio',
      username: 'sergio',
      email: 'sdanielracing@gmail.com',
      password: 'Sergio56243@',
    },
    {
      firstname: 'Eugenio',
      username: 'eugeniosoto',
      email: 'eugenio.soto.89@gmail.com',
      password: 'Eugenio47579@',
    },
    {
      firstname: 'Rafa',
      username: 'rafarivera',
      email: 'gigarafa@yahoo.com',
      password: 'Rafa19687@',
    },
    {
      firstname: 'Stivalis',
      username: 'stivalis',
      email: 'marina_stivalus@hotmail.com',
      password: 'Stivali82943@',
    },
    {
      firstname: 'Alonso',
      username: 'alonsoctrujano',
      email: 'g.alonso.ct@gmail.com',
      password: 'Alonso97523@',
    },
    {
      firstname: 'Francisco',
      username: 'franciscoperez',
      email: 'elzerep69@gmail.com',
      password: 'Francis57158@',
    },
    {
      firstname: 'Omar',
      username: 'omarcesattimondragon',
      email: 'ocesatti@gmail.com',
      password: 'Omar58205@',
    },
    {
      firstname: 'Raquel',
      username: 'raquelmendez',
      email: 'raquelmendezamigos@gmail.com',
      password: 'Raquel78884@',
    },
    {
      firstname: 'José',
      username: 'joseramirezsevilla',
      email: 'jlramirez.psi@gmail.com',
      password: 'Jose34643@',
    },
    {
      firstname: 'Adonai',
      username: 'adonaivelazquez',
      email: 'alda.v.s.91@gmail.com',
      password: 'Adonai10633@',
    },
    {
      firstname: 'Antonio',
      username: 'antonioduartemartinez',
      email: 'juanduarte82@gmail.com',
      password: 'Antonio16557@',
    },
    {
      firstname: 'Armando xavier',
      username: 'armandoxaviergarzaaguilar',
      email: 'armandogarzaaguilar@outlook.es',
      password: 'Armando49204@',
    },
    {
      firstname: 'Gabriel',
      username: 'gabriel',
      email: 'mefistocgkag@gmail.com',
      password: 'Gabriel36188@',
    },
    {
      firstname: 'Mario alberto',
      username: 'marioalbertomunoz',
      email: 'mario.munozf98@gmail.com',
      password: 'Marioa36004@',
    },
    {
      firstname: 'Hery',
      username: 'heryzamora',
      email: 'heryzamora83@gmail.com',
      password: 'Hery16327@',
    },
    {
      firstname: 'Martin de jesus',
      username: 'martindejesusbrianonegrete',
      email: 'martindejesusbriano@gmail.com',
      password: 'Martin68399@',
    },
    {
      firstname: 'Gerardo',
      username: 'gerardodominguezcastro',
      email: 'g.dmgz.c@gmail.com',
      password: 'Gerardo56353@',
    },
    {
      firstname: 'Miguel angel',
      username: 'miguelangelalcala',
      email: 'miguelalcala847@gmail.com',
      password: 'Miguel91388@',
    },
    {
      firstname: 'Noé',
      username: 'noegalvan',
      email: 'noegalvan@gmail.com',
      password: 'Noe90005@',
    },
    {
      firstname: 'Frany',
      username: 'frany',
      email: 'Peguerosfrania55@gmail.com',
      password: 'Frany75039@',
    },
    {
      firstname: 'Lau',
      username: 'lauquintero',
      email: 'lauraquinterom@yahoo.com',
      password: 'Lau20369@',
    },
    {
      firstname: 'Jessica',
      username: 'jessicarayas',
      email: 'jessirayas@hotmail.com',
      password: 'Jessica75064@',
    },
    {
      firstname: 'Patricia',
      username: 'patriciacespedes',
      email: 'apattycm@gmail.com',
      password: 'Patrici85202@',
    },
    {
      firstname: 'Gerardo',
      username: 'gerardogomezsalazar',
      email: 'famgofo@hotmail.com',
      password: 'Gerardo16275@',
    },
    {
      firstname: 'Angelica',
      username: 'angelica',
      email: 'angiek-03@hotmail.com',
      password: 'Angelic95593@',
    },
    {
      firstname: 'Gerardo',
      username: 'gerardodelacruz',
      email: 'delacruzguevarag@gmail.com',
      password: 'Gerardo91159@',
    },
    {
      firstname: 'Omar',
      username: 'omartoral',
      email: 'omarkoovone21@gmail.com',
      password: 'Omar36290@',
    },
    {
      firstname: 'Eva',
      username: 'eva',
      email: 'descimamendez@gmail.com',
      password: 'Eva97032@',
    },
    {
      firstname: 'Rodrigo',
      username: 'rodrigogonzalezel',
      email: 'rg998571@gmail.com',
      password: 'Rodrigo48529@',
    },
    {
      firstname: 'Octavio',
      username: 'octaviolicea',
      email: 'octaviolicea1@gmail.com',
      password: 'Octavio23635@',
    },
    {
      firstname: 'Jaziel',
      username: 'jazielortegon',
      email: 'jaziel.ortegon@gmail.com',
      password: 'Jaziel58438@',
    },
    {
      firstname: 'Javier',
      username: 'javiergutierrez',
      email: 'xavierterete@gmail.com',
      password: 'Javier86558@',
    },
    {
      firstname: 'Roberto',
      username: 'robertoalfaro',
      email: 'en100d@gmail.com',
      password: 'Roberto60785@',
    },
    {
      firstname: 'Carlos eduardo',
      username: 'carloseduardoreyesherrera',
      email: 'charles23kings@gmail.com',
      password: 'Carlos90955@',
    },
    {
      firstname: 'Kehila',
      username: 'kehilalara',
      email: 'kfertonani@icloud.com',
      password: 'Kehila57246@',
    },
    {
      firstname: 'Sergio',
      username: 'sergiobuelnagonzalez',
      email: 'sergiobuelna@hotmail.com',
      password: 'Sergio14876@',
    },
    {
      firstname: 'Javier',
      username: 'javiercaballero',
      email: 'ieratus@gmail.com',
      password: 'Javier96288@',
    },
    {
      firstname: 'Del rosario',
      username: 'delrosario',
      email: 'ferdelrosario.actor@gmail.com',
      password: 'Delros46067@',
    },
    {
      firstname: 'Francisco',
      username: 'franciscomolina',
      email: 'espinosamolinaf@gmail.com',
      password: 'Francis64283@',
    },
    {
      firstname: 'Jin',
      username: 'jinzhu',
      email: 'wongamador@gmail.com',
      password: 'Jin34811@',
    },
    {
      firstname: 'Edson',
      username: 'edsonbanuelos',
      email: 'edu.eb47@gmail.com',
      password: 'Edson54224@',
    },
    {
      firstname: 'Ana lilia',
      username: 'analiliamendoza',
      email: 'ana_menglez@hotmail.com',
      password: 'Analil60364@',
    },
    {
      firstname: 'Christian',
      username: 'christian',
      email: 'cnietom18@gmail.com',
      password: 'Christi60521@',
    },
    {
      firstname: 'Emmanuel',
      username: 'emmanuelcamino',
      email: 'emcamcar@gmail.com',
      password: 'Emmanue61928@',
    },
    {
      firstname: 'Carlos',
      username: 'carlossanchez',
      email: 'ferchar89@gmail.com',
      password: 'Carlos79000@',
    },
    {
      firstname: 'Paul',
      username: 'paul',
      email: 'xhubx0820@gmail.com',
      password: 'Paul74437@',
    },
    {
      firstname: 'Marcos',
      username: 'marcos',
      email: 'marcosc2181@gmail.com',
      password: 'Marcos82924@',
    },
    {
      firstname: 'Moy',
      username: 'moyhim',
      email: 'moises@ventex1.com',
      password: 'Moy37245@',
    },
    {
      firstname: 'Irvin',
      username: 'irvinliciaga',
      email: 'liciaga555@gmail.com',
      password: 'Irvin34337@',
    },
    {
      firstname: 'Osvaldo',
      username: 'osvaldov',
      email: 'osvaldovilchis75@gmail.com',
      password: 'Osvaldo82069@',
    },
    {
      firstname: 'Federico',
      username: 'federicosienra',
      email: 'f_sienra@hotmail.com',
      password: 'Federic58656@',
    },
    {
      firstname: 'Jaramillo',
      username: 'jaramillopedraza',
      email: 'fer1234jp90@gmail.com',
      password: 'Jaramil71269@',
    },
    {
      firstname: 'Osvaldo',
      username: 'osvaldog',
      email: 'pepepicapapas127@gmail.com',
      password: 'Osvaldo13818@',
    },
    {
      firstname: 'Ricardo',
      username: 'ricardo',
      email: 'levedance@hotmail.com',
      password: 'Ricardo85267@',
    },
    {
      firstname: 'Abraham',
      username: 'abraham',
      email: 'alamala.ink00@gmail.com',
      password: 'Abraham32356@',
    },
    {
      firstname: 'Carlo',
      username: 'carloolivares',
      email: 'cav12312@gmail.com',
      password: 'Carlo24605@',
    },
    {
      firstname: 'Iván',
      username: 'ivan',
      email: 'jesusimacias@gmail.com',
      password: 'Ivan41547@',
    },
    {
      firstname: 'Sima',
      username: 'simagandur',
      email: 'sagandur@yahoo.com.mx',
      password: 'Sima92755@',
    },
    {
      firstname: 'Diego',
      username: 'diego',
      email: 'diego.rbls@hotmail.com',
      password: 'Diego76184@',
    },
    {
      firstname: 'Beatriz elizabeth',
      username: 'beatrizelizabethfernandezalonso',
      email: 'beatriz.fdeza@gmail.com',
      password: 'Beatriz52826@',
    },
    {
      firstname: 'Manuel edgardo',
      username: 'manueledgardojimenezleon',
      email: 'edgardo_leon_@hotmail.com',
      password: 'Manuel49683@',
    },
    {
      firstname: 'Miguel',
      username: 'miguel',
      email: 'miguelvillarruel21@gmail.com',
      password: 'Miguel72747@',
    },
    {
      firstname: 'Sara',
      username: 'saracarrillo',
      email: 'saracarrillo38@gmail.com',
      password: 'Sara94602@',
    },
    {
      firstname: 'Alberto',
      username: 'albertoperez',
      email: 'Ap2407@hotmail.com',
      password: 'Alberto53360@',
    },
    {
      firstname: 'Ximena',
      username: 'ximena',
      email: 'xime_rsoto@hotmail.com',
      password: 'Ximena37173@',
    },
    {
      firstname: 'David',
      username: 'david',
      email: 'sdgr_gk@hotmail.com',
      password: 'David31624@',
    },
    {
      firstname: 'Javier',
      username: 'javier',
      email: 'javier.arriola9@gmail.com',
      password: 'Javier83582@',
    },
    {
      firstname: 'Mauricio',
      username: 'mauricio',
      email: 'srvcs.mcm@gmail.com',
      password: 'Maurici78207@',
    },
    {
      firstname: 'Caroline marie yvonne',
      username: 'carolinemarieyvonnereillylesser',
      email: 'krogalac@gmail.com',
      password: 'Carolin28085@',
    },
    {
      firstname: 'Carlos alberto',
      username: 'carlosalbertolopezzamora',
      email: 'lopez.zamora.carlos1709@gmail.com',
      password: 'Carlos86599@',
    },
    {
      firstname: 'Edgar alonso',
      username: 'edgaralonsocastilloguerrero',
      email: 'cooper0690@gmail.com',
      password: 'Edgara13087@',
    },
    {
      firstname: 'Carlos',
      username: 'carlosdiaz',
      email: 'diazrob.carlos@gmail.com',
      password: 'Carlos43512@',
    },
    {
      firstname: 'Ricardo',
      username: 'ricardocontrerasjuarez',
      email: 'ricardocontrerasjuarez35@gmail.com',
      password: 'Ricardo25402@',
    },
    {
      firstname: 'Wilfrido',
      username: 'wilfridooliver',
      email: 'wcienfuegos@yahoo.com',
      password: 'Wilfrid84352@',
    },
    {
      firstname: 'Carlos',
      username: 'carlos',
      email: 'carlosebravomtz@gmail.com',
      password: 'Carlos56890@',
    },
    {
      firstname: 'Gilberto alejandro',
      username: 'gilbertoalejandrocastrogarcia',
      email: 'alejandrocastro1296@gmail.com',
      password: 'Gilbert72769@',
    },
    {
      firstname: 'Luis fernando',
      username: 'luisfernandomartinezgamboa',
      email: 'feernando_lg@outlook.es',
      password: 'Luisfe51755@',
    },
    {
      firstname: 'Omar',
      username: 'omarquintanar',
      email: 'quintanar.om@proton.me',
      password: 'Omar61612@',
    },
    {
      firstname: 'Carlos',
      username: 'carloscervantes',
      email: 'armando_cercha@hotmail.com',
      password: 'Carlos15397@',
    },
    {
      firstname: 'Christopher',
      username: 'christopherhernandez',
      email: 'xolboch@hotmail.com',
      password: 'Christo98456@',
    },
    {
      firstname: 'Castillo',
      username: 'castillo',
      email: 'betoxki@live.com.mx',
      password: 'Castill75206@',
    },
    {
      firstname: 'Kristian',
      username: 'kristiansalas',
      email: 'ksalas1982@gmail.com',
      password: 'Kristia13403@',
    },
    {
      firstname: 'Ana García',
      email: 'isaferraram@gmail.com',
      password: 'securepassword456',
    },
  ]
  const handlemassiveSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) return
    try {
      users.forEach((user) => {
        const { firstname, email, password } = user
        sendEmail(
          `¡${firstname}, ya puedes acceder a Findee! Aquí están tus credenciales`,
          launch_password(firstname, email, password),
          '"Erick de Findee" <ti@findee.mx>',
          email,
        )
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div ref={scrollRef}>
      <Article title="Join Findee's Exclusive Early Access!">
        <p>Sign up now to join the waitlist for the beta version!</p>

        <form className="space-y-4" ref={formRef}>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Name*
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="name"
              name="name"
              type="text"
              value={name}
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Email*
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="email"
              name="email"
              type="email"
              value={email}
            />
          </div>

          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Instagram / TikTok
            </label>
            <input
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="instagram"
              name="instagram"
              placeholder="Example: @findee_app"
              value={instagram}
            />
          </div>

          <button
            className={`-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 ${!email || !name ? 'bg-gray-300' : 'bg-gradient-to-r from-secondary-500 to-secondary-400'} px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg`}
            onClick={handlemassiveSubmit}
            type="submit"
            disabled={!email || !name || loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>

          {success && (
            <div className="mt-2 text-sm italic text-gray-500">
              Thank you for your interest in Findee! Our team is currently reviewing availability,
              and if a slot is open, you'll receive an email with the next steps within 2 business
              days and you'll gain access to the app on October 4th. We appreciate your patience and
              look forward to having you onboard!{' '}
            </div>
          )}
        </form>
      </Article>
    </div>
  )
}
