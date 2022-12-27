<h1>Track Server</h1>

<p>This is a server for storing and retrieving GPS tracks. It is designed to be used with the <a href="https://github.com/vazhab/track-client">Track Client</a> app.</p>

<h2>Getting Started</h2>

<p>To get started with the track-server, follow these steps:</p>

<ol>
  <li>Clone the repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/vazhab/track-server.git
</code></pre>

<ol start="2">
  <li>Navigate to the directory where the repository was cloned:</li>
</ol>

<pre><code>cd track-server
</code></pre>

<ol start="3">
  <li>Install the required dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>

<ol start="4">
  <li>Start the server:</li>
</ol>

<pre><code>npm start
</code></pre>

<p>The server will now be running at <code>http://localhost:5000</code>.</p>

<h2>API Documentation</h2>

<p>The track-server exposes the following APIs:</p>

<h3>POST /tracks</h3>

<p>This API is used to create a new track. It expects a JSON object in the request body with the following format:</p>

<pre><code>{
  "name": "Track name",
  "locations": [
    {
      "timestamp": 1615364571,
      "coords": {
        "latitude": 37.33233141,
        "longitude": -122.0312186,
        "altitude": 0,
        "accuracy": 5,
        "heading": 0,
        "speed": 0
      }
    },
    ...
  ]
}
</code></pre>

<p>The response will be a JSON object with the following format:</p>

<pre><code>{
  "trackId": "abc123"
}
</code></pre>

<h3>GET /tracks</h3>

<p>This API is used to retrieve a list of all tracks. It does not accept any request body. The response will be a JSON array of track objects, with each object having the following format:</p>

<pre><code>[
  {
    "trackId": "abc123",
    "name": "Track name",
    "locations": [
      {
        "timestamp": 1615364571,
        "coords": {
          "latitude": 37.33233141,
          "longitude": -122.0312186,
          "altitude": 0,
          "accuracy": 5,
          "heading":
