import { Content, HomePageSC, Roadmap } from "./styled";
import { Step } from "./ui/step";
import { MatrixBackground } from "@/shared/ui/matrix-background";

export const HomePage = () => {
    return (
        <HomePageSC>
            <MatrixBackground />
            <Content>
                <Roadmap>
                    <Step name="I was born" date="2008" />
                    <Step name="I was born" date="2008" /> <Step name="I was born" date="2008" />{" "}
                    <Step name="I was born" date="2008" /> <Step name="I was born" date="2008" />
                </Roadmap>
            </Content>
        </HomePageSC>
    );
};
