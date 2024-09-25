// we have this config file where we will export all the configuration variables. and from here every file will import

// Always try to avoid a circular dependency, they are very hard to debug..we have made this separte file just for that.

const JWT_USER_PASSWORD = "asdasd123";
const JWT_ADMIN_PASSWORD = "adminadmin"



module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}