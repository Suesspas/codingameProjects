var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

function Graph(vertices) {
    this.graph = {};
    for (let i = 0; i < vertices; i++) {
        this.graph[i] = [];
    }
}

Graph.prototype.addEdge = function(n1, n2) {
    this.graph[n1].push(n2);
    this.graph[n2].push(n1);
}

Graph.prototype.bfs = function(start, goals) {
    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift(); // Get and remove first path from queue
        let vertex = path[path.length - 1]; // Get last vertex from path

        if (goals.includes(vertex)) {
            return path; // Return path if vertex is a goal
        }

        if (!visited.has(vertex)) {
            for (let neighbor of this.graph[vertex]) {
                let newPath = [...path];
                newPath.push(neighbor);
                queue.push(newPath); // Add path to queue
            }
            visited.add(vertex);
        }
    }
    return null;
}

const graph = new Graph(N)

for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    graph.addEdge(N1, N2)
}

const goals = []

for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    goals.push(EI)
}

// game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    let shortestPath = graph.bfs(SI, goals)

    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    console.log(shortestPath[0] + " " + shortestPath[1]);
}


