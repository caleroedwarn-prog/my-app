import Card from "../component/card";

function Home1(){
    return (
        <div>
            <h2>
                Users
            </h2>

            <Card name="John" age={25} job="Engineer" country="Cameroon"/>
            <Card name="Anna" age={22} job="Designer" country="Dubai"/>
            <Card name="Mike" age={30} job="Programmer" country="Russia" />
        </div>
    );
}
export default Home1