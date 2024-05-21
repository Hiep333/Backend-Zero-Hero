const connection = require("../config/database");

const getAllUsers = async() => {
    let [results, fields] = await connection.query('select * from users');
    return results;
};

const getUserById = async(userID) => {
    let [results, fields] = await connection.query(
        'select * from users where id = ?',
        [userID]
      )
      // check user information exists to return results
      let user = results && results.length > 0 ? results[0] : {};
      return user;
}

const updateUserById = async(email, username, city, userid) => {
    let [result, fields] = await connection.query(
        `update users
        set email =?, username =?, city =?
        where id =?`,
        [email, username, city, userid]
      )
};
module.exports = {getAllUsers,getUserById,updateUserById};