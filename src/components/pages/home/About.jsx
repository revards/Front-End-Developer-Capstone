import "./About.css";
import chefsA from "./img/Mario and Adrian A.jpg";
import chefsB from "./img/Mario and Adrian b.jpg";

export const About = () => {
  return (
    <section className="about grid-container">
      <div className="description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Nunc orci mauris, iaculis eget ligula in, vulputate pretium nibh.
          Praesent vel nunc sit amet leo gravida blandit eget sed leo. Sed
          fermentum quam blandit, congue neque et, lacinia ipsum. Ut rhoncus est
          nulla, sit amet tempus tortor placerat sollicitudin. Aliquam vel ex
          varius, lacinia libero sed, convallis diam. Quisque vel condimentum
          justo, quis fringilla elit. Donec rutrum dui ut purus molestie, eu
          molestie nulla porta. Quisque id consectetur nisi. Sed dictum odio
          est, quis dapibus tortor ullamcorper at. Aenean vitae lectus vitae leo
          sollicitudin sollicitudin id vel risus. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="chef-images">
        <img src={chefsA} alt="Chefs Mario and Adrian" />
        <img src={chefsB} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};
