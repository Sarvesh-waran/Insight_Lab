import Footer from "./Footer";
import { useState } from "react";
import api from "./Api";

function Body() {
    const [itext,setItext]=useState(" ")
    const handleForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const idea_name = formData.get('name').trim();
        const idea_dom = formData.get('domain').trim();
        const idea_desc = formData.get('desc').trim();
        console.log(idea_name);
        console.log(idea_dom);
        console.log(idea_desc);
        // Call your api function and set the result to state
        const result = await api(idea_name, idea_desc, idea_dom);
        setItext(result);
        event.target.reset();
    }

    return (
        <>
            <section className="sec">
                <div className="form">
                    <form id="ideaform" onSubmit={handleForm}>
                        <input type="text" placeholder="Enter Your Idea Name" name="name" autoComplete="off" autoFocus />
                        <input type="text" placeholder="Enter Your Idea Domain" name="domain" />
                        <input type="textarea" placeholder="Enter Your Idea Description" name="desc" />
                        <button type="submit">Get Insights</button>
                    </form>
                </div>
                <div className="info">
                    <div className="info-1">
                        <p>Idea Researcher is an intelligent platform that helps innovators validate and refine their ideas with ease. By simply uploading your concept, our system conducts in-depth market research, identifies target audiences, evaluates competitors, and even estimates the market value of your idea.</p>
                    </div>
                    <div className="info-2">
                        <p>Beyond insights, Idea Researcher also provides a clear project timeline and tailored market strategies to turn your vision into reality. Whether you`re a student, entrepreneur, or startup founder, our platform empowers you to make data-driven decisions and bring your ideas to life with confidence.</p>
                    </div>
                </div>
            </section>
            {itext.length > 10 ? <Footer insight={itext} /> : null}
        </>
    )
}
export default Body;