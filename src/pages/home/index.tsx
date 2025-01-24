import { Content, HomePageSC } from "./styled";
import { MatrixBackground } from "@/shared/ui/matrix-background";

export const HomePage = () => {
    return (
        <HomePageSC>
            <MatrixBackground />
            <Content>
                <h1>Home</h1>
            </Content>
        </HomePageSC>
    );
};
