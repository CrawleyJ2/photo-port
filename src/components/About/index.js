import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

function About () {
    return (
        <section className="my-5">
            <h1 id="about">Whomst Am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
            <div className="my-2">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere suscipit quia recusandae corporis delectus aspernatur sunt. Quaerat explicabo blanditiis tempore laboriosam, et officiis consectetur nobis expedita quos, aut vitae repudiandae?
                </p>
            </div>
        </section>
    );
}

export default About;