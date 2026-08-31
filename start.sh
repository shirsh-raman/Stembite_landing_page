#!/bin/bash
# STEMBITE Foods — Start Development Server
# Usage: ./start.sh

PORT=${1:-8080}
echo "Starting STEMBITE Foods server on http://localhost:$PORT"
python3 -m http.server $PORT
