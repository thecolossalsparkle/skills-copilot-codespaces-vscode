// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Import the comments data
const comments = require('./data/comments');