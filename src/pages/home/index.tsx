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
                    <Step name="I was born" date="2008" done />
                    <Step name="I started programming" date="2020 November" done />
                    <Step name="I earned my first money on programming" date="2022 August" done />
                    <Step name="I started learning frontend" date="2024 April" done />
                    <Step
                        name="I got my first intern job as a frontend developer"
                        date="2024 May"
                        done
                    />
                    <Step
                        name="I got my first Juniour Frontend Developer job"
                        date="2024 August"
                        done
                    />
                    <Step
                        name="Started applying for Middle Frontend Developer positions"
                        date="2025 January"
                        done
                    />
                </Roadmap>
            </Content>
        </HomePageSC>
    );
};
