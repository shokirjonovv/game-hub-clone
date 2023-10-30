import Header from "../components/Header";
import { Grid, GridItem } from "@chakra-ui/react";
import MainGrid from "../components/mainGrid";

const Root = () => {
    return (
        <>
            {/*        <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    md: `"nav nav" "aside main"`,
                }}>
                <GridItem area='nav'>
                    <Header />
                </GridItem>
                <Show above='md'>
                    <GridItem area='aside' bg='coral'>
                        Aside
                    </GridItem>
                </Show>
                <GridItem area='main' bg='purple'>
                    Main
                </GridItem>
            </Grid>
            <MainGrid />*/}
            <Grid
                marginTop={2}
                templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={"50px 1fr 30px"}
                gridTemplateColumns={"150px 1fr"}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'>
                <GridItem pl='2' bg='orange.300' area={"header"}>
                    <Header />
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={"nav"}>
                    Nav
                </GridItem>
                <GridItem pl='2' bg='green.300' area={"main"}>
                    Main
                    <MainGrid />
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={"footer"}>
                    Footer
                </GridItem>
            </Grid>
        </>
    );
};

export default Root;
