const usersModel = {
    getUsers: `SELECT 
                * FROM 
                Users`,
    getByID: `SELECT 
                *
                FROM
                    Users
                WHERE
                    id = ?
                `,
    addRow: `INSERT INTO 
                    users(
                        username,
                        email,
                        password,
                        name,
                        lastname,
                        phonenumber,
                        role_id,
                        isactive
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    getByUsername: `SELECT 
                        id
                    FROM
                        users
                    WHERE
                        username = ? `,
    getByEmail: `SELECT 
                    id
                FROM
                    users
                WHERE
                    email = ? `,
    updateRow: `UPDATE
                    Users
                SET
                    username = ?,
                    email = ?,
                    password = ?,
                    name = ?,
                    lastname = ?,
                    phonenumber = ?,
                    role_id = ?,
                    isactive = ?
                WHERE
                    id = ?`,
    deleteRow: `UPDATE
                    Users
                SET
                    is_active = 0
                WHERE
                    id= ?`,
                
}

module.exports = usersModel;