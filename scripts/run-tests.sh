#!/bin/bash

set -euo pipefail

printf "\360\237\215\272\t Running unit tests...  \n"
npx playwright test
