const express = require('express');
const cors = require('cors'); 
const app = express();


app.use(cors({
  origin: ['http://localhost:5173' ,
            // replace this link with your own frontend url after deploying your frontend
            // keep the localhost url for testing locally
           'https://gcp-test-3-frontend-69178793011.europe-west1.run.ap'      
  ]
}));

app.get('/', (req, res) => {
  res.json({ message: "Hello! Backend is speaking!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend running on port ${port}`));