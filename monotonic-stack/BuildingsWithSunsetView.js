const getBuildingsWithView = (buildings) => {
    const monotonic = [];
    for (let index = buildings.length - 1; index >= 0 ; index--) {
        const building = buildings[index];

        while(monotonic.length !== 0 && monotonic[monotonic.length - 1] <= building) {
            monotonic.pop();
        }

        monotonic.push(building);
    }

    return monotonic;
}

console.log( getBuildingsWithView([3, 4, 6, 4, 3, 4, 5, 6]))
