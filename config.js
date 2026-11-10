/* GRADUATION PAGE SETTINGS (edit this file, not index.html) */
window.GRAD_CONFIG = {
  title: "Graduation 2027",
  subtitle: "St. Brieux Crusaders",
  logo: "images/logo.png",            /* your crusaders logo */

  /* Audio, in playing order. Put mp3 files in the audio folder. */
  tracks: [
    { title: "Processional",  src: "audio/processional.mp3" },
    { title: "O Canada",      src: "audio/o-canada.mp3" },
    { title: "Recessional",   src: "audio/recessional.mp3" }
  ],

  /* Graduates, in the order they cross the stage.
     photo = cap-and-gown picture in images/grads/ (if missing, a cap
     placeholder shows). plans and award are optional. */
  graduates: [
    { name: "Graduate Name One",   photo: "images/grads/one.jpg",   plans: "Plans after graduation goes here", award: "Awards go here" },
    { name: "Graduate Name Two",   photo: "images/grads/two.jpg",   plans: "Plans after graduation goes here" },
    { name: "Graduate Name Three", photo: "images/grads/three.jpg" }
  ],

  /* Slides as a PDF (needs the lib folder from the Remembrance Day site). */
  slidesPdf: "slides/graduation.pdf"
};
