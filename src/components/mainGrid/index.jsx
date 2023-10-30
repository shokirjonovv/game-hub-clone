import React from "react";
import useGames from "../../hooks/useGames";
import { Box, Card, SimpleGrid, Text } from "@chakra-ui/react";

const MainGrid = () => {
    const games = useGames();
    console.log(games.games);
    return (
        <>
            <SimpleGrid spacing={10} minChildWidth='300px'>
                {games.games && games.games.map((game) => <Card key={game.id}>
                <h3>{game.name}</h3>
                <img width={100}  src={game.background_image} alt="" />
                </Card>)}
            </SimpleGrid>
        </>
    );
};

export default MainGrid;
