# Graph BFS

This problem plays out on a graph where a “virus” moves from node to node, in search of an exit. There are several exits and you have to cut access to these exits by finding the best link to cut each turn.
This JavaScript program implements a Breadth-First Search (BFS) algorithm on a graph. The graph is represented using an adjacency list, where each node maintains a list of all its neighbors.


## The Goal
Your virus has caused a backdoor to open on the Bobnet network enabling you to send new instructions in real time.

You decide to take action by stopping Bobnet from communicating on its own internal network.

Bobnet's network is divided into several smaller networks, in each sub-network is a Bobnet agent tasked with transferring information by moving from node to node along links and accessing gateways leading to other sub-networks.

Your mission is to reprogram the virus so it will sever links in such a way that the Bobnet Agent is unable to access another sub-network thus preventing information concerning the presence of our virus to reach Bobnet's central hub.

## Rules
For each test you are given:
- A map of the network.
- The position of the exit gateways.
- The starting position of the Bobnet agent.
> Nodes can only be connected to up to a single gateway.

Each game turn:
- First off, you sever one of the given links in the network.
- Then the Bobnet agent moves from one Node to another accessible Node.

## Variables

- `N`: The total number of nodes in the level, including the gateways.
- `L`: The number of links.
- `E`: The number of exit gateways.
- `graph`: An instance of the Graph class, representing the network.
- `goals`: An array of gateway nodes.

## Graph Class

The `Graph` class has the following methods:

- `addEdge(n1, n2)`: Adds an edge between nodes `n1` and `n2`.
- `bfs(start, goals)`: Performs a BFS from the `start` node to find the shortest path to any of the `goals` nodes.

## BFS Algorithm

The BFS algorithm starts at a given node and explores its neighbors first, before moving on to their neighbors. It uses a queue to keep track of nodes to visit next, and a set to keep track of visited nodes. If it finds a goal node during the search, it returns the path to that node.

## Game Loop

The game loop reads the current position of the Bobnet agent, performs a BFS to find the shortest path to any gateway, and then prints the first two nodes in this path. This represents severing the link between these two nodes. The loop continues indefinitely until the program is manually stopped.