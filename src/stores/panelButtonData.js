const ListItems = {
    buttons: [
      { label: 'ustawienia', to: { name: 'setting' }, class: ['btn-primary'] },
      { label: 'profil', to: { name: 'profile' }, class: ['btn-secondary'] },
      { label: 'testy', to: { name: 'setting' }, class: ['btn-secondary'] },
      { label: 'Statystyki', to: { name: 'statistic' }, class: ['btn-secondary'] },
      { label: 'Wyloguj', to: { name: 'logOut' }, class: ['btn-secondary'] }
    ],
    style: {
      button: {
        normal: {
          width: '80%',
          padding: '3%',
          'margin-bottom': '5%',
          background: 'linear-gradient(to left, #50c0bd, #8792da)'
        },
        hover: {
          width: '85%'
        }
      },
      div: {}
    },
    className: {
      button: ['btn', 'animation-1','mx-2','px-5'],
      div: ['d-flex', 'align-items-center', 'justify-content-beetwen']
    }
  }
export default ListItems