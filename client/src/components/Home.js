import React from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

function Home(){
    const history=useHistory()
    const start = () => {
      history.push('/start')
    }

    return(
        <div className="home">
            <div className="about">
                <div className="leftText">
                    <h1>Check your knowledge simply!</h1>
                    <p className="text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="container">
                        <button className="startButton" onClick={start}>START TEST</button>
                    </div>

                </div>
                <div className="rightText">
                    <h1>Choose one and start test</h1>
                    <div className="start">
                        <h2>
                            <Link className="tests" to="/start"> Test with 10 questions</Link>
                        </h2>
                        <h2>
                            <Link className="tests" to="/start"> Test with 15 questions</Link>
                        </h2>
                        <h2>
                            <Link className="tests" to="/start"> Test with 20 questions</Link>
                        </h2>
                        <h2>
                            <Link className="tests" to="/start"> Test with 25 questions</Link>
                        </h2>
                        <h2>
                            <Link className="tests" to="/start"> Test with 30 questions</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home