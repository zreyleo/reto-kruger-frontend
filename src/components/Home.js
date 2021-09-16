import { useContext, useEffect } from "react";

import { Context } from "../GlobalState";

const Home = () => {
    const { flushSession } = useContext(Context)
    useEffect(() => {
        flushSession()
    }, []);
    
    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
}
 
export default Home;