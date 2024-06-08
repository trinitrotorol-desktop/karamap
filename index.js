const express = require('express');
const sequelize = require('./db');
const KaraokeStore = require('./models/KaraokeStore');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/karaoke-stores', async (req, res) => {
  try {
    const stores = await KaraokeStore.findAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch karaoke stores' });
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and synced');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
