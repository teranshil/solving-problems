const dailyTemperatures = function(temperatures) {

    const monotonic = [], days = Array.from({ length: temperatures.length }, () => 0);
    for (let index = 0; index < temperatures.length ; index++) {
        const temperature = temperatures[index];

        while(monotonic.length !== 0 && temperatures[ monotonic[monotonic.length - 1] ] < temperature) {
            const removed = monotonic.pop();
            days[removed] = index - removed;
        }

        monotonic.push(index);
    }

    return days;
};

console.log( dailyTemperatures([73,74,75,71,69,72,76,73]));
