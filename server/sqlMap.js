var sqlMap = {
  getValue: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?',
  deleteValue: 'DELETE FROM test WHERE id = ?'
}

module.exports = sqlMap;