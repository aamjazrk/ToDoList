set-pre-commit:
	pre-commit install --hook-type pre-commit --config  githooks/.pre-commit-config.yaml;
	pre-commit install --hook-type pre-push --config  githooks/.pre-push-config.yaml
