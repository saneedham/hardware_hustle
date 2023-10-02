#!/bin/bash

{

# Exit on error
set -o errexit
set -o errtrace

url="http://localhost:3000"

timestamp=$(git log -n1 --date=unix --format="%ad")
commit_hash=$(git log -n1 --format="%h")
stub="hardware_hustle-${commit_hash}"
dir="output/${timestamp}-${commit_hash}"

mkdir -pv "${dir}" >/dev/null

function confirm_url() {
    wget -q --spider "${url}" || {
        echo "${url} is not available"
        echo "Try 'npm run dev'"
        exit
    }
}

function export_stl() {
    path="$1"
    filename="${dir}/${stub}-${path}.pdf"

    echo "Exporting ${filename}"

    node make_pdf.js "${url}/${path}" "${filename}"
}

confirm_url

export_stl letter
export_stl legal
export_stl rules

}
