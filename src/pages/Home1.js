import Card from "../component/card";

function Home1(){
    return (
        <div>
            <h2>
                Users
            </h2>

            <Card name="John" age={25} job="Engineer"/>
            <Card name="Anna" age={22} job="Designer" />
            <Card name="Mike" age={30} job="Programmer" />
        </div>
    );
}
export default Home1