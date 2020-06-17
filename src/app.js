const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express().use(express.json()).use(cors());

const repositories = [];

const validateRepositoryID = (request, response, next) => {
	const { id } = request.params;

	if (!isUuid(id))
		return response.status(400).json({ error: "Invalid repository ID" });

	next();
};

app.get("/repositories", (request, response) => {
	if (repositories.length === 0)
		return response.status(200).json({ error: "Repository is empty" });

	return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
	const { title, url, techs } = request.body;

	const repository = {
		id: uuid(),
		title,
		url,
		techs,
		likes: 0,
	};

	repositories.push(repository);

	return response.status(201).json(repository);
});

app.put("/repositories/:id", validateRepositoryID, (request, response) => {
	const { id } = request.params;
	const { title, url, techs } = request.body;

	const repositoryIndex = repositories.findIndex((repository) => repository.id === id);

	if (repositoryIndex < 0)
		return response.status(404).json({ error: "Repository not found" });

	const repository = {
		id,
		title,
		url,
		techs,
		likes: repositories[repositoryIndex].likes,
	};

	repositories[repositoryIndex] = repository;

	return response.status(200).json(repository);
});

app.delete("/repositories/:id", validateRepositoryID, (request, response) => {
	const { id } = request.params;

	const repositoryIndex = repositories.findIndex((repository) => repository.id === id);

	if (repositoryIndex < 0)
		return response.status(404).json({ error: "Repository not found" });

	repositories.splice(repositoryIndex, 1);

	return response.status(204).send();
});

app.post("/repositories/:id/like", validateRepositoryID, (request, response) => {
	const { id } = request.params;

	const repositoryIndex = repositories.findIndex((repository) => repository.id === id);

	if (repositoryIndex < 0)
		return response.status(404).json({ error: "Repository not found" });

	repositories[repositoryIndex].likes += 1;

	const repositoryLikes = {
		id,
		likes: repositories[repositoryIndex].likes
	}

	return response.status(200).json(repositoryLikes);
});

module.exports = app;
