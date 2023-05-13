const d=document;

export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach(entry=>{
        const id= entry.target.getAttribute("id");
        if (entry.isIntersecting) {
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
        } else{
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

        }
    })
  };

  const observador = new IntersectionObserver(cb, {
    // root
    // rootMargin:"-250px",
    threshold:[0.5, .75],
});

  $sections.forEach((el) => observador.observe(el));
}