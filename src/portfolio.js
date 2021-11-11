const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'engelbertushendro10',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Engelbertus Hendro',
  role: 'Android Developer | Web Developer',
  description: 'BErkomitmen untuk selalu mengembangkan aplikasi baik berbasis WEB maupun Android dan selalu mencoba berinovasi di bidang software.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/engelbertushendro102/',
    github: 'https://github.com/engelbertushendro10',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SI Gudang',
    description: 'Sistem informasi gudang berbasis website',
    stack: ['Html', 'Css', 'Php', 'Laravel'],
    sourceCode: 'https://github.com/engelbertushendro10/dbs-system',
    livePreview: 'https://github.com/engelbertushendro10/dbs-system',
  },
  {
    name: 'E-Recruitmen',
    description: 'E-Recruitment merupakan aplikasi android untuk mencari pekerjaan ',
    stack: ['Kotlin', 'ExpressJs', 'React'],
    sourceCode: 'https://github.com/engelbertushendro10/erecruitment',
    livePreview: 'https://github.com/engelbertushendro10/erecruitment',
  },
  {
    name: 'Retro Coffe',
    description: 'Retro Coffe merupakan aplikasi android seperti mini booking app yang di khususkan untuk sebuah Coffe',
    stack: ['Kotlin', 'ExpressJs', 'React'],
    sourceCode: 'https://github.com/engelbertushendro10/retro-coffee-android',
    livePreview: 'https://github.com/engelbertushendro10/retro-coffee-android',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'ExpressJs',
  'PHP',
  'Laravel',
  'Kotlin',
  'Python',
  'Django',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'engelbertushendro@gmail.com',
}

export {
  header,
  about,
  projects,
  skills,
  contact
}