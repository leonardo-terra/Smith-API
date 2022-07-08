import IUser from '../interfaces/user.interface';
import connection from './connection';

const findOne = async (user: IUser) => {
  const [userInfo] = await connection
    .execute(
      `SELECT * FROM Trybesmith.Users 
        WHERE Trybesmith.Users.username = ? 
        AND Trybesmith.Users.password = ?`,
      [user.username, user.password],
    );

  return userInfo;
};

export default { findOne };