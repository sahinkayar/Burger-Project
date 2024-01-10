import React from "react";
import NavLinks from "./NavLinks";
import Beefs from "./images/1629742332475_1125x522.jpeg";
import UseFooter from "./useFooter";

function About() {
  return (
    <div>
      <NavLinks />
      <div className="Background">
        <img src={Beefs} alt="" />{" "}
      </div>
      <div className="Paragraph">
        <h1>About Us!</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
          expedita deserunt laboriosam debitis repellat qui totam accusantium,
          iste, dicta dolores velit sequi adipisci, mollitia magnam cumque
          fugiat aliquam! Eius aperiam, ipsam possimus reiciendis obcaecati eos
          voluptates! Porro accusantium eligendi sed odit ea! Nulla possimus
          quam alias quasi sit accusantium. Aperiam earum ab consequatur
          aspernatur cupiditate atque debitis ipsum sed, eligendi voluptas eum
          nam magni, doloribus quaerat ullam excepturi. Sapiente alias quas
          commodi doloribus molestias minima magni dolor reiciendis officia
          molestiae rem iste quae, culpa nesciunt esse laboriosam impedit,
          architecto facilis repellat error velit mollitia! Possimus id sequi
          eius quaerat rerum.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nemo expedita deserunt laboriosam debitis repellat qui totam
          accusantium, iste, dicta dolores velit sequi adipisci, mollitia magnam
          cumque fugiat aliquam! Eius aperiam, ipsam possimus reiciendis
          obcaecati eos voluptates! Porro accusantium eligendi sed odit ea!
          Nulla possimus quam alias quasi sit accusantium. Aperiam earum ab
          consequatur aspernatur cupiditate atque debitis ipsum sed, eligendi
          voluptas eum nam magni, doloribus quaerat ullam excepturi. Sapiente
          alias quas commodi doloribus molestias minima magni dolor reiciendis
          officia molestiae rem iste quae, culpa nesciunt esse laboriosam
          impedit, architecto facilis repellat error velit mollitia! Possimus id
          sequi eius quaerat rerum.
        </div>{" "}
      </div>{" "}
      <UseFooter />
    </div>
  );
}

export default About;
