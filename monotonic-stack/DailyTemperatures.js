const dailyTemperatures = function(temperatures = []) {
    const results = Array.from({ length: temperatures.length }, () => 0);
    const monotonic = [];

    for (let index = 0; index < temperatures.length;) {
        if(monotonic.length === 0) {
            monotonic.push(index);
            index++;
        } else {
            if(temperatures[index] > temperatures[monotonic[monotonic.length - 1]]) {
                const popped = monotonic.pop();

                results[popped] = index - popped;
            } else {
                monotonic.push(index);
                index++;
            }
        }
    }

    return results;
};

dailyTemperatures([73,74,75,71,69,72,76,73]);
dailyTemperatures([30,40,50,60]);
dailyTemperatures([30,60,90]);

const dailyTemperaturesSecond = function(temperatures) {

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


