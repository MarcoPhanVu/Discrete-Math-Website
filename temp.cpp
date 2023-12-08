void Prim(Graph& G) {
	int nT = 0;

	for (int i = 0; i < G.verticies; i++) {
		G.visited[i] = 0;
	}

	G.visited[nT] = 1;

	while (nT < G.verticies - 1) {
		Edge minEdge;
		int min = -1;

		for (int i = 0; i < G.verticies; i++) {
			if (G.visited[i] == 0) {
				for (int j = 0; j < G.verticies; j++) {
					if (G.visited[j] == 1 && G.edges[i][j] != 0) { // Not visited and do connect with other verticies
						if (min == -1 /*Not yet been set*/ || G.edges[i][j] < min) {
							min = G.edges[i][j];
							minEdge.startPoint = i;
							minEdge.endPoint = j;
							minEdge.weight = G.edges[i][j];
						}
					}
				}
			}
		}

		T[nT] = minEdge;
		nT++;
		G.visited[minEdge.startPoint] = 1; // Visit that vertex
	}


	int TSum = 0;

	cout << "Graph's smallest Cây Khung: ";

	for (int i = 0; i < nT; i++) {
		cout << "(" << T[i].startPoint << ", " << T[i].endPoint << ") ";
		TSum += T[i].weight;
	}

	cout << "\nTotal weight of Tree: " << TSum << "\n";
}

// Week 6
void Dijsktra(Graph& G, int x, int y) {
	for (int i = 0; i < G.verticies; i++) {
		DVisited[i] = false;
		DLenghtV[i] = Inf;
		DLastV[i] = -1; // Null
	}


	// Start
	DLenghtV[x] = 0;
	DVisited[x] = true;
	DLastV[x] = x;

	int v = x;

	while (DVisited[y] == false) {
		for (int k = 0; k < G.verticies; k++) {
			if (G.edges[v][k] != 0 && DVisited[k] == false &&
				(DLenghtV[k] == Inf || DLenghtV[k] > DLenghtV[v] + G.edges[v][k])) {
				DLenghtV[k] = DLenghtV[v] + G.edges[v][k];
				DLastV[k] = v;
			}
		}


		v = -1;

		for (int i = 0; i < G.verticies; i++) {
			if (DVisited[i] == false && DLenghtV[i] != Inf) {
				if (v == -1 || DLenghtV[v] > DLenghtV[i]) {
					v = i;
				}
			}
		}

		DVisited[v] = true;

	}

	//cout << "lastV: ";
	//for (int i = 0; i < G.verticies; i++) {
	//	cout << DLastV[i] << " ";
	//}
}

void PrintDijsktra(Graph G, int x, int y) {
	int Path[maxVertices];

	int v = y;
	int id = 0;

	while (v != x) { // Not the starting node
		Path[id] = v;
		v = DLastV[v];
		id++;
	}

	Path[id] = x; // Starting node

	for (int i = id; i > 0; i--)
	{
		cout << "[" << Path[i] << "] --> ";
	}

	cout << "[" << Path[0] << "]\n";

	cout << "\n";
}