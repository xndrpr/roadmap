import { Content, Link, Navigation, Page, Title } from "./styled";
import { MatrixBackground } from "@/shared/ui/matrix-background";

export const HomePage = () => {
    return (
        <Page>
            <MatrixBackground />
            <Content>
                <Title>Alexander Prokopenko - React Frontend Developer</Title>
                <Navigation>
                    <Link href="https://github.com/xndrpr" target="_blank">
                        Github
                    </Link>
                    <Link href="https://linkedin.com/in/axndrpr" target="_blank">
                        LinkedIn
                    </Link>
                    <Link href="https://velaton.github.io/portfolio" target="_blank">
                        Portfolio
                    </Link>
                    <Link href="/roadmap">Roadmap</Link>
                </Navigation>
            </Content>
        </Page>
    );
};
