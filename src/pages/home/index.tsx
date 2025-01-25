import { Content, HomePageSC, Roadmap, Title } from "./styled";
import { Step } from "./ui/step";
import { MatrixBackground } from "@/shared/ui/matrix-background";

export const HomePage = () => {
    return (
        <HomePageSC>
            <MatrixBackground />
            <Content>
                <Title>Alexander Prokopenko</Title>
                <Roadmap>
                    <Step name="I was born" date="2008" />
                    <Step name="I was born" date="2008" /> <Step name="I was born" date="2008" />{" "}
                    <Step name="I was born" date="2008" /> <Step name="I was born" date="2008" />
                </Roadmap>
            </Content>
        </HomePageSC>
    );
};
