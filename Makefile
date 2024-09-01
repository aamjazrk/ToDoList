set-pre-commit:
	pre-commit install --hook-type pre-commit --config  githooks/.playwright.yml;
	pre-commit install --hook-type pre-push --config  githooks/.playwright.yml.yaml