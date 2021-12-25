const deptFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        stack.push(...graph[current]);
    }
}

const deptFirstRecursive = (graph, source) => {
    for (const node of graph[source]) {
        deptFirstPrint(graph, node);
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while(queue.length > 0) {
        const current = queue.shift();

        console.log(current);
        queue.push(...graph[current]);
    }
}

const graph = {
    a: [ 'b', 'c' ],
    b: [ 'd' ],
    c: [ 'e' ],
    d: [ 'f' ],
    e: [],
    f: []
}

deptFirstPrint(graph, 'a');
console.log('<---->' + '\n');
deptFirstRecursive(graph, 'a');
// breadthFirstPrint(graph, 'a')
