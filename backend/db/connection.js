const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.faoccbp.mongodb.net/`; // Sua string de conexão

module.exports = dbURI;
