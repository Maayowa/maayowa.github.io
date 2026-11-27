// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Notes on my research and other interests, coming soon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "a list of my preprints, peer-reviewed publications, conference papers, and book chapters.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/maayowa.github.io/assets/pdf/Iwakin_CV.pdf";
          },
        },{id: "post-research-notes-are-on-their-way",
        
          title: "Research notes are on their way",
        
        description: "Notes on my research and other interests are coming soon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/research-notes-coming-soon/";
          
        },
      },{id: "news-a-real-time-benchmark-dataset-for-event-diagnosis-in-water-distribution-networks-collected-from-a-lab-scale-system-with-emulated-failures-it-covers-cyber-physical-attacks-leakages-and-sensor-failures-and-includes-four-baseline-detection-models-presented-at-the-ewri-world-congress-2026",
          title: 'A real-time benchmark dataset for event diagnosis in water distribution networks, collected from...',
          description: "",
          section: "News",},{id: "news-i-defended-my-dissertation-in-civil-engineering-at-lehigh-university-on-june-10-2026-the-thesis-data-driven-methods-for-optimal-planning-and-management-of-interconnected-critical-infrastructural-systems-will-be-publicly-available-in-august-2027",
          title: 'I defended my dissertation in Civil Engineering at Lehigh University on June 10,...',
          description: "",
          section: "News",},{id: "news-our-work-examining-the-techno-economic-feasibility-of-wave-energy-converters-in-low-to-moderate-energy-seas-using-new-jersey-as-a-case-study-is-now-published",
          title: 'Our work examining the techno-economic feasibility of wave energy converters in low-to-moderate energy...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Iwakin_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%6D%69%32%32%32@%6C%65%68%69%67%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/iwakinoluwabunmi", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/maayowa", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bPFMBg0AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4770-6700", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
