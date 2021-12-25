const allPathsSourceTarget = function(graph) {
    let current = 1;
    const queue = [], result = [];

    queue.push({ children: graph[0], path: [ 0 ] });

    while(queue.length > 0) {
        const size = queue.length;
        for (let index = 0; index < size; index++) {
            const node = queue.shift();

            for (let number = 0; number < node.children.length; number++) {

                if(node.children[number] === graph.length - 1) result.push( [...node.path, graph.length - 1]);

                const children = graph[ node.children[number] ];
                queue.push({ children, path: [...node.path, node.children[number]] });
            }
        }
    }

    return result;
};

console.log( allPathsSourceTarget([ [1,2], [3], [3], [] ]) );
// console.log( allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]) );
// console.log( allPathsSourceTarget([[1],[]]) );
// console.log( allPathsSourceTarget([[1,2,3],[2],[3],[]]) );
// console.log( allPathsSourceTarget([[1,3],[2],[3],[]]) );

/** Second more optimized solution of the problem */
const allPathsSourceTargetOptimized = function(graph) {
    const queue = [], result = [];

    queue.push( [ 0 ] );
    while(queue.length > 0) {
        let size = queue.length;
        while (size-- > 0) {
            const node = queue.shift();
            if( node[node.length - 1] === graph.length - 1) result.push(node);

            const last = node[node.length - 1];
            for (const element of graph[last]) {
                queue.push( [...node, element]);
            }
        }
    }

    return result;
}

console.log(allPathsSourceTargetOptimized([ [1,2], [3], [3], [] ]) );
