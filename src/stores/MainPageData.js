const headerMessage = {
  title: 'Odkryjmy razem <strong>Magię Edukacji</strong>!',
  content: [
    `Witaj na naszej platformie edukacyjnej, gdzie nauka staje się pasją, a przestrzeń edukacyjna to miejsce inspirujących odkryć. Oferujemy fascynującą podróż w świat wiedzy, otwierając <span>drzwi do nowych możliwości</span>.Nasz rozwinięty system nauki online integruje skuteczność i dostępność, umożliwiając fascynującą podróż odkrywania nowego świata.`,
    `<blockquote>"Edukacja to klucz do przyszłości"</blockquote> Chcemy dać Ci klucz, aby Twoja podróż była nie tylko fascynująca, ale także skuteczna. Dołącz do naszej społeczności, gdzie nauka online staje się <span>źródłem nowych osiągnięć</span>, a wspólne wysiłki formują nowe horyzonty edukacyjne. Czekamy na Ciebie, abyśmy mogli razem podążać <span>ścieżką sukcesu</span>!`
  ],
  style: {
    h1: {
      'margin-bottom': '5%',
      'letter-spacing': '2px',
      'text-align': 'justify',
      'font-size':'2.25em'
    },
    p: {
      'margin-bottom': '2%',
      'letter-spacing': '2px',
      'text-align': 'justify'
    }
  },
  class: {
    p: ['text-justify']
  },
  animation: {
    p: {
      config: {
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: 1000
      }
    }
  }
}
const buttons = {
  buttons: [
    {
      label: 'zaloguj się',
      to: { name: 'logIn' },
      class: ['btn-primary']
    },
    {
      label: 'zarejestruj się',
      to: { name: 'SignUp' },
      class: ['btn-secondary']
    },
    {
      label: '+',
      to: { name: 'classes-home' },
      class: ['btn-secondary']
    }
  ],
  style: {
    button: {
        normal:
        {
            width: '80%',
            padding: '3%',
            'margin-bottom': '5%',
            'background': 'linear-gradient(to left, rgb(193 65 206), rgb(134 145 217)'
        },
        hover:
        {
            width: '90%',
            padding: '5%',
        }
    },
    div: {}
  },
  className: {
    button: ['btn','animation-1'],
    div: ['d-flex', 'align-items-center', 'justify-content-center', 'flex-column']
  }
}

export default {
  headerMessage,
  buttons
}
