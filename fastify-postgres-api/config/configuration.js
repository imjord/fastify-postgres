function loadEnvironmentVariable(keyname){
    const env = process.env[keyname];
    console.log(env)
    if(!env){
        throw new Error(`Environment variable ${keyname} is not set`);
    }
    return env;
}

module.exports = {
    databaseUri: loadEnvironmentVariable('DB_URI'),
}