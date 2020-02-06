const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/UserInfo'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/UserInfo / index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}…`);
});