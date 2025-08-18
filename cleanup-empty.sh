#!/bin/bash

# Hapus file kosong (0 byte) dari ./app, ./components dan
echo "Deleting empty files in ./app, ./components and ..."
find ./app, ./components -type f -size 0 -print -delete

# Hapus direktori kosong dari ./app, ./components dan
echo "Deleting empty directories in ./app, ./components and ..."
find ./app, ./components -type d -empty -print -delete
