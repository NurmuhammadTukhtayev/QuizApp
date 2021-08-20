import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <div className="about">
                <h1>Check your knowledge simply!</h1>
                <p className="text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="container">
                    <button className="startButton">START Test with 10 questions</button>
                </div>

            </div>

            <div className="start">
                <h1>Choose one and start test</h1>
                <h4>
                    <Link className="link-info"> Test with 10 questions</Link>
                </h4>
                <h4>
                    <Link className="link-info"> Test with 15 questions</Link>
                </h4>
                <h4>
                    <Link className="link-info"> Test with 20 questions</Link>
                </h4>
                <h4>
                    <Link className="link-info"> Test with 30 questions</Link>
                </h4>
            </div>

            <div className="tops">
                <h1>Top 3 best results</h1>
                <ol className="list-group">
                    <li>First user</li>
                    <li>Second user</li>
                    <li>Third user</li>
                </ol>
            </div>

        </div>
    )
}

export default Home