import { useNavigate } from "react-router-dom";
import Button from "../frontend/components/Button";
import Header from "../frontend/components/Header";
import MainLayout from "../frontend/layout/MainLayout";

const Home = () => {

    const nav = useNavigate();

    return(
        <>
            <MainLayout>
                <Header>Pokemon: Wild Adventures</Header>
                <Button onClick={() => nav('/select-pokemon')}>START</Button>
            </MainLayout>
        </>
    )
}

export default Home;