const speakers = [
  {
    name: "Prof. Walter Peeters",
    image: "/images/Prof.WalterPeeters.jpg",
    institute: "International Space University",
    location: "Illkirch-Graffenstaden",
    country: "France",
    workprofile:
      "https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=14f32ef182cdbcf74020333bd00c776b&sot=al&sdt=al&sl=43&s=AUTHLASTNAME%28WALTER%29+AND+AUTHFIRST%28PEETERS%29&st1=WALTER&st2=PEETERS&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=a2d8b5ec76d4f64c0eaa0d80323b8900",
    linkedin: "#",
  },
  {
    name: "Dr. Dipl.Ing. Milena Radenkovic",
    image: "/images/Dr.Dipl.Ing.MilenaRadenkovic.jpg",
    institute: "University of Nottingham",
    location: "UK",
    country: "",
    workprofile:
      "https://scholar.google.co.uk/citations?user=TBx0aJcAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. Hari Hablani",
    image: "/images/Dr.HariB.Hablani.png",
    institute: "Indian Institute of Technology",
    location: "Indore",
    country: "India",
    workprofile: "https://scholar.google.co.in/citations?user=wiB8pR4AAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Mr. Cem Avsar",
    image: "/images/CemAvsar.png",
    institute: "Managing Director at beSpace GmbH and Scientific Coordinator",
    location: "TU, Berlin, Germany",
    country: "",
    workprofile:
      "https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=4ce032c763cf9bb42d294ae5d8a1dadb&sot=al&sdt=al&sl=38&s=AUTHLASTNAME%28Avsar%29+AND+AUTHFIRST%28Cem%29&st1=Avsar&st2=Cem&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=7ad132e3b4f97b185dfb2b75805ff563",
    linkedin: "https://www.linkedin.com/in/cemavsar/",
  },
  {
    name: "Dr. PK Garg",
    image: "/images/Dr.P.K.Garg.png",
    institute: "Indian Institute of Technology",
    location: "Roorkee",
    country: "India",
    workprofile:
      "https://scholar.google.co.in/citations?user=ys_F33sAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. Geeta Sikka",
    image: "/images/Dr.GeetaSikka.png",
    institute: "National Institute of Technology",
    location: "Jalandhar",
    country: "India",
    workprofile: "https://scholar.google.com/citations?user=sIQDguEAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. B.B. Gupta",
    image: "/images/Dr.B.B.Gupta.png",
    institute: "National Institute of Technology",
    location: "Kurukshetra",
    country: "India",
    workprofile: "https://scholar.google.com/citations?user=pxzB3EwAAAAJ&hl=fr",
    linkedin: "#",
  },
  {
    name: "Dr. AM.Razmy",
    image: "/images/Dr.AM.Razmy.jpeg",
    institute: "SEUSL",
    location: "Oluvil",
    country: "Sri Lanka",
    workprofile: "https://scholar.google.com/citations?user=FpR79uQAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/anshuman-kalla-b41b23133/",
  },
  {
    name: "Dr. Noor Zaman",
    image: "/images/Dr.NoorZaman.jpeg",
    institute: "Taylor's University",
    location: "Subang Jaya",
    country: "Malaysia",
    workprofile:
      "https://scholar.google.com.pk/citations?user=J6QVIncAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. Pushpendu Kar",
    image: "/images/Dr.PushpenduKar.png",
    institute: "University of Nottingham",
    location: "(Ningbo China Campus)",
    country: "UK",
    workprofile: "https://scholar.google.com/citations?user=uD84UiAAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/pushpendu-kar-b39576104/",
  },
  {
    name: "Dr Sotiris Moschoyiannis",
    image: "/images/DrSotirisMoschoyiannis.jpg",
    institute: "University of Surrey",
    location: "England",
    country: "UK",
    workprofile:
      "https://scholar.google.co.in/citations?user=lXpUuUoAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. Bharanidharan Shanmugam",
    image: "/images/Dr.BharanidharanShanmugam.jpeg",
    institute: "Charles Darwin University",
    location: "Australia",
    country: "",
    workprofile:
      "https://scholar.google.co.in/citations?user=Q5bdIr4AAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Prof. Muzathik Abdul Majeed",
    image: "/images/Prof.MuzathikAbdulMajeed.jpeg",
    institute: "SEUSL",
    location: "Sri Lanka",
    country: "",
    workprofile:
      "https://scholar.google.co.in/citations?user=bZQzqjsAAAAJ&hl=en",
    linkedin: "#",
  },/*
  {
    name: "Mohamed Firdhous",
    image: "/images/MohamedFirdhous.png",
    institute: "University of Moratuwa",
    location: "Moratuwa",
    country: "Sri Lanka",
    workprofile: "https://scholar.google.com/citations?user=O1BvezgAAAAJ&hl=en",
    linkedin: "#",
  },
  {
    name: "Dr. Sanjay Singh",
    image: "/images/Dr.SanjaySingh.jpg",
    institute: "Manipal Academy of Higher Education",
    location: "India",
    country: "",
    workprofile:
      "https://scholar.google.co.in/citations?user=VBj6NyUAAAAJ&hl=en",
    linkedin: "#",
  },*/
  {
    name: "Dr. Silva A.T.P.",
    image: "/images/Dr.SilvaA.T.P..png",
    institute: "University of Moratuwa",
    location: "Sri Lanka",
    country: "",
    workprofile: "https://scholar.google.com/citations?user=FkmFxygAAAAJ&hl=en",
    linkedin: "#",
  },/*
  {
    name: "Dr. Anshuman Kalla",
    image: "/images/AnshumanKalla.png",
    institute: "CWC",
    location: "University of Oulu",
    country: "Finland",
    workprofile:
      "https://scholar.google.co.in/citations?user=Sph3lA0AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/anshuman-kalla-b41b23133/",
  },*/
  {
    name: "Dr. Surendra Sunda",
    image: "/images/Dr.SurendraSunda.jpeg",
    institute: "GNSS Research Centre for ISNA",
    location: "SVPI Airport, Ahmedabad",
    country: "",
    workprofile: "https://www.linkedin.com/in/surendra-sunda-a253229/?originalSubdomain=in",
    linkedin: "#",
  }
  
];

module.exports = speakers;
